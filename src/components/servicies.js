import React from "react"
import { Link } from "gatsby";
import { DescTittle, DescText, DescDetails, DescTime, DescPrice, DescBook } from "../styles/js/skin";
import { DescDetailsHair, DescPriceHair, DescTitleHair } from "../styles/js/hair";
import { DescDetailsBody, DescNoteBody, DescPriceBody, DescTitleBody } from "../styles/js/body";


const SkinServiceDesc = ({ services, title }) => {
    return (
        <>
            {services.map(({ node }) => {
                return (
                    <div key={node.id}>
                        {
                            node.title === title.title && (
                                <>
                                    <DescTittle><p>{node.title}</p>
                                        <Link to="/"><DescBook>BOOK NOW</DescBook></Link>
                                    </DescTittle>
                                    <DescText><p>{node.description}</p></DescText>
                                    <DescDetails>
                                        <DescTime>
                                            {node.time}
                                        </DescTime>
                                        <DescPrice>
                                            {node.price}
                                        </DescPrice>
                                    </DescDetails>
                                </>
                            )}
                    </div>
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
    // console.log(description);

    return (
        <>
            <DescTittle><p>{type.type}</p>
                <Link to="/"><DescBook>BOOK NOW</DescBook></Link>
            </DescTittle>
            <DescText><p>{description}</p></DescText>

            {services.map(({ node }) => {
                return (
                    <div key={node.id}>
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
                    </div>
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
            <DescTittle><p>{type.type}</p>
                <Link to="/"><DescBook>BOOK NOW</DescBook></Link>
            </DescTittle>
            <DescText><p>{description}</p></DescText>

            {services.map(({ node }) => {
                return (
                    <div key={node.id}>
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
                    </div>
                )
            })}
        </>
    )
}

export { SkinServiceDesc, HairServiceDesc, BodyServiceDesc }