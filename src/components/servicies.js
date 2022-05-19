import React from "react"
import { TextTittle } from "../styles/js/skin"


const Service = ({ services }) => {
    return (
        <>
            {services.map(({ node }) => {
                return (
                    <>
                        {node.subcategory === 'aveda' && (<TextTittle><p>{node.title}</p></TextTittle>)}
                    </>
                )
            })}
        </>
    )
}

export { Service }