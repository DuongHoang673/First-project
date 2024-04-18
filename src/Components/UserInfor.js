import React from "react";

class UserInfor extends React.Component{

    state = {
        name: 'Duong Hoang',
        address: '35 ngo 204 Le Thanh Nghi Ha Noi',
        age: 20
      };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
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
                    <label>Your name: </label>
                    <input 
                    value = {this.state.name}
                    type = "text" 
                    onChange={(event) => this.handleOnChangeInput(event)}    
                    />
                    <button>Submit</button>

                    <label>Your age: </label>
                    <input 
                    value = {this.state.age}
                    type = "text" 
                    onChange={(event) => this.handleOnChangeAge(event)}    
                    />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default UserInfor;