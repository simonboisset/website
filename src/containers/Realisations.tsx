import React from 'react';
import {Typography} from '@material-ui/core';
import Flex from '../components/Flex';
// import Image from '../components/Image';
import Card from '../components/Card';

export default function Realisations() {
  return (
    <Flex id="realisations" width="100%" padding="0 100px 0 100px" gap="30px">
      <Card height="400px">
        <Typography variant="h2">Mes réalisations</Typography>
        <Typography paragraph variant="body1" align="justify">
          Coming soon
      </Typography>
      </Card>
    </Flex>
  );
}