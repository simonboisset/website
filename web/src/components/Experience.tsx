import React from "react";

import { Typography, Accordion, AccordionDetails, AccordionSummary, Icon } from "@material-ui/core";
import Flex from "./Flex";
interface Props {
  title: string | undefined;
  periode: string | undefined;
  children: React.ReactNodeArray | React.ReactNode | undefined;
}

export default function Experience(props: Props) {
  return (
    <Accordion style={{ width: "70%" }}>
      <AccordionSummary expandIcon={<Icon>keyboard_arrow_down</Icon>}>
        <Flex direction="row" gap="50px">
          <Typography style={{ width: "150px" }} variant="overline">
            {props.periode}
          </Typography>
          <Typography variant="overline">{props.title}</Typography>
        </Flex>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{props.children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

Experience.defaultProps = {
  title: undefined,
  periode: undefined,
  children: undefined,
};
