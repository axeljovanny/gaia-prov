import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SkinServiceDesc, SkinServiceMobileDesc } from "./servicies";

export const useSkinService = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGoogleSkinSheet {
          edges {
            node {
              id
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
const SkinMobileService = () => {
  const kawai = useSkinService()
  return (
    <>
      <SkinServiceMobileDesc services={kawai} />
    </>
  )
}


export {
  SkinService, SkinMobileService
}
