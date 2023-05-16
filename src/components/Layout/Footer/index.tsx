import { Divider, Link } from "@mui/material";

import Inlogo from '../../../assets/linkedin.png'
import Gitlogo from '../../../assets/logo-github.svg'

export const Footer = () => {
  return (
    <div className="main-container">
            <Divider color="white"  className=""/>

      <div className="flex gap-10 mt-10">
<div className="flex flex-col">
  <span> The Pokémon Company</span>
          <span> API - pokeapi.co</span>
</div> 
  <div className="">
    <ul className=" flex flex-rows gap-4  ">
            <li>
            <Link href="https://www.linkedin.com/feed/"  >
            <img src={Inlogo}/>        </Link> 
          </li>
            <li >
            <Link  href="https://github.com/sapana-s"  >
            <img src={Gitlogo}/>          </Link> 
            
            </li>
            
            
        </ul></div>       
        
        </div>
    </div>
  );
};
