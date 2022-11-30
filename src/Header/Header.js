import React from 'react';
import { Box, Flex, List, ListItem, Text, Button, Image, useColorMode } from '@chakra-ui/react';
import MainButton from '../Button';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Flex w='100%' align='center' paddingTop='50px'>
        <Text display='inline-block' fontWeight='700' fontSize='36px' m='0 2em 0 5em'>
          Shortly
        </Text>
        <nav>
          <List display='flex' gap='2.5em'>
            <ListItem color='#888888' fontSize='1.25em'
              _hover={{ color: 'black', cursor: 'pointer' }}>Features</ListItem>
            <ListItem color='#888888' fontSize='1.25em'
              _hover={{ color: 'black', cursor: 'pointer' }}>Pricing</ListItem>
            <ListItem color='#888888' fontSize='1.25em'
              _hover={{ color: 'black', cursor: 'pointer' }}>Resources</ListItem>
          </List>
        </nav>
        <Flex m='0 5em 0 auto' align='center' gap='3em'>
          <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
          <Button color='#888888' fontSize='1.25em'
            variant='link'>Login</Button>
          <MainButton content='Sing up' />
        </Flex>
      </Flex>
      <section>
        <Flex m='8em auto 0' direction={{
          xs: "column",
          s: "column",
          md: "column",
          lg: "column",
          xl: "column",
          xll: "row"
        }}>
          <Flex direction='column' ml='11em'>
            <Text fontSize='6em' fontWeight='700' w='70%' lineHeight='1.5em'>More than just shorter links</Text>
            <Text fontSize='2.5em' w='60%' color='#888888' mb='1.5em'>Build your brand's recognition and get detailed insights on how your links are performing.</Text>
            <MainButton content='Get started' width='150px' />
          </Flex>
          <Image src={'images/illustration-working.svg'} width={{
            xs: "90%",
            s: "90%",
            md: "70%",
            lg: "70%",
            xl: "70%",
            xll: "40%"
          }}
            m={{
              xs: "0 auto",
              s: "0 auto",
              md: "0 auto",
              lg: "0 auto",
              xl: "0 auto",
              xll: "0 5em 0 0"
            }} />
        </Flex>
      </section>
    </header >
  )
};

export default Header;