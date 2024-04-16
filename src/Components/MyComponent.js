import React from "react";

class MyComponents extends React.Component {

    state = {
        name: 'Duong Hoang',
        address: '35 ngo 204 Le Thanh Nghi Ha Noi',
        age: 20
      };

    handleOnClick(event){
        console.log("Click on me please");
        this.setState({
            name: "Minh Anh",
            age: Math.floor((Math.random() * 100) + 1)
        });
    }

    handleOnMouseOver(event){
        console.log(event);
    }

    render(){
        return(
            <div> 
                My name is {this.state.name} va toi {this.state.age} tuoi
                <button onClick={(event) => {this.handleOnClick(event)}} >Click me</button>
                <button onMouseOver={this.handleOnMouseOver} >Hover me</button>
            </div>
        );
    }
}

export default MyComponents;