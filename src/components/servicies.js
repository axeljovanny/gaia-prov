import React from "react"


const Service = ({ services }) => {
    return (
        <>
            {services.map(({ node }) => {
                return (
                    <>

                        <div key={node.id}>
                            <>
                                <span>{node.title}</span>
                                <span>$ {node.name}</span>
                            </>
                        </div>

                    </>
                )
            })}
        </>
    )
}

export default Service