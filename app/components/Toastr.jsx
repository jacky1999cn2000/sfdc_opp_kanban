import React from 'react';
import classNames from 'classnames';
import {ActionTypes} from '../constants/types';

class Toastr extends React.Component {

    render() {
        let show = !!this.props.status.type;
        let type = this.props.status.type;
        let id = this.props.status.id;
        let stage = this.props.status.stage;

        let content;
        if (show) {
            switch (type) {
                case ActionTypes.UPDATED_OPP:
                    content = (
                        <p>The StageName of Opportunity
                            <span>{id}</span>
                            has been updated to
                            <span>{stage}</span>
                        </p>
                    );
                    break;
                default:
                    content = null;
            }
        }

        return (
            <div className={classNames('toastr', {show: show})}>
                {content}
            </div>
        );
    }
}

export default Toastr;
