import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import GetStart from "./components/GetStart/GetStart";
import Product from "./components/Product/Product";
import Pages from "./components/Pages/Pages";
import Integration from "./components/Integration/Integration";
import Blog from "./components/Blog/Blog";
import Pricing from "./components/Pricing/Pricing";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Demo from "./components/Demo/Demo";
function App() {
  // Routes
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "get-start", element: <GetStart /> },
        { path: "product", element: <Product /> },
        { path: "pages", element: <Pages /> },
        { path: "integration", element: <Integration /> },
        { path: "blog", element: <Blog /> },
        { path: "pricing", element: <Pricing /> },
        { path: "footer", element: <Footer /> },
        { path: "login", element: <Login /> },
        { path: "demo", element: <Demo /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <div>
      <div >
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}
export default App;