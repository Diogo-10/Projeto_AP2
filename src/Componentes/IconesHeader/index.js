import perfil from '../../imagens/perfil.jpg'
import sacola from '../../imagens/sacola.png'

const icones = [perfil, sacola]

function IconesHeader(){
return(

<ul className='icones'>
    { icones.map((icone) =>(
        <li className='icone'><img src={icone} width={"50"} height={"50"}></img></li>
    )) }
</ul>

)
}
export default IconesHeader