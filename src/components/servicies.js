import React from "react"
import { Link } from "gatsby";
import { DescTittle, DescText, DescDetails, DescTime, DescPrice, DescBook } from "../styles/js/skin";
import Loadable from "@loadable/component"
import { DescDetailsHair, DescPriceHair, DescTitleHair } from "../styles/js/hair";
import { DescDetailsBody, DescNoteBody, DescPriceBody, DescTitleBody } from "../styles/js/body";
const Flecha = Loadable(() => import("../assets/Flecha.svg"))


const SkinServiceDesc = ({ services, title }) => {
    return (
        <>
            {services.map(({ node }) => {
                return (
                    <>
                        {
                            node.title === title.title && (
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
const HairServiceDesc = ({ services, type }) => {

    const description = services.map(({ node }) => (
        node.type === type.type
        && node.description !== null
        && (node.description)
    ))
    console.log(description);

    return (
        <>
            <DescTittle><p>{type.type}</p></DescTittle>
            <DescText><p>{description}</p></DescText>

            {services.map(({ node }) => {
                return (
                    <>
                        {
                            node.type === type.type &&
                            (
                                <>
                                    <DescDetailsHair>
                                        <DescTitleHair>
                                            {node.title}
                                        </DescTitleHair>
                                        <DescPriceHair>
                                            {node.price}
                                        </DescPriceHair>
                                    </DescDetailsHair>
                                </>
                            )
                        }
                    </>
                )
            })}
        </>
    )
}
const BodyServiceDesc = ({ services, type }) => {

    const description = services.map(({ node }) => (
        node.type === type.type
        && node.description !== null
        && (node.description)
    ))
    // console.log(description);

    return (
        <>
            <DescTittle><p>{type.type}</p></DescTittle>
            <DescText><p>{description}</p></DescText>

            {services.map(({ node }) => {
                return (
                    <>
                        {
                            node.type === type.type &&
                            (
                                <>
                                    <DescDetailsBody>
                                        <DescTitleBody>
                                            {node.title}
                                        </DescTitleBody>
                                        <DescPriceBody>
                                            {node.price}
                                        </DescPriceBody>
                                        <DescNoteBody>
                                            {node.note}
                                        </DescNoteBody>
                                    </DescDetailsBody>
                                </>
                            )
                        }
                    </>
                )
            })}
        </>
    )
}

export { SkinServiceDesc, HairServiceDesc, BodyServiceDesc }