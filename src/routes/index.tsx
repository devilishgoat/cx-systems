import React from 'react'
import Home from './home'
import Tech from './tech'
import Projects from './projects'
import Contact from './contact'
type route = {
    path: string;
    component: React.SFC;
    exact?: boolean;
    name: string;
}

export const Routes: route[] = [
    {
        path : '/', 
        component: Home,
        exact: true,
        name: 'Home',
    },
    {
        path : '/tech', 
        component: Tech,
        exact: true,
        name: 'Tech',
    },
    {
        path : '/projects', 
        component: Projects,
        exact: true,
        name: 'Projects',
    },
    {
        path : '/contact', 
        component: Contact,
        exact: true,
        name: 'Contact',
    },
]