import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
// material
// redux
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Welcome from "./components/Welcome";

import CustomerTab from "./pages/CustomerTab";
import InvoiceTab from "./pages/InvoiceTab";
import ItemsTab from "./pages/ItemsTab";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={<>Ne pritje</>} persistor={persistor}>
      <BrowserRouter>
        <App>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route exact path="/welcome" element={<Welcome />} />
            <Route exact path="/all" element={<InvoiceTab />} />
            <Route exact path="/add" element={<AddNote />} />
            <Route exact path="/customer" element={<CustomerTab />} />
            <Route exact path="/items" element={<ItemsTab />} />
          </Routes>
        </App>
      </BrowserRouter>
    </PersistGate>
  </ReduxProvider>
);
