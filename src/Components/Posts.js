import { Post } from "./Post";
import { postConstants } from "../Constants/postConstants"

export default function Posts(){
   return(

      <div class="posts">
         {postConstants.map(postConstant => 
            <Post
               key={postConstant.id}
               title={postConstant.title} 
               userImg={postConstant.userImg}
               contentImg={postConstant.contentImg}   
               likeImg={postConstant.likeImg}
               likes={postConstant.likes}
            /> 

         )}
      </div>
   )
}
