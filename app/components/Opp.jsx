import React from 'react';
import {ItemTypes} from '../constants/itemTypes';
import {DragSource} from 'react-dnd';

// spec methods (can access component's own props)
const oppSource = {

    // pass oppId to drop target
    beginDrag(props) {
        return {id: props.opp.Id};
    },

    // can't drag opps whose stages were either 'Closed Won' or 'Closed Lost'
    canDrag(props) {
        if (props.opp.StageName == 'Closed Won' || props.opp.StageName == 'Closed Lost') {
            return false;
        }
        return true;
    }
};

// collect function
function collect(connect, monitor) {
    // we customized canDrag
    return {connectDragSource: connect.dragSource(), isDragging: monitor.isDragging(), canDrag: monitor.canDrag()}
}

@DragSource(ItemTypes.OPP, oppSource, collect)
class Opp extends React.Component {

    render() {

        const {connectDragSource, isDragging, canDrag} = this.props;

        return connectDragSource(
            <div className="opp" style={{
                opacity: isDragging
                    ? 0.5
                    : 1,
                cursor: canDrag
                    ? 'move'
                    : 'not-allowed'
            }}>
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
