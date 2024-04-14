import React from "react";

class MyComponents extends React.Component {

    state = {
        name: 'Duong Hoang',
        address: '35 ngo 204 Le Thanh Nghi Ha Noi',
        age: 20
      };

    render(){
        return(
            <div> 
                My name is {this.state.name} va dia chi cua toi la {this.state.address}
            </div>
        );
    }
}

export default MyComponents;