import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content">
            <div className="details">
                {props.children[1]}
                {props.children[0]}
            </div>
            <div className='informations-photos'>
                {props.children[2]}
                {props.children[3]}
            </div>
            <div className="photos">
                {props.children[4]}
                {props.children[5]}
            </div>
        </main>
    </React.Fragment>