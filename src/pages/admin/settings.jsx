import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import { EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const AdminSettings = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editMobile, setEditMobile] = useState(false);
  const [editGender, setEditGender] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {" "}
      {domLoaded && (
        <Box bgColor={"#d8dff7"} h={"90vh"}>
          <Flex bgColor={"#d8dff7"} w={"99%"} m={"auto"}>
            <Box
              bgColor={"white"}
              h={"80vh"}
              borderRadius={"10px"}
              mt="30px"
              mr={"30px"}
            >
              <Sidebar />
            </Box>
            <Box w={"100%"} h={"80vh"} m={"auto"} mt="30px" bgColor={"white"}>
              <Heading m={"auto"} w={"fit-content"}>
                Admin Settings
              </Heading>
              <Flex justifyContent={"space-evenly"} mt={"30px"}>
                <Stack w={"60%"}>
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Display Name</Text>
                      <EditIcon
                        onClick={() => {
                          setEditName(true);
                        }}
                      />
                    </Flex>
                    {editName ? (
                      <Stack>
                        <Input />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditName(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button>
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        Varun Ergurala
                      </Text>
                    )}
                  </Box>
                  <hr />
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Email</Text>
                      <EditIcon
                        onClick={() => {
                          setEditEmail(true);
                        }}
                      />
                    </Flex>
                    {editEmail ? (
                      <Stack>
                        <Input />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditEmail(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button>
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        Varun@gmail.com
                      </Text>
                    )}
                  </Box>
                  <hr />
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Mobile Number</Text>
                      <EditIcon />
                    </Flex>
                    <Text fontSize={"12px"} color={"500"}>
                      8177-8366-51
                    </Text>
                  </Box>
                  <hr />
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Gender</Text>
                      <EditIcon />
                    </Flex>
                    <Text fontSize={"12px"} color={"500"}>
                      Male
                    </Text>
                  </Box>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Button bgColor={"500"} w={"200px"}>
                    Sign Out
                  </Button>
                </Stack>
                <Stack>
                  <Avatar size={"2xl"} />
                  <Button bgColor={"500"}>Upload Photo</Button>
                </Stack>
              </Flex>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default AdminSettings;
