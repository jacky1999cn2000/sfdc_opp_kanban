import React from 'react';

class Stage extends React.Component {

    render() {
        return (
            <div className="stage">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="list">
                    {this.props.opps}
                </div>
            </div>
        );
    }
}

export default Stage;
