import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import MainLayout from "layout/MainLayout";
import Loadable from "components/ui/Loadable";
import Error from "components/Shared/Error";



const SearchForm = Loadable(lazy(() => import("components/Shared/SearchForm")));
const SearchResults = Loadable(lazy(() => import("pages/searchResult")));
const Company = Loadable(lazy(() => import("pages/companyDetails")));
const Reservation = Loadable(lazy(() => import("pages/reservation")));




const AuthRoutes: RouteObject = {
    path: "/",
    element: <MainLayout />,

    children: [
        {
            index: true,
            path: "/",
            element: <SearchForm />
        },
        {
            path: "search-results",
            element: <SearchResults />
        },
        {
            path: "company/:id",
            element: <Company />
        },
        {
            path: "company/:id/reservation",
            element: <Reservation />,

        },
        {
            path: "*",
            element: <Error />,

        }
    ]    

}


export default AuthRoutes;
