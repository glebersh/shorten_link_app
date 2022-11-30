import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import LinkCard from '../LinksCard/LinksCard';

const LinksList = () => {
  const fullLinks = useSelector(state => state.linkReducer.inputLinks);
  const shortenedLinks = useSelector(state => state.linkReducer.shortenedLinks);
  const linksList = fullLinks.map((item, index) => {
    return (
      <LinkCard key={item}
        id={item}
        fullLink={item}
        shortenedLink={shortenedLinks[index] ? shortenedLinks[index].result.full_short_link
          : null} />)
  });

  return (
    <Box w='100%' mb='5em'>
      {linksList}
    </Box>
  )
};

export default LinksList;