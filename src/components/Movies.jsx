import { useState } from "react";
import Movie from "./Movie";

const Movies = () => {
    const [movies] = useState([
        {
            id: 1,
            name: 'The Shawshank Redemption',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        },
        {
            id: 2,
            name: 'The Godfather',
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        },
        {
            id: 3,
            name: 'The Godfather: Part II',
            description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        }
    ]);
    return (
        movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
        ))
    );
}

export default Movies;
