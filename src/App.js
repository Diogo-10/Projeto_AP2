
import Logo from './Componentes/Logo'
import imagem from "./imagens/Logotipo_LosHermanos.png"
import OpcoesHeader from './Componentes/Logo';


const icones = [imagem]

function App(){
    return(
        <div className="App">
          <header className="App-header">
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>

          <ul className='icones'>
            { icones.map((icone) => ( 
              <li className='icone'><img src={icone} width="50" height="50"></img></li>
              
            ) ) }
          </ul>

          </header>
        </div>

    );
}
export default App;