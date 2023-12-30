import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Header from "./components/Header";
import StoreItem from "./components/StoreItem";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import storeItems from "./data/items.json";

function App() {
  return (
    <ShoppingCartProvider>
      <Container maxWidth="lg">
        <Header title="The Ultra Rich Shopping" />
        <main style={{ paddingTop: 20, marginBottom: 30 }}>
          <Grid container spacing={2}>
            {storeItems.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                <StoreItem {...item} />
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
