import React from 'react';
import classNames from 'classnames';
import {ActionTypes} from '../constants/types';

class Toastr extends React.Component {

    render() {
        let show = !!this.props.type;
        let type = this.props.type;

        let content;
        if (show) {
            switch (type) {
                case ActionTypes.UPDATED_OPP:
                    content = 'Opportunity Updated!';
                    break;
                default:
                    content = null;
            }
        }

        return (
            <div className={classNames('toastr', {
                show: !!this.props.type
            })}>
                {content}
            </div>
        );
    }
}

export default Toastr;
