import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HairServiceDesc } from "./servicies";

export const useHairService = () => {
    const data = useStaticQuery(
        graphql`
      query {
        allGoogleHairSheet {
          edges {
            node {
              id
              category
              description
              note
              price
              subcategory
              type
              title
            }
          }
        }
      }
      `
    )
    return data.allGoogleHairSheet.edges
}

const HairService = (type) => {
    const kawai = useHairService()
    return (
        <>
            <HairServiceDesc services={kawai} type={type} />
        </>
    )
}


export {
    HairService
}
