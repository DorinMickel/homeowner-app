import React from 'react'
import HomepageNavbar from '../../componants/HomepageNavbar'


function Homepage (){
    return (
        <React.Fragment>
            <HomepageNavbar/>
            <div className="hompage-img">
                <img src="https://i.ytimg.com/vi/Ya69WuHcq8M/maxresdefault.jpg"/>
            </div>
        </React.Fragment>
    )
}

export default Homepage