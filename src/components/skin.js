import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Service, ServiceDesc } from "./servicies";


export const useSkinService = () => {
    const data = useStaticQuery(
        graphql`
      query {
        allGoogleSkinSheet {
          edges {
            node {
              id
              category
              description
              price
              subcategory
              time
              title
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
            <ServiceDesc services={kawai} title={title} />
        </>
    )
}

const SkinTittle = () => {
    const kawai = useSkinService()
    return (
        <>
            <Service services={kawai} />
        </>
    )
}

export {
    SkinTittle, SkinService
}
