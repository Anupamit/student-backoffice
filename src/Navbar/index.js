import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink>
                <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/attendence" activeStyle>
                    Attendence
                </NavLink>
                <NavLink to="/mark" activeStyle>
                    Mark
                </NavLink>
                <NavLink to="/exam" activeStyle>
                    Exam
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar;
