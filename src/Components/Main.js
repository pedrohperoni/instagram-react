import Posts from "./Posts";
import Stories from "./Stories";

export default function Main(){
   return(
      <div className="esquerda">
          <Stories />
          <Posts />
      </div>
   )
}