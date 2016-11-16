import React from 'react';
import {connect} from 'react-redux';

class Kanban extends React.Component {

    render() {
        console.log('Kanban render');
        return (
            <div className="kanban">

                <div className="filters">Filters</div>

                <div className="board">

                    <div className="stage">
                        <div className="name">
                            Prospecting
                        </div>
                        <div className="list">
                            <div className="opp">
                                <div className="opp_name">
                                    Acme - 200 Widgets
                                </div>
                                <div className="opp_description">
                                    The deal is at 10% because they are at the sales process stage of evaluating just being converted from a lead. No formal sales engagement has taken place yet.
                                </div>
                                <div className="opp_amount_owner">
                                    <div className="opp_owner">

                                        <img src="https://jj158--c.na35.content.force.com/profilephoto/005/T?oauth_token=00D410000011Ct8!AQIAQNFynDkzI1I3S1H7mlWwiOdaOjyyD17wTs.cM1UhVwqAJvQHKn9p1jePJ5lsUyFypMlR51mpP_0Na.ooEtdUNXnzJGRV" width="50%" height="50%"/>
                                    </div>
                                    <div className="opp_amount">$ 20000.0
                                        <span>Jacky Zhao</span>
                                    </div>

                                </div>
                            </div>
                            <div className="opp">
                                <div className="opp_name">
                                    Acme - 200 Widgets
                                </div>
                                <div className="opp_description">
                                    The deal is at 10% because they are at the sales process stage of evaluating just being converted from a lead. No formal sales engagement has taken place yet.
                                </div>
                                <div className="opp_amount_owner">
                                    <div className="opp_owner">
                                        <img src="https://jj158--c.na35.content.force.com/profilephoto/005/T?oauth_token=00D410000011Ct8!AQIAQNFynDkzI1I3S1H7mlWwiOdaOjyyD17wTs.cM1UhVwqAJvQHKn9p1jePJ5lsUyFypMlR51mpP_0Na.ooEtdUNXnzJGRV" width="50%" height="50%"/>
                                    </div>
                                    <div className="opp_amount">20000.0</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stage">
                        <div className="name">
                            Prospecting
                        </div>
                        <div className="list">
                            <div className="opp">
                                <div className="opp_name">
                                    Acme - 200 Widgets
                                </div>
                                <div className="opp_description">
                                    The deal is at 10% because they are at the sales process stage of evaluating just being converted from a lead. No formal sales engagement has taken place yet.
                                </div>
                                <div className="opp_amount_owner">
                                    <div className="opp_owner">
                                        <img src="https://jj158--c.na35.content.force.com/profilephoto/005/T?oauth_token=00D410000011Ct8!AQIAQNFynDkzI1I3S1H7mlWwiOdaOjyyD17wTs.cM1UhVwqAJvQHKn9p1jePJ5lsUyFypMlR51mpP_0Na.ooEtdUNXnzJGRV" width="50%" height="50%"/>
                                    </div>
                                    <div className="opp_amount">20000.0</div>

                                </div>
                            </div>
                            <div className="opp">
                                <div className="opp_name">
                                    Acme - 200 Widgets
                                </div>
                                <div className="opp_description">
                                    The deal is at 10% because they are at the sales process stage of evaluating just being converted from a lead. No formal sales engagement has taken place yet.
                                </div>
                                <div className="opp_amount_owner">
                                    <div className="opp_owner">
                                        <img src="https://jj158--c.na35.content.force.com/profilephoto/005/T?oauth_token=00D410000011Ct8!AQIAQNFynDkzI1I3S1H7mlWwiOdaOjyyD17wTs.cM1UhVwqAJvQHKn9p1jePJ5lsUyFypMlR51mpP_0Na.ooEtdUNXnzJGRV" width="50%" height="50%"/>
                                    </div>
                                    <div className="opp_amount">20000.0</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stage">
                        <div className="name">
                            Prospecting
                        </div>
                        <div className="list">
                            <div className="opp">
                                <div className="opp_name">
                                    Acme - 200 Widgets
                                </div>
                                <div className="opp_description">
                                    The deal is at 10% because they are at the sales process stage of evaluating just being converted from a lead. No formal sales engagement has taken place yet.
                                </div>
                                <div className="opp_amount_owner">
                                    <div className="opp_owner">
                                        <img src="https://jj158--c.na35.content.force.com/profilephoto/005/T?oauth_token=00D410000011Ct8!AQIAQNFynDkzI1I3S1H7mlWwiOdaOjyyD17wTs.cM1UhVwqAJvQHKn9p1jePJ5lsUyFypMlR51mpP_0Na.ooEtdUNXnzJGRV" width="50%" height="50%"/>
                                    </div>
                                    <div className="opp_amount">20000.0</div>

                                </div>
                            </div>
                            <div className="opp">
                                <div className="opp_name">
                                    Acme - 200 Widgets
                                </div>
                                <div className="opp_description">
                                    The deal is at 10% because they are at the sales process stage of evaluating just being converted from a lead. No formal sales engagement has taken place yet.
                                </div>
                                <div className="opp_amount_owner">
                                    <div className="opp_owner">
                                        <img src="https://jj158--c.na35.content.force.com/profilephoto/005/T?oauth_token=00D410000011Ct8!AQIAQNFynDkzI1I3S1H7mlWwiOdaOjyyD17wTs.cM1UhVwqAJvQHKn9p1jePJ5lsUyFypMlR51mpP_0Na.ooEtdUNXnzJGRV" width="50%" height="50%"/>
                                    </div>
                                    <div className="opp_amount">20000.0</div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

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
