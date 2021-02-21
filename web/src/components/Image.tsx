import { CSSProperties } from "react";

interface Props {
  style: React.CSSProperties;
  src: string | undefined;
  width: string;
  height: string;
  position: string;
}

export default function Image(props: Props) {
  const style: CSSProperties = {
    width: props.width,
    height: props.height,
    boxSizing: "border-box",
    overflow: "hidden",
    borderWidth: "0",
    outline: "none",
    backgroundImage: `url(${props.src})`,
    backgroundSize: "cover",
    backgroundPosition: props.position,
    ...props.style,
  };
  return <div style={style} />;
}

Image.defaultProps = {
  height: "100%",
  width: "100%",
  style: {},
  position: "center",
};
