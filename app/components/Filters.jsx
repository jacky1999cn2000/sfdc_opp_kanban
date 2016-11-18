import React from 'react';
import Select from 'react-select';
import {updateStageFilters} from '../actions';

class Filters extends React.Component {

    changeSelections = (selections) => {
        //selections: Prospecting,Closed Lost,Qualification,Needs Analysis,...
        this.props.dispatch(updateStageFilters(selections));
    }

    render() {
        /*
          options is an array of all stages
          values is an array of selected stages
        */
        let options = [];
        this.props.options.forEach((option) => {
            options.push({label: option.ApiName, value: option.ApiName});
        });

        return (
            <div className="filters">
                <div className="selectorContainer">
                    <div className="label">
                        Stages:
                    </div>
                    <div className="selector">
                        <Select multi={true} simpleValue value={this.props.values} placeholder="Select your favourite(s)" options={options} onChange={this.changeSelections}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
