import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return (
      <Container>
        <Typography variant="h5" textAlign="center" mt={4}>
          ¡Gracias por tu compra! Tu ticket es: {orderId}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2, marginTop: 4 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Checkout
        </Typography>

        <form onSubmit={funcionDelFormulario}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                name="name"
                onChange={capturarInfo}
                value={userInfo.name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                onChange={capturarInfo}
                value={userInfo.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Número de teléfono"
                variant="outlined"
                name="phoneNumber"
                onChange={capturarInfo}
                value={userInfo.phoneNumber}
              />
            </Grid>

            <Grid item xs={12} container spacing={2} justifyContent="center">
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Comprar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  type="button"
                  onClick={() => resetCart()}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Checkout;
