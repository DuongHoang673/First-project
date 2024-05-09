import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import Logo from './../logo.svg';

// class DisplayInfor extends React.Component{

//     render(){
//         console.log('>>> call me render')
//         const {listUsers} = this.props;

//         return(

//             <div className = 'display-infor-container'>
//                 <img src = {Logo}/>

//                 {true &&
//                 <div>
//                 { listUsers?.map((user, index) => {


//                     return (
//                         <div key = {user.id} className = {+user.age > 18 ? "green" : "red"}>
//                             <div>
//                                 <div>Ten toi la: {user.name}</div>
//                                 <div>Tuoi: {user.age}</div>
//                             </div>

//                             <div>
//                                 <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                             </div>

//                             <hr/>
//                         </div>
//                     )
//                 })}
//                 </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUsers, setShowHideListUsers] = useState(true);

    const handleShowHideListUsers = () => {
        setShowHideListUsers (!isShowHideListUsers);
    }

    useEffect(
        () => {
        if(listUsers.length === 0){
            alert("Ban da xoa het Users")
        }
        console.log(">>> call me useEffect")
    }, [listUsers]
    );

    return (

        <div className='display-infor-container'>
            <img src={Logo} />

        <div>
            <span onClick={() => handleShowHideListUsers()}>
            {isShowHideListUsers === true ? "Hide list users:" : "Show list users:"}
            </span>
            <hr></hr>
        </div>

            {isShowHideListUsers &&
                <div>
                    {listUsers?.map((user, index) => {


                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>Ten toi la: {user.name}</div>
                                    <div>Tuoi: {user.age}</div>
                                </div>

                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )

}

export default DisplayInfor;