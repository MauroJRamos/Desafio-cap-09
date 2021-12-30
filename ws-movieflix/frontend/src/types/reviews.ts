import { User } from "./User"

 export type Reviews = {

        "id": number,
        "text": string,
        "movieId": number,        
        "user": User;
           
    }