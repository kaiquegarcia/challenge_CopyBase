import { IPokemon } from "./pokemon-interface";

export const mock: IPokemon = {
  id: 60,
  name: "Poliwag",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  },
  stats: [
    {
      base_stat: 40,
      stat: {
        name: "hp",
      },
    },
    {
      base_stat: 50,
      stat: {
        name: "attack",
      },
    },
    {
      base_stat: 40,
      stat: {
        name: "defense",
      },
    },
    {
      base_stat: 40,
      stat: {
        name: "special-attack",
      },
    },
    {
      base_stat: 40,
      stat: {
        name: "special-defense",
      },
    },
    {
      base_stat: 90,
      stat: {
        name: "speed",
      },
    },
  ],
  types: [
    {
      type: {
        name: "water",
      },
    },
  ],
  evolutions: [
    {
      id: 61,
      name: "Poliwhirl",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
      },
      stats: [
        {
          base_stat: 65,
          stat: {
            name: "hp",
          },
        },
        {
          base_stat: 65,
          stat: {
            name: "attack",
          },
        },
        {
          base_stat: 65,
          stat: {
            name: "defense",
          },
        },
        {
          base_stat: 50,
          stat: {
            name: "special-attack",
          },
        },
        {
          base_stat: 50,
          stat: {
            name: "special-defense",
          },
        },
        {
          base_stat: 90,
          stat: {
            name: "speed",
          },
        },
      ],
      types: [
        {
          type: {
            name: "water",
          },
        },
      ],
      evolutions: [
        {
          id: 62,
          name: "Poliwrath",
          sprites: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
          },
          stats: [
            {
              base_stat: 90,
              stat: {
                name: "hp",
              },
            },
            {
              base_stat: 95,
              stat: {
                name: "attack",
              },
            },
            {
              base_stat: 95,
              stat: {
                name: "defense",
              },
            },
            {
              base_stat: 70,
              stat: {
                name: "special-attack",
              },
            },
            {
              base_stat: 90,
              stat: {
                name: "special-defense",
              },
            },
            {
              base_stat: 70,
              stat: {
                name: "speed",
              },
            },
          ],
          types: [
            {
              type: {
                name: "water",
              },
            },
            {
              type: {
                name: "fighting",
              },
            },
          ],
        },
        {
          id: 186,
          name: "Politoed",
          sprites: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
          },
          stats: [
            {
              base_stat: 90,
              stat: {
                name: "hp",
              },
            },
            {
              base_stat: 75,
              stat: {
                name: "attack",
              },
            },
            {
              base_stat: 75,
              stat: {
                name: "defense",
              },
            },
            {
              base_stat: 90,
              stat: {
                name: "special-attack",
              },
            },
            {
              base_stat: 100,
              stat: {
                name: "special-defense",
              },
            },
            {
              base_stat: 70,
              stat: {
                name: "speed",
              },
            },
          ],
          types: [
            {
              type: {
                name: "water",
              },
            },
          ],
        },
      ],
    },
  ],
};
