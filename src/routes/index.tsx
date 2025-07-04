import { createBrowserRouter } from "react-router";
import App from "../App";
// import Books from "../pages/books";
import Borrow from "../pages/borrow";
import Homepage from "../pages/homepage";
import Books from "@/pages/books";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/books",
                element: <Books />,
            },
            {
                path: "/borrow",
                element: <Borrow />
            }
        ]
    },

])

export default router;