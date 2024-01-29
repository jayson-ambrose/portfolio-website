import React, { useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

function Nav () {

    const location = useLocation()
    const [menuSelection, setMenuSelection] = useState({activeItem: ''})

    useEffect(() => {
        setMenuSelection({activeItem: location.pathname})
    }, [])

    const handleItemClick = (e, { name }) => setMenuSelection({ activeItem: name })
    const { activeItem } = menuSelection

    return(
        <Menu pointing secondary className='nav' color='blue' widths={4}>
            <Menu.Item
                as={ Link }
                to='/'
                name='/'
                active={activeItem === '/'}
                onClick={handleItemClick}
            >
                <b>Welcome</b>
            </Menu.Item>
            <Menu.Item
                as={ Link }
                to='/projects'
                name='/projects'
                active={activeItem === '/projects'}
                onClick={handleItemClick}
            >
                <b>Projects</b>
            </Menu.Item>
            <Menu.Item
                as={ Link }
                to='/contact'
                name='/contact'
                active={activeItem === '/contact'}
                onClick={handleItemClick}
            >
                <b>Contact Me</b>
            </Menu.Item>
            <Menu.Item
                as={ Link }
                to='/gadgets'
                name='/gadgets'
                active={activeItem === '/gadgets'}
                onClick={handleItemClick}
            >
                <b>Gadgets</b>
            </Menu.Item>
        </Menu>
    )
}

export default Nav