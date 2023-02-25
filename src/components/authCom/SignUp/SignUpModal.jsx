import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'

import SignUpCard from './SignUpCard'

  export default function SignUpModal() {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Button  onClick={onOpen}>Sign-Up</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" >
          <ModalOverlay />
          <ModalContent>
           
            <ModalCloseButton />
            <ModalBody>
              <SignUpCard />
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    )
  }