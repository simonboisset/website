import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface Props {
  icon: any;
  label: string;
  href: string | undefined;
}

export default function Item(props: Props) {
  function handleClick() {
    if (props.href) {
      window.open(props.href);
    }
  }
  return (
    <ListItem button onClick={() => handleClick()}>
      <ListItemIcon style={{ color: "black" }}>{props.icon}</ListItemIcon>
      <ListItemText primary={props.label} />
    </ListItem>
  );
}

Item.defaultProps = {
  href: undefined,
};
