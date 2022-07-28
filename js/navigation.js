window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false )

function navigator(){
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        moviePage();
    }else if(location.hash.startsWith('#genre=')){
        genrePage();
    }else{
        homePage()
    }
    location.hash
}

function homePage(){
    getTrendingMovies();
    getGenres();
}

function genrePage(){
    
}

function searchPage(){
    
}

function moviePage(){
    
}

function trendsPage(){
    
}