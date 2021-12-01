import React from 'react';
import { Card } from 'react-bootstrap';

const HomepageCard = (props) => {
    return (
        <Card className="hp-card" style={{ width: '18rem', margin: '3rem' }}>
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                <Card.Title>{props.CardTitle}</Card.Title>
                <Card.Text className="text-center">
                    {props.cardText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HomepageCard