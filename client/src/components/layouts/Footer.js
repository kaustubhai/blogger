import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{marginTop: '50px'}} class="footer bg-primary py-5">
            <div class="container grid grid-3">
            <div>
                <h1>Bass Blogs</h1>
                <p>Copyright &copy; 2020</p>
            </div>
            <nav>
                <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="docs.html">Coming Soon</a></li>
                </ul>
            </nav>
            <div class="social">
                <a href="dribbble.com/kaustubhai"><i class="fab fa-dribbble fa-2x"></i></a>
                <a href="github.com/kaustubhai"><i class="fab fa-github fa-2x"></i></a>
                <a href="kaustubhai.netlify.app"><i class="fas fa-hand-spock fa-2x"></i></a>
            </div>
            </div>
        </footer>
    )
}

export default Footer
