import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Flex gap='3em' padding='2em'
        backgroundColor='#202020'
        color='white'
        align='center'>
        <Text>Contact Info</Text>
        <Flex align='center' gap='1em'>
          <a
            href='https://github.com/glebersh'
            target='_blank'>
            <i class="bi-github" role="img" aria-label="GitHub" style={{ fontSize: '1.5em' }}></i>
          </a>
          <a
            href='https://www.linkedin.com/in/gleb-ershov-804b50232/'
            target='_blank'>
            <i class="bi bi-linkedin" role="img" aria-label="LinkedIn" style={{ fontSize: '1.5em' }}></i>
          </a>
          <a
            href='mailto:glebersh00@gmail.com'
            target='_blank'>
            <i class="bi bi-mailbox" role="img" aria-label="EMail" style={{ fontSize: '1.5em' }}></i> glebersh00@gmail.com
          </a>
        </Flex>
        <Text>Copyright &#9400; Gleb Ershov, 2022</Text>
      </Flex>
    </footer>
  )
};

export default Footer;