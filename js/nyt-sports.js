$(document).ready(function() {



function execute() {
  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=source&q=sport%20news&sort=newest&api-key=[YOUR_API_KEY]";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  fetch(url, options).then(
    response => {
      if (response.ok) {
        return response.text();
      }
      return response.text().then(err => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}

}); 