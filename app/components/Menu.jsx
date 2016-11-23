import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class Menu extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            active: false
        };
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        });
    }

    // have tot use arrow style in order to use 'this' in render
    render = () => {
        let arrow = (this.state.active
            ? <i className="fa fa-angle-up" aria-hidden="true"></i>
            : <i className="fa fa-angle-down" aria-hidden="true"></i>);

        return (
            <div className={classNames('menu', {active: this.state.active})}>
                <button className="toggle-nav" onClick={() => this.toggle()}>
                    {arrow}
                </button>
                <div className="nav">
                    <div className="kanban">
                        KANBAN
                    </div>
                    <div className="setting">
                        SETTINGS
                    </div>
                    <div className="logout">
                        LOGOUT
                    </div>
                </div>
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

Menu = connect(mapStateToProps, mapDispathToProps)(Menu);

export default Menu;
