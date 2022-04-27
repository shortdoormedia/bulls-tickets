import {useColorMode, Switch, Button, ButtonGroup} from '@chakra-ui/react'
import {FiMoon, FiSun} from "react-icons/fi";
import * as React from "react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <>
      <ButtonGroup variant="ghost" position="fixed"
                   top="1rem"
                   right="1rem">
        <Button aria-label="Light/Dark Mode" color={'accent'} leftIcon={colorMode === 'light' ? <FiSun /> : <FiMoon />} onClick={toggleColorMode} fontWeight={'bold'} fontSize={'xl'}>

        </Button>
      </ButtonGroup>
    </>
  )
}
