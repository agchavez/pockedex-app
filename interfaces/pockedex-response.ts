export interface PockeResponse {
    results: Pockemon[];
    count:   number;
}

export interface Pockemon {
    _id:      string;
    name:     string;
    type:     Type;
    number:   number;
    urlImage: string;
    dream_world?: string;
    __v:      number;
}

export enum Type {
    Fighting = "fighting",
    Flying = "flying",
    Nomral = "nomral",
    Poison = "poison",
}
