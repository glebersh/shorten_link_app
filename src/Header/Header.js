import React, { useEffect, useState } from 'react';
import { Box, Flex, List, ListItem, Text, Button, Image, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import MainButton from '../Button';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [sidebarVisible, setSidebarVisibility] = useState(false);

  return (
    <header>
      <Flex w={{
        xs: "100%",
        md: "100%",
        sidebarTrigger: "20%",
      }} align='center' justify='space-between' pt='25px'>
        <Text display='inline-block' fontWeight='700' fontSize='36px' m={{
          xs: "0 0 0 1em",
          xl: "0 0 0 2em",
        }} maxW='130px'>
          Shortly
        </Text>
        {isLargerThan900 ? null : <HamburgerIcon fontSize='3em' mr='.5em' onClick={() => setSidebarVisibility(!sidebarVisible)} />}
      </Flex>

      {isLargerThan900 ?
        <Flex flex='1' align='center' pt='25px'>
          <nav>
            <List display='flex' gap='2.5em'>
              <ListItem color='#888888' fontSize='1.25em'
                _hover={{ color: 'inherit', cursor: 'pointer' }}>Features</ListItem>
              <ListItem color='#888888' fontSize='1.25em'
                _hover={{ color: 'inherit', cursor: 'pointer' }}>Pricing</ListItem>
              <ListItem color='#888888' fontSize='1.25em'
                _hover={{ color: 'inherit', cursor: 'pointer' }}>Resources</ListItem>
            </List>
          </nav>
          <Flex m='0 2em 0 auto' align='center' gap='3em'>
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
            <Button color='#888888' fontSize='1.25em'
              variant='link' _hover={{ color: 'inherit', cursor: 'pointer' }}>Login</Button>
            <MainButton content='Sing up' />
          </Flex>
        </Flex>
        : sidebarVisible ? <Sidebar /> : null}


      <section>
        <Flex m='3em auto'
          direction={{
            xs: "column",
            xxl: "row"
          }}>
          <Flex direction='column' mb='3em'>
            <Text fontSize={{
              xs: "4em",
              xl: "6em"
            }} fontWeight='700' w={{
              xs: "90%",
              xl: "70%"
            }}
              m={{
                xs: "0 auto 1em",
                xl: "0 0 0 2em"
              }} lineHeight='1.5em'>More than just shorter links</Text>
            <Text fontSize='2.5em'
              w={{
                xs: "90%",
                xl: "60%"
              }}
              m={{
                xs: "0 auto 1em",
                xl: "0 0 2em 5em"
              }} color='#888888' mb='1.5em'>Build your brand's recognition
              and get detailed insights on how your links are performing.</Text>
            <MainButton content='Get started' width='150px' />
          </Flex>
          <Image src={'images/illustration-working.svg'}
            width={{
              xs: "90%",
              md: "70%",
              xl: "40%"
            }}
            m={{
              xs: "0 auto",
              xxl: "0 2em 0 0"
            }} />
        </Flex>
      </section>
    </header >
  )
};

export default Header;

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>

      <Flex w='100%' align='center' direction='column' justify='space-evenly' minH='100vh' textAlign='center'>
        <nav>
          <List display='flex' gap='2.5em' flexDirection='column'>
            <ListItem color='#888888' fontSize='1.25em'
              _hover={{ color: 'inherit', cursor: 'pointer' }}>Features</ListItem>
            <ListItem color='#888888' fontSize='1.25em'
              _hover={{ color: 'inherit', cursor: 'pointer' }}>Pricing</ListItem>
            <ListItem color='#888888' fontSize='1.25em'
              _hover={{ color: 'inherit', cursor: 'pointer' }}>Resources</ListItem>
          </List>
        </nav>
        <Flex align='center' gap='1em' direction='column'>
          <Button onClick={toggleColorMode} mb='3em'>{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
          <Button color='#888888' fontSize='1.25em'
            variant='link'>Login</Button>
          <MainButton content='Sing up' />
        </Flex>
      </Flex>
    </>
  )
};