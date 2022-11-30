import { Box, Flex, Text, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const LinkCard = ({ id, fullLink, shortenedLink }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipBoard = (e) => {
    const copiedLink = navigator.clipboard.writeText(shortenedLink)
      .then(() => {
        if (e.target.id === fullLink) {
          setIsCopied(true);

        }
      });
    setTimeout(() => setIsCopied(false), 5000);
  };

  return (
    <Flex w='70%' m='0 auto' mt='2em'>
      <Text display='inline-block'
        fontSize='1em'
        w='60%'
        fontWeight='500'>{fullLink}</Text>
      <Text display='inline-block'
        fontSize='1em' color='teal'
        w='30%'
        fontWeight='500'>{shortenedLink}</Text>
      <Button colorScheme='teal' id={id}
        onClick={(e) => copyToClipBoard(e)}>{isCopied ? 'Copied!' : 'Copy link'}</Button>
    </Flex>
  )
};

export default LinkCard;