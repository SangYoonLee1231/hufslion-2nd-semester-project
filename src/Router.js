import React from "react";
import { createBrowserRouter} from "react-router-dom";
import Main from "./Main";
import ScreenContainer from "./Pages/ScreenContainer";
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "",
                element: <ScreenContainer element={<Login/>}/>,
            }
        ]
    }
])

export default router;