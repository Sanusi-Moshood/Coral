import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//Layout
import RootLayout from './Layout/RootLayout';

//Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';

//preloader
import { NewArrival } from './pages/Home';
import { AllProducts } from './pages/Shop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} loader={NewArrival} />

      <Route path='/shop' element={<Shop />} loader={AllProducts} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
