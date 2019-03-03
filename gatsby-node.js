/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const axios = require('axios');
exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions
    // Create nodes here, generally by downloading data
    // from a remote API.
    const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4d1917c52de723c48c649b3eb9955c8f&language=en-US")
  
    // Process data into nodes.
    createNode(data);

    createNode({
        // Data for the node.
        ...data,
      
        // Required fields.
        id: `a-node-id`,
        parent: `the-id-of-the-parent-node`, // or null if it's a source node without a parent
        children: [],
        internal: {
          type: `movieDB`,
          contentDigest: '21',
        }
      })
  
    // We're done, return.
    return
  }