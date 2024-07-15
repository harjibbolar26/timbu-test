import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/Home";
// import { items } from "./constants/constants";
import { StoreProvider } from "./components/StoreContext";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemDetailPage from "./pages/ItemDetails";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/:id" element={<ItemDetailPage />} />
        </Routes>
          {/* <Sidebar/> */}
        {/* <Footer/> */}
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
