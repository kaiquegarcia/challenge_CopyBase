export interface IPokemon {
  name: string;
  imgUrl: string;
  imgAlt: string;
  evolutions?: IPokemon[];
}
