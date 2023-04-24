const COHORT_NAME = "2301-FTB-ET-WEB-PT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

 // GET /posts (A request to this endpoint fetches an array of post objects)
export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const result = response.json();
        console.log(result);
        return result;
    } catch(error) {
        console.log(error)
    }
}




