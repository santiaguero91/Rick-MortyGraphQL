import { CardMainDiv } from "./CardStyle";

function Card(character: any) {
  return (
    <CardMainDiv
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img width={"150px"} height={"150px"} src={character.image} />
      <h5>{character.name}</h5>
    </CardMainDiv>
  );
}

export default Card;
