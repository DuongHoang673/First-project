import React from "react";
import UserInfor from "./UserInfor"

class MyComponents extends React.Component {

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

                <UserInfor/>

            </div>
        );
    }
}

export default MyComponents;