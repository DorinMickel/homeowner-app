import React from 'react'
import HomepageNavbar from './HomepageNavbar'
import './homepage.css'
import HomepageCard from './HomepageCard'
import { Container } from 'react-bootstrap'


function Homepage (){

    return (
        <React.Fragment>
            <HomepageNavbar/>
            <Container className="hp-container">
                <HomepageCard
                imgSrc="https://i.pinimg.com/736x/8d/1a/c2/8d1ac2d98b1ee557a8ec0cbd8832ef48.jpg"
                CardTitle="COMMUNICATION"
                cardText="Stay tuned and up to date with everything that is happaning around your home."
                />
                <HomepageCard
                imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1R35vfV640kgf1j1j2OXLCwMMeq6BwMqBhnw6abcXmLkZ2PnwhKadhsQrSg2mGLFeMI&usqp=CAU"
                CardTitle="TRANSPARENCY"
                cardText="Always be informed with decisions making regarding changes, improvements and committee money spendings"
                />
                <HomepageCard
                imgSrc="https://cdn.dribbble.com/users/2129110/screenshots/4963111/community-icon.jpg"
                CardTitle="COMMUNITY"
                cardText="The people that srrounds you create a unique community, be part of it and make your life happier by getting to know them."
                />
            </Container>
        </React.Fragment>
    )
}

export default Homepage