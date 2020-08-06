import React from 'react';

interface IState {
  episodes: [];
  favorites: [];
}
const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState>(initialState);
console.log(initialState);
console.log(Store);
// const reducer = () => {};

export const StoreProvider = (props: any): JSX.Element => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
};
