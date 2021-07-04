import React from 'react'
import "./Single.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Separate from '../../components/Separate/Separate'

function Single() {
    return (
        <div className="single">
            <Separate/>
            <Sidebar/>
        </div>
    )
}

export default Single