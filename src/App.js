import React from 'react'
import logo from './logo.svg';
import './App.css';
import CoolHeader from './header.js'
import images from './data.js' 
import ImageList from './ImageList.js'
import ImageItem from './ImageItem.js'
import KeyBuilder from './BuildSelectKeyword.js'
import HornBuilder from './BuildSelectHorn.js'

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '', 
  }

  render(){
    const filteredImages = images.filter((image) => {
      if(!this.state.keyword) return true; 
    
      if(this.state.keyword === 'all') return true;
    
      if(image.keyword === this.state.keyword) return true;

      return false;
    })

    const filteredHorns = filteredImages.filter((image) => {

      if(!this.state.horns) return true; 
    
      if(this.state.horns === 'all') return true;
    
      if(image.horns.toString() === this.state.horns) return true;
      console.log(image.horns, this.state.horns);

      return false;
    })

    const handleKeywordChange = (e) => {
      this.setState({keyword: e.target.value})
    }
    const handlehornChange = (e) => {
      this.setState({horns: e.target.value})
    }
      
    return(
      <>
        <CoolHeader/>
        <div className="image-sorter">
          <KeyBuilder  images={images} value={this.state.keyword} onChange={handleKeywordChange}/> 
          <br/>
          <HornBuilder  images={images} value={this.state.horns} onChange={handlehornChange}/>
          <br/>
          
          <form><button>Reset!</button></form>
        </div>
        <div className='image-view'>
          <ImageList images={filteredHorns}/>
        </div> 
      </>
    );
  }
}
