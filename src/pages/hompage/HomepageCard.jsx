import React from 'react';
import { Card } from 'react-bootstrap';

const HomepageCard = (props) => {
    return (
        <Card className="hp-card" style={{ width: '18rem', margin: '3rem' }}>
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body className="d-flex flex-column justify-content-end">
                <Card.Title>{props.CardTitle}</Card.Title>
                <Card.Text >
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HomepageCard