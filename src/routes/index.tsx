import React from 'react'
import Home from './home'
import Tech from './tech'
import Projects from './projects'
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
        path : '/projects', 
        component: Projects,
        exact: true,
    },
    {
        path : '/contact', 
        component: Contact,
        exact: true,
    },
]