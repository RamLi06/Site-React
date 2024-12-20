import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Grasstalker.png'
import grass from '../../components/assets/images/grama.png'
import gelo from '../../components/assets/images/gelo.png'
import fogo from '../../components/assets/images/fogo.png'
import voador from '../../components/assets/images/voador.png'
import venenoso from '../../components/assets/images/poison.png'
import inseto from '../../components/assets/images/inseto.png'
import { Link } from "react-router-dom"
import Sidebar from '../../components/sidebar/sidebar.jsx'

export default function PokemonPage2() {

    

    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='poke'>
           <Link to = '/Herbkeeper'><button>&#11164;Herbkeep #02</button></Link> 
           <Link to = "/Foresterror"><button>Foresterror #03 &#11166;</button></Link> 

           <h3 id='title-p'>Grasstalker #02</h3> 
           <img src={poke} alt="" />

        </div>
           <div className='descrição'>
            <h4>Grasstalker, o Pokémon Escondido, é um Pokémon misterioso que habita florestas densas e pouco exploradas. Conhecido por sua habilidade de se camuflar perfeitamente entre as plantas, ele é um mestre na arte do esconderijo. Sua pele se adapta ao ambiente, tornando-o quase invisível, exceto por seu olho penetrante. Nunca ninguém viu o que existe dentro de seu bulbo.</h4>
    

           </div>
            <div id='gender'>
           <button><img id='macho' src={macho} /></button> <button> <img id='femea' src={femea} /></button>
          
           </div>

           <div className='status'>

            <p>Tipo:</p>
            <img id='type' src={grass} />

            <p id='weak'>Fraquezas:</p>
            <img id='type' src={gelo} />
            <img id='type' src={fogo} />
            <img id='type' src={voador} />
            <img id='type' src={venenoso} />
            <img id='type' src={inseto} />


           </div>



        </>
    );
}