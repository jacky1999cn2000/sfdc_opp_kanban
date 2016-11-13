import React from 'react';
import {connect} from 'react-redux';

class Kanban extends React.Component {

    render() {
        console.log('Kanban render');
        return (
            <div>
                Kanban component
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
