import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Contact from "./pages/Contact"
import Homepage from "./pages/Homepage"
import Coaches from "./pages/Coaches"
import Programs from "./pages/Programs"

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { index: true, element: <Homepage /> },
                { path: "coaches", element: <Coaches /> },
                { path: "programs", element: <Programs /> },
                { path: "contact", element: <Contact /> },
            ]
        }
    ]
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}