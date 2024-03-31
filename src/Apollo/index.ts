import { ApolloQueryResult } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { Character } from "../Intefaces/Interfaces";
import { GET_CHARACTERS } from "./actions";

export const charactersInfo = makeVar<Character[]>([]);

export async function getCharactersMultipleTimes(
  client: any,
  numberOfPages: number
): Promise<void> {
  const characters: Character[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    try {
      const {
        data,
      }: ApolloQueryResult<{ characters: { results: Character[] } }> =
        await client.query({
          query: GET_CHARACTERS,
          variables: { page: i },
        });
      characters.push(...data.characters.results);
    } catch (error) {
      console.error(`Error fetching characters for page ${i}:`, error);
    }
  }
  charactersInfo(characters); 
}
