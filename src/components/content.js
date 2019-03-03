import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Card } from "./Card"

let maxWidth = "330px";

const onMouseEnter = () => {
  maxWidth = "350px";
  console.log("enter ", maxWidth);
}

const onMouseLeave = () => {
  maxWidth = "330px";
  console.log("leave ", maxWidth);
}

const card = (movie, index) =>
  <div
    key={index}
    style={{
      backgroundColor: "rgba(0,0,0,0.1)",
      textAlign: "center",
      boxShadow: "10px 4px 8px 0 rgba(0,0,0,0.5)",
      maxWidth: maxWidth,
      border: "1px",
      margin: "15px 10px 15px 10px"
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Card movie={movie} index={3} />
    <h3
      style={{
        padding: "20px",
        margin: "0px"
      }}
    >
      {movie.original_title}
    </h3>
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt="poster_image"
      style={{
        paddingBottom: "0px"
      }}
    />
  </div>

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
      return (<div
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "50px"
        }}
      >{
          data
            .movieDb
            .data
            .results
            .map((movie, index) =>
              <Card
                movie={movie}
                index={index}
              />
            )
        }
      </div>
      )
    }}
  />
)
export default Content
