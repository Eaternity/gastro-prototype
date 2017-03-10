import React from 'react'
import './Sidebar.css'

const Sidebar = props => {
	const {title, links} = props;
  return (
    <div className='sidebar-container'>
      <div className="sidebar-title">
        {title}
      </div>
      <div className="sidebar-link-container">
      		{links.map((link,id) =>
   			 <div key={id} className="sidebar-link-item">{link}
      		</div>
  			)}
      </div>
    </div>
  )
}

export default Sidebar
