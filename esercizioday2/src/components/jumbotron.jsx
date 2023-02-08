import { Component } from "react";

class Jumbotron extends Component{
    render() {
        return(
            
           <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold" style={{color:this.props.color}}>
                    Welcome On EpiBook
                </h1>
                <p class="col-md-8 fs-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, adipisci sed.
                    Sapiente, vitae porro quibusdam deleniti animi odit similique beatae obcaecati debitis
                    excepturi pariatur placeat velit deserunt maiores totam exercitationem.
                </p>
                <button type="button" class="btn btn-primary btn-lg">Cliccami!!</button>
            </div>
           </div> 
        )
    }
}

export default Jumbotron