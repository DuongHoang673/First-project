import React from "react";

class MyComponents extends React.Component {

    state = {
        name: 'Duong Hoang',
        address: '35 ngo 204 Le Thanh Nghi Ha Noi',
        age: 20
      };

    handleOnClick(event){
        // console.log('Hoang Duc Duong dep trai');
        // console.log(event.pageX, event.pageY);
    }

    handleOnMouseOver(event){
        console.log(event);
    }

    render(){
        return(
            <div> 
                My name is {this.state.name} va dia chi cua toi la {this.state.address}
                <button onClick={this.handleOnClick} >Click me</button>
                <button onMouseOver={this.handleOnMouseOver} >Hover me</button>
            </div>
        );
    }
}

export default MyComponents;