export interface APIPokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};

export interface APIPokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

export interface APIPokemon {
    abilities: any[];
    base_experience: number;
    forms: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    past_types: any[];
    species: {
        name: string;
        url: string;
    };
    sprites: { [key:string]: string};
    stats: APIPokemonStat[];
    types: APIPokemonType[];
    weight: number;
};

export interface APIEvolutionChainItem {
    evolution_details: any[];
    evolves_to?: APIEvolutionChainItem[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    }
}

export interface APIEvolutionChain {
    baby_trigger_item: any;
    chain: APIEvolutionChainItem;
    id: number;
}