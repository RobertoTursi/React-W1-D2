import { Component } from "react";
import {Card, Button, Container} from "react-bootstrap"

import fantasy from "../data/fantasy.json"


class Books extends Component{
    render(){
        return(
            <Container style={{display:"flex", flexWrap: "wrap", justifyContent: "space-around", width:"97%", margin: "0 auto", alignItems:"inherit", maxWidth:"100%"}}>
                {fantasy.map(book => (
                    <Card key={book.asin} style={{ width: '18rem', margin:"1.5rem"}}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button variant="primary">{book.price}$</Button>
      </Card.Body>
    </Card>
                ))}
            </Container>
                
                  
        )
    }
}

export default Books