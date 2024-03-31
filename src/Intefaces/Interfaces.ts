export interface Location {
  name: string;
  dimension: string;
}

export interface Origin {
  name: string;
}

export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  image: string;
  location: Location;
  origin: Origin;
}
