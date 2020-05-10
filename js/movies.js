// $(document).ready(function() {



// var settings = {
// 	"async": true,
// 	"crossDomain": true,
//     "url": "https://api.themoviedb.org/3/movie/top_rated?api_key=721543f841f1a0585f00ca2a61dbf821&language=en-US&page=1",
// 	"method": "GET",

// }

// $.ajax(settings).done(function(data){
//     console.log(data);

//     var topRated = $('#topRated');
    
//   // ES6 String Templates
//   for (var i = 0; i <6; i++){
//     topRated.append(`
    
//     <div class="col-sm-4">
//         <div class="card" id="movie-card" style="width: 18rem;">
//         <img class="card-img-top" src="https://image.tmdb.org/t/p/w220_and_h330_face${data.results[i].poster_path}">
//             <h3>${data.results[i].original_title}</h3>
//             <p> Popularity / ${data.results[i].popularity}</p>
//             <p> Vote Average / ${data.results[i].vote_average}</p>
//             <p>Release Date / ${data.results[i].release_date}</p>
//             <small>${data.results[i].overview}</small>
//             <a href="https://www.themoviedb.org/movie/top-rated" target="_blank">read more</a>
//     </div>
// </div>
   
    
 
//    `);
// }




// }); 


// var mpSettings = {
// 	"async": true,
// 	"crossDomain": true,
//     "url": "https://api.themoviedb.org/3/movie/popular?api_key=721543f841f1a0585f00ca2a61dbf821&language=en-US&page=1&region=us",
// 	"method": "GET",

// }

// $.ajax(mpSettings).done(function(data) {
//     console.log(data); 

//     var mostPopular = $('#mostPopular');

//      // ES6 String Templates
//   for (var i = 0; i <6; i++){
//     mostPopular.append(`
    
//     <div class="col-sm-4">
//         <div class="card" id="movie-card" style="width: 18rem;">
//         <img class="card-img-top" src="https://image.tmdb.org/t/p/w220_and_h330_face${data.results[i].poster_path}">
//             <h3>${data.results[i].original_title}</h3>
//             <p> Popularity / ${data.results[i].popularity}</p>
//             <p> Vote Average / ${data.results[i].vote_average}</p>
//             <p>Release Date / ${data.results[i].release_date}</p>
//             <small>${data.results[i].overview}</small>
//             <a href="https://www.themoviedb.org/movie" target="_blank">read more</a>
            
           
//     </div>
// </div>

// </div>
   
    
 
//    `);
// }

    
// });




// var showsSettings = {
// 	"async": true,
// 	"crossDomain": true,
//     "url": "https://api.themoviedb.org/3/tv/popular?api_key=721543f841f1a0585f00ca2a61dbf821&language=en-US&page=us",
// 	"method": "GET",

// }

// $.ajax(showsSettings).done(function(data) {
//     console.log(data); 

//     var tvShows = $('#tvShows');

//      // ES6 String Templates
//   for (var i = 0; i <8; i++){
//     tvShows.append(`
    
//     <div class="col-sm-3">
//         <div class="card" id="movie-card" style="width: 18rem;">
//         <img class="card-img-top" src="https://image.tmdb.org/t/p/w220_and_h330_face${data.results[i].poster_path}">
//             <h3>${data.results[i].original_name}</h3>
//             <p> Popularity / ${data.results[i].popularity}</p>
//             <p> Vote Average / ${data.results[i].vote_average}</p>
//             <p>Release Date / ${data.results[i].release_date}</p>
//             <small id="overview">${data.results[i].overview}</small>

//             <a href="https://www.themoviedb.org/tv" target="_blank">read more</a>
            


//             </div>
//         </div>
   
    
 
//    `);
// }


    
// });








// }); 

// **** MINIFIED (optimization)

$(document).ready(function(){$.ajax({async:!0,crossDomain:!0,url:"https://api.themoviedb.org/3/movie/top_rated?api_key=721543f841f1a0585f00ca2a61dbf821&language=en-US&page=1",method:"GET"}).done(function(e){console.log(e);for(var a=$("#topRated"),t=0;t<6;t++)a.append(`\n    \n    <div class="col-sm-4">\n        <div class="card" id="movie-card" style="width: 18rem;">\n        <img class="card-img-top" src="https://image.tmdb.org/t/p/w220_and_h330_face${e.results[t].poster_path}">\n            <h3>${e.results[t].original_title}</h3>\n            <p> Popularity / ${e.results[t].popularity}</p>\n            <p> Vote Average / ${e.results[t].vote_average}</p>\n            <p>Release Date / ${e.results[t].release_date}</p>\n            <small>${e.results[t].overview}</small>\n            <a href="https://www.themoviedb.org/movie/top-rated" target="_blank">read more</a>\n    </div>\n</div>\n   \n    \n \n   `)});$.ajax({async:!0,crossDomain:!0,url:"https://api.themoviedb.org/3/movie/popular?api_key=721543f841f1a0585f00ca2a61dbf821&language=en-US&page=1&region=us",method:"GET"}).done(function(e){console.log(e);for(var a=$("#mostPopular"),t=0;t<6;t++)a.append(`\n    \n    <div class="col-sm-4">\n        <div class="card" id="movie-card" style="width: 18rem;">\n        <img class="card-img-top" src="https://image.tmdb.org/t/p/w220_and_h330_face${e.results[t].poster_path}">\n            <h3>${e.results[t].original_title}</h3>\n            <p> Popularity / ${e.results[t].popularity}</p>\n            <p> Vote Average / ${e.results[t].vote_average}</p>\n            <p>Release Date / ${e.results[t].release_date}</p>\n            <small>${e.results[t].overview}</small>\n            <a href="https://www.themoviedb.org/movie" target="_blank">read more</a>\n            \n           \n    </div>\n</div>\n\n</div>\n   \n    \n \n   `)});$.ajax({async:!0,crossDomain:!0,url:"https://api.themoviedb.org/3/tv/popular?api_key=721543f841f1a0585f00ca2a61dbf821&language=en-US&page=us",method:"GET"}).done(function(e){console.log(e);for(var a=$("#tvShows"),t=0;t<8;t++)a.append(`\n    \n    <div class="col-sm-3">\n        <div class="card" id="movie-card" style="width: 18rem;">\n        <img class="card-img-top" src="https://image.tmdb.org/t/p/w220_and_h330_face${e.results[t].poster_path}">\n            <h3>${e.results[t].original_name}</h3>\n            <p> Popularity / ${e.results[t].popularity}</p>\n            <p> Vote Average / ${e.results[t].vote_average}</p>\n            <p>Release Date / ${e.results[t].release_date}</p>\n            <small id="overview">${e.results[t].overview}</small>\n\n            <a href="https://www.themoviedb.org/tv" target="_blank">read more</a>\n            \n\n\n            </div>\n        </div>\n   \n    \n \n   `)})});