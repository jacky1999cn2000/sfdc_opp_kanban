import React from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import Stage from './Stage';
import Opp from './Opp';

class Kanban extends React.Component {

    render() {
        console.log('Kanban render');
        return (
            <div className="kanban">

                <div className="filters">Filters</div>

                <Board>
                    <Stage name="Prospecting">
                        <Opp/>
                        <Opp/>
                        <Opp/>
                    </Stage>
                    <Stage name="Prospecting">
                        <Opp/>
                        <Opp/>
                        <Opp/>
                    </Stage>
                    <Stage name="Prospecting">
                        <Opp/>
                        <Opp/>
                        <Opp/>
                    </Stage>
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
