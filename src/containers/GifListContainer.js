import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component{

    constructor(props) {
        super(props);
     
        this.state = {
          images: [],
          keyWord:""
        };
      }
    
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({keyWord:event.target.value})
        console.log(this.state.keyWord)
    }

    handleSubmit=()=> {
        console.log(this.state.keyWord)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.keyWord}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(response => response.json())
          .then(data => this.getImages(data))//this.setState({ images: data.images.original.url }))
    }

    getImages=(json)=>{
        let arr=[]; let count=0;
        for(let a of json.data){         
            if(count===3)break
            //console.log(a)
            arr.push(a.images.original.url)
            count++;
        }
        this.setState({images:arr})
        //console.log(this.state.images)
    }

    render(){
        return(
            <div>
                <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} />           
                <GifList images={this.state.images}/>
           </div>
        )
    }
}