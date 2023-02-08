import { Component } from "react";
import {Card, Button, Container} from "react-bootstrap"

import fantasy from "../data/fantasy.json"
import history from "../data/history.json"
// import horror from "../data/horror.json"
// import romance from "../data/romance.json"
// import scifi from "../data/scifi.json"


class Books extends Component{
    state = {
        jsonFile: null
    }
    render(){
        return(
            <Container style={{display:"flex", flexWrap: "wrap", justifyContent: "space-around", width:"97%", margin: "0 auto", alignItems:"inherit", maxWidth:"100%"}}>
                <button onClick={e => {this.setState({jsonFile: fantasy})}} type="button" class="btn btn-primary btn-lg">fantasy</button>
                <button onClick={e => {this.setState({jsonFile: history})}} type="button" class="btn btn-primary btn-lg">Cliccami!!</button>
               
                {this.state.jsonFile && this.state.jsonFile.map(book => (
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