import React from 'react';

import Image from './Image';
import Flex from './Flex';
import Card from './Card';
import { LinearProgress } from '@material-ui/core';

interface Props {
    label: string | undefined,
    icon: string | undefined,
    level: number | undefined,
}

export default function Competence(props: Props) {

    return (
        <Card elevation={3} backgroundColor="#a69b97" color="white" width="200px" height="80px" padding="10px" align="flex-start" justify="space-between">
            {props.label}
            <Flex direction="row" width="100%" gap="8px" height="35px">
                {props.icon ? <Image width="35px" height="35px" src={props.icon} /> : null}
                <LinearProgress style={{flex:"10"}} color="primary" variant="determinate" value={props.level} />
            </Flex>
        </Card>

    );
}

Competence.defaultProps = {
    label: undefined,
    icon: undefined,
    level: undefined,
};