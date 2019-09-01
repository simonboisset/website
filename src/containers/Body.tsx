import React from 'react';

import Flex from '../components/Flex';
import Realisations from './Realisations';
import Parcours from './Parcours';
import Presentation from './Presentation';


export default function Body(){
  return (
    <Flex width="100%" gap="50px">
      <Presentation/>
      <Parcours/>
      <Realisations/>
    </Flex>
  );
}