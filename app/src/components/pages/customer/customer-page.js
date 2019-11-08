import React, {Component} from 'react';
import CustomerInfo from './customer-info-page'
import Header from "../../header";
import Footer from "../../footer";


export default class CustomerPage extends Component {

    state = {
        email: "",
        firstname: "",
        lastname: "",
        telephone: "",
        activeItem: "1",
        modal: false
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    updateInfo = () => {
        let elem = document.getElementById('test-panel');

        elem.innerText = 'Work';
    };

    changeState = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    setStateFromService = (arr) => {
        arr.map((r) =>{
            this.setState({
                firstname: r.firstname,
                lastname: r.lastname,
                email: r.email,
                telephone: r.telephone
            });
            return true;
        });
    };


    render() {
        return (
            <div className="box-page">
                <Header/>
                <CustomerInfo toggle={this.toggle}
                              state={this.state}
                              modal={this.toggleModal}
                              changeState={this.changeState}
                              setStateFromSevice={this.setStateFromService}
                              update={this.updateInfo}/>
                <Footer/>
            </div>
        )
    }
}