import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>404 not found</h2>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
