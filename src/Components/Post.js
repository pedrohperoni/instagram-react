import {
   IoEllipsisHorizontal, 
   IoHeartOutline, 
   IoChatbubbleOutline, 
   IoPaperPlaneOutline, 
   IoBookmarkOutline
} from "react-icons/io5";

export function Post(props){
   return(
      <div className="post" key={props.id}>
              <div className="topo">
                <div className="usuario">
                <img src={require(`../assets/img/${props.userImg}.svg`).default} alt={props.title} />
                  {props.title}
                </div>
                <div className="acoes">
                  <IoEllipsisHorizontal />
                </div>
              </div>

              <div className="conteudo">
                <img src={require(`../assets/img/${props.contentImg}.svg`).default} alt={props.contentImg} />
              </div>

              <div className="fundo">
                <div className="acoes">
                  <div>
                  <IoHeartOutline />
                  <IoChatbubbleOutline />
                  <IoPaperPlaneOutline />
                  </div>
                  <div>
                    <IoBookmarkOutline />
                  </div>
                </div>

                <div className="curtidas">
                <img src={require(`../assets/img/${props.likeImg}.svg`).default} alt={props.likeImg} />
                  <div className="texto">
                    Curtido por <strong>{props.likeImg}</strong> e <strong>outras {props.likes} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
   )
}