import React from "react"
import { Link } from "gatsby";
import { DescTittle, DescText, DescDetails, DescTime, DescPrice, DescBook } from "../styles/js/skin";
import { DescDetailsHair, DescPriceHair, DescTitleHair } from "../styles/js/hair";
import { Desc, DescDetailsBody, DescNoteBody, DescPriceBody, DescTitleBody } from "../styles/js/body";
import { motionValue } from "framer-motion";


const SkinServiceDesc = ({ services, title }) => {
    return (
        <>
            {services.map(({ node }) => {
                console.log(node);
                return (
                    <div key={node.id}>
                        {
                            node.category != null &&
                            node.title === title.title && (
                                <>
                                    <DescTittle><p>{node.title}</p>
                                        <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">
                                            <DescBook>BOOK NOW</DescBook>
                                        </a>
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
                            )
                        }
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
                <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">
                    <DescBook>BOOK NOW</DescBook>
                </a>
            </DescTittle>
            <DescText><p>{description}</p></DescText>

            {services.map(({ node }) => {
                return (
                    <div key={node.id}>
                        {
                            node.type === type.type &&
                            (
                                <DescDetailsHair>
                                    <DescTitleHair>
                                        {node.title}
                                    </DescTitleHair>
                                    <DescPriceHair>
                                        {node.price}
                                    </DescPriceHair>
                                </DescDetailsHair>
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
                <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">
                    <DescBook>BOOK NOW</DescBook>
                </a>
            </DescTittle>

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
                                        <Desc>
                                            {node.description}
                                        </Desc>
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