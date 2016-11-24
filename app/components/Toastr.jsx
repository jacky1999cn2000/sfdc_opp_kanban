import React from 'react';
import classNames from 'classnames';

let messageList = [];
let timeoutList = [];

class Toastr extends React.Component {

    /*
      refer to toastr.md for detailed explanation
    */
    success = (status) => {

        if (timeoutList.length) {
            clearTimeout(timeoutList.pop());
        }

        messageList.unshift(status);

        this._container.attributes['class'].ownerElement.className = 'toastr show';

        timeoutList.unshift(setTimeout(() => {
            timeoutList = [];
            messageList = [];
            this._container.attributes['class'].ownerElement.className = 'toastr';
        }, 2000));
    }

    render() {
        let toastrList = [];
        messageList.forEach((message, index) => {
            toastrList.push(
                <div key={index} className="message">The StageName of Opportunity
                    <span>{message.id}</span>
                    has been updated to
                    <span>{message.stage}</span>
                </div>
            );
        });

        return (
            <div ref={(container) => {
                this._container = container;
            }} className="toastr show">
                {toastrList}
            </div>
        );
    }
}

export default Toastr;
