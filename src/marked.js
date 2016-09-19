import React, { PropTypes } from 'react'
import marked from 'marked'

class Marked extends React.Component {
  render () {
    let content = marked('# 我是标题')
    return(
      <div>
    <div dangerouslySetInnerHTML = {{__html:content}} />
      </div>

    )

  }
}

export default Marked;
