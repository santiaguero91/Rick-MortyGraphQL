import { CardMainDiv } from "./CardStyle";

function Card(character: any) {
  return (
    <CardMainDiv
    >
      <img width={"150px"} height={"150px"} src={character.image} />
      <h5>{character.name}</h5>
    </CardMainDiv>
  );
}

export default Card;
