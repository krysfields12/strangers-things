const COHORT_NAME = "2301-FTB-ET-WEB-PT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

 // GET /posts (A request to this endpoint fetches an array of post objects)
export const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
      const result = await response.json();
      console.log(result);
      return result;
    } catch(error) {
        console.log(error)
    }
}


export const makePost = async (post, token) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          post
        }),
      });
      const result = await response.json();
      console.log(result)
    } catch(error) {
      console.error(error)
    }
}



