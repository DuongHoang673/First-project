import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfor';


class MyComponents extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "Duong Hoang", age: "16"},
            {id: 2, name: "Minh Anh", age: "26"},
            {id: 3, name: "Lan Nguyen", age: "69"},
        ]
    }

    render(){
        return(
            <div>

                <UserInfor/>
                <hr/>
                <DisplayInfor listUsers = {this.state.listUsers}/>

            </div>
        );
    }
}

export default MyComponents;