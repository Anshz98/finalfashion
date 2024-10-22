import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
} from './pages'; // Import your base page components
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail page
import { checkoutAction, searchAction } from './actions/index';
import { shopCategoryLoader } from './pages/Shop';
import { loader as orderHistoryLoader } from './pages/OrderHistory';
import { loader as singleOrderLoader } from './pages/SingleOrderHistory';
import Streetwear from './pages/Streetwear'; // Import the Streetwear page
import OldMoney from './pages/OldMoney'; // Import the Old Money page
import Summer from './pages/Summer'; // Import the Summer page
import Winter from './pages/Winter'; // Import the Winter page

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />, // Landing page route
      },
      {
        path: 'shop',
        element: <Shop />, // Shop route
      },
      {
        path: 'shop/streetwear',
        element: <Streetwear />, // Streetwear route
      },
      {
        path: 'shop/oldmoney',
        element: <OldMoney />, // Old Money route
      },
      {
        path: 'shop/summer',
        element: <Summer />, // Summer route
      },
      {
        path: 'shop/winter',
        element: <Winter />, // Winter route
      },
      {
        path: 'shop/:category',
        element: <Shop />, // Dynamic category route
        loader: shopCategoryLoader,
      },
      {
        path: 'product/:image', // Dynamic route for individual product details
        element: <ProductDetail />, // Product detail route
      },
      {
        path: 'cart',
        element: <Cart />, // Cart route
      },
      {
        path: 'checkout',
        element: <Checkout />, // Checkout route
        action: checkoutAction,
      },
      {
        path: 'search',
        action: searchAction, // Search action
        element: <Search />, // Search route
      },
      {
        path: 'login',
        element: <Login />, // Login route
      },
      {
        path: 'register',
        element: <Register />, // Register route
      },
      {
        path: 'order-confirmation',
        element: <OrderConfirmation />, // Order confirmation route
      },
      {
        path: 'user-profile',
        element: <UserProfile />, // User profile route
      },
      {
        path: 'order-history',
        element: <OrderHistory />, // Order history route
        loader: orderHistoryLoader,
      },
      {
        path: 'order-history/:id',
        element: <SingleOrderHistory />, // Single order history route
        loader: singleOrderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
