import React from 'react';

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
