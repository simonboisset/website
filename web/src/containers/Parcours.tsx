import { Typography } from "@material-ui/core";
import Flex from "../components/Flex";
// import Image from '../components/Image';
import Card from "../components/Card";
import Experience from "../components/Experience";
export default function Parcours() {
  return (
    <Flex id="parcours" width="100%" padding="0 100px 0 100px" gap="30px">
      <Card width="100%" padding="30px 0 30px 0" backgroundColor="#c1d5e0" elevation={0} gap="30px">
        <Typography variant="h2">Mon Parcours</Typography>

        <Experience title="Licence de Physique fondamentale, Université Bordeaux 1" periode="2008-2011">
          Optique, Mécanique, Mathématiques, Calculs numériques, Relativité, Physique Quantique
        </Experience>
        <Experience title="Stage Licence, Amplitude Systèmes" periode="01/2012-06/2012">
          Stage en R&D sur le développement de sources fibrées picoseconde
        </Experience>
        <Experience title="Master Lasers et Applications, Université Lille 1" periode="2012-2014">
          Optique non-linéaire, Laser, Fibres optiques
        </Experience>
        <Experience title="Stage Master, CNRS" periode="04/2013-08/2013">
          Optimisation d'une source IR et d'un OPO pour la microscopie Raman
        </Experience>
        <Experience title="Stage Licence, Amplitude Systèmes" periode="11/2014-04/2015">
          Conversion de fréquence SHG et THG sur des systèmes femtoseconde
        </Experience>
        <Experience title="Ingénieur Laser, Amplitude Systèmes" periode="06/2015-Aujourd'hui">
          Ingénieur R&D, Chef de projet R&D, développement et production de lasers customs.
        </Experience>
        <Experience title="Formation au developement Web en Autodidacte" periode="11/2016-Aujourd'hui">
          Tutos sur Openclassroom dans un premier temps. Découverte de la librairie React pour le développement Frontend
          et formation via la documentation officielle et projets personnels.
        </Experience>
      </Card>
    </Flex>
  );
}
