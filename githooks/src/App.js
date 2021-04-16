import React, { useState, useEffect } from 'react';

export default function App(){
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getRepositories(){
      const response = await fetch('https://api.github.com/users/OtavioAL/repos');
      const data = await response.json();
      setRepositories(data);
    }
    getRepositories();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Voce tem ${filtered.length} favoritos`;

  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositories(newRepositories);
  }

  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, [] );

  function handlePositionReceived(coords){
    const { latitude, longitude } = coords;

    console.log(coords);
    setLocation({ latitude, longitude });
  }

  return (
    <>
      <ul>
        {repositories.map(rep => (
            <li key={rep.id} >
              {rep.name}
              {rep.favorite && <span>(Favorito)</span>}
              <button onClick={() => handleFavorite(rep.id)}> Favoritar </button>
            </li>
          ))}
      </ul>
      Latitude: { location.latitude } <br />
      Longitude: { location.longitude }
    </>
  );


}
