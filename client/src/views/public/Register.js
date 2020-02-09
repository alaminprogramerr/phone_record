import React, { Component } from 'react';
 
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button
  } from "shards-react";
  
  import { connect } from 'react-redux';
  import register from '../../redux/action/authAction'
  
class Register extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            err:{},
        }
    }
    changeHandler=(event)=>{
        console.log(event.target.value)
        this.setState({
           [event.target.name]:event.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
       let obj={
           name:this.state.name,
           email:this.state.email,
           password:this.state.password,
           confirmPassword:this.state.confirmPassword,
       }
       this.props.register(obj)
    }
    render() { 
        return (
            <div className="col-md-6 offset-md-3 mt-5">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                    <h3 className="m-0">Register Here </h3>
                    </CardHeader>
                    <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                        <Col>
                        {/* firm started */}
                            <form onSubmit={this.submitHandler}>
                            <Row form>
                                <Col md="6" className="form-group">
                                <label htmlFor="feFirstName"> Name</label>
                                <FormInput
                                    name="name"
                                    id="feFirstName"
                                    className={this.state.err.name?"is-invalid":''}
                                    placeholder="First Name"
                                    value={this.state.name}
                                    onChange={this.changeHandler}
                                />
                                
                                {this.state.err.name?
                                <span className="text-danger"> {this.state.err.name} </span>
                                :''
                                }
                                </Col>
                                <Col md="6" className="form-group">
                                <label htmlFor="feEmail">Email</label>
                                <FormInput
                                    name="email"
                                    className={this.state.err.email?"is-invalid":''}
                                    type="email"
                                    id="feEmail"
                                    placeholder="Email Address"
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                    autoComplete="email"
                                />
                                
                                {this.state.err.email?
                                <span className="text-danger"> {this.state.err.email} </span>
                                :''
                                }
                                </Col>
                            </Row>
                            <Row form>
                                <Col md="6" className="form-group">
                                <label htmlFor="password">Password</label>
                                <FormInput
                                    className={this.state.err.password?"is-invalid":''}
                                    name="password"
                                    value={this.state.password}
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.changeHandler}
                                />
                                {this.state.err.password?
                                <span className="text-danger"> {this.state.err.password} </span>
                                :''
                                }
                                </Col>
                                
                                <Col md="6" className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <FormInput
                                    name="confirmPassword"
                                    className={this.state.err.confirmPassword?"is-invalid":''}
                                    value={this.state.confirmPassword}
                                    id="confirmPassword"
                                    placeholder="Confirm password"
                                    onChange={this.changeHandler}
                                />
                                {this.state.err.confirmPassword?
                                <span className="text-danger"> {this.state.err.confirmPassword} </span>
                                :''
                                }
                                </Col>
                            </Row>
                            <Button type="submit" theme="accent">Submit</Button>
                            </form>
                        </Col>
                        </Row>
                    </ListGroupItem>
                    </ListGroup>
                    </Card>
            </div>
        );
    }
}
 
export default connect(null , {register})(Register) ;