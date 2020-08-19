import React from 'react'
import {Projects} from './Projects'
import { ListItem, Typography, List, Card, CardHeader, CardMedia } from '@material-ui/core';
export const ProjectList = () => {
    return <List>
            {Projects.map((project, key) => {
                return <ListItem key={key}>
                    <Card>
                        <CardHeader title={project.projectName} />
                        <CardMedia image={project.imageUrl} />                        
                        <List>
                            {project.technologiesUsed.map(tech => {
                                return <ListItem>
                                    <Typography>
                                        {tech}
                                    </Typography>
                                </ListItem>
                            })}
                        </List>
                    </Card>
                </ListItem>        
            })}
            </List>
}