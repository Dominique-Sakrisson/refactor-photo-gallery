import React from 'react';

export default class BuildSelect extends React.Component{
    
    render(){
        const {
            images
        } = this.props;
        let sortedImages = images.sort(function(a,b){
                let keyA = a.keyword.toUpperCase();
                let keyB = b.keyword.toUpperCase();
                if(keyA < keyB){
                    return -1;
                }
                if(keyA > keyB){
                    return 1;
                }
                return 0;
            })
        let set = new Set();
        let options = new Set();

        for(let val of sortedImages){
            set.add(val.keyword);
        }
        for(let option of set){
            options.add(<option value={option} key={option}>{option}</option>);
        }
        

        return(
            <>
            <label>Sort By Keyword</label>
            <select value={this.props.value} onChange={this.props.onChange}>
                <option value='all'>Show All</option>
                {options}
            </select>     
            </>
        )
    }
}