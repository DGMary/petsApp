import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/test",
    element: <About />,
  },
]);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;



// import Signup from './user/Signup';
// import Signin from './user/Signin';


// const Routes = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path='/' component={Home} exact />
//         <Route path='/shop' component={Shop} exact />
//         <Route path='/signin' component={Signin} exact />
//         <Route path='/signup' component={Signup} exact />
//         <PrivateRoute path='/user/dashboard' component={Dashboard} exact />
//         <AdminRoute path='/admin/dashboard' component={AdminDashboard} exact />
//         <AdminRoute path='/create/category' component={AddCategory} exact />
//         <AdminRoute path='/create/product' component={AddProduct} exact />
//         <Route path='/product/:productId' component={Product} exact />
//         <Route path='/cart' component={Cart} exact />
//         <AdminRoute path='/admin/orders' component={Orders} exact />
//         <PrivateRoute path='/profile/:userId' component={Profile} exact />
//         <AdminRoute path='/admin/products' component={ManageProducts} exact />
//         <AdminRoute
//           path='/admin/product/update/:productId'
//           component={UpdateProduct}
//           exact
//         />
//         <Route component={NotFound} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default Routes;
// import './Home.scss';

// function Home() {
//   return (
//     <div className="Home">
//       <div>Home</div> 
//     </div>
//   );
// }

// export default Home;
