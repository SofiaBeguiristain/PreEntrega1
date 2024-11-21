import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
} from "@mui/material";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount(); // un número

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          Tu carrito está vacío.
          <Link
            to="/"
            style={{
              color: "#FF7043",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Volver a la tienda
          </Link>
        </Typography>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {cart.map((product) => (
              <Card
                key={product.id}
                sx={{ display: "flex", alignItems: "center", p: 2 }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cantidad: {product.quantity}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeById(product.id)}
                  >
                    Eliminar
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" sx={{ mb: 2 }}>
            Total a pagar: <strong>${totalEnElCarrito}</strong>
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={resetCart}
              sx={{ flexGrow: 1 }}
            >
              Limpiar carrito
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/checkout"
              sx={{ flexGrow: 1 }}
            >
              Finalizar compra
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartContainer;
