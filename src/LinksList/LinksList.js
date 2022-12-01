import { Box } from '@chakra-ui/react';
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
    <Box w='100%'>
      {loadingStatus === 'rejected' && <h1>ERROR</h1>}
      {loadingStatus === 'loading' && <h1>loading....</h1>}
      {loadingStatus === 'resolved' && linksList}
    </Box>
  )
};

export default LinksList;