import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST } from "../UserSignUp"

export const signin = (email, password) => async(dispatch) => {
 dispatch (
     {
         type: USER_SIGNIN_REQUEST, PAYLOAD: {
             email, password
         }
     }
 );
 try {
    const {data} = await Axios.post ()
 }
 catch (error) {
     dispatch ( 
         {
         type: USER_SIGNIN_FAIL,
         payload: error.response && error.response.data.message
         ? error.response.data.message
         : error.message,
         }
     )
 }
}