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
    style: React.CSSProperties,
    radius:string,
    elevation:number,
    padding:string
}

export default function Card(props: Props) {
    const style: React.CSSProperties = {
        display: "flex",
        flexDirection: props.direction,
        flexWrap: props.wrap ? "wrap" : "nowrap",
        boxSizing: "border-box",
        justifyContent: props.justify,
        alignItems: props.align,
        width: props.width,
        minHeight: props.minHeight,
        height: props.height,
        flex: props.xs,
        gap: props.gap,
        padding:props.padding,
        margin:props.margin,
        color:props.color,
        borderRadius:props.radius,
        overflow: "hidden",
        backgroundColor: props.backgroundColor,
        boxShadow:`0 ${props.elevation}px ${2*props.elevation}px rgba(0,0,0,0.${8*props.elevation})`,
        ...props.style
    }
    return (
        <div style={style}>{props.children}</div>
    );
}

Card.defaultProps = {
    justify: 'flex-start',
    align: 'center',
    wrap: true,
    width: "100%",
    minHeight: "auto",
    height: "auto",
    xs: "none",
    direction: "column",
    gap: "0px",
    backgroundColor: "white",
    style: {},
    color:"inherit",
    margin: "0",
    radius:"3px",
    elevation:5,
    padding:"0",
};