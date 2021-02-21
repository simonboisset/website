import { Typography } from "@material-ui/core";
import Flex from "../components/Flex";
import Card from "../components/Card";
import Projet from "../components/Projet";

export default function Realisations() {
  return (
    <Flex id="realisations" width="100%" padding="0 100px 0 100px" gap="30px">
      <Card padding="30px" gap="30px" backgroundColor="#c1d5e0" elevation={0}>
        <Typography variant="h2">Mes réalisations</Typography>
        <Typography variant="body1" paragraph>
          Voici une liste de projets sur lesquels je travaille. Il s'agit pour la plupart de projets en cours de
          développement.
        </Typography>
        <Flex direction="row" justify="space-around" gap="30px">
          <Projet
            title="simon-ui"
            link="https://github.com/simonboisset/simon-ui"
            github="https://github.com/simonboisset/simon-ui"
            chips={["React", "Typescript", "Material-UI", "Tsdx"]}
          >
            Une librairie de composants react personnalisés.
          </Projet>
          <Projet
            title="react-router-url"
            link="https://github.com/simonboisset/react-router-url"
            github="https://github.com/simonboisset/react-router-url"
            chips={["React", "Typescript", "Router", "Tsdx"]}
          >
            Un Router react from scratch.
          </Projet>
          <Projet
            title="Photon-tools"
            link="https://photon-tools.netlify.com/"
            github="https://github.com/simonboisset/photon-tools"
            chips={["Angular", "google-charts"]}
          >
            Outil de traitement de mesures physiques, présentation en graphiques et simulation optique.
          </Projet>
          <Projet
            title="Website"
            link="https://simonboisset.com/"
            github="https://github.com/simonboisset/website"
            chips={["React", "Typescript", "Material-UI"]}
          >
            Mon site personnel ici même.
          </Projet>
        </Flex>
      </Card>
    </Flex>
  );
}
