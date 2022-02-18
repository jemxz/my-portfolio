import React from 'react'
import { useEffect, useState } from "react";
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss';
import { 
    webPortfolio,
    designPortfolio,
    featuredPortfolio
 } from "../../data";

function Portfolio() {
    const[selected,setSelected]=useState("content")
    const[data, setData] = useState([])
    const list = [
        {
            id: "content",
            title: "Content"
        },
        {
            id: "web",
            title: "Web Applications"
        },
        {
            id: "design",
            title: "Desiging"
        }

    ]

    useEffect(()=>{
        switch (selected) {
            case "content":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
        
            default:
                setData(featuredPortfolio)
                break;
        }
    },[selected])



    return (
        <div className="portfolio" id="portfolio">
            <h1> Portfolio </h1>
            <ul>
                { list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
               { data.map((d) => (      
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
        
    )
}

export default Portfolio