import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  OrderConfirmation,
  OrderHistory,
  Register,
  Search,
  Shop,
  SingleOrderHistory,
  UserProfile,
  // Rename Login to UserLogin
} from './website/pages';
import Login from './website/pages/login'; // Import renamed UserLogin
import ProductDetail from './website/components/ProductDetail';
import { checkoutAction, searchAction } from './actions/index';
import { shopCategoryLoader } from './website/pages/Shop';
import { loader as orderHistoryLoader } from './website/pages/OrderHistory';
import { loader as singleOrderLoader } from './website/pages/SingleOrderHistory';
import Streetwear from './website/pages/Streetwear';
import OldMoney from './website/pages/OldMoney';
import Summer from './website/pages/Summer';
import Winter from './website/pages/Winter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/streetwear',
        element: <Streetwear />,
      },
      {
        path: 'shop/oldmoney',
        element: <OldMoney />,
      },
      {
        path: 'shop/summer',
        element: <Summer />,
      },
      {
        path: 'shop/winter',
        element: <Winter />,
      },
      {
        path: 'shop/:category',
        element: <Shop />,
        loader: shopCategoryLoader,
      },
      {
        path: 'product/:image',
        element: <ProductDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        action: checkoutAction,
      },
      {
        path: 'search',
        action: searchAction,
        element: <Search />,
      },
      {
        path: 'login',
        element: <Login />, // Use renamed UserLogin
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'order-confirmation',
        element: <OrderConfirmation />,
      },
      {
        path: 'user-profile',
        element: <UserProfile />,
      },
      {
        path: 'order-history',
        element: <OrderHistory />,
        loader: orderHistoryLoader,
      },
      {
        path: 'order-history/:id',
        element: <SingleOrderHistory />,
        loader: singleOrderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
