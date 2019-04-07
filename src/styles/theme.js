import { createMuiTheme } from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors';
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: "#ef6c00",
            contrastText: "#fff"
        }
    }
  });
  export default theme;