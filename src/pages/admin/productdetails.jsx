import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  useColorModeValue,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { GetRequest } from "@/redux/admin/admin.action";
import AdminProductsPagination from "@/components/adminPanel/AdminProductsPagination";

const AdminProducts = () => {
  // const [data, setdata] = useState([]);
  const data = useSelector((store) => store.AdminReducer.products);
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const HandleActivePage = (val) => {
    setActivePage(val);
  };
  const InitialData = () => {
    dispatch(GetRequest());
  };
  useEffect(() => {
    InitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Box bgColor={"#d8dff7"} h={"90vh"}>
      <Flex bgColor={"#d8dff7"} border={"1px solid black"} w={"99%"} m={"auto"}>
        <Box
          bgColor={"white"}
          h={"80vh"}
          borderRadius={"10px"}
          mt="30px"
          mr={"30px"}
        >
          <Sidebar />
        </Box>
        <Box
          border={"1px solid red"}
          bgColor={"white"}
          pt={"20px"}
          w={"100%"}
          h={"80vh"}
          m={"auto"}
          mt="30px"
        >
          <Flex justifyContent={"space-around"} borderBottomWidth={1} pb={"5"}>
            <Input placeholder="Search by name " variant={"filled"} w={"50%"} />
            <Menu>
              <MenuButton
                _hover={{ bgColor: "500" }}
                bgColor={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Filter
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => {}}>Capsule</MenuItem>
                <MenuItem
                  onClick={() => {
                    setdata(
                      prod.filter((item) =>
                        item.name.toLowerCase().includes("support")
                      )
                    );
                  }}
                >
                  Supports
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setdata(
                      prod.filter((item) =>
                        item.name.toLowerCase().includes("protein")
                      )
                    );
                  }}
                >
                  Proteins
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setdata(
                      prod.filter((item) =>
                        item.name.toLowerCase().includes("immun")
                      )
                    );
                  }}
                >
                  Immunity Products
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                _hover={{ bgColor: "500" }}
                bgColor={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Sort
              </MenuButton>
              <MenuList>
                <MenuItem>Price: Low to High</MenuItem>
                <MenuItem>Price: High to Low</MenuItem>
                <MenuItem>Stocks {"<"} 3</MenuItem>
                <MenuItem>Stocks {">"} 3</MenuItem>
              </MenuList>
            </Menu>
            <Button bgColor={"500"}>Add Product</Button>
            <Button bgColor={"500"} onClick={() => InitialData()}>
              Reset
            </Button>
          </Flex>
          <Grid templateColumns={"repeat(3,1fr)"} p={"5"} gap={"5"}>
            {data.length > 0 &&
              data
                .filter((item, i) => {
                  return i >= 9 * (activePage - 1) && i < 9 * activePage;
                })
                .map((item) => {
                  return (
                    <Flex key={item.id}>
                      <Image
                        src={item.url}
                        alt={item.name}
                        w={"100px"}
                        h={"100px"}
                        objectFit={"contain"}
                      />
                      <Stack>
                        <Text>{item.name.substr(0, 29)}...</Text>
                        <Text>Price: {item.price}</Text>
                        {/* <Text>{item.title.substr(0, 29)}...</Text> */}
                        <Flex>
                          <BasicUsage item={item} />
                        </Flex>
                      </Stack>
                    </Flex>
                  );
                })}
          </Grid>
          <AdminProductsPagination
            onPageChange={HandleActivePage}
            pageSize={9}
            activePage={activePage}
            items={data.length}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminProducts;

function BasicUsage({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex>
        <Text
          _hover={{ cursor: "pointer" }}
          textDecoration={"underline"}
          w={"60px"}
          h={"30px"}
          onClick={onOpen}
        >
          Edit
        </Text>
        <Popover>
          <PopoverTrigger>
            <Text
              _hover={{ cursor: "pointer" }}
              textDecoration={"underline"}
              w={"60px"}
              h={"30px"}
            >
              Delete
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to delete this product?
            </PopoverBody>
            <PopoverFooter>
              <Flex w={"100%"} justifyContent={"space-evenly"}>
                <Button>No</Button>
                <Button>Yes</Button>
              </Flex>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <Stack spacing={4} mb={5}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type={item.title}
                  value={item.title}
                  // onChange={(e) => {
                  //   setTitle(e.target.value);
                  // }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input type="number" value={item.price} />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Update Product</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
