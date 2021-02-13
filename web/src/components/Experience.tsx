import React from 'react';

import { Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Icon } from '@material-ui/core';
import Flex from './Flex';
interface Props {
    title: string | undefined,
    periode: string | undefined,
    children: React.ReactNodeArray | React.ReactNode | undefined,
}

export default function Experience(props: Props) {

    return (
        <ExpansionPanel style={{ width: "70%" }}>
            <ExpansionPanelSummary
                expandIcon={<Icon>keyboard_arrow_down</Icon>}
            >
                <Flex direction="row" gap="50px">
                    <Typography style={{width:"150px"}} variant="overline">{props.periode}</Typography>
                    <Typography variant="overline">{props.title}</Typography>
                </Flex>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant="body2">
                    {props.children}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

    );
}

Experience.defaultProps = {
    title: undefined,
    periode: undefined,
    children: undefined,
};