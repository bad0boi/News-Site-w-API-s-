$(document).ready(function () {
    var apiKey = '9750bcc9-e464-4cd0-8f56-0e4a209f30de';
    var queryString = "q"; //or "&q=" 
    var apiUrl = "https://content.guardianapis.com/search?pageSize=50&show-fields=thumbnail&api-key=" + apiKey + "&" + queryString + "=";
    var searchQuery = $('#search-query');
    var searchForm = $('#search-news');
    var searchSubmit = $('#search-submit');
    var searchResults = $('#search-results');

    // Call news function to populate news articles
    getLatestNews(apiUrl);
    searchGuardian();

    // Create a reuseable template for other functions to maintain consistency
    // and avoid repeating code
    // Accetpts JS object as argument

    function resultTemplate(result) {
        return `
            <div class="result col-md-4 p-3">
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


    // Make simple call to API and append results to the "searchResults" variable
    // We pass the "result" object to resultTemplate which handles structure of result
    function getLatestNews(apiUrl) {
        $.ajax({
            url: apiUrl,
            success: function (data) {
                var results = data.response.results;
                results.forEach(function (result) {
                    searchResults.append(resultTemplate(result));
                });
            }
        });
    }

    function searchGuardian() {
        searchQuery.keyup(function () {
            searchResults.empty();

            $.ajax({
                url: apiUrl + searchQuery.val(),
                success: function (data) {
                    var results = data.response.results;
                    results.forEach(function (result) {
                        searchResults.append(resultTemplate(result));
                    });
                }
            });
        });
    }
});