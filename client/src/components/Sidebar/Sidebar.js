import React from 'react'
import "./Sidebar.css"

function sidebar() {
    return (
        <div className="sidebar">
            <div className="item">
                <div className="title"><h2>Topics</h2></div>
                <div className="list">
                    <div className="listItem"><button>Java</button></div>
                    <div className="listItem"><button>Python</button></div>
                    <div className="listItem"><button>Cpp</button></div>
                    <div className="listItem"><button>Go</button></div>
                    <div className="listItem"><button>JavaScript</button></div>
                </div>
            </div>
        </div>
    )
}

export default sidebar