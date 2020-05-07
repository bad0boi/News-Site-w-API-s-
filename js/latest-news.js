$(document).ready(function () {


    //Latest News: Sports Section // apikey via Uni email 

    var apiUrl = "https://content.guardianapis.com/search?q=sporting&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"; 
    var techApiUrl = "https://content.guardianapis.com/search?show-fields=thumbnail&q=technology%20%2B%20future&api-key=519954fb-6b35-4fd4-8fcd-ab83eee3cc0a"; 
    var sportsNews = $('.sports-latest');
    var techNews = $('#tech-latest'); 

    // Call function
    getSportsNews(apiUrl);
    getTechNews(techApiUrl); 


    function resultTemplate(result) {
        
        return `
           
            <ul class="list-group">
             
               <a href="${result.webUrl}" target="_blank"> <li class="list-group-item">${result.webTitle}</li></a>
               
    
    
                </ul>
        `;
    }

    function gridResultTemplate(result) {
        
        return `
       
        <div class="result col-sm-3 p-3">
        <div class="card">
            <a href="${result.webUrl}" class="result-img">
                <img src="${result.fields.thumbnail}" class="card-img-top">
            </a>
            <div class="card-body">
                <h5 class="card-title">${result.webTitle}</h5>
                <div class="result-section">
                    <span>${result.sectionName}</span>
                </div>
                <a href="${result.webUrl}" class="btn btn-primary" target="_blank">Read More</a>
            </div>
        </div>
    </div>


           
        `;
    }

    

    function getSportsNews(apiUrl) {
        $.ajax({
            url: apiUrl,
            success: function (data) 
             {
                 
                var results = data.response.results; 
                results.forEach(function (result) { 
                    sportsNews.append(resultTemplate(result));
                });
            }
        });
    }

    function getTechNews(techApiUrl) {
        $.ajax({
            url: techApiUrl,
            success: function (data) 
             {
                 
                var results = data.response.results; 
                results.forEach(function (result) { 
                    techNews.append(gridResultTemplate(result));
                });
            }
        });
    }

  


    





});
