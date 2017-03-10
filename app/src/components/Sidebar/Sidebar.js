import React from 'react'

import './Sidebar.css'

class Sidebar extends React.Component {
  state={
    showLinks: []
  }

  componentWillMount = () => {
    this.setState({
      showLinks: this.props.links
    })
  }

   handleChange = event => {
    const {value} = event.target
    let {links} = this.props
    links = links ? links.filter(link => link.props.name.includes(value)) : []
    this.setState({
      showLinks: links
    })
  }

  render(){
    return (
      <div className='sidebar-container'>
        <div className="sidebar-title">
          <h3>
            {this.props.title}
          </h3>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            onChange={this.handleChange} />
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
