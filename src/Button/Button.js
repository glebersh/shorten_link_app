import React from 'react';
import { Button } from '@chakra-ui/react';

const MainButton = ({ content, width }) => {
  return (
    <Button borderRadius='15px'
      colorScheme='teal' fontSize='1.25em'
      display='inline-block' w={width} m='0 auto'>{content}</Button>
  )
};

export default MainButton;