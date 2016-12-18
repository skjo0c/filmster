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

  	if (data["Response"] == "False") {
      htmlString = `<div class="alert alert-danger text-center" role="alert">${data["Error"]}</div>`
    }

    else{ 
	  data["Search"].forEach(function(movie){
	    htmlString += `<img src=${movie["Poster"] == "N/A" ? "/images/your_default_image.png" : movie["Poster"]} data-id="${movie['imdbID']}" />
	                   <p>${movie["Title"]}</p>
	                   <p>${movie["Year"]}</p>`;
	  });
	}

	  container.append(htmlString);
  }

  $('#movies').on('click', 'img', function(e){
	  e.preventDefault();


	  let id = $(e.target).data('id');

	   $.ajax({
	    url: `https:/www.omdbapi.com/?`,
	    data: {i: id}
	  	})

	  .done(function(data){
	  		displayMovie(data)
	  	})

	});

  	function displayMovie(data){
  			let container = $('#movie')
	    	let htmlString = "";

	    	container.empty()

	    	htmlString += `<p>${data.Title}</p>
	    					<p>${data.Plot}</p>
	    					<p>${data.imdbRating}</p>`
	    		// console.log(data.Plot);

	    	<form id="rating-form" action="/reviews" method="POST">
			  <input type="hidden" name="authenticity_token" value=${window._token} />
			  <input type="hidden" name="imdbid" value=${movie["imdbID"]} />
			  <textarea name= "review[comment]" class="form-control" placeholder="Your review in 140 characters"/>
			  <br />
			  <input type="submit" class="btn btn-success pull-right" />
			</form>
			
			container.append(htmlString);
	}
});