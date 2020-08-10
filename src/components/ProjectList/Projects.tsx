import equalExperts from '../../assets/equalexperts.png'
import fitch from '../../assets/fitch.jpg'
import React from 'react'

type Project = {
    projectName: string,
    technologiesUsed: string[],
    imageUrl:string,
    description?: JSX.Element
}

export const Projects: Project[] = [
    {
        projectName: "Equal Experts",
        technologiesUsed: ['Docker', 'Sitecore', 'Sitecore JSS', 'Coveo', 'Azure Blob Storage'],
        imageUrl: equalExperts,
        description: <div>
            <p>Equal Experts' client was in need of </p>
        </div>
    },
    {
        projectName: 'Fitch',
        technologiesUsed: ['Sitecore, Azure B2B', 'Azure Blob Storage', 'TeamCity'],
        imageUrl: fitch
    },
]