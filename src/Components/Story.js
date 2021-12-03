export default function Story(props){
   return(
      <div className="story" key={props.id}>
         <div className="imagem">
         <img src={require(`../assets/img/${props.user}.svg`).default} alt={props.user} />
         </div>
         <div className="usuario">
         {props.user}
         </div>
    </div>
   )
}