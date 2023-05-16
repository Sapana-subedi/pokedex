import {
  atom,
  
} from 'recoil';
export const pokemonAmountState = atom({
    key: 'pokemonAmountState',
    default: 9,
  });

export const errorState = atom({
    key: 'pokemonAmountState',
    default: false,});

export const loadingState = atom({
      key: 'loadingState',
      default: false,});

export const pageState = atom({
        key: 'pageState',
        default: 1,
      });
export const showPaginationState = atom({
        key: 'showPaginationState',
        default: false,});
export const disabledButtonState = atom({
          key: 'disabledButtonState',
          default: false,});

export const inputState = atom({
  key: 'inputState',
          default: "",
})          

export const selectedTypeState = atom({
  key: 'selectedTypeState',
          default: "",
})  