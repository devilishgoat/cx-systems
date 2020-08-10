import React from 'react'
import {Projects} from './Projects'
import { ListItem, Typography, List } from '@material-ui/core';
export const ProjectList: React.SFC = () => {
    return <List>
            {Projects.map((project, key) => {
                return <ListItem key={key}>
                    <Typography>
                        {project.projectName}
                    </Typography>
                    <img src={project.imageUrl} alt={project.projectName} />
                    <List>
                        {project.technologiesUsed.map(tech => {
                            return <ListItem>
                                <Typography>
                                    {tech}
                                </Typography>
                            </ListItem>
                        })}
                    </List>
                </ListItem>        
            })}
            </List>
}