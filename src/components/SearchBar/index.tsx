import * as C from "./styles";
import { SearchFilter } from "../SearchFilter";
import { SearchField } from "../SearchField";
import { Pokemon } from "../../types/Pokemon";
import { HomeButton } from "../HomeButton";
import { SetterOrUpdater } from "recoil";
import { FC } from "react";

type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: SetterOrUpdater<number>;
  setError: SetterOrUpdater<boolean>;
  setLoading: SetterOrUpdater<boolean>;
  setPage:  SetterOrUpdater<number>;
  setShowPagination: SetterOrUpdater<boolean>;
  disabledButton: boolean;
  setDisabledButton: SetterOrUpdater<boolean>;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export const SearchBar:FC<SearchBarProps> = ({searchBarRef,setPokemonList,setLoading,setDisabledButton,setPage,setError,setPokemonAmount,setShowPagination,pokemonAmount,disabledButton}) => {
  return (
    <div className="main-container" ref={searchBarRef}>
      <C.Container>
        <HomeButton
          setPokemonList={setPokemonList}
          setLoading={setLoading}
          setPage={setPage}
          setShowPagination={setShowPagination}
          disabledButton={disabledButton}
          setDisabledButton={setDisabledButton}
        />
        <SearchFilter
          setPokemonList={setPokemonList}
          pokemonAmount={pokemonAmount}
          setPokemonAmount={setPokemonAmount}
          setLoading={setLoading}
          setShowPagination={setShowPagination}
          setDisabledButton={setDisabledButton}
        />
        <SearchField
          setPokemonList={setPokemonList}
          setError={setError}
          setLoading={setLoading}
        />
      </C.Container>
    </div>
  );
};
