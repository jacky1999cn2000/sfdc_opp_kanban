import React from 'react';
import {ItemTypes} from '../constants/itemTypes';
import {DropTarget} from 'react-dnd';
import {updateOpp} from '../actions';

// spec methods (can access component's own props)
const stageTarget = {

    // won't allow drop to 'Closed Won' or 'Closed Lost' stages
    canDrop(props) {
        if (props.name == 'Closed Won' || props.name == 'Closed Lost') {
            return false;
        }
        return true;
    },

    // TODO: NEED TO CALL SFDC TO UPDATE DATA
    drop(props, monitor) {
        let item = monitor.getItem();
        console.log('item ', item);
        console.log('dropped to stage: ', props.name);
        props.dispatch(updateOpp(item.id, props.name));
    }
};

// collect function
function collect(connect, monitor) {
    // we customized canDrop()
    return {connectDropTarget: connect.dropTarget(), isOver: monitor.isOver(), canDrop: monitor.canDrop()};
}

@DropTarget(ItemTypes.OPP, stageTarget, collect)
class Stage extends React.Component {

    // draw the overlay color
    renderOverlay(color) {
        return (<div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: color
        }}/>);
    }

    render() {

        const {connectDropTarget, isOver, canDrop} = this.props;

        return connectDropTarget(
            <div className="stage">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="list" style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                }}>
                    {this.props.opps}
                    {isOver && !canDrop && this.renderOverlay('red')}
                    {isOver && canDrop && this.renderOverlay('green')}
                </div>
            </div>
        );
    }
}

export default Stage;
