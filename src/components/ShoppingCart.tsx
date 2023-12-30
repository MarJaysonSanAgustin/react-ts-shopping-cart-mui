import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/format-currency";

import storeItems from "../data/items.json";

import CartItem from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((storeItem) => storeItem.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <Drawer anchor={"right"} open={isOpen} onClose={closeCart}>
      <Box sx={{ width: "400px", padding: 2 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Shopping Cart
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={4}
        >
          {cartItems.map((cartItem) => (
            <Grid item key={cartItem.id}>
              <CartItem {...cartItem} />
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          sx={{ display: "flex", flexDirection: "row-reverse", marginTop: 5 }}
        >
          <Typography component="p">
            Total{" "}
            <Typography component="span" fontWeight={800} fontSize={20}>
              {formatCurrency(cartItemsTotal)}
            </Typography>
          </Typography>
        </Grid>
      </Box>
    </Drawer>
  );
}

export default ShoppingCart;
