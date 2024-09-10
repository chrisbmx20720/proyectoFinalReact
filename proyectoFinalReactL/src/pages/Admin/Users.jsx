import React from 'react'
import UserComponent from '../../components/user/UserComponent'
import EditUserForm from '../../components/user/EditUserForm';

export default function Users({state}) {

 
  if(state){
    return <EditUserForm/>
  }
  else{
    return <UserComponent/>
  }
}


/*
export default function EditUser({id}){

  return(
    <>

    </>
  )
}
*/