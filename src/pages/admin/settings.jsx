import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import useValueChange from "@/components/customHooks/useValueChange";
import { EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setname] = useValueChange("");
  const [email, setEmail] = useValueChange("");
  const [mobile, setMobile] = useValueChange("");
  const [gender, setGender] = useValueChange("");
  const Remove = () => setSelectedImage(null);

  const upload = (event) => {
    console.log(event.target.files[0]);
    setSelectedImage(event.target.files[0]);
  };

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
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditName(true);
                        }}
                      />
                    </Flex>
                    {editName ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditName(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setEditName(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {name}
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
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditEmail(true);
                        }}
                      />
                    </Flex>
                    {editEmail ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditEmail(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setEditEmail(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {email}
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
                      <Text as={"b"}>Mobile</Text>
                      <EditIcon
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditMobile(true);
                        }}
                      />
                    </Flex>
                    {editMobile ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditMobile(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setEditMobile(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {mobile}
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
                      <Text as={"b"}>Gender</Text>
                      <EditIcon
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditGender(true);
                        }}
                      />
                    </Flex>
                    {editGender ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditGender(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setEditGender(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {gender}
                      </Text>
                    )}
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
                  {selectedImage ? (
                    <Box textAlign={"center"}>
                      <Image
                        objectFit={"cover"}
                        borderRadius={"50%"}
                        alt="not found"
                        width={"250px"}
                        h={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                      />
                      <br />
                      <Button bgColor={"500"} onClick={Remove}>
                        Remove
                      </Button>
                    </Box>
                  ) : (
                    <>
                      <Avatar w={"250px"} h={"250px"} />
                      <input type="file" name="myImage" onChange={upload} />
                    </>
                  )}
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
