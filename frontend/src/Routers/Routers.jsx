import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './../Pages/SignUp/SignUp'
import SignIn from './../Pages/SignIn/SignIn'
import LayoutMain from './../SharedLayout/LayoutMain'
import Home from './../Pages/Home/Home'
import Product from './../Pages/Product/Product'
import About from './../Pages/About/About'
import Error from "../Pages/Error/Error";
import { ToastContainer } from "react-toastify";

export default function Routers() {

    const routes = [
        { path: '/signUp', element: <SignUp /> },
        { path: '/signIn', element: <SignIn /> },
    ];

    const sharedLayoutRoutes = [
        { path: '/', element: <Home />, index: true },
        { path: '/product', element: <Product /> },
        { path: '/about', element: <About /> },
        { path: '*', element: <Error /> },
    ];


    return (
        <>
            <BrowserRouter>
                <Routes>

                    {/* مسیرهای بدون SharedLayout */}
                    {
                        routes.map((route, index) => {
                            const { path, element } = route;
                            return (
                                <Route
                                    key={index}
                                    path={path}
                                    element={element}
                                />
                            )
                        })
                    }

                    {/* مسیرهای با SharedLayout */}
                    <Route path="/" element={<LayoutMain />}>
                        {
                            sharedLayoutRoutes.map((route, index) => {
                                const { path, element } = route;
                                return (
                                    <Route
                                        key={index}
                                        path={path}
                                        element={element}
                                        index={index ? true : false}
                                    />
                                )
                            })
                        }

                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer rtl position='bottom-right' />
        </>
    );
};