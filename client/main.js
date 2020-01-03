$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    $.ajax({
      url: 'http://localhost:3000/quote',
      type: 'GET'
    })
    .done(function(response){
      console.log(response);
      document.querySelector('#quote').innerHTML = response;
    })
    .fail(function(err){
      console.log('fail')
    })
    

  }

  function addQuote(quote){
    let data = {quote: quote};
    $.ajax({
      url: 'http://localhost:3000/quote',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
    .done(function(response){
      console.log(response);
    })
    .fail(function(err){
      console.log('fail')
    })

  }
});
