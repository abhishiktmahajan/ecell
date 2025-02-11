import { useState } from 'react'
import './Navbar.css'
import NavbarButtons from './NavbarButtons'
import {RxCross2, RxHamburgerMenu} from 'react-icons/rx'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [open,setOpen] = useState(false)

    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/E-Cell-Logo.png'} alt="Main Logo" />
            <ul>
                <NavbarButtons text="Home" />
                <NavbarButtons text="Blog" />
                <NavbarButtons text="Events" />
                <Link className='links' to="/teams">
                <NavbarButtons text="Teams" />
                </Link>
            </ul>
            <div className='drawer'>
                <RxHamburgerMenu style={{color:'#fff',fontSize:'2rem',fontWeight:'bold'}} onClick={()=>setOpen(true)}/>
            </div>
            <div style={{transform: open ? 'translateX(0)': 'translateX(100%)'}} className='Drawer-container'>
                <RxCross2 className='cross' onClick={()=>setOpen(false)}/>
            </div>
        </nav>
    )
}
