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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <div>

                My name is {this.state.name} va toi {this.state.age} tuoi
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type = "text" 
                    onChange={(event) => this.handleOnChangeInput(event)}    
                    />
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

export default MyComponents;