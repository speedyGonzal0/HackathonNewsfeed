import React from 'react'
import "./Home.css"
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'

function Home() {

    return (
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
    )
}

export default Home