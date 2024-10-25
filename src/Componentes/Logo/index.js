
const TOpcao = ['Texto 01', 'Texto 02', 'Texto03']

function OpcoesHeader(){
    return(

        <ul className='opcao'>
        { TOpcao.map( (texto) => (
            <li className="opções"> <p>{texto}</p> </li>
        ) ) }    
        </ul>

    )
}
export default OpcoesHeader