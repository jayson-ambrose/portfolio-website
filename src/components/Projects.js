import React from 'react'
import { Table } from 'semantic-ui-react'

function Projects () {

    return(
        <div className='routeContent'>
            <h2 className='headLine'> Projects </h2 >
            <p>
                Welcome to my projects. You can see them in action my clicking on the demo link if available.
            </p>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Project Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Demo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Backlogger Books</Table.Cell>
                        <Table.Cell>React Native mobile application for avid readers to track books they would like to read and leave reviews for other users.</Table.Cell>
                        <Table.Cell><a href='https://youtu.be/N-Xg1JWFHL0' rel="noreferrer" target='_blank'>Demo</a></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Obsidian's Vault</Table.Cell>
                        <Table.Cell>React front-end, Python and Flask backend, Semantic UI styling. Website for the collectable card game "Obsidian's Vault".</Table.Cell>
                        <Table.Cell>WIP</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Froth Finder</Table.Cell>
                        <Table.Cell>A single page web application for beer enthusiasts to find thier next favorite brewery.</Table.Cell>
                        <Table.Cell><a href='https://youtu.be/VXc9z3k-BvY' rel="noreferrer" target='_blank'>Demo</a></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Zen Trivia</Table.Cell>
                        <Table.Cell>Single page React application featuring a triva game and tools for companies to set up thier next trivia night.</Table.Cell>
                        <Table.Cell><a href='https://youtu.be/BPkYcGz12dw' rel="noreferrer" target='_blank'>Demo</a></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Projects