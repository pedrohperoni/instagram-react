export default function SidebarUser(props){
   return(
      <div className="usuario">
      <img src={require(`../assets/img/${props.user}.svg`).default} alt={props.user} />
            <div className="texto">
              <strong>{props.user}</strong>
              {props.nickname}
            </div>
          </div>
   )
}