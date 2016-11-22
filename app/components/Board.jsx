import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
class Board extends React.Component {

    render() {
        return (
            <div className="board">
                {this.props.children}
            </div>
        );
    }
}

export default Board;
