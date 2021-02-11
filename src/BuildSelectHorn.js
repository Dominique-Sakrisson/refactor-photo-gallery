import React from 'react';

export default class BuildSelectHorns extends React.Component{
    
    render(){
        const {
            images
        } = this.props;
        let sortedHorns = images.sort(function(a,b){
            let hornA = a.horns;
            let hornB = b.horns;
            if(hornA < hornB){
                return -1;
            }
            if(hornA > hornB){
                return 1;
            }
            return 0;
        })
        let set = new Set();
        let options = new Set();

        for(let val of sortedHorns){
            set.add(val.horns);
        }

        for(let option of set){
            options.add(<option value={option} key={option}>{option}</option>);
        }

        return(
            <>
            <label>Sort By Horns</label>
            <select value={this.props.value} onChange={this.props.onChange}>
                <option value='all'>Show All</option>
                {options}
            </select>     
            </>
        )
    }
}