import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Service } from "./servicies";


export default function Skin() {
    const data = useStaticQuery(graphql`
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
`)
    return (
        <>
            <Service services={data.allGoogleSkinSheet.edges} />
        </>
    )
}
