import React from 'react';
import {connect} from 'react-redux';
import cache from '../utils/cache';
import Filters from './Filters';
import Board from './Board';
import Stage from './Stage';
import Opp from './Opp';

class Kanban extends React.Component {

    render() {

        /* convert redux's immutableJS data structure into javascript data structure */
        let userMap = this.props.state.users.toJSON();
        let oppList = this.props.state.opps.toJSON();
        let oppStageList = this.props.state.oppStages.sort((a, b) => {
            if (a.get('SortOrder') > b.get('SortOrder')) {
                return 1;
            } else {
                return -1;
            }
        }).toJSON(); // for stages, first sort by 'SortOrder'

        /* create components */

        let component_stages = []; // component_stages array which will contain all the <Stage/> components
        let stageFilters = this.props.state.stageFilters.toJSON(); // used to filter stages

        oppStageList.forEach((oppStage) => {
            // if stage is not in stageFilters, then don't display
            if (!stageFilters.includes(oppStage.ApiName)) {
                return;
            }

            // get opps with same stage name
            let opps = oppList.filter((opp) => {
                return opp.StageName == oppStage.ApiName;
            });

            // create an array of <Opp/> components
            let component_opps = [];
            opps.forEach((opp) => {
                opp.Name = opp.Name.length > 20
                    ? opp.Name.substring(0, 17) + '...'
                    : opp.Name;
                opp.Owner = userMap[opp.OwnerId].FirstName + ' ' + userMap[opp.OwnerId].LastName;
                // chatter photo url will work in external site with oauth_token attached to it
                opp.OwnerPhoto = userMap[opp.OwnerId].SmallPhotoUrl + '?oauth_token=' + cache.get('access_token');
                component_opps.push(<Opp key={opp.Id} opp={opp}/>);
            });
            component_stages.push(<Stage key={oppStage.ApiName} name={oppStage.ApiName} opps={component_opps} dispatch={this.props.dispatch}/>);
        });

        return (
            <div className="kanban">

                <div className="filters"><Filters dispatch={this.props.dispatch} options={oppStageList} values={this.props.state.stageFilters.toJSON()}/></div>

                <Board>
                    {component_stages}
                </Board>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {state: state}
}

const mapDispathToProps = (dispatch) => {
    return {dispatch: dispatch}
}

Kanban = connect(mapStateToProps, mapDispathToProps)(Kanban);

export default Kanban;
