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
                cardText="Stay tuned and up to date with "
                />
                <HomepageCard
                imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1R35vfV640kgf1j1j2OXLCwMMeq6BwMqBhnw6abcXmLkZ2PnwhKadhsQrSg2mGLFeMI&usqp=CAU"
                CardTitle="TRANSPARENCY"
                cardText="Always be informed with decisions making regarding changes and improvements and committee money spendings"
                />
                <HomepageCard
                imgSrc="https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-adoption-and-communitynetwork-and-social-icon-design-png-image_1513774.jpg"
                CardTitle="COMMUNITY"
                cardText="Be part of "
                />
            </Container>
        </React.Fragment>
    )
}

export default Homepage