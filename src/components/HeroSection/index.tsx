import BoltSrc from "../../assets/background-pokeball.svg";
import { PokemonType } from "../PokemonType";
import { fetchPokemon } from "../../api/fetchPokemon";
import imgSrc from "../../assets/img-charizard-min.png";
import { Pokemon } from "../../types/Pokemon";
import { FC } from "react";
import NavBar from "../Layout/Header";
import { SetterOrUpdater } from "recoil";

type HeroSectionProps = {
  setModal:  SetterOrUpdater<boolean>;
  setPokemonData: (data: Pokemon) => void;
};

export const HeroSection:FC<HeroSectionProps> = ({ setModal, setPokemonData }) => {
  const handleClick = async () => {
    const { data } = await fetchPokemon("charizard");
    setPokemonData(data);
    setModal(true);
  };

  return (
<>
        <div className="bg-gradient-to-t from-cyan-300 to-blue-600 relative items-center sm:h-full md:h-full  2xl:min-h-screen 2xl:w-screen overflow-hidden ">
        <NavBar/>

<div className="  ">      
<div className="m-5 mt-28 flex flex-col gap-4 absolute">
            <p className="text-white text-2xl font-bold">#006</p>
            <div className="flex flex-rows gap-4">
                <button className="  rounded-xl h-10 w-20 bg-orange-400 text-xl text-white ">   
                             <PokemonType type={"fire"} tabIndex={false}/>
</button>
               <button className="rounded-xl h-10 w-20 bg-teal-400 text-xl text-white"> <PokemonType type={"flying"} tabIndex={false}/></button>

            </div>
            <h3 className="text-white text-6xl font-bold">CHARIZARD</h3>
            <p className="text-white text-md text-justify mr-96 ">Charizard resembles a large traditional European dragon. Despite the similarity, Charizard is explicitly a Fire- and Flying-type Pokémon, and not a Dragon-type, except in its "Mega Charizard X" form; However, it can learn Dragon-type attacks.</p>
            <div>
                <button className="rounded-xl bg-white  text-cyan-300 text-lg h-12 w-96 " onClick={handleClick} >            More Details
</button>
            </div>
        </div>

        <div >
          
           <img className="absolute w-large mr-44 right-40 top-52" src={imgSrc}/>
          <img className="absolute top-96 -left-44" src={BoltSrc}/> 
          <img className="absolute -right-44 top-96" src={BoltSrc}/> 
        </div>
        </div>  
        </div>
        </>
  );
};
