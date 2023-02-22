import React from "react";
import {
  Stack,
  Box,
  Divider,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <Stack bg="#fff" m="auto" w="95%">
      <Box>
        <Heading as="h2" size="lg">
          Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and
          Healthcare Platform
        </Heading>
        <Heading as="h3" size="md">
          We Bring Care to Health.
        </Heading>
        <Text>
          Tata 1mg is India's leading digital healthcare platform. From doctor
          consultations on chat to online pharmacy and lab tests at home: we
          have it all covered for you. Having delivered over 25 million orders
          in 1000+ cities till date, we are on a mission to bring "care" to
          "health" to give you a flawless healthcare experience.
        </Text>

        <Heading as="h3" size="md">
          Tata 1mg: Your Favourite Online Pharmacy!
        </Heading>
        <Text>
          Tata 1mg is India's leading online chemist with over 2 lakh medicines
          available at the best prices. We are your one-stop destination for
          other healthcare products as well, such as over the counter
          pharmaceuticals, healthcare devices and homeopathy and ayurveda
          medicines.
        </Text>
        <Text>
          With Tata 1mg, you can buy medicines online and get them delivered at
          your doorstep anywhere in India! But, is ordering medicines online a
          difficult process? Not at all! Simply search for the products you want
          to buy, add to cart and checkout. Now all you need to do is sit back
          as we get your order delivered to you.
        </Text>
        <Text>
          In case you need assistance, just give us a call and we will help you
          complete your order.
        </Text>
        <Text>
          And there is more! At Tata 1mg, you can buy health products and
          medicines online at best discounts.
        </Text>
        <Text>
          Now, isn't that easy? Why go all the way to the medicine store and
          wait in line, when you have Tata 1mg Pharmacy at your service.
        </Text>
        <Heading as="h3" size="md">
          The Feathers in Our Cap
        </Heading>
        <Text>
          At Tata 1mg, our goal is to make healthcare understandable, accessible
          and affordable in India. We set out on our journey in 2015, and have
          come a long way since then. Along the way, we have been conferred with
          prestigious titles like BML Munjal Award for 'Business Excellence
          through Learning and Development', Best Online Pharmacy in India Award
          and Top 50 venture in The Smart CEO-Startup50 India. We have been
          selected as the only company from across the globe for SD#3 "Health &
          Well Being for all" by Unreasonable group, US State Department. In
          2019 alone we received three awards including the BMW Simply
          Unstoppable Award.
        </Text>
        <Heading as="h3" size="md">
          The Services We Offer
        </Heading>
        <Text>
          Tata 1mg is India's leading digital healthcare platform, where you can
          buy medicines online with discount. Buy medicine online in Delhi,
          Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai,
          Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering
          your online medicine order at your doorstep, we provide accurate,
          authoritative & trustworthy information on medicines and help people
          use their medicines effectively and safely.
        </Text>
        <Text>
          We also facilitate lab tests at home. You can avail over 2,000 tests
          and get tested by 120+ top and verified labs at the best prices. Need
          to consult a doctor? On our platform, you can talk to over 20 kinds of
          specialists in just a few clicks.
        </Text>
        <Text>
          Customer centricity is the core of our values. Our team of highly
          trained and experienced doctors, phlebotomists and pharmacists looks
          into each order to give you a fulfilling experience.
        </Text>
        <Text>
          We’ve made healthcare accessible to millions by giving them quality
          care at affordable prices. Customer centricity is the core of our
          values. Our team of highly trained and experienced doctors,
          phlebotomists and pharmacists looks into each order to give you a
          fulfilling experience.
        </Text>
        <Text>
          Visit our online medical store now, and avail online medicine purchase
          at a discount. Stay Healthy!
        </Text>
      </Box>
      <Box>
        <Text align="center">INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
        <Flex justifyContent="space-evenly">
          <Box align="center">
            <Text as="b" fontSize="3xl">
              260m+
            </Text>
            <Text>Visitors</Text>
          </Box>
          <Box align="center">
            <Text as="b" fontSize="3xl">
              31m+
            </Text>
            <Text>Orders Delivered</Text>
          </Box>
          <Box align="center">
            <Text as="b" fontSize="3xl">
              1800+
            </Text>
            <Text>Cities</Text>
          </Box>
        </Flex>
        <Divider h="2px" />
      </Box>
      <Box>
        <Center gap="10px">
          <Text>Get the link to download App</Text>
          <Input placeholder="Enter Phone Number" variant="filled" w="400px" />
          <Button color="white" bg="#ff6f61">
            Send Link
          </Button>
        </Center>
      </Box>
      <Box bg="#fffcf8" h="100vh" w="100%">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem>
            <Text fontSize="lg" p="5px">
              Know Us
            </Text>
            <Text fontSize="sm">About Us</Text>
            <Text fontSize="sm">Contact Us</Text>
            <Text fontSize="sm">Press Coverage</Text>
            <Text fontSize="sm">Careers</Text>
            <Text fontSize="sm">Business Partnership</Text>
            <Text fontSize="sm">Become a Health</Text>
            <Text fontSize="sm">Partner</Text>
            <Text fontSize="sm">Corporate</Text>
            <Text fontSize="sm">Governance</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" p="5px">
              Our Policies
            </Text>
            <Text fontSize="sm">Privacy Policy</Text>
            <Text fontSize="sm">Terms and Conditions</Text>
            <Text fontSize="sm">Editorial Policy</Text>
            <Text fontSize="sm">Return Policy</Text>
            <Text fontSize="sm">IP Policy</Text>
            <Text fontSize="sm">Grievance Redressal Policy</Text>
            <Text fontSize="sm">Fake Jobs and Fraud</Text>
            <Text fontSize="sm">Disclaimer</Text>
           
          
          </GridItem>
          <GridItem>
            <Text fontSize="lg" p="5px">
              Our Services
            </Text>
            <Text fontSize="sm">Order</Text>
            <Text fontSize="sm">Order</Text>
            <Text fontSize="sm">Book Lab test</Text>
            <Text fontSize="sm">Consult a Doctor</Text>
            <Text fontSize="sm">Ayurveda</Text>
            <Text fontSize="sm">Articles</Text>
            <Text fontSize="sm">Hindi Articles</Text>
            <Text fontSize="sm">Care Plan</Text>
          
          </GridItem>
          <GridItem>
            <Text fontSize="lg" p="5px">
              Connect
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" p="5px">
              Download App
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Footer;
