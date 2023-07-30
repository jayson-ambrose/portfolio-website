import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Nav () {

    const [menuSelection, setMenuSelection] = useState({})

    const handleItemClick = (e, { name }) => setMenuSelection({ activeItem: name })
    const { activeItem } = menuSelection

    return(
        <Menu className='nav' inverted color='blue' widths={4}>
            <Menu.Item
                as={ Link }
                to='/welcome'
                name='welcome'
                active={activeItem === 'welcome'}
                onClick={handleItemClick}
            >
                <b>Welcome</b>
            </Menu.Item>
            <Menu.Item
                as={ Link }
                to='/projects'
                name='projects'
                active={activeItem === 'projects'}
                onClick={handleItemClick}
            >
                <b>Projects</b>
            </Menu.Item>
            <Menu.Item
                name='contact'
                as={ Link }
                to='/contact'
                active={activeItem === 'contact'}
                onClick={handleItemClick}
            >
                <b>Contact Me</b>
            </Menu.Item>
            <Menu.Item
                name='gadgets'
                as={ Link }
                to='/contact'
                active={activeItem === 'gadgets'}
                onClick={handleItemClick}
            >
                <b>Gadgets</b>
            </Menu.Item>
        </Menu>
    )
}

export default Nav