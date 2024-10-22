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
} from './pages';
import ProductDetail from './components/ProductDetail';
import { checkoutAction, searchAction } from './actions/index';
import { shopCategoryLoader } from './pages/Shop';
import { loader as orderHistoryLoader } from './pages/OrderHistory';
import { loader as singleOrderLoader } from './pages/SingleOrderHistory';
import Streetwear from './pages/Streetwear';

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
        path: 'shop/Streetwear',
        element: <Streetwear />,
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
        element: <Login />,
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