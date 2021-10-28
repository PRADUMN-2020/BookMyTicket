import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './SignIn.css'
const axios=require('axios')
const backend_url=require("../Server/BackEndConnect/backEndUrl")

class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
             err:""
        }
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }
    
    handleEmailChange(event){
        this.setState({
            email:event.target.value
        })
    }
    handlePasswordChange(event){
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const details={
            email:this.state.email,
            password:this.state.password
        }
        const url = backend_url + "/login/user";
        console.log(url)
        axios
          .post(url,details)
          .then((response) => {
            console.log(response.data);
            if(response.data.signed_in===false){
              this.setState({
                err:response.data.err
              })
            }
            else{
              this.setState({
                err:""
              })
            }
          })
          .catch((err) => {
            console.log(err);
          });
        // console.log(JSON.stringify(details))
    }
    render() {
        return (
          <div className="signIn">
            <h6 style={{ color: "red" }}>{this.state.err}</h6>
            <Form className="form" onSubmit={this.handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                onChange={this.handleEmailChange}
              >
                <Form.Label>Ticket Number</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="eg-: 74222958"
                  //   onChange={this.change}
                />
                <Form.Text className="text-muted">
                  Enter Ticket Number here
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="eg-:joeBiden@democratic.com"
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Reason</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cause I lost elections."
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="danger" type="submit" id="submitButton">
                Cancel Ticket
              </Button>
            </Form>
          </div>
        );
    }
}

export default SignIn;
