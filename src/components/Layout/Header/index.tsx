import Logo from '../../../assets/logo-pokemon.svg'
import Inlogo from '../../../assets/linkedin.png'
import Gitlogo from '../../../assets/logo-github.svg'
import { Link } from '@mui/material'
const NavBar =() => {
    return(
        <>
         <nav>
         <div className="flex flex-row justify-around  cursor-pointer mt-10 h-full w-screen" >
            <div className=" w-44"><Link >
                <img src={Logo}/>
        </Link ></div>
        <ul className="w-24 flex flex-row sticky gap-10 font-bold mt-10">
            <li>
            <Link href="https://www.linkedin.com/feed/"  >
            <img src={Inlogo}/>        </Link> 
          </li>
            <li >
            <Link  href="https://github.com/sapana-s"  >
            <img src={Gitlogo}/>          </Link> 
            
            </li>
            
            
        </ul>
        

      </div>
    </nav>
        </>
    )
}
export default NavBar;