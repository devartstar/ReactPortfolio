import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';

import { HomeRounded, SchoolRounded, WorkRounded, Facebook, Twitter, LinkedIn, Github, Telegram } from '@material-ui/icons';

import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/button';

import './Header.css'

const Header = (props) => {

    const pathname = props?.loaction?.pathname;

    return (
        <Navbar expand='lg' sticky='top' className='header'>
            {/* Homepage */}
            <Nav.Link as={NavLink} to='/resume' className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse>

                <Nav className='header_left'>
                    {/* resume link */}
                    <Nav.Link as={NavLink} to='/resume' className={pathname == '/resume' ? 'header_link_active' : 'header_link'}>Resume</Nav.Link>
                    {/* portfolio link */}
                    <Nav.Link as={NavLink} to='/portfolio' className={pathname == '/portfolio' ? 'header_link_active' : 'header_link'}>Portfolio</Nav.Link>
                </Nav>

                <div className='header_right'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} target='_blank' >{resumeData.socials[key].icon}</a>
                    ))}
                    <CustomButton text={'Hire Me'} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
