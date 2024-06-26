import React, { useState } from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';


// class MyComponents extends React.Component {

//     state = {
//         listUsers: [
//             {id: 1, name: "Duong Hoang", age: "16"},
//             {id: 2, name: "Minh Anh", age: "26"},
//             {id: 3, name: "Lan Nguyen", age: "69"},
//         ]
//     }

//     handleAddUserInfor = (UserObj) => {
//         this.setState ({
//             listUsers: [UserObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (UserId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== UserId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     render(){
//         return(
//             <>
//                 <div className='a'>

//                     <AddUserInfor
//                         handleAddUserInfor={this.handleAddUserInfor}
//                     />

//                     <hr/>

//                     <DisplayInfor 
//                     listUsers={this.state.listUsers} 
//                     handleDeleteUser = {this.handleDeleteUser}
//                     />

//                 </div>

//                 <div className='b'>

//                 </div>
//             </>
//         );
//     }
// }

const MyComponents = (props) => {

    const [listUsers, setlisUsers] = useState(
        [
            {id: 1, name: "Duong Hoang", age: "16"},
            {id: 2, name: "Minh Anh", age: "26"},
            {id: 3, name: "Lan Nguyen", age: "69"},
        ]
    );

    const handleAddUserInfor = (UserObj) => {
        setlisUsers([UserObj, ...listUsers]);
        // this.setState ({
        //     listUsers: [UserObj, ...this.state.listUsers]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setlisUsers(listUsersClone);
        // this.setState({
        //     listUsers: listUsersClone
        // })
    }


    return (
        <>
            <div className='a'>

                <AddUserInfor
                    handleAddUserInfor={handleAddUserInfor}
                />

                <hr />

                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />

            </div>

            <div className='b'>

            </div>
        </>
    );
}

export default MyComponents;