import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Skeleton, Grid, Box, Typography, Container } from "@mui/material";
import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }

    getDocs(docsRef).then((res) => {
      const arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setItems(arrayEntendible);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <Container>
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton variant="text" width="80%" sx={{ marginTop: 1 }} />
              <Skeleton variant="text" width="60%" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton variant="text" width="80%" sx={{ marginTop: 1 }} />
              <Skeleton variant="text" width="60%" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        Bienvenido a Alta Pinta
      </Typography>

      <ItemList items={items} />

      <Box mt={4} textAlign="center">
        <Typography variant="body1" color="textSecondary">
          Gracias por confiar en nosotros
        </Typography>
      </Box>
    </Container>
  );
};
