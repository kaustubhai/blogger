import React from 'react'
import Header from '../layouts/Header'

const ComingSoon = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <p className="flow-text center-align">Things are Coming your way. <strong>Stay Tuned</strong></p>
                <ol class="collection">
                    <li class="collection-item">Unsplash Api for blog Header Images</li>
                    <li class="collection-item">Premium Plans for Creators and Readers</li>
                    <li class="collection-item">Praising Feature for every blog</li>
                    <li class="collection-item">Saving Feature for every Blog</li>
                </ol>
                <p className="flow-text center-align"><strong>Thanks! </strong>for sticking by...</p>
            </div>
        </div>
    )
}

export default ComingSoon
