import React from "react"
import { Link } from "gatsby";
import { TextTittle, DescTittle, DescText, DescDetails, DescTime, DescPrice, DescBook } from "../styles/js/skin";
import Loadable from "@loadable/component"
const Flecha = Loadable(() => import("../assets/Flecha.svg"))




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

const ServiceDesc = ({ services, title }) => {
    return (
        <>
            {services.map(({ node }) => {
                return (
                    <>
                        {
                            node.title === title.title &&
                            node.subcategory === 'aveda' && (
                                <>
                                    <DescTittle><p>{node.title}</p></DescTittle>
                                    <DescText><p>{node.description}</p></DescText>
                                    <DescDetails>
                                        <DescTime>
                                            {node.time}
                                        </DescTime>
                                        <DescPrice>
                                            {node.price}
                                        </DescPrice>
                                        <DescBook>
                                            <Link to="/">
                                                BOOK NOW
                                                <Flecha className="flecha"></Flecha>
                                            </Link>
                                        </DescBook>
                                    </DescDetails>
                                </>
                            )}
                    </>
                )
            })}
        </>
    )
}

export { Service, ServiceDesc }