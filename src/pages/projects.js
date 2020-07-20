import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default () => {
  const { allContentfulRecentProjects } = useStaticQuery(graphql`
    query {
      allContentfulRecentProjects(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            name
            languageAndTechnologies
            description {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="text-theme-primary text-5xl">Projects</div>

      {allContentfulRecentProjects.edges.map((edge, i) => {
        return (
          <div
            key={i}
            className="w-full max-w-4xl bg-background-secondary m-2 p-2"
          >
            <div className="text-3xl text-text-primary">{edge.node.name}</div>
            <div className="flex flex-wrap items-center">
              {edge.node.languageAndTechnologies.map(name => {
                return (
                  <div
                    className="rounded m-1 p-1 bg-background-tag text-text-primary"
                    key={name}
                  >
                    {name}
                  </div>
                )
              })}
            </div>
            <div className="text-xl text-text-primary">
              {documentToReactComponents(edge.node.description.json)}
            </div>
          </div>
        )
      })}
    </Layout>
  )
}
