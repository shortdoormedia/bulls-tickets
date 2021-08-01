import { Link as ChakraLink, Stack, HStack, Icon, Text, useColorModeValue as mode } from '@chakra-ui/react'

import { Container } from './Container'
import {BellIcon} from "@chakra-ui/icons";
import * as React from "react";

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="60rem"
    bg={mode('blue.600', 'blue.400')}
  >
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
      color="white"
      bg={mode('blue.600', 'blue.400')}
    >
      <HStack spacing="3">
        <Icon as={BellIcon} fontSize="2xl" h="10" />
        <Text fontWeight="medium">
          Interested in buying these tickets for a game? Send a message to <ChakraLink isExternal href="mailto:shortdoormedia@gmail.com">shortdoormedia@gmail.com</ChakraLink>
        </Text>
      </HStack>
    </Stack>
  </Container>
)
