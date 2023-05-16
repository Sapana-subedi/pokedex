import { PokemonCard } from "../PokemonCard";
import * as C from "./styles";
import { ErrorMessage } from "../helper/ErrorMessage";
import { Loading } from "../helper/Loading";
import { Pokemon } from "../../types/Pokemon";
import { SetterOrUpdater } from "recoil";
import { Pagination } from "../Pagination";
import { FC } from "react";

type PokedexProps = {
  setModal: SetterOrUpdater<boolean>;
  setPokemonData: (data: Pokemon) => void;
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: SetterOrUpdater<number>;
  error: boolean;
  loading: boolean;
  setLoading: SetterOrUpdater<boolean>;
  page: number;
  setPage: SetterOrUpdater<number>;
  showPagination: boolean;
  setShowPagination:SetterOrUpdater<boolean>;
  disabledButton: boolean;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export const Pokedex:FC<PokedexProps> = ({error, loading,pokemonList,searchBarRef,setModal,setPokemonData,showPagination,setLoading,setPage,setPokemonList,page}) => {
  if (error) return <ErrorMessage />;
  else
    return (
      <C.Wrapper>
        <div className="main-container">
          {loading ? (
            <Loading />
          ) : (
            <C.PokemonList>
              {pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  setModal={setModal}
                  setPokemonData={setPokemonData}
                />
              ))}
            </C.PokemonList>
          )}
          {pokemonList.length > 1 &&
            loading === false &&
            showPagination === true && (
              <Pagination
                setPokemonList={setPokemonList}
                setLoading={setLoading}
                searchBarRef={searchBarRef}
                page={page}
                setPage={setPage}
              />
            )}
          
        </div>
      </C.Wrapper>
    );
};
