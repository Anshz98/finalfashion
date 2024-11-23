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
  Streetwear,
  OldMoney,
  Summer,
  Winter,
} from './website/pages';
import Login from './website/pages/login';
import ProductDetail from './website/components/ProductDetail';
import ChatBox from './chatbox/ChatBox'; // Import the ChatBox component

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HomeLayout />
        <ChatBox /> {/* Add ChatBox */}
      </>
    ),
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
        path: 'product/:collection/:image',
        element: <ProductDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'search',
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
      },
      {
        path: 'order-history/:id',
        element: <SingleOrderHistory />,
      },
      {
        path: '*',
        element: <div>404 - Page Not Found</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
