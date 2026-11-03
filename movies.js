 async function SearchMovie() {
            try {
                const API_KEY = "43b1572ae2bd8b9107ac4af110136374";

                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const data = await response.json();

                console.log(data);

                const movieSection = document.querySelector(".card");

                movieSection.innerHTML = data.results.map(movie => `
                    <div class="movie">
                        

                        ${
                            movie.poster_path
                                ? `<img
                                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                                    alt="${movie.title}">
                                `
                                : "<p>Poster unavailable</p>"
                        }

                        <p>Release date: ${
                            movie.release_date || "Unknown"
                        }</p>

                        <p>Rating: ${movie.vote_average.toFixed(1)}/10</p>

                        <p>${movie.overview || "No description available."}</p>
                    </div>
                `).join("");

            } catch (err) {
                console.error("Error:", err);
            }
        }

        SearchMovie();