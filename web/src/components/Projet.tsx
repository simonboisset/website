import Image from "./Image";
import Flex from "./Flex";
import Card from "./Card";
import { Typography, Chip, Icon } from "@material-ui/core";
import githubsvg from "../assets/github.svg";

interface Props {
  title: string | undefined;
  chips: Array<string> | undefined;
  children: string | undefined;
  link: string | undefined;
  github: string | undefined;
}

export default function Projet(props: Props) {
  return (
    <Card
      gap="10px"
      elevation={3}
      backgroundColor="white"
      width="400px"
      height="180px"
      padding="10px"
      align="flex-start"
      justify="space-between"
    >
      <Flex direction="row" width="100%" gap="20px">
        <>
          <Typography variant="h6">{props.title}</Typography>
          {props.link && (
            <a href={props.link} rel="noopener noreferrer" target="_blank">
              <Icon style={{ color: "black", fontSize: 37 }}>public</Icon>
            </a>
          )}
          {props.github && (
            <a href={props.github} rel="noopener noreferrer" target="_blank">
              <Image width="35px" height="35px" src={githubsvg} />
            </a>
          )}
        </>
      </Flex>
      <Typography variant="body1" paragraph>
        {props.children}
      </Typography>
      <Flex direction="row" gap="10px">
        {props.chips && props.chips.map((chip, index) => <Chip key={index} label={chip} />)}
      </Flex>
    </Card>
  );
}

Projet.defaultProps = {
  title: undefined,
  chips: undefined,
  children: undefined,
  link: undefined,
  github: undefined,
};
