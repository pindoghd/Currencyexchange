
  // Begin building an object to contain our API call's query parameters
  // Set the API key


// function test() {
//     queryURL = buildQueryURL();
// fetch(queryURL)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//     console.log(data);
// })};
// test();

// working function to get present what the selected one is

//code to ccreate a starting currency column

var elements = document.getElementsByClassName('start-currency-dropdown');

Array.from(elements).forEach((element) => {
  element.addEventListener('click', (event) => {
    alert(`Clicked ${event.target.innerText}!`);
    $("#starter-column").empty();
    var currency = event.target.innerText;
console.log(currency);
var startCurrency = $("<div id = start-currency data-value = " + currency + ">").text(currency);
$("#starter-column").append(startCurrency);
buildQueryURL();
  });  
});


//code to create an end element column
var element = document.getElementsByClassName('test');

Array.from(element).forEach((element) => {
    element.addEventListener('click', (event) => {
      alert(`Clicked ${event.target.innerText}!`);
      $("#end-column").empty();
      var currency = event.target.innerText;
  console.log(currency);
  var endCurrency = $("<div id = end-currency data-value = " + currency + ">").text(currency);
  $("#end-column").append(endCurrency);
    });  
  });
  



function buildQueryURL(){
    var queryURL = "https://api.currencybeacon.com/v1/latest?";
    var queryParams = { "api_key": "pF0NkK7DdZSDlYWoKJJ4Rj09c9hrwO6z" };
    queryParams.base = $("#start-currency").attr('data-value');
    console.log($("#end-column").attr('data-value'))
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    console.log($("#start-currency").attr('data-value'))
    return queryURL + $.param(queryParams);
}

function convert (currencyData) {
console.log(currencyData);
function getValuebyKey (object, key) {
    return object[key];
    }
    ansValue = $("#end-currency").attr('data-value');
    console.log(ansValue);
    ans = Number(getValuebyKey(currencyData.rates, ansValue));
    console.log(ans);
    console.log($("#currency-amount").val()
    .trim()
)
    var totalAmount = Number($("#currency-amount").val()
    .trim()
);
    console.log(totalAmount);
    var convertedSum = totalAmount * ans;
    console.log(convertedSum);
    $("#converted-value").append(convertedSum);
}





$("#run-convert").on("click", function (event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
    queryURL = buildQueryURL();
    fetch(queryURL)
    .then(function (response) {
      return response.json()
      .then(convert);
    })
})


// $("#defaultCurrency").on("click", function (event) {
//     // This line allows us to take advantage of the HTML "submit" property
//     // This way we can hit enter on the keyboard and it registers the search
//     // (in addition to clicks). Prevents the page from reloading on form submit.
//     event.preventDefault();
// $("defaultCurrency").empty();
// })