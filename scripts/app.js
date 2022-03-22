const movieTitle = document.querySelector(".movie-title");
const releaseDate = document.querySelector(".release-date");
const movieGenres = document.querySelector(".genres");
const movieDuration = document.querySelector(".movie-duration");
const moviePoster = document.querySelector(".movie-poster-container img");
const movieQuote = document.querySelector(".movie-info-quote");
const movieOverview = document.querySelector(".movie-info-overview");
const footerYear = document.querySelector(".year");

window.onload = () => {
    let url = 'https://api.themoviedb.org/3/movie/634649?api_key=2cc459f96f339fbadb36b727a4023e09';

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        movieTitle.textContent = data.title;

        let date = new Date(data.release_date)
        releaseDate.textContent = `${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
        
        
        movieQuote.textContent = data.tagline;
        movieDuration.textContent = `${data.runtime} minutes`;
        movieOverview.textContent = data.overview;

        let posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePoster.src = posterUrl;
        moviePoster.alt = `${data.title} poster`;


        let genresToDisplay = '';


        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name}, `;
        }); 

        let genresUpdated = genresToDisplay.slice(0, -2) + '.';
        movieGenres.textContent = genresUpdated;

        let currentYear = new Date().getFullYear();
        footerYear.textContent = currentYear;



    })

}



const slides = document.getElementsByClassName("carousel__item");
const slidesTotal = slides.length;
const prevButton = document.querySelector("#carousel__button--prev");
const nextButton = document.querySelector("#carousel__button--next");

let slidePosition = 0;

nextButton.addEventListener("click", () => {
    for(let slide of slides){
        slide.classList.remove("carousel__item--visible");
    }
    if(slidePosition == slidesTotal-1) {
        slidePosition == 0;
    }else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel__item--visible");
})

prevButton.addEventListener("click", () => {
    for(let slide of slides){
        slide.classList.remove("carousel__item--visible");
    }
    if(slidePosition == 0) {
        slidePosition == slidesTotal-1;
    }else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel__item--visible");
})