import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="stckon">
             {props.title}
        </h1>
        <p className="lead ">{props.subtitle}</p>
    </header>