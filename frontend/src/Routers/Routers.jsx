import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './../Pages/Auth/SignUp/SignUp';
import SignIn from './../Pages/Auth/SignIn/SignIn';
import LayoutMain from './../SharedLayout/LayoutMain';
import Home from './../Pages/Home/Home';
import Product from './../Pages/Product/Product';
import About from './../Pages/About/About';
import Error from "../Pages/Error/Error";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "../Pages/Auth/ForgetPassword/ForgetPassword";
import SetupNewPassword from "../Pages/Auth/SetupNewPassword/SetupNewPassword";
import Contact from '../Pages/Contact/index';
import VerifyAccount from "../Pages/Auth/Verify/VerifyAccount";
import Dashboard from "../UserPanel/Dashboard/Dashboard";
import Account from "../UserPanel/Account/Account";
import UserPanelLayout from "../UserPanel/Shared/UserPanelLayout";

export default function Routers() {

    const routes = [
        { path: '/signUp', element: <SignUp /> },
        { path: '/signIn', element: <SignIn /> },
        { path: '/forgetPassword', element: <ForgetPassword /> },
        { path: '/setupNewPassword', element: <SetupNewPassword /> },
        { path: '/verifyAccount', element: <VerifyAccount /> },
        { path: '*', element: <Error /> },
    ];

    const sharedLayoutRoutes = [
        { path: '/', element: <Home />, index: true },
        { path: '/product', element: <Product /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
    ];

    const userPanelRoutes = [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'account', element: <Account /> },
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

                    {/* مسیرهای با LayoutMain */}
                    <Route path="/" element={<LayoutMain />}>
                        {/* مسیرهای مشترک */}
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

                        {/* مسیرهای پنل کاربری */}
                        <Route path="/profile" element={<UserPanelLayout />}>
                            {
                                userPanelRoutes.map((route, index) => {
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
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer rtl position='bottom-right' />
        </>
    );
};
