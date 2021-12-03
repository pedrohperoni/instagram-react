import { sidebarSuggestionsConstants } from "../Constants/sidebarSuggestionConstants"
import SidebarSuggestion from "./SidebarSuggestion"
import SidebarUser from "./SidebarUser"

export default function Sidebar(){
   return(
      <div className="sidebar">
         <SidebarUser user={"catanacomics"} nickname="Catana" />
          <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sidebarSuggestionsConstants.map(sidebarSuggestionsConstant =>
               <SidebarSuggestion
                  key={sidebarSuggestionsConstant.id}
                  user={sidebarSuggestionsConstant.user}
                  reason={sidebarSuggestionsConstant.reason}
               />
            )}

          <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
   )
}