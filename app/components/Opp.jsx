import React from 'react';

class Opp extends React.Component {

    render() {
        return (
            <div className="opp">
                <div className="opp_name">
                    {this.props.opp.Name}
                </div>
                <div className="opp_info">
                    <div className="opp_more">
                        <button>More Info</button>
                        <div className="opp_owner_photo">
                            <img src={this.props.opp.OwnerPhoto} width="50%" height="50%"/>
                        </div>
                    </div>
                    <div className="opp_amount">
                        <i className="fa fa-usd" aria-hidden="true"></i>{this.props.opp.Amount}
                    </div>
                    <div className="opp_owner">
                        {this.props.opp.Owner}
                    </div>
                </div>
            </div>
        );
    }
}

export default Opp;
