import * as C from "./styles";
import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { fetchPokemonList } from "../../api/fetchPokemonList";
import { Pokemon } from "../../types/Pokemon";
import { SetterOrUpdater } from "recoil";
import { FC } from "react";

type HomeButtonProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: SetterOrUpdater<boolean>;
  setPage: SetterOrUpdater<number>;
  setShowPagination: SetterOrUpdater<boolean>;
  disabledButton: boolean;
  setDisabledButton: SetterOrUpdater<boolean>;
};

export const HomeButton:FC<HomeButtonProps> = ({setDisabledButton,setLoading,setPage,setPokemonList,setShowPagination,disabledButton}) => {
  const handleClick = async () => {
   setLoading(true);
   setDisabledButton(true);
   setPokemonList(await fetchPokemonList(1));
   setLoading(false);
   setDisabledButton(false);
   setPage(1);
   setShowPagination(true);
  };

  return (
    <C.HomeButton
      className="button"
      onClick={handleClick}
      disabled={disabledButton ? true : false}
    >
      <HomeIcon />
Home    </C.HomeButton>
  );
};
