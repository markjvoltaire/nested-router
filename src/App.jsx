import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';

import React from 'react';
const pokemonTypes = [
  {
    category: 'Bug',
    id: 'bug',
    pokemon: [
      {
        id: '1',
        name: 'butterfree',
        type: 'bug',
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
      },
      {
        id: '2',
        name: 'pinsir',
        type: 'bug',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
      },
      {
        id: '3',
        name: 'beedrill',
        type: 'bug',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
      },
    ],

    category: 'Electric',
    id: 'electric',
    pokemon: [
      {
        id: '4',
        name: 'Pikachu',
        type: 'electric',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      },
      {
        id: '5',
        name: 'Zapdos',
        type: 'electric',
        image: 'https://img.pokemondb.net/artwork/zapdos.jpg',
      },
      {
        id: '6',
        name: 'Ampharos',
        type: 'electric',
        image: 'https://img.pokemondb.net/artwork/ampharos.jpg',
      },
    ],
    category: 'fire',
    id: 'fire',
    pokemon: [
      {
        id: '7',
        name: 'Chrarmander',
        type: 'fire',
        image:
          'https://static.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest/scale-to-width-down/1000?cb=20200620223744',
      },
      {
        id: '8',
        name: 'Ninetales',
        type: 'fire',
        image:
          'https://static.wikia.nocookie.net/pokemon/images/0/05/038Ninetales.png/revision/latest/scale-to-width-down/1000?cb=20210616231031',
      },
      {
        id: '9',
        name: 'Heatmor',
        type: 'fire',
        image:
          'https://static.wikia.nocookie.net/pokemon/images/b/b0/631Heatmor.png/revision/latest/scale-to-width-down/475?cb=20140329053132',
      },
    ],
  },
];

function Main() {
  return <h1>Pokedex</h1>;
}

function Pokemon() {}

function PokemonList() {
  const { url, path } = useRouteMatch();
  const { categoryId } = useParams();

  const category = pokemonTypes.find(({ id }) => id === categoryId);

  return (
    <div>
      <h2>test{category.category}</h2>
      <span>
        {category.pokemon.map((poke) => {
          return (
            <p key={poke.id}>
              <Link to={`${url}/${poke.id}`}>{poke.name}</Link>
            </p>
          );
        })}
      </span>
      <Route path={`${path}/:pokemonId`}>
        <Pokemon />
      </Route>
    </div>
  );
}

function Categories() {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h2>Types</h2>
      <span>
        {pokemonTypes.map(({ category, id }) => {
          return (
            <p key={id}>
              <Link to={`${url}/${id}`}>{category}</Link>
            </p>
          );
        })}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/categories">
          <PokemonList />
        </Route>
      </div>
    </Router>
  );
}
