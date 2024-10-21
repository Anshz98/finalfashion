import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  OrderConfirmation,
  OrderHistory,
  Register,
  Search,
  Shop,
  SingleOrderHistory,
  UserProfile,
} from "./pages";
import { checkoutAction, searchAction } from "./actions/index";
import { shopCategoryLoader } from "./pages/Shop";
import { loader as orderHistoryLoader } from "./pages/OrderHistory";
import { loader as singleOrderLoader } from "./pages/SingleOrderHistory";
import Streetwear from "./pages/Streetwear"; // Fix: Make sure Streetwear.tsx exists in the pages folder

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // Main layout, no changes
    children: [
      {
        index: true,
        element: <Landing />, // Landing page, no changes
      },
      {
        path: "shop",
        element: <Shop />, // Shop page, no changes
      },
      {
        path: "shop/Streetwear", // Exact path to Streetwear
        element: <Streetwear />, // Ensure the Streetwear component is correctly imported
      },
      {
        path: "shop/:category", // Dynamic category path
        element: <Shop />, // Shop component remains the same
        loader: shopCategoryLoader, // Loader for category
      },
      {
        path: "cart",
        element: <Cart />, // Cart page, no changes
      },
      {
        path: "checkout",
        element: <Checkout />, // Checkout page
        action: checkoutAction, // No changes needed
      },
      {
        path: "search",
        action: searchAction, // Search action for handling search queries
        element: <Search />, // Search page
      },
      {
        path: "login",
        element: <Login />, // Login page
      },
      {
        path: "register",
        element: <Register />, // Register page
      },
      {
        path: "order-confirmation",
        element: <OrderConfirmation />, // Order confirmation page
      },
      {
        path: "user-profile",
        element: <UserProfile />, // User profile page
      },
      {
        path: "order-history",
        element: <OrderHistory />, // Order history page
        loader: orderHistoryLoader, // Loader for order history
      },
      {
        path: "order-history/:id", // Path for single order details
        element: <SingleOrderHistory />, // Single order history page
        loader: singleOrderLoader, // Loader for specific order details
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />; // No changes to the main component
}

export default App;
