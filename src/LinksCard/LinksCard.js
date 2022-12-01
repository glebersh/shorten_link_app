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
    <Flex w={{
      xs: "90%",
      xl: "70%",
    }} m='0 auto' mt='2em' gap='1em'
      direction={{
        xs: "column",
        xl: "row",
      }}>
      <Text display='inline-block'
        fontSize='1em'
        w={{
          xs: "100%",
          xl: "60%",
        }}
        fontWeight='500'>{fullLink}</Text>
      <Text display='inline-block'
        fontSize='1em' color='teal'
        w={{
          xs: "100%",
          xl: "30%",
        }}
        fontWeight='500'>{shortenedLink}</Text>
      <Button colorScheme='teal' id={id}
        onClick={(e) => copyToClipBoard(e)}>{isCopied ? 'Copied!' : 'Copy link'}</Button>
      <Box h='1px' backgroundColor='darkgray' border='none' display={{
        xs: "block",
        xl: "none",
      }}></Box>
    </Flex>
  )
};

export default LinkCard;