import React, { PropTypes } from 'react'
import marked from 'marked'
import {getmd} from './utils/helper.js'
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let add = this.props.params.title
    getmd(add)
    .then( (resmd) =>{
      this.setState({
        data:resmd.getmd,
        wait:false
      })
    })
  }
  render () {
    marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});
let content = this.state.wait ? '请稍等' : marked(this.state.data)
    return(
      <div>

        <div dangerouslySetInnerHTML={{__html:content}} className="post-content"/>
      </div>
    )
  }
}

export default Blog;
