import React from 'react';

class Screen extends React.Component {

    render() {
        let content;
        if (this.props.type == 'error') {
            content = 'Error...';
        } else {
            content = 'Loading...';
        }
        return (
            <div className="screen">
                {content}
            </div>
        );
    }
}

export default Screen;
