import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import DeckIcon from "@mui/icons-material/Deck";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useShoppingCart } from "../context/ShoppingCartContext";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const { title } = props;
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }} elevation={0}>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <DeckIcon color="primary" fontSize="large" />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton onClick={openCart}>
          <Badge badgeContent={cartQuantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
