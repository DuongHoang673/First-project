import React from "react";
import './DisplayInfor.scss'

class DisplayInfor extends React.Component{

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render(){
        const {listUsers} = this.props;
        return(
            <div>
                <div>
                   <button onClick = {() => {this.handleShowHide()}}>
                    {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:" }
                    </button> 
                </div>
                { this.state.isShowListUser &&
                <div>
                { listUsers?.map((user, index) => {
                    console.log(">>> check map user", user)

                    return (
                        <div key = {user.id} className = {+user.age > 18 ? "green" : "red"}>
                            <div>Ten toi la: {user.name}</div>
                            <div>Tuoi: {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}
                </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;