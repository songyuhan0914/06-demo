import React, { PropTypes } from 'react';
import axios from 'axios';
import { searchGit } from './utils/helper';
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:'username'
    }
  }
  componentDidMount(){
}
handleInput(e){
  let value = e.target.value;
  this.setState({inputValue:value})
}
handleClick(){
  let name = this.state.inputValue;
  searchGit(name)
  .then( (recData) => {
    this.setState({
      data:recData.getData,
      wait:false
    })
    console.log(this.state.data)
  });
}
  render () {
    let styles={
      root:{
        maxWidth:'700px',
        margin:'0 auto',
        border:'1px solid teal',
        textAlign:'center'
      }
    }
    let gitInfo=(
      <div style={styles.root}>
        <h3>{this.state.name}</h3>
        <img src={this.state.avatar_url} />
      </div>
    )
    return(
      <div>
        <input type="text" value={this.inputValue}
          onChange={this.handleInput.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>搜索</button><br />
        {
          this.state.wait ? '正在获取数据' : gitInfo }
      </div>
    )
  }
}

export default About;
