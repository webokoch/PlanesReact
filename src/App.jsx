import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Info from "./components/Info"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                data={item}
            />
        )
    })        
    
    return (
        <div className="app">
            <div className="container">
                <Navbar />
                <Info />
                {cards}
            </div>
        </div>
    )
}