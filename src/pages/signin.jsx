


import SignInModal from '@/components/authCom/SignIn/SignInModal'
import SignUpModal from '@/components/authCom/SignUp/SignUpModal'
import { StatArrow } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'


const signIn = () => {
  const {isAuth, userName} = useSelector(state => state.authReducer);
  console.log(isAuth, userName)

  return (
    <>
     <SignUpModal/> 
     <SignInModal />
   
    </>
      
   
  )
}

export default signIn