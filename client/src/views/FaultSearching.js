import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody , ListGroup, ListGroupItem } from "shards-react";
import { Link } from 'react-router-dom';
import axios from 'axios';


 class FaultSearching  extends React .Component{
     constructor(){
         super()
         this.state={ 
            faultSearching:[]
        }
      }
     componentDidMount(){
        axios.get('/api/getAllSearched')       
        .then(res=>{
          this.setState({
            faultSearching:res.data.searched
          })
        })
     }

 sentEstimate=(id, event)=>{
   event.preventDefault()
   axios.get('/api/sentestimate/'+id)
   .then(res=>{
     console.log(res)
     window.location='/estimatesent'
   })
   .catch(err=>{
     console.log(err)
   })
 }
 
        render(){
                
            return(
                <div className="ml-3 mr-3 mt-5 mb-5 ">


                  
                    {this.state.faultSearching.length==0?
                    <div className="card  pt-5 mt-5 pb-5 mb-5  ">
                      
                      <CardHeader className="border-bottom d-flex">
                        <h3 className="m-0">Searching Fault</h3>
                        <Link to='/addclient' className="textwh btn btn-primary ml-auto" >Add New client</Link> 
                      </CardHeader>
                        <h2 className="text-center pt-5 mt-5 pb-5 mb-5 ">No transection</h2>
                    </div>:
                <Row>
                  <Col>
                    <Card small className="mb-4">
                      <CardHeader className="border-bottom d-flex">
                        <h3 className="m-0">Today Enquiry</h3>
                         <Link to='/addclient' className="textwh btn btn-primary ml-auto" >Add New client</Link> 

                      </CardHeader>
                      <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                          <thead className="bg-light">
                            <tr>
                              <th scope="col" className="border-0">
                                 Name
                              </th>
                              <th scope="col" className="border-0">
                                Contact Number
                              </th>
                              <th scope="col" className="border-0">
                                Address
                              </th>
                              <th scope="col" className="border-0">
                               Registered Date
                              </th>
                              
                              <th scope="col" className="border-0">
                                View in details
                              </th>
                              <th scope="col" className="border-0">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                              {this.state.faultSearching.map(( singleItem, i) =>{
                                  return(
                                     
                                    <tr key={i}>
                                        <td> {singleItem.name} </td>
                                        <td> {singleItem.contactNumber} </td>
                                        <td> {singleItem.address} </td>
                                        <td> {singleItem.cretedAt} </td>
                                        <td> Details </td>
                                        <td> <Link onClick={()=>{}}  to='/details'>Details</Link> </td>

                                        <td>
                                            
                                        <div class="dropdown">
                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                   Action
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                  
                                                <a class="dropdown-item" href="#"  data-toggle="modal" data-target="#exampleModal" onClick={this.sentEstimate.bind(this , singleItem._id)} >Sent Estimate</a>
                                                    <button onClick={()=>{}} class="dropdown-item" href="#">Delete</button>
                                                </div>
                                                </div>
                                         </td>
                                    </tr>
                                  )
                              })}
                          </tbody>
                        </table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
        }
                </div>
            )
        }
     }
 
export default FaultSearching
