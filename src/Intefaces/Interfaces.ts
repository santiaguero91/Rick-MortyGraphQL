export interface Location {
  name: string;
}

export interface Episode {
  id: string;
  name: string;
  episode: string;
}

export interface Character {
  id: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  image: string;
  location: Location;
  episode: Episode[];
}