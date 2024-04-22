import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfor';


class MyComponents extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "Duong Hoang", age: "20"},
            {id: 2, name: "Minh Anh", age: "19"},
            {id: 3, name: "Lan Nguyen", age: "50"},
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