import React from 'react';
import {connect} from 'react-redux';

class Toastr extends React.Component {

    render() {
        return (
            <div>
                toaster: {this.props.state.appState.get('status')}
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

Toastr = connect(mapStateToProps, mapDispathToProps)(Toastr);

export default Toastr;
