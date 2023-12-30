import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/format-currency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const cartItem = storeItems.find((storeItem) => storeItem.id === id);

  if (!cartItem) return null;

  return (
    <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
      <img
        src={cartItem.imgUrl}
        style={{ width: 90, height: 90, objectFit: "cover" }}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="p">{cartItem.name}</Typography>
          <IconButton
            aria-label="delete"
            sx={{ width: 40, height: 40 }}
            onClick={() => removeFromCart(id)}
            color="warning"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography component="small" sx={{ fontSize: 13 }}>
            <Typography
              component="span"
              sx={{ fontWeight: 600 }}
              color="primary"
            >
              {quantity}
            </Typography>{" "}
            x {formatCurrency(cartItem.price)}
          </Typography>
          <Typography component="small" sx={{ fontSize: 13, fontWeight: 700 }}>
            = {formatCurrency(cartItem.price * quantity)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CartItem;
