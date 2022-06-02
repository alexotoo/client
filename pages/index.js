import Head from "next/head";
import Image from "next/image";

import hero from "../public/images/hero.svg";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Img,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>indeedify app</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container maxW="container.xl">
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Stack
            minW="50%"
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color="color.200"
            >
              <Text as={"span"}>Job</Text>{" "}
              <Text
                as={"span"}
                position={"relative"}
                color="color.500"
                _after={{
                  content: "''",
                  width: "full",
                  height: "20%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "color.300",
                  zIndex: -1,
                }}
              >
                HuntAPP
              </Text>
            </Heading>
            <Text color={"gray.500"} maxW={"3xl"}>
              <FaQuoteLeft className="icons" />
              {""} Nothing in the world can take the place of persistence.
              Talent will not; nothing is more common than unsuccessful men with
              talent. Genius will not; unrewarded genius is almost a proverb.
              Education will not; the world is full of educated derelicts.
              Persistence and determination alone are omnipotent. The slogan
              press on has solved and will always solve the problems of the
              human race. {""}
              <FaQuoteRight className="icons" /> — Calvin Coolidge.
            </Text>
            <Stack spacing={6} direction={"row"}>
              <Button
                rounded={"full"}
                color="white"
                px={6}
                bg={"color.600"}
                _hover={{ bg: "color.700" }}
              >
                Get started
              </Button>
              <Button rounded={"full"} px={6}>
                Learn more
              </Button>
            </Stack>
          </Stack>
          <Image src={hero} />
        </Flex>
      </Container>
    </div>
  );
}
