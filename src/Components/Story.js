export default function Story(props){
   return(
      <div class="story" key={props.id}>
         <div class="imagem">
         <img src={require(`../assets/img/${props.user}.svg`).default} alt={props.user} />
         </div>
         <div class="usuario">
         {props.user}
         </div>
    </div>
   )
}