/* eslint-disable no-unused-vars */
import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Heading, Box, Text, Button, Spacer, HStack, Input, InputGroup,  InputRightElement, Avatar, AvatarBadge } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Flex as="nav" p="30px" mb="30px" alignItems="center">
      <Heading color="white" as="h1" fontSize="1.5em" cursor="pointer" onClick={() => navigate(`/`)}  >Play</Heading>
      <Spacer />
      <InputGroup w="40%">
      <Input p="1rem" placeholder='Search bar' size='sm' color="white" />

        <InputRightElement>
          <Button mb="1.5" size="sm"  borderRadius="0">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Spacer />

      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png">
        </Avatar>
        <Text bg="purple" borderRadius="10" color="white" p="0.5rem">Mario Silalahi</Text>
        <Button
          colorScheme="purple"
        >Logout</Button>
      </HStack>
    </Flex>
  )
}
