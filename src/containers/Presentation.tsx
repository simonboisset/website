import React from 'react';

import Flex from '../components/Flex';
import Image from '../components/Image';
import Card from '../components/Card';
import Competence from '../components/Competence';
import { Typography } from '@material-ui/core';
import me from '../assets/me.jpg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import react from '../assets/react.svg';
import { Icon } from '@material-ui/core';

export default function Presentation() {
    return (
        <Flex id="presentation" width="100%" direction="row" gap="100px" padding="0 100px 0 100px" align="flex-start">
            <Flex xs={3}>
                <Card width="100%" >
                    <Image height="350px" src={me} />
                    <Flex direction="row" minHeight="50px" padding="0 25px 0 25px" width="100%" gap="25px">
                        <Icon>work</Icon> Ingénieur Laser
                    </Flex>
                    <Flex direction="row" minHeight="50px" padding="0 25px 0 25px" width="100%" gap="25px">
                        <Icon>build</Icon> Developeur autodidacte
                    </Flex>
                    <Flex direction="row" minHeight="50px" padding="0 25px 0 25px" width="100%" gap="25px">
                        <Icon>room</Icon> Bordeaux
                    </Flex>
                    <Flex direction="row" minHeight="50px" padding="0 25px 0 25px" width="100%" gap="25px">
                        <Icon>mail</Icon> simon.boisset@gmail.com
                    </Flex>
                    <Flex direction="row" minHeight="50px" padding="0 25px 0 25px" width="100%" gap="25px">
                        <Icon>phone</Icon> 06 99 48 46 56
                    </Flex>
                    <Flex direction="row" minHeight="50px" padding="0 25px 0 25px" width="100%" gap="25px">
                        <Image width="25px" height="25px" src={linkedin} /> <a href="https://www.linkedin.com/in/simon-boisset-733445138/">Linkedin</a>
                    </Flex>
                    <Flex direction="row" minHeight="50px" padding="0 25px 0 25px" width="100%" gap="25px">
                        <Image width="25px" height="25px" src={github} /> <a href="https://github.com/simonboisset">Github</a>
                    </Flex>
                </Card>

            </Flex>
            <Flex xs={6}>
                <Card align="flex-start" padding="30px">
                    <Typography variant="h6">Bienvenu sur mon site!</Typography>
                    <Typography paragraph variant="body1" align="justify">
                        Vous pourez y trouver une présentation de mon profil. Mon parcours professionel et ma formation.
                        Vous pourez égalment consulter le détail de mes rélisations en dévelopement web plus bas.
                    </Typography>
                    <Typography variant="h6">Mes compétences</Typography>
                    <Flex direction="row" width="100%" justify="center" gap="25px">
                        <Competence label="React" icon={react} level={80} />
                        <Competence label="React" icon={react} level={80} />
                        <Competence label="React" icon={react} level={80} />
                        <Competence label="React" icon={react} level={80} />
                        <Competence label="React" icon={react} level={80} />
                    </Flex>
                </Card>
            </Flex>
        </Flex >
    );
}