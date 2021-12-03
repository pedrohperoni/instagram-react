import { IoChevronForwardCircle } from 'react-icons/io5'
import { storyConstants } from "../Constants/storyConstants"
import Story from "./Story"

export default function Stories(){
   return(
      <div class="stories">
         {storyConstants.map(storyConstant => 
         <Story 
            key={storyConstant.id}
            user={storyConstant.user}
         />
         )}
         <div class="setinha">
            <IoChevronForwardCircle />
         </div>
      </div>
   )
}