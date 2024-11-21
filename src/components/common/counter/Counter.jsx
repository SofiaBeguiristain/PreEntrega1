import { useState } from "react";
import { Button, Typography, Box, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (stock - totalInCart > contador) {
      setContador(contador + 1);
    } else {
      alert("Stock máximo alcanzado");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" color="text.primary">
        Unidades en el carrito: {contador}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton onClick={restar} color="secondary" size="large">
          <RemoveCircleIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="h5" component="span">
          {contador}
        </Typography>
        <IconButton onClick={sumar} color="primary" size="large">
          <AddCircleIcon fontSize="inherit" />
        </IconButton>
      </Box>

      <Button
        onClick={() => agregarAlCarrito(contador)}
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default Counter;
