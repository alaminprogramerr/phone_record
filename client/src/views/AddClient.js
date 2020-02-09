import React from 'react'
import Axios from 'axios'
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


 class AddClient  extends React .Component{



    constructor(){
        super()
        this.state={
          brand:'',
          color:'',
          type:'',
          IMEI:'',
          state:'',
          ID:'',

          name:'',
          address:'',
          contactNumber:'',

          faultName:'',
          faultDescription:'',
          description:"",
          err:{}
        }
    }
    changeHandler=(event)=>{
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    submiHandler=(event)=>{
        event.preventDefault()
        let obj= {

          brand:this.state.brand,
          color:this.state.color,
          type:this.state.type,
          IMEI:this.state.IMEI,
          state:this.state.state,
          ID:this.state.ID,

          name:this.state.name,
          address:this.state.address,
          contactNumber:this.state.contactNumber,

          faultName:this.state.faultName,
          faultDescription:this.state.faultDescription,
          description:this.state.description
        }
        Axios.post('/api/createNewClient', obj)
        .then(res=>{
          window.location='/faultSearch'
        })
        .catch(err=>{
          this.setState({
            err:err.response.data
          })
        })
        
    }
        render(){
                
            return(
                <div className="col-md-8 mt-5 offset-md-2 mt-3 mb-3">
                    <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h3 className="m-0">Register new client</h3>
                        </CardHeader>
                        <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                            <Col>
                                <form onSubmit={this.submiHandler}>
                                <Row form>
                                    <h5 className="col-md-12">Customer Details</h5>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="name"> Name</label>
                                    <FormInput
                                        className={this.state.err.name?"is-invalid":''}
                                        name="name"
                                        id="name"
                                        placeholder=" Name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor=""> Address</label>
                                    <FormInput
                                        className={this.state.err.address?"is-invalid":''}
                                        name="address"
                                        id="name"
                                        placeholder=" Address"
                                        value={this.state.address}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="feLastName">Contact number</label>
                                    <FormInput
                                        className={this.state.err.ID?"is-invalid":''}
                                        name="contactNumber"
                                        id="id"
                                        type="number"
                                        placeholder="Contact number"
                                        value={this.state.contactNumber}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    <h5 className="col-md-12">Phone Details </h5>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="email">Brand</label>
                                    <FormInput
                                        className={this.state.err.brand?"is-invalid":''}
                                        type="text"
                                        name="brand"
                                        id="email"
                                        placeholder="Brand"
                                        value={this.state.brand}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    
                                    <Col md="4" className="form-group">
                                    <label htmlFor="">Color</label>
                                    <FormInput
                                        className={this.state.err.color?"is-invalid":''}
                                        type="text"
                                        name="color"
                                        placeholder="Color"
                                        value={this.state.color}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    
                                    <Col md="4" className="form-group">
                                    <label htmlFor="email">Type </label>
                                    <FormInput
                                        className={this.state.err.type?"is-invalid":''}
                                        type="text"
                                        name="type"
                                        placeholder="Type"
                                        value={this.state.type}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    
                                </Row>
                                <Row form>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="address">IMEI</label>
                                    <FormInput
                                        className={this.state.err.IMEI?"is-invalid":''}
                                        name="IMEI"
                                        placeholder="IMEI"
                                        value={this.state.IMEI}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="">State</label>
                                    <FormInput
                                        className={this.state.err.state?"is-invalid unstyled":'unstyled'}
                                        name="state"
                                        type="number"
                                        value={this.state.state}
                                        id="number"
                                        placeholder="State"
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="">ID</label>
                                    <input
                                        className={this.state.err.ID?"is-invalid  form-control":' form-control'}
                                        name="ID"
                                        value={this.state.ID}
                                        type="number"
                                        id="ID"
                                        placeholder="ID"
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                  <h5 className="col-md-12">Fault Details</h5>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="serviceName">Fault name</label>
                                    <FormInput
                                        className={this.state.err.faultName?"is-invalid":''}
                                        id="faultName"
                                        placeholder="Fault name"
                                        name="faultName"
                                        onChange={this.changeHandler}
                                        value={this.state.faultName}
                                    />
                                    </Col>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="">Fault description</label>
                                    <FormInput
                                        className={this.state.err.faultDescription?"is-invalid":''}
                                        name="faultDescription"
                                        value={this.state.faultDescription}
                                        id="faultDescription"
                                        placeholder="Fault description"
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="12" className="form-group">
                                    <label htmlFor="description">Short description</label>
                                    <FormTextarea 
                                        id="description" 
                                        className={this.state.err.description?"is-invalid":''}
                                        rows="5" 
                                        value={this.state.description}
                                        onChange={this.changeHandler}
                                        name="description"
                                        value={this.state.description}
                                        placeholder="Enter a short description "
                                    />
                                    </Col>
                                </Row>
                                <Button theme="accent">Submit</Button>
                                </form>
                            </Col>
                            </Row>
                        </ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            )
        }
     }
 

export default AddClient
