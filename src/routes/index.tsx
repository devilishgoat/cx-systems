import React from 'react'
import Home from './home'
import Tech from './tech'
import Clients from './clients'
import Contact from './contact'
type route = {
    path: string;
    component: React.SFC;
    exact?: boolean;
}

export const Routes: route[] = [
    {
        path : '/', 
        component: Home,
        exact: true,
    },
    {
        path : '/tech', 
        component: Tech,
        exact: true,
    },
    {
        path : '/clients', 
        component: Clients,
        exact: true,
    },
    {
        path : '/contact', 
        component: Contact,
        exact: true,
    },
]