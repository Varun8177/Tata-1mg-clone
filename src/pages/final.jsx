import React from 'react'
import Link from 'next/link'
import { Box,Center,Button } from '@chakra-ui/react'
const final = () => {
  return (
   <>
   <Center >
     <Box >
        <img src="https://tse1.mm.bing.net/th?id=OIP.MT07Og6cRde17N6Ga5IWfwHaFE&pid=Api&P=0" alt="" />
    </Box>
    
   </Center>
   <Center>
   
    <Link href="/"> <Button style={{backgroundColor:"red",color:"white"}}>Home</Button></Link>
   </Center>
   </>
  )
}

export default final