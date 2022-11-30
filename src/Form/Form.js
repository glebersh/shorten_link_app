import React, { useState } from 'react';
import { Box, Text, Input } from '@chakra-ui/react';
import { addFullLink, createShortLink } from '../store/slices/linkSlice';
import { useDispatch } from 'react-redux';

const LinkForm = () => {
  const [fullLink, setFullLink] = useState('');
  const [isInvalidURL, setError] = useState(false);
  const dispatch = useDispatch();

  const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;

  const sendLink = (e, text) => {
    e.preventDefault();
    if (text.match(urlPattern) !== null) {
      dispatch(addFullLink(text));
      dispatch(createShortLink(text));
      document.querySelector('#url-input').value = '';
    }
    else {
      setError(true);
      setTimeout(() => {
        setError(false)
        document.querySelector('#url-input').value = ''
      },
        5000);
    }
  };

  return (
    <Box backgroundImage={'images/bg-boost-desktop.svg'} w='70%' m='5em auto 0' padding='50px' borderRadius='10px'>
      <form className='link-form' onSubmit={(e) => sendLink(e, fullLink)}>
        <Input onChange={(e) => setFullLink(e.target.value)} id='url-input' value={fullLink}
          type='text' display='inline-block' w='75%'
          backgroundColor='white' borderColor={isInvalidURL ? '#FF5511' : 'inherit'}
          placeholder='Shorten a link here...'
          color={isInvalidURL ? '#FF5511' : 'black'} fontWeight='700' />
        <Input type='submit' display='inline-block' w='15%' backgroundColor='teal'
          value='Shorten it!' color='white' ml='3em'
          _hover={{ cursor: 'pointer', backgroundColor: 'black' }} />
      </form>
      {isInvalidURL && <Text color='#FF5511' fontSize='1.25em' fontWeight='700'>URL is not valid!</Text>}
    </Box >

  )
};

export default LinkForm;