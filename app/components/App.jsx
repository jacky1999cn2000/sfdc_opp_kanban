import React from 'react';
import {connect} from 'react-redux';

import Menu from './Menu';
import Kanban from './Kanban';
import Login from './Login';
import Screen from './Screen';
import Toastr from './Toastr';

import {requestToken, requestOpportunities, requestUsers, requestOpportunityStages, changeAppState} from '../actions';
/*replace-for-dev-start*/
import {loadOpportunities, loadOpportunityStages, loadUsers, loadStageFilters} from '../actions';
/*replace-for-dev-end*/

import {ActionTypes} from '../constants/types';
import cache from '../utils/cache';
import config from '../constants/config.json';

class App extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {};
    }

    componentWillMount() {
        console.log('componentWillMount');
        /*
            如果 'access_token' 和 'instance_url' 已存在, 则不做任何事情;
            如果 'access_token' 和 'instance_url' 不存在, 则查看 query string 'code' 是否存在:
              存在 - 这是 SFDC oauth2 的 callback, 用 code 来获取 token
              不存在 - 不做任何事情, 下一步 render() 会 redirect 到 Login
        */
        if (!cache.get('access_token') && !cache.get('instance_url')) {
            if (window.location.search && window.location.search.indexOf('code') != -1) {
                let code = decodeURIComponent(window.location.search.split('code=')[1]);
                this.props.dispatch(requestToken(code));
            }
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        /*
          we can only dispatch async actions inside render(), so when we dev locally,
          we need to dispatch these sync actions from componentDidMount()
        */
/*replace-for-dev-start*/
        this.props.dispatch(loadUsers());
        this.props.dispatch(loadOpportunities());
        this.props.dispatch(loadOpportunityStages());
        this.props.dispatch(loadStageFilters());
/*replace-for-dev-end*/
    }

    render() {
        console.log('App render');

        let content;

        // TODO: appState.status 类似于一个中枢消息系统,所有的 request 都会更新这个值, 根据这个值来 render 不同的消息
        if (this.props.state.appState.get('status').error) {
            console.log('error!');
            console.log(this.props.state.appState.get('status').error);
            return <Screen type='error'/>;
        } else {
            switch (this.props.state.appState.get('status').type) {
                case ActionTypes.UPDATED_OPP:
                    console.log('opp updated!');
                    this._toastr.success(this.props.state.appState.get('status'));
                    //need to reset status so the render caused by Toastr won't land in this switch branch and add the old status again
                    this.props.dispatch(changeAppState(['status'], [{}]));
                    break;
                default:
                    console.log('everything is normal');
            }
        }

        if (!cache.get('access_token') && !cache.get('instance_url')) {
            // if the app is requesting token, then display a loading Screen component, otherwise, display Login component
            if (this.props.state.appState.get('requestingToken')) {
                content = <Screen/>;
            } else {
                content = <Login/>;
            }
        } else {
            // already have token, simply reload the page without query string to make the url clean
            if (window.location.search) {
                window.location.replace(config.redirect_uri);
            }

            // 如果 users, opptunities, opptunity stages 还没有 load 完, 则显示 Loading
/*replace-for-prod-start
            if (!this.props.state.appState.get('hasUsers') || !this.props.state.appState.get('hasOppStages') || !this.props.state.appState.get('hasOpps')) {
                //add these 3 conditionals to prevent re-requesting
                if (!this.props.state.appState.get('requestingUsers')) {
                    this.props.dispatch(requestUsers());
                }
                if (!this.props.state.appState.get('requestingOppStages')) {
                    this.props.dispatch(requestOpportunityStages());
                }
                if (!this.props.state.appState.get('requestingOpps')) {
                    this.props.dispatch(requestOpportunities());
                }
                content = <Screen/>;
            } else {
                content = <Kanban/>;
            }
replace-for-prod-end*/

/*replace-for-dev-start*/
            content = <Kanban/>
/*replace-for-dev-end*/
        }

        return (
            <div className="app">
                <Menu/>
                <div className="content">
                    {content}
                </div>

                <Toastr ref={(toastr) => {
                    this._toastr = toastr;
                }}/>
                <div className="footer">
                    footer here
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('state ', state);
    return {state: state}
}

const mapDispathToProps = (dispatch) => {
    return {dispatch: dispatch}
}

App = connect(mapStateToProps, mapDispathToProps)(App);

export default App;
