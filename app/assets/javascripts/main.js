$(function(){

	let form = $('#movie-search');
	form.submit(function(e){
  		e.preventDefault();

  		$.ajax({
		    url: 'http://www.omdbapi.com/?',
    		data: form.serialize()
		  })
		  .done(function(data){
		    displayMovies(data);
		  });

	});

  function displayMovies(data){
  	let container = $('#movies')
  	let htmlString = "";

  	container.empty()

	  data["Search"].forEach(function(movie){
	    htmlString += `<img src=${movie["Poster"]} />
	                   <p>${movie["Title"]}</p>
	                   <p>${movie["Year"]}</p>`;
	  });

	  container.append(htmlString);
  }

  $('#movies').on('click', 'img', function(e){
	  e.preventDefault();
	   $.ajax({
	    url: `https:/www.omdbapi.com/?`,
	    data: {i: id}
	  })
	  .done(function(data){
	    console.log(data)
  })
	});
});