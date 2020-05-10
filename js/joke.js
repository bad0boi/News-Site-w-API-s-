// $(document).ready(function() {



// var settings = {
// 	"async": true,
// 	"crossDomain": true,
//     "url": "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous?type=twopart&contains=joke",
// 	"method": "GET",

// }

// $.ajax(settings).done(function(data){
//     console.log(data);

//     var joke = $('.joke');
    
//   // ES6 String Templates
//     joke.append(`
    
  

//         <div class="card-body">
//             <!-- Button trigger modal -->
//                 <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#joke">
//                     Amuse Me 
//                 </button>

// <!-- Modal -->
// <div class="modal fade" id="joke" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Joke of the session:</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body" id="joke">
//         <h3>${data.setup}</h3>
//             <h4>${data.delivery}</h4>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
// </div>

// </div>
   
    
 
//    `);
// })




// }); 


//        MINIFIED JS


$(document).ready(function(){$.ajax({async:!0,crossDomain:!0,url:"https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous?type=twopart&contains=joke",method:"GET"}).done(function(n){console.log(n),$(".joke").append(`\n    \n  \n\n        <div class="card-body">\n            \x3c!-- Button trigger modal --\x3e\n                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#joke">\n                    Amuse Me \n                </button>\n\n\x3c!-- Modal --\x3e\n<div class="modal fade" id="joke" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLabel">Joke of the session:</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body" id="joke">\n        <h3>${n.setup}</h3>\n            <h4>${n.delivery}</h4>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n    </div>\n</div>\n\n</div>\n   \n    \n \n   `)})});
