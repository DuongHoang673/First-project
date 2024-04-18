import React from "react";

class DisplayInfor extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <div>Ten toi la: {this.props.name}</div>
                <div>Toi : {this.props.age} tuoi</div>
            </div>
        )
    }
}

export default DisplayInfor;