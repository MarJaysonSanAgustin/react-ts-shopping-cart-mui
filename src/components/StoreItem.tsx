import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import HotelIcon from "@mui/icons-material/Hotel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ShowerIcon from "@mui/icons-material/Shower";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/format-currency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  bedroomCount: number;
  bathroomCount: number;
  lotAreaInSquareMeters: number;
};

function StoreItem({
  id,
  name,
  price,
  imgUrl,
  bedroomCount,
  bathroomCount,
  lotAreaInSquareMeters,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          borderRadius: 3,
          border: 1,
          borderColor: "white",
          ":hover": {
            border: 1,
            borderStyle: "solid",
            borderColor: "divider",
            cursor: "pointer",
          },
        }}
      >
        <img
          src={imgUrl}
          alt={name}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "300px",
            borderRadius: 10,
          }}
        />
        <Box sx={{ padding: 1 }}>
          <p style={{ fontSize: 25, margin: 0, fontWeight: 400 }}>
            {formatCurrency(price)}
          </p>
          <Box
            sx={{
              height: 75,
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <p>{name}</p>
          </Box>
          <Box
            sx={{
              height: 65,
              display: "flex",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <HotelIcon sx={{ width: 20, height: 20 }} /> {bedroomCount}{" "}
                  Bedrooms
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <ShowerIcon sx={{ width: 20, height: 20 }} /> {bathroomCount}{" "}
                  Bathrooms
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <SquareFootIcon sx={{ width: 20, height: 20 }} />{" "}
                  {lotAreaInSquareMeters} sq. m.
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: 1, width: "100%" }}>
            {quantity === 0 ? (
              <Button
                variant="outlined"
                fullWidth
                startIcon={<AddShoppingCartIcon />}
                onClick={() => increaseCartQuantity(id)}
              >
                Add to cart
              </Button>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  marginBottom: 1,
                }}
              >
                <IconButton
                  onClick={() => decreaseCartQuantity(id)}
                  aria-label="minus-button"
                >
                  <RemoveCircleIcon />
                </IconButton>
                <Box>
                  <Typography
                    component="span"
                    sx={{ fontWeight: 600 }}
                    fontSize={20}
                    color="primary"
                  >
                    {quantity}
                  </Typography>{" "}
                  in cart
                </Box>
                <IconButton
                  onClick={() => increaseCartQuantity(id)}
                  aria-label="add-button"
                >
                  <AddCircleIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  sx={{ width: 40, height: 40 }}
                  onClick={() => removeFromCart(id)}
                  color="warning"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default StoreItem;
