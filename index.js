'use strict'

function renderResults(){
    $(".results").removeClass("hidden");
    $(".results").html(`<div class="weather-results">Weather Results</div>
    <div class="music-results">Music Results</div>
    <ul class="recommendations">
        <h2>Recomendations</h2> 
        <Li>
            Results 1 
            <div class="image">Image for Results</div>
        </Li>
        <Li>
            Results 2
            <div class="image">Image for Results</div>
        </Li>
        <Li>
            Results 3 
            <div class="image">Image for Results</div>
        </Li>
    </ul>`)
}

function watchForm(){
    $(".form").on('submit', function(event){
        event.preventDefault();
        renderResults();
    });
}

$(watchForm())