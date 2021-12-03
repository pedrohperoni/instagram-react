import { IoChevronForwardCircle } from 'react-icons/io5'
import { storyConstants } from "../Constants/storyConstants"
import Story from "./Story"

export default function Stories(){
   return(
      <div className="stories">
         {storyConstants.map(storyConstant => 
         <Story 
            key={storyConstant.id}
            user={storyConstant.user}
         />
         )}
         <div className="setinha">
            <IoChevronForwardCircle />
         </div>
      </div>
   )
}