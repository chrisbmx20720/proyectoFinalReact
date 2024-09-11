import React from 'react'
import UserListComponent from '../../components/user/UserListComponent'
import '../../styles/Users.css'
import { Row, Col, Button } from 'react-bootstrap';

export default function Users({state}) {

 return(
  <> 
     <Row>
        <Col className="d-flex align-items-center mb-4">
            <h2 className="mb-0">Users</h2>
            <Button variant="outline-dark" className="ms-3">Add New User</Button>
        </Col>
    </Row>

   <UserListComponent/>
  </>
 )
}


/*
export default function EditUser({id}){

  return(
    <>

    </>
  )
}
*/