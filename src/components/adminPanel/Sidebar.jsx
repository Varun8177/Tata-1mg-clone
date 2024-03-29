import {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { FiActivity, FiSettings } from "react-icons/fi";
import { SiSketchfab } from "react-icons/si";

const Sidebar = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [show, setshow] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <Hide below="md">
            <Flex bgcolor={"white"} w={show ? "220px" : "80px"}>
              {show ? (
                <Stack w={"150px"} m={"auto"} h={"80vh"} textAlign={"center"}>
                  <Heading
                    ml={"15px"}
                    mb={"20px"}
                    pt={"5"}
                    w={"fit-content"}
                    borderBottomWidth={3}
                    textAlign={"center"}
                  >
                    Menu
                  </Heading>
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin");
                    }}
                  >
                    <AiFillHome /> <Text>Dashboard</Text>
                  </Grid>
                  <br />
                  <Grid
                    cursor={"pointer"}
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    onClick={() => {
                      router.push("/admin/productdetails");
                    }}
                  >
                    <BsClipboardData /> Products
                  </Grid>
                  <br />
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin/activity");
                    }}
                  >
                    <FiActivity /> Activity
                  </Grid>
                  <br />
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin/admins");
                    }}
                  >
                    <SiSketchfab /> Admins
                  </Grid>
                  <br />
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin/settings");
                    }}
                  >
                    <FiSettings /> Settings
                  </Grid>
                </Stack>
              ) : (
                <Stack w={"70px"} m={"auto"} h={"80vh"}>
                  <Heading
                    fontSize={"18px"}
                    ml={"15px"}
                    mb={"20px"}
                    pt={"5"}
                    w={"fit-content"}
                    borderBottomWidth={3}
                    textAlign={"center"}
                  >
                    Menu
                  </Heading>
                  <Tooltip
                    cursor={"pointer"}
                    label="Dashboard"
                    placement="right"
                  >
                    <Grid
                      cursor={"pointer"}
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                    >
                      <AiFillHome style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                  <br />
                  <Tooltip label="Product Details" placement="right">
                    <Grid
                      cursor={"pointer"}
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                    >
                      <BsClipboardData style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                  <br />
                  <Tooltip label="Activity" placement="right">
                    <Grid
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                      cursor={"pointer"}
                    >
                      <FiActivity style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                  <br />
                  <Tooltip label="settings" placement="right">
                    <Grid
                      cursor={"pointer"}
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                    >
                      <FiSettings style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                </Stack>
              )}
              <Button
                h={"80vh"}
                bgColor={"white"}
                w={"30px"}
                alignSelf={"flex-end"}
                onClick={() => {
                  setshow(!show);
                }}
                _hover={{ bgcolor: "white" }}
              >
                {show ? <ArrowLeftIcon /> : <ArrowRightIcon />}
              </Button>
            </Flex>
          </Hide>
          <Show below="md">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  icon={<AiFillHome />}
                  onClick={() => {
                    router.push("/admin");
                  }}
                >
                  <Text>Dashboard</Text>
                </MenuItem>
                <MenuItem
                  icon={<BsClipboardData />}
                  onClick={() => {
                    router.push("/admin/productdetails");
                  }}
                >
                  Products
                </MenuItem>
                <MenuItem
                  icon={<FiActivity />}
                  onClick={() => {
                    router.push("/admin/activity");
                  }}
                >
                  Activity
                </MenuItem>
                <MenuItem
                  icon={<SiSketchfab />}
                  onClick={() => {
                    router.push("/admin/admins");
                  }}
                >
                  Admins
                </MenuItem>
                <MenuItem
                  icon={<FiSettings />}
                  onClick={() => {
                    router.push("/admin/settings");
                  }}
                >
                  Settings
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </>
      )}
    </>
  );
};

export default Sidebar;
