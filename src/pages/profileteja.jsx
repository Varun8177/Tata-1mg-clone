import React,{useState} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Box,
  StackDivider,
} from "@chakra-ui/react";

export const Profile = () => {

const [email,setEmail]=useState("reddyvaritejeshkumarreddy@gmail.com")
const[mobile,seMobile]=useState("9133826592")
const [workemail,setworkEmail]=useState("reddyvaritejeshkumarreddy@gmail.com")
const handlemobile=()=>{

}
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        margin: "00px",
        backgroundColor: "teal",
      }}
    >
      <div style={{ margin: "auto" }}>
        {" "}
        <Card style={{ width: "500px" }}>
          <CardHeader>
            <Heading size="md">Hi,There <br />
           <Text style={{color:"grey",fontWeight:"10",fontSize:"15px"}}>joined in 2023</Text></Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="8">
              <Box style={{ display: "flex",gap:"10%",justifyContent:"space-between"}}>
                <Box>
                  <img
                    width="50px"
                    src="https://onemg.gumlet.io/image/upload/v1638281620/kt40wjhqxqdrjpgzvc73.png"
                    alt=""
                  />
                </Box>
                <Box style={{marginRight:"40%"}}>
                  <Heading size="xs" >
                    <Text style={{color:"grey",fontWeight:"10",fontSize:"13px"}}>Mobile  Number</Text>
                  </Heading>

                  <Text pt="2" fontSize="sm">
                    {mobile}
                  </Text>
                </Box>
                <Box style={{marginRight:"0%"}}>
                  <button onClick={handlemobile}>
                    <p style={{ color: "red", fontSize: "20px" }}>edit</p>
                  </button>
                </Box>
              </Box>
              <Box style={{ display: "flex",gap:"10%",justifyContent:"space-between"}}>
                <Box>
                  <img
                    width="50px"
                    src="https://onemg.gumlet.io/image/upload/v1638281596/yl5o4t3xslirp8kathah.png"
                    alt=""
                  />
                </Box>
                <Box style={{marginRight:"0%"}}>
                  <Heading size="xs" >
                    <Text style={{color:"grey",fontWeight:"10",fontSize:"13px"}}>Primary Emailadress</Text>
                  </Heading>

                  <Text pt="2" fontSize="sm">
                   {email}
                  </Text>
                </Box>
                <Box style={{marginRight:"0%"}}>
                  <button>
                    <p style={{ color: "red", fontSize: "20px" }}>edit</p>
                  </button>
                </Box>
              </Box>
              <Box style={{ display: "flex",gap:"10%",justifyContent:"space-between"}}>
                <Box>
                  <img
                    width="50px"
                    src="https://onemg.gumlet.io/image/upload/v1638281596/yl5o4t3xslirp8kathah.png"
                    alt=""
                  />
                </Box>
                <Box style={{marginRight:""}}>
                  <Heading size="xs" >
                    <Text style={{color:"grey",fontWeight:"10",fontSize:"13px"}}>Work Email address</Text>
                  </Heading>

                  <Text pt="2" fontSize="sm">
                   {workemail}
                  </Text>
                </Box>
                <Box style={{marginRight:"0%"}}>
                  <button>
                    <p style={{ color: "red", fontSize: "20px" }}>edit</p>
                  </button>
                </Box>
              </Box>
              
             
            </Stack>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card style={{ width: "500px" }}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="8">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card style={{ width: "500px" }}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="8">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card style={{ width: "500px" }}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="8">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
