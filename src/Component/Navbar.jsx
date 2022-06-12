// import { SearchIcon } from "./SearchIcon";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
// import { IconName } from "react-icons/ai";
import { AiOutlineFire, AiFillPushpin } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FcBookmark } from "react-icons/fc";
import { BsFunnel } from 'react-icons/bs'
import {
  Box,
  Stack,
  Button,
  Image,
  Spacer,
  Wrap,
  WrapItem,
  Center,
  HStack,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  FormHelperText,
  Text,
  SimpleGrid,
  IconButton,
  Select,
  Divider,
  // SearchIcon,
} from "@chakra-ui/react";
// import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      {/*Navbar */}
      <Wrap justify="space-between" m="10px">
        <WrapItem>
          <Box>
            <Image
              w="32px"
              h="32px"
              className=""
              src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
              alt="Dan Abramov"
            />
          </Box>
        </WrapItem>
        <WrapItem>
          <Box>
            <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="teal" variant="ghost">
                Sign In
              </Button>

              <Button colorScheme="teal" variant="outline">
                Sign Up
              </Button>
              <Button
                colorScheme="voilet"
                variant="solid"
                bgGradient="linear(to-r, #7D5CD5, #3680CF)"
              >
                Post a Job
              </Button>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
      <hr />
      <br />
      <Container>
        <Center>
          <Wrap justify={"center"} w="100%">
            <Box w="80%">
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Type job title or keyword"
                />
              </FormControl>
            </Box>
            <Box>
              {/* <Button>Icon</Button> */}
              <Button><BsFunnel/></Button>
            </Box>
          </Wrap>
        </Center>
      </Container>
      <br />
      <Container>
        <SimpleGrid rows={[3, 1]} columns={[1, 3]} spacing={3} color={"white"}>
          <Button
            rowSpan={[1, 1]}
            colSpan={[1, 1]}
            bg="mediumpurple"
            height="50px"
          >
            Remote
          </Button>
          <Button
            rowSpan={[1, 1]}
            colSpan={[1, 1]}
            bg="mediumpurple"
            height="50px"
          >
            Tech
          </Button>
          <Button
            rowSpan={[1, 1]}
            colSpan={[1, 1]}
            bg="mediumpurple"
            height="50px"
          >
            Marketing
          </Button>
        </SimpleGrid>
      </Container>

      <Box className="container" mt="10" w="100%" bg={"#EDF2F7"}>
        <Box>
          <Heading >Recent Jobs</Heading>
        </Box>
        <Box className="cards">
          <Center marginBottom={3}>
            <Wrap
              w="460px"
              border="2px"
              borderColor="#CFBCF4"
              p="2"
              borderRadius="5"
            >
              <WrapItem w="50px">
                <Image
                  w="32px"
                  h="32px"
                  className=""
                  src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
                  alt="Dan Abramov"
                />
              </WrapItem>
              <WrapItem w="300px">
                <ul style={{ listStyleType: "none" }}>
                  <li>Talewind</li>
                  <li>Lead Producer</li>
                  <li>£50k - £65k</li>
                </ul>
              </WrapItem>
              <WrapItem w="70px">
                <Box>
                  <AiOutlineFire />
                </Box>
                <Box>
                  <BiWorld />
                </Box>
                <Box>
                  <AiFillPushpin />
                </Box>
                <Box>
                  <FcBookmark />
                </Box>
              </WrapItem>
            </Wrap>
            {/* */}
          </Center>
          <Center marginBottom={3}>
            <Wrap
              w="460px"
              border="2px"
              borderColor="#CFBCF4"
              p="2"
              borderRadius="5"
            >
              <WrapItem w="50px">
                <Image
                  w="32px"
                  h="32px"
                  className=""
                  src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75"
                  alt="Dan Abramov"
                />
              </WrapItem>
              <WrapItem w="300px">
                <ul style={{ listStyleType: "none" }}>
                  <li>SlimWiki</li>
                  <li>Lead Producer</li>
                  <li>£50k - £65k</li>
                </ul>
              </WrapItem>
              <WrapItem w="70px">
                <Box>
                  <AiOutlineFire />
                </Box>
                <Box>
                  <BiWorld />
                </Box>
                <Box>
                  <AiFillPushpin />
                </Box>
                <Box>
                  <FcBookmark />
                </Box>
              </WrapItem>
            </Wrap>
            {/* */}
          </Center>
          <Center marginBottom={3}>
            <Wrap
              w="460px"
              border="2px"
              borderColor="#CFBCF4"
              p="2"
              borderRadius="5"
            >
              <WrapItem w="50px">
                <Image
                  w="32px"
                  h="32px"
                  className=""
                  src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75"
                  alt="Dan Abramov"
                />
              </WrapItem>
              <WrapItem w="300px">
                <ul style={{ listStyleType: "none" }}>
                  <li>Talewind</li>
                  <li>Lead Producer</li>
                  <li>£50k - £65k</li>
                </ul>
              </WrapItem>
              <WrapItem w="70px">
                <Box>
                  <AiOutlineFire />
                </Box>
                <Box>
                  <BiWorld />
                </Box>
                <Box>
                  <AiFillPushpin />
                </Box>
                <Box>
                  <FcBookmark />
                </Box>
              </WrapItem>
            </Wrap>
            {/* */}
          </Center>
          <Center marginBottom={3}>
            <Wrap
              w="460px"
              border="2px"
              borderColor="#CFBCF4"
              p="2"
              borderRadius="5"
            >
              <WrapItem w="50px">
                <Image
                  w="32px"
                  h="32px"
                  className=""
                  src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F08360c55-4fb4-48e0-8392-eeda80628196&w=1920&q=75"
                  alt="Dan Abramov"
                />
              </WrapItem>
              <WrapItem w="300px">
                <ul style={{ listStyleType: "none" }}>
                  <li>SlimWiki</li>
                  <li>Full-Stack JavaScrip Developer</li>
                  <li>Mid, Senior</li>
                </ul>
              </WrapItem>
              <WrapItem w="70px">
                <Box>
                  <AiOutlineFire />
                </Box>
                <Box>
                  <BiWorld />
                </Box>
                <Box>
                  <AiFillPushpin />
                </Box>
                <Box>
                  <FcBookmark />
                </Box>
              </WrapItem>
            </Wrap>
            {/* */}
          </Center>
          <Center marginBottom={3}>
            <Wrap
              w="460px"
              border="2px"
              borderColor="#CFBCF4"
              p="2"
              borderRadius="5"
            >
              <WrapItem w="50px">
                <Image
                  w="32px"
                  h="32px"
                  className=""
                  src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=1920&q=75"
                  alt="Dan Abramov"
                />
              </WrapItem>
              <WrapItem w="300px">
                <ul style={{ listStyleType: "none" }}>
                  <li>The Wanderlust Group</li>
                  <li>Director of Marketing</li>
                  <li>£150k</li>
                </ul>
              </WrapItem>
              <WrapItem w="70px">
                <Box>
                  <AiOutlineFire />
                </Box>
                <Box>
                  <BiWorld />
                </Box>
                <Box>
                  <AiFillPushpin />
                </Box>
                <Box>
                  <FcBookmark />
                </Box>
              </WrapItem>
            </Wrap>
            {/* */}
          </Center>
          <Center marginBottom={3}>
            <Wrap
              w="460px"
              border="2px"
              borderColor="#CFBCF4"
              p="2"
              borderRadius="5"
            >
              <WrapItem w="50px">
                <Image
                  w="32px"
                  h="32px"
                  className=""
                  src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
                  alt="Dan Abramov"
                />
              </WrapItem>
              <WrapItem w="300px">
                <ul style={{ listStyleType: "none" }}>
                  <li>JumpSearch</li>
                  <li>Senior Software Engineer(.NET)</li>
                  <li>Senior</li>
                </ul>
              </WrapItem>
              <WrapItem w="70px">
                <Box>
                  <AiOutlineFire />
                </Box>
                <Box>
                  <BiWorld />
                </Box>
                <Box>
                  <AiFillPushpin />
                </Box>
                <Box>
                  <FcBookmark />
                </Box>
              </WrapItem>
            </Wrap>
            {/* */}
          </Center>
        </Box>
      </Box>
      <Center marginBottom={3}>
        <wrap>
          <WrapItem justify="spaceAround">
            <Box>Contact Us</Box>
            <Box>Legal</Box>
          </WrapItem>
        </wrap>
      </Center>
    </div>
  );
};
