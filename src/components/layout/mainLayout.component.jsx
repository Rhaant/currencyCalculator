import React from 'react'

const MainLayout = ({children}) => (
    <div className="MainLayout">
        <div>
            <h1> Header </h1>
        </div>
        {children}
    </div>
)

export default MainLayout