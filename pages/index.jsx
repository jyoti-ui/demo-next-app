import { useState } from "react";

const Header = ({ likes }) => {
  return <h2>{likes}</h2>;
};

const HomePage = () => {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };
  return (
    <>
      <Header />
      <Header likes={likes} />
      {names.map((name) => {
        return <h1 key={name}>{name}</h1>;
      })}
      <button onClick={handleClick}>Like {likes} </button>
    </>
  );
};

export default HomePage;