
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

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3fbb304200msh5e3397b75856034p1a036ajsnc0197628f595',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};

var elements = document.getElementsByClassName('start-currency-dropdown');

Array.from(elements).forEach((element) => {
  element.addEventListener('click', (event) => {
    // alert(`Clicked ${event.target.innerText}!`);
    $("#starter-column").empty();
    var currency = event.target.innerText;
console.log(currency);
var startCurrency = $("<h3 id = start-currency data-value = " + currency + ">" + "</h3>").text(currency);
$("#starter-column").append(startCurrency);
buildQueryURL();
  });  
});


//code to create an end element column
var element = document.getElementsByClassName('test');

Array.from(element).forEach((element) => {
    element.addEventListener('click', (event) => {
    //   alert(`Clicked ${event.target.innerText}!`);
      $("#end-column").empty();
      var currency = event.target.innerText;
  console.log(currency);
  var endCurrency = $("<h3 id = end-currency data-value = " + currency + ">" + "</h3>").text(currency);
  $("#end-column").append(endCurrency);
    });  
  });
  



function buildQueryURL(){
    var queryURL = "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?";
   var queryParams = {};
    queryParams.from = $("#start-currency").attr('data-value');
    queryParams.to = $("#end-currency").attr('data-value');
    queryParams.amount = $("#currency-amount").val().trim();
    console.log($("#end-column").attr('data-value'))
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    console.log($("#start-currency").attr('data-value'))
    return queryURL + $.param(queryParams);
}

function convert (currencyData) {
console.log(currencyData);
// function getValuebyKey (object, key) {
//     return object[key];
//     }
//     ansValue = $("#end-currency").attr('data-value');
//     console.log(ansValue);
//     ans = Number(getValuebyKey(currencyData.rates, ansValue));
//     console.log(ans);
//     console.log($("#currency-amount").val()
//     .trim()
// )
//     var totalAmount = Number($("#currency-amount").val()
//     .trim()
// );
//     console.log(totalAmount);
    $("#converted-value").empty();
    $("#current-rate").empty();
    var convertedSum = currencyData.result;
    console.log(currencyData.result);
    $("#converted-value").append("<h3> Converted Sum = " + convertedSum + "</h3>");
    $('#current-rates').text(currencyData.info.rate);
}





$("#run-convert").on("click", function (event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
    queryURL = buildQueryURL();
    fetch(queryURL,options)
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