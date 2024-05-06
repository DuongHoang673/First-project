import React from "react";
import './DisplayInfor.scss';
import Logo from './../logo.svg';

class DisplayInfor extends React.Component{
    constructor(props) {
        console.log('>>> call me constructor')
        super(props);
        this.state = {
            isShowListUser: true
        }  
    }

    componentDidMount() {
        console.log('>>> call me component did mount')
        setTimeout(() => {
            document.title = 'Duong dep trai nhat the gioi'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component update')
        if(this.props.listUsers !== prevProps.listUsers){
            if(this.props.listUsers.length === 5){
                alert('Ban co 5 nguoi choi')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render(){
        console.log('>>> call me render')
        const {listUsers} = this.props;

        return(

            <div className = 'display-infor-container'>
                <img src = {Logo}/>
                <div>
                   <button onClick = {() => {this.handleShowHide()}}>
                    {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:" }
                    </button> 
                </div>
                { this.state.isShowListUser &&
                <div>
                { listUsers?.map((user, index) => {


                    return (
                        <div key = {user.id} className = {+user.age > 18 ? "green" : "red"}>
                            <div>
                                <div>Ten toi la: {user.name}</div>
                                <div>Tuoi: {user.age}</div>
                            </div>

                            <div>
                                <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                            </div>
                            
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