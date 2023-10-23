import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VillaIcon from "@mui/icons-material/Villa";

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
        <VillaIcon color="primary" fontSize="large" />
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
