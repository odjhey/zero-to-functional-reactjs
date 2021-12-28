import { useCallback, useEffect, useReducer, useState } from "react";

function Pokemon() {
  // smart/component-with-data
  // 1) loading
  // 2) error
  // 3) with-data

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [pokeId, setPokeId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((d) => {
        return d.json();
      })
      .then((d) => {
        setData({ id: d.id, name: d.name, shiny: d.sprites.front_shiny });
        setLoading(false);
      });
  }, [pokeId]);

  if (loading) {
    return <p>loading...</p>;
  }

  // if(error)

  return (
    <div>
      <input
        type="number"
        value={pokeId}
        onChange={(ev) => {
          setPokeId(() => ev.target.value);
        }}
      ></input>
      <h3>
        {data.name} {data.id}
      </h3>
      <img src={data.shiny} style={{ width: "50%" }} alt={data.name}></img>
    </div>
  );
}

export default Pokemon;
