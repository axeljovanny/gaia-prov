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
              type
              title
              price
              note
              description
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
