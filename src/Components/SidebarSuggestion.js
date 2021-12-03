export default function SidebarSuggestion(props){
   return(
      <div class="sugestao" key={props.key}>
              <div className="usuario">
                <img src={require(`../assets/img/${props.user}.svg`).default} alt={props.user} />
                <div className="texto">
                  <div className="nome">{props.user}</div>
                  <div className="razao">{props.reason}</div>
                </div>
              </div>
              <div className="seguir">Seguir</div>
            </div>
   )
}