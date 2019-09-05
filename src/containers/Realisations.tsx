import React from 'react';
import { Typography } from '@material-ui/core';
import Flex from '../components/Flex';
import Card from '../components/Card';
import Projet from '../components/Projet';


export default function Realisations() {
  return (
    <Flex id="realisations" width="100%" padding="0 100px 0 100px" gap="30px">
      <Card padding="30px" gap="30px" backgroundColor="#c1d5e0" elevation={0}>
        <Typography variant="h2">Mes réalisations</Typography>
        <Typography variant="body1" paragraph>Voici une liste de projets sur lesquels je travaille. 
        Il s'agit pour la plupart de projets en cours de développement.</Typography>
        <Flex direction="row" justify="space-around" gap="30px">
        <Projet title="Password Generator" 
          link="https://passwordgenerator.netlify.com/"
          github="https://github.com/simonboisset/simple-password"
          chips={["React","Typescript","Material-UI"]}>
          Un générateur de mot de passe aléatoir.
        </Projet>
        <Projet title="Simonstrap" 
          link="https://github.com/simonboisset/simonstrap"
          github="https://github.com/simonboisset/simonstrap"
          chips={["React","Storybook","npm"]}>
          Une librairie de composants react personnalisés.
        </Projet>
        <Projet title="Photoncalc" 
          link="https://photoncalc.z28.web.core.windows.net/"
          github="https://github.com/simonboisset/photoncalc"
          chips={["React","recharts","Material-UI"]}>
          Outil de traitement de mesures physiques, présentation en graphiques et simulation optique.
        </Projet>
        <Projet title="React-graphql"
          github="https://github.com/simonboisset/react-graphql"
          chips={["React","API","graphql"]}>
          Un client en react communiquant avec une API graphql.
        </Projet>
        <Projet title="React-express"
          github="https://github.com/simonboisset/react-express"
          chips={["React","API","express","jwt"]}>
          Un client en react communiquant avec une API express.
        </Projet>
        <Projet title="React-static-starter"
          github="https://github.com/simonboisset/react-static-starter"
          chips={["React","Webpack"]}>
          Une configuration webpack personnalisée pour démarrer un projet react.
        </Projet>
        <Projet title="Local Compta" 
          link="https://localcompta.z28.web.core.windows.net/"
          github="https://github.com/simonboisset/local-compta"
          chips={["React","Redux","Material-UI","React-router"]}>
          Un outil de compta simple, stocké dans localStorage.
        </Projet>
        <Projet title="Website" 
          link="https://simonboisset.netlify.com/"
          github="https://github.com/simonboisset/website"
          chips={["React","Typescript","Material-UI"]}>
          Mon site personnel ici même.
        </Projet>
        </Flex>
      </Card>
    </Flex>
  );
}