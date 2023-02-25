import {
<<<<<<< HEAD:src/components/authModal.jsx
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import AuthCard from "./authCard";

export default function AuthModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Signin</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AuthCard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
=======
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

import SignInCard from './SignInCard'

  export default function SignInModal() {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Button  onClick={onOpen}>Sign-In</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" >
          <ModalOverlay />
          <ModalContent>
           
            <ModalCloseButton />
            <ModalBody>
              <SignInCard />
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    )
  }
>>>>>>> 08ec100b9875bb80ab787aa0025c1629fb92f575:src/components/authCom/SignIn/SignInModal.jsx
