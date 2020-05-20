import React from 'react'

import Header from '../header/header.component'

import './mainLayout.styles.scss'

const MainLayout = ({children}) => (
    <div className="MainLayout">
        <Header />
        {children}
    </div>
)

export default MainLayout