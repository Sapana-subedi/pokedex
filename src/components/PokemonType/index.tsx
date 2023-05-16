import { FC, SyntheticEvent } from "react";
import { pokemonTypes } from "../../pokemonTypes";
import * as C from "./styles";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType:FC<PokemonTypeProps> = ({type, tabIndex, handleClick}) => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === type
  );

  const imgUrl = new URL(
    `/src/assets/pokemonTypes/${name}.svg`,
    import.meta.url
  ).href;

  return name && color ? (
    <C.Type
      color={color}
      value={name}
      onClick={handleClick}
      tabIndex={tabIndex ? 0 : -1}
    >
      <img src={imgUrl} width={16} height={16} alt={name} />
      {name}
    </C.Type>
  ) : (
    <C.ErrorMessage>
      Ops pokemon not found.
    </C.ErrorMessage>
  );
};
