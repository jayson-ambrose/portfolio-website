import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Nav () {

    const [menuSelection, setMenuSelection] = useState({})

    const handleItemClick = (e, { name }) => setMenuSelection({ activeItem: name })
    const { activeItem } = menuSelection

    return(
        <Menu widths={3}>
            <Menu.Item
                as={ Link }
                to='/welcome'
                name='welcome'
                active={activeItem === 'welcome'}
                onClick={handleItemClick}
            >
                Welcome
            </Menu.Item>
            <Menu.Item
                as={ Link }
                to='/projects'
                name='projects'
                active={activeItem === 'projects'}
                onClick={handleItemClick}
            >
                Projects
            </Menu.Item>
            <Menu.Item
                name='contact'
                as={ Link }
                to='/contact'
                active={activeItem === 'contact'}
                onClick={handleItemClick}
            >
                Contact Me
            </Menu.Item>
        </Menu>
    )
}

export default Nav