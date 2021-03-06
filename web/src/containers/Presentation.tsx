import Flex from "../components/Flex";
import Image from "../components/Image";
import Card from "../components/Card";
import Item from "../components/Item";
import Competence from "../components/Competence";
import { Typography, Icon } from "@material-ui/core";
import me from "../assets/me.jpg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import react from "../assets/react.svg";
import css from "../assets/css.svg";
import angular from "../assets/angular.svg";
import html from "../assets/html.png";
import javascript from "../assets/javascript.svg";
import material from "../assets/material-ui.svg";
import nodesvg from "../assets/node.svg";
import redux from "../assets/redux.svg";
import typescript from "../assets/typescript.png";
import jest from "../assets/jest.svg";
import vue from "../assets/vue.svg";

export default function Presentation() {
  return (
    <Flex id="presentation" width="100%" direction="row" gap="100px" padding="0 100px 0 100px" align="flex-start">
      <Flex width="350px">
        <Card width="100%">
          <Image height="350px" src={me} />
          <Item icon={<Icon>work</Icon>} label="Developeur js" />
          <Item icon={<Icon>room</Icon>} label="Nantes" href="https://www.google.fr/maps/place/Nantes/" />
          <Item
            icon={<Image width="25px" height="25px" src={linkedin} />}
            href="https://www.linkedin.com/in/simon-boisset-733445138/"
            label="Linkedin"
          />
          <Item
            icon={<Image width="25px" height="25px" src={github} />}
            href="https://github.com/simonboisset"
            label="Github"
          />
        </Card>
      </Flex>
      <Flex xs={6}>
        <Card align="flex-start" padding="30px">
          <Typography variant="h6">Bienvenue sur mon site !</Typography>
          <Typography paragraph variant="body1" align="justify">
            Vous pourrez y trouver une présentation de mon profil. Mon parcours professionnel et ma formation. Vous
            découvrirez également le détail de mes réalisations en développement web ci-dessous.
          </Typography>
          <Typography paragraph variant="body1" align="justify">
            Pour me contacter, copiez directement mon mail ou mon numéro de téléphone en cliquant sur les icônes en haut
            à droite.
          </Typography>
          <Typography paragraph variant="h6">
            Mes compétences :
          </Typography>
          <Flex direction="row" width="100%" justify="center" gap="25px">
            <Competence label="Html" icon={html} level={90} />
            <Competence label="CSS" icon={css} level={90} />
            <Competence label="Javascript" icon={javascript} level={90} />
            <Competence label="Typescript" icon={typescript} level={90} />
            <Competence label="React" icon={react} level={90} />
            <Competence label="Node" icon={nodesvg} level={90} />
            <Competence label="Vue" icon={vue} level={60} />
            <Competence label="Angular" icon={angular} level={50} />
            <Competence label="Redux" icon={redux} level={85} />
            <Competence label="Material UI" icon={material} level={90} />
            <Competence label="Jest" icon={jest} level={70} />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
