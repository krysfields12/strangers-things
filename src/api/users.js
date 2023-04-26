const COHORT_NAME = "2301-FTB-ET-WEB-PT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const registerUser = async (user) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
           method: "Post",
           headers: {
             "Content-Type": "application/json"
            },
           body: JSON.stringify({
             user
            }),    
          });
         const result = response.json();
         console.log(result);
         return result
    } catch(error) {
      console.error(error);
    }
}

export const login = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify({
        user: {
            username,
            password
        }
      })
   })
    } catch(error) {
      console.error(error);
    }
}

export const myData = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      const result = await response.json();
      return result
    } catch(error) {
      console.error(error)
    }
}

