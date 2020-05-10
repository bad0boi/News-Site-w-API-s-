// $(document).ready(function () {


//     //Latest News: Sports Section // apikey via Uni email 

//     var apiUrl = "https://content.guardianapis.com/search?section=sport&from-date=2020-05-01&order-by=relevance&show-fields=thumbnail&q=sports&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"; 
//     var techApiUrl = "https://content.guardianapis.com/search?section=technology&from-date=2020-05-01&order-by=relevance&show-fields=thumbnail&q=technology&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a";
//     var travelApiUrl = "https://content.guardianapis.com/search?section=travel&from-date=2020-05-01&order-by=relevance&show-fields=thumbnail&q=travel&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"; 
//     var scienceApiUrl = "https://content.guardianapis.com/search?section=science&from-date=2020-04-01&order-by=relevance&show-fields=thumbnail&q=science&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"; 
//     var sportsNews = $('.sports-latest');
//     var techNews = $('#tech-latest'); 
//     var travelNews = $('#travel-latest'); 
//     var scienceNews = $('#science-latest'); 

//     // Call function
//     getSportsNews(apiUrl);
//     getTechNews(techApiUrl); 
//     getTravelNews(travelApiUrl); 
//     getScienceNews(scienceApiUrl); 


//     function resultTemplate(result) {
        
//         return `
           
//             <ul class="list-group">
             
//                <a href="${result.webUrl}" target="_blank"> <li class="list-group-item">${result.webTitle}</li></a>
               
    
    
//                 </ul>
//         `;
//     }

//     function gridResultTemplate(result) {
        
//         return `

       
//         <div class="result col-sm-3 p-3">
//         <div class="card">
//             <a href="${result.webUrl}" class="result-img">
//                 <img src="${result.fields.thumbnail}" class="card-img-top">
//             </a>
//             <div class="card-body">
//                 <h5 class="card-title">${result.webTitle}</h5>
//                 <div class="result-section">
//                     <span>${result.sectionName}</span>
//                 </div>
//                 <a href="${result.webUrl}" class="btn btn-primary" target="_blank">Read More</a>
//             </div>
//         </div>
 


           
//         `;
//     }

    

//     function getSportsNews(apiUrl) {
//         $.ajax({
//             url: apiUrl,
//             success: function (data) 
//              {
                 
//                 var results = data.response.results; 
//                 results.forEach(function (result) { 
//                     sportsNews.append(resultTemplate(result));
//                 });
//             }
//         });
//     }

//     function getTechNews(techApiUrl) {
//         $.ajax({
//             url: techApiUrl,
//             success: function (data) 
//              {
                 
//                 var results = data.response.results; 
//                 results.forEach(function (result) { 
//                     techNews.append(gridResultTemplate(result));
//                 });
//             }
//         });
//     }


//     function getTravelNews(travelApiUrl) {
//         $.ajax({
//             url: travelApiUrl,
//             success: function (data) 
//              {
                 
//                 var results = data.response.results; 
//                 results.forEach(function (result) { 
//                     travelNews.append(gridResultTemplate(result));
//                 });
//             }
//         });
//     }


//     function getScienceNews(scienceApiUrl) {
//         $.ajax({
//             url: scienceApiUrl,
//             success: function (data) 
//              {
                 
//                 var results = data.response.results; 
//                 results.forEach(function (result) { 
//                     scienceNews.append(gridResultTemplate(result));
//                 });
//             }
//         });
//     }

  


    





// });


// *** MINIFIED (optimization)

$(document).ready(function(){var e=$(".sports-latest"),n=$("#tech-latest"),a=$("#travel-latest"),s=$("#science-latest");function c(e){return`\n\n       \n        <div class="result col-sm-3 p-3">\n        <div class="card">\n            <a href="${e.webUrl}" class="result-img">\n                <img src="${e.fields.thumbnail}" class="card-img-top">\n            </a>\n            <div class="card-body">\n                <h5 class="card-title">${e.webTitle}</h5>\n                <div class="result-section">\n                    <span>${e.sectionName}</span>\n                </div>\n                <a href="${e.webUrl}" class="btn btn-primary" target="_blank">Read More</a>\n            </div>\n        </div>\n \n\n\n           \n        `}!function(n){$.ajax({url:n,success:function(n){var a=n.response.results;a.forEach(function(n){e.append(function(e){return`\n           \n            <ul class="list-group">\n             \n               <a href="${e.webUrl}" target="_blank"> <li class="list-group-item">${e.webTitle}</li></a>\n               \n    \n    \n                </ul>\n        `}(n))})}})}("https://content.guardianapis.com/search?section=sport&from-date=2020-05-01&order-by=relevance&show-fields=thumbnail&q=sports&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"),function(e){$.ajax({url:e,success:function(e){var a=e.response.results;a.forEach(function(e){n.append(c(e))})}})}("https://content.guardianapis.com/search?section=technology&from-date=2020-05-01&order-by=relevance&show-fields=thumbnail&q=technology&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"),function(e){$.ajax({url:e,success:function(e){var n=e.response.results;n.forEach(function(e){a.append(c(e))})}})}("https://content.guardianapis.com/search?section=travel&from-date=2020-05-01&order-by=relevance&show-fields=thumbnail&q=travel&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"),function(e){$.ajax({url:e,success:function(e){var n=e.response.results;n.forEach(function(e){s.append(c(e))})}})}("https://content.guardianapis.com/search?section=science&from-date=2020-04-01&order-by=relevance&show-fields=thumbnail&q=science&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a")});
