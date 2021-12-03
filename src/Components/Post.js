import {
   IoEllipsisHorizontal, 
   IoHeartOutline, 
   IoChatbubbleOutline, 
   IoPaperPlaneOutline, 
   IoBookmarkOutline
} from "react-icons/io5";

export function Post(props){
   return(
      <div class="post" id={props.id}>
              <div class="topo">
                <div class="usuario">
                <img src={require(`../assets/img/${props.userImg}.svg`).default} alt={props.title} />
                  {props.title}
                </div>
                <div class="acoes">
                  <IoEllipsisHorizontal />
                </div>
              </div>

              <div class="conteudo">
                <img src={require(`../assets/img/${props.contentImg}.svg`).default} alt={props.contentImg} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                  <IoHeartOutline />
                  <IoChatbubbleOutline />
                  <IoPaperPlaneOutline />
                  </div>
                  <div>
                    <IoBookmarkOutline />
                  </div>
                </div>

                <div class="curtidas">
                <img src={require(`../assets/img/${props.likeImg}.svg`).default} alt={props.likeImg} />
                  <div class="texto">
                    Curtido por <strong>{props.likeImg}</strong> e <strong>outras {props.likes} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
   )
}