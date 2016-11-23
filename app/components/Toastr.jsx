import React from 'react';
import classNames from 'classnames';

class Toastr extends React.Component {

    render() {
        console.log('Toastr type ', !!this.props.type);
        return (
            <div className={classNames('toastr', {
                show: !!this.props.type
            })}>
                Some text some message..
            </div>
        );
    }
}

export default Toastr;
