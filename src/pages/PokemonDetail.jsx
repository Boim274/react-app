import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-red-500 text-center text-xl">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="card lg:card-side bg-amber-500 text-white shadow-xl max-w-md">
        <figure>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-32 h-32 object-contain m-4"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title  text-center">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}.
          </h2>
          
          <p><strong>Number:</strong> {pokemon.id}</p>
          <p><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(", ")}</p>
          <p><strong>Max CP:</strong> {pokemon.stats[0]?.base_stat}</p>
          <p><strong>Stats:</strong></p>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <button onClick={() => navigate(-1)} className="btn border-none bg-sky-800 text-white">Back</button>
          <div className="card-actions justify-between">
           
            {/* <button className="btn btn-primary">Catch {pokemon.name}</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
