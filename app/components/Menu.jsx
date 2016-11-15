import React from 'react';
import {connect} from 'react-redux';

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
        let menuClsName = '';
        let arrow = <i className="fa fa-angle-down" aria-hidden="true"></i>;

        if (this.state.active) {
            menuClsName = 'active';
            arrow = <i className="fa fa-angle-up" aria-hidden="true"></i>;
        }

        return (
            <div className={'menu ' + menuClsName}>
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
