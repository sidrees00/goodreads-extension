$.get( "http://cors.io/?https://www.goodreads.com/book/title.json?key=09AL1JddKsgF9Srxiw73g&title=moth+smoke", function( data ) {
  $( ".result" ).html( data );
  console.log(data);
})

