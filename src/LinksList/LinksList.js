import { Alert, AlertIcon, AlertDescription, AlertTitle, Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import LinkCard from '../LinksCard/LinksCard';

const LinksList = () => {
  const fullLinks = useSelector(state => state.linkReducer.inputLinks);
  const shortenedLinks = useSelector(state => state.linkReducer.shortenedLinks);
  const loadingStatus = useSelector(state => state.linkReducer.loadingStatus);

  const linksList = fullLinks.map((item, index) => {
    return (
      <LinkCard key={item}
        id={item}
        fullLink={item}
        shortenedLink={shortenedLinks[index]?.result?.full_short_link} />)
  });

  return (
    <Flex w='100%' align='center' direction='column'>
      {loadingStatus === 'rejected' && <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Something went wrong...</AlertTitle>
        <AlertDescription>Check the API response</AlertDescription>
      </Alert>}
      {loadingStatus === 'loading' && <Spinner w='150px' h='150px' />}
      {loadingStatus === 'resolved' && linksList}
    </Flex>
  )
};

export default LinksList;