import React from 'react'
import Infinite from 'react-infinite'

import './Sidebar.css'

class Sidebar extends React.Component {
  state={
    showLinks: this.props.links
  }
	
   handleChange = (e) => {
    const {links} = this.props
    this.setState({
      showLinks: links ? links.filter(link => link.props.name.includes(e.target.value)):[]
    })
  }
  render(){

    return (
      
      <div className='sidebar-container'>
        <div>
          <input type="text" placeholder="search" onChange={this.handleChange}></input>
        </div>
        <div className="sidebar-title">
          {this.props.title}
        </div>

        <div className="sidebar-link-container">
        		{this.state.showLinks.map((link,id) =>
     			 <div key={id} className="sidebar-link-item">{link}
        		</div>
    			)}
        </div>

      </div>
    )
  }
}

export default Sidebar
