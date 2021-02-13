import React from 'react';

import Flex from './components/Flex';
import Header from './containers/Header';
import Body from './containers/Body';
import Messenger from './containers/Messenger';
import Footer from './containers/Footer';

export default function App(){
  return (
    <Flex minHeight="100vh" backgroundColor="#e0e0e0" gap="50px" justify="space-between" padding="100px 0 0 0">
      <Flex width="100%" justify="center" gap="50px">
        <Header/>
        <Body/>
      </Flex>
      <Messenger/>
      <Footer/>
    </Flex>
  );
}