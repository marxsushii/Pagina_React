import logo from '../../assets/imgs/SON-logo.png'
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'



export default props =>
    <div class="page-nav">
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
        </aside>
        <aside className="menu-area">
            <nav className="menu">
                
                <Link to="/">
                    <i className="icon fa fa-home"></i> Início
                </Link>
                <Link to="/users">
                    <i className="icon fa fa-users"></i> Convidados
                </Link>
                <Link to="/moreinfo">
                    <i className="icon fa fa-info-circle"></i> Mais Informações
                </Link>
            </nav>
        </aside>
    </div>
    