import React from "react";
import UserInfor from "./UserInfor"
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {

    render(){
        return(
            <div>

                <UserInfor/>
                <DisplayInfor name = "Minh Anh Le" age = "20"/>

            </div>
        );
    }
}

export default MyComponents;