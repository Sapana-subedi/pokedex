import * as C from "./styles";
import { FC, SyntheticEvent, useEffect } from "react";
import { fetchPokemonByType } from "../../api/fetchPokemonByType";
import { Slide } from "../Slide";
import { PokemonType } from "../PokemonType";
import { pokemonTypes } from "../../pokemonTypes";
import { Pokemon } from "../../types/Pokemon";
import { SetterOrUpdater } from "recoil";
import { useRecoilState } from 'recoil';
import { selectedTypeState } from "../../atoms/searchBarAtoms";

type SearchFilterProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: SetterOrUpdater<number>;
   setShowPagination:  SetterOrUpdater<boolean>;
  setDisabledButton:  SetterOrUpdater<boolean>;
setLoading:SetterOrUpdater<boolean>;
};

export const SearchFilter:FC<SearchFilterProps> = ({setDisabledButton, setLoading,setPokemonAmount,setPokemonList,setShowPagination,pokemonAmount}) => {
  const [selectedType, setSelectedType] = useRecoilState(selectedTypeState);

  const handleClick = async (e: SyntheticEvent) => {
    const typeName = (e.currentTarget as HTMLButtonElement).value;
    setSelectedType(typeName);
   setPokemonAmount(9);
   setLoading(true);
   setPokemonList( await fetchPokemonByType(typeName,9));
   setLoading(false);
   setShowPagination(true);
  };

  useEffect(() => {
    if (selectedType) {
      (async () => {
       setDisabledButton(true);
       const filteredPokemonList = await fetchPokemonByType(selectedType, pokemonAmount);

       setPokemonList(filteredPokemonList.slice(1, pokemonAmount));
       setDisabledButton(false);
      })();
    }
  }, [pokemonAmount, selectedType]);


  return (
    <C.Container>
      <div className="text-2xl font-bold">Search by Type</div>
      <Slide>
        {pokemonTypes.map(({ name }) => (
          <PokemonType
            key={name}
            type={name}
            tabIndex={true}
            handleClick={handleClick}
          />
        ))}
      </Slide>
    </C.Container>
  );
};
