import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SkinServiceDesc } from "./servicies";

export const useSkinService = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGoogleSkinSheet {
          edges {
            node {
              category
              title
              time
              price
              description
            }
          }
        }
      }
      `
  )
  return data.allGoogleSkinSheet.edges
}

const SkinService = (title) => {
  const kawai = useSkinService()
  return (
    <>
      <SkinServiceDesc services={kawai} title={title} />
    </>
  )
}


export {
  SkinService
}
