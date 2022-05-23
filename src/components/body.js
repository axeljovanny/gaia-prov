import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BodyServiceDesc } from "./servicies";

export const useBodyService = () => {
    const data = useStaticQuery(
        graphql`
      query {
        allGoogleBodySheet {
          edges {
            node {
              category
              description
              note
              price
              subcategory
              time
              title
              type
            }
          }
        }
      }
      `
    )
    return data.allGoogleBodySheet.edges
}

const BodyService = (type) => {
    const kawai = useBodyService()
    return (
        <>
            <BodyServiceDesc services={kawai} type={type} />
        </>
    )
}


export {
    BodyService
}
