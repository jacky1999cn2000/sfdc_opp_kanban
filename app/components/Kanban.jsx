import React from 'react';
import {connect} from 'react-redux';
import cache from '../utils/cache';
import Board from './Board';
import Stage from './Stage';
import Opp from './Opp';

class Kanban extends React.Component {

    render() {
        console.log('Kanban render');

        /* process data */

        // convert redux's immutableJS data structure into javascript data structure
        let userMap = this.props.state.users.toJSON();
        let oppList = this.props.state.opps.toJSON();
        // for stages, first sort by 'SortOrder'
        let oppStageList = this.props.state.oppStages.sort((a, b) => {
            if (a.get('SortOrder') > b.get('SortOrder')) {
                return 1;
            } else {
                return -1;
            }
        }).toJSON();

        // component_stages array will contain <Stage/> components
        let component_stages = [];

        oppStageList.forEach((oppStage) => {
            // get opps with same stage name
            let opps = oppList.filter((opp) => {
                return opp.StageName == oppStage.ApiName;
            });

            // create an array of <Opp/> components
            let component_opps = [];
            opps.forEach((opp) => {
                opp.Name = opp.Name.length > 20
                    ? opp.Name.substring(0, 17) + '...'
                    : opp.Name;
                opp.Owner = userMap[opp.OwnerId].FirstName + ' ' + userMap[opp.OwnerId].LastName;
                // chatter photo url will work in external site with oauth_token attached to it
                opp.OwnerPhoto = userMap[opp.OwnerId].SmallPhotoUrl + '?oauth_token=' + cache.get('access_token');
                component_opps.push(<Opp opp={opp}/>);
            });
            component_stages.push(<Stage id={oppStage.ApiName} name={oppStage.ApiName} opps={component_opps}/>);
        });

        return (
            <div className="kanban">

                <div className="filters">Filters</div>

                <Board>
                    {component_stages}
                </Board>

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
