import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Toolbar } from "@material-ui/core";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Box } from "@material-ui/core";
import LanguageBar from "./LanguageBar"
import { useStyles } from "./styles";
import theme from "../../config/theme/theme";

const Header = ({ openModal }) => {

  const classes = useStyles();

  return (
    <>
      <AppBar sx={classes.header} position="static">
        <Toolbar>
          <Typography variant="body1" component="div">
          </Typography>
          <LanguageBar />
          <Box sx={classes.box} onClick={() => openModal()}>
            <ShoppingBasketOutlinedIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default (Header);
