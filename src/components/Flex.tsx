import React from 'react';

interface Props {
    children: React.ReactNodeArray | React.ReactNode,
    justify: "center" | "flex-start" | "flex-end" | "space-around" | "space-between",
    align: "center" | "flex-start" | "flex-end" | "space-around" | "spac-between",
    wrap: boolean,
    width: string,
    minHeight: string,
    height: string,
    xs: number|string,
    direction: "column" | "row",
    gap: string,
    backgroundColor: string,
    margin:string,
    color:string,
    id:string | undefined,
    padding:string,
    position:"static" | "absolute" | "relative"| "fixed",
    style: React.CSSProperties
}

export default function Flex(props: Props) {
    const style: React.CSSProperties = {
        display: "flex",
        top:"0",
        flexDirection: props.direction,
        boxSizing: "border-box",
        flexWrap: props.wrap ? "wrap" : "nowrap",
        justifyContent: props.justify,
        alignItems: props.align,
        width: props.width,
        minHeight: props.minHeight,
        height: props.height,
        flex: props.xs,
        gap: props.gap,
        margin:props.margin,
        position:props.position,
        padding:props.padding,
        color:props.color,
        backgroundColor: props.backgroundColor,
        ...props.style
    }
    return (
        <div id={props.id} style={style}>{props.children}</div>
    );
}

Flex.defaultProps = {
    justify: 'flex-start',
    align: 'center',
    wrap: true,
    width: "auto",
    minHeight: "auto",
    height: "auto",
    xs: "none",
    direction: "column",
    gap: "0px",
    backgroundColor: "none",
    style: {},
    color:"inherit",
    id:undefined,
    padding:"0",
    position:"static",
    margin: "0"
};