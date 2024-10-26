
import './App.css';
import Logo from './Componentes/Logo';
import perfil from './imagens/perfil.jpg';
import sacola from './imagens/sacola.png';
import OpcoesHeader from './Componentes/OpcoesHeader';
import IconesHeader from './Componentes/IconesHeader';




const icones = [perfil, sacola]

function App(){
    return(
        <div className="App">
          <header className="App-header">
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>

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