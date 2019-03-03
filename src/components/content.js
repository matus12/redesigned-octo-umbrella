import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Content = () => (
  <StaticQuery
    query={graphql`
      query {
        movieDb {
          data {
            results {
              original_title
              overview
              poster_path
            }
          }
        }
      }
    `}
    render={data => {
        console.log(data.movieDb.data.results)
        return data
          .movieDb
          .data
          .results
          .map((edge, index) => {
            return  <div key={index}>
                      <h2>
                        {edge.original_title}
                      </h2>
                      <p>
                        {edge.overview}
                      </p>
                      <img 
                        src={`https://image.tmdb.org/t/p/w500${edge.poster_path}`}
                        alt="poster_image"  
                      />
                    </div>
          })
    }}
  />
)
export default Content
