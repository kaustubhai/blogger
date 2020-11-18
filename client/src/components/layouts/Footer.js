import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col s6">
                <h5 className="white-text">Bass Blogs</h5>
                <p className="grey-text text-lighten-4">Give wings to your ideas and let them spread all across the globe and let it spread</p>
              </div>
              <div className="col offset-s2 s4">
                <h5 className="white-text">GoTo Links</h5>
                <ul>
                  <li><a style={{paddingBottom: '15px'}} className="grey-text text-lighten-3" href="/">Read Blogs</a></li>
                  <li><a style={{paddingBottom: '15px'}} className="grey-text text-lighten-3" href="/user/dashboard">Visit Profile</a></li>
                  <li><a style={{paddingBottom: '15px'}} className="grey-text text-lighten-3" href="/blog/add-new">Add New Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright Bass-Blogs
            </div>
          </div>
        </footer>
    )
}

export default Footer
