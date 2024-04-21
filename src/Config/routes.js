import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
// import { PrivateRoute } from '../Components/PrivateRoutes';


export const Routes = () => {
    return useRoutes([
        {
          path: '/',
          element: < Home />
        },
        {
          path: '/auth/login',
          element: < Login />
        },
        {
          path: '/auth/register',
          element: < Signup />
        }
    ]);
};
