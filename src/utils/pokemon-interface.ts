export interface IPokemonStat {
  name: string;
  value: number;
};

export interface IPokemon {
  id: number;
  name: string;
  imgUrl: string;
  stats: IPokemonStat[];
  types: string[];
  evolutions?: IPokemon[];
};
