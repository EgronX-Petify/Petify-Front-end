import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import AppointmentsProvider from "./contexts/AppointmentsContext.jsx";
import ServicesProvider from "./contexts/ServicesContext.jsx";
import VetsProvider from "./contexts/VetsContext.jsx";
import UserPetsProvider from "./contexts/UserPetsContext.jsx";
import OrdersProvider from "./contexts/OrdersContext.jsx";
import SPProvider from "./contexts/SPContext.jsx";
import ProfileProvider from "./contexts/ProfileContext.jsx";
import UsersProvider from "./contexts/UsersContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <ProductsProvider>
            <ServicesProvider>
              <AppointmentsProvider>
                <VetsProvider>
                  <UserPetsProvider>
                    <OrdersProvider>
                      <SPProvider>
                        <UsersProvider>
                        
                          <App />
                        </UsersProvider>
                      </SPProvider>
                    </OrdersProvider>
                  </UserPetsProvider>
                </VetsProvider>
              </AppointmentsProvider>
            </ServicesProvider>
          </ProductsProvider>
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
