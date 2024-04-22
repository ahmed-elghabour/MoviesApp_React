import React from 'react';

const Movie = (props) => {
    const { movie } = props;
    return (
        <div className="movie" style={{ maxWidth: '500px', backgroundColor: 'greenyellow', padding: '10px', margin: '10px auto', borderRadius: '10px', border: '4px solid green' }}>
            <h3>ID: {movie.id}</h3>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
        </div>
    );
}

export default Movie;
