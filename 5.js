const prompt = require("prompt-sync")();
const movies = [
    {
        name:'movie1',
        category:'action',
        cast:'someone famous',
        release : '2020',
        budget:'30 mil',
    },
    {
        name:'movie2',
        category:'action',
        cast:'someone famous',
        release : '2020',
        budget:'30 mil',
    },
    {
        name:'movie3',
        category:'action',
        cast:'someone famous',
        release : '2020',
        budget:'30 mil',
    },
]
var users = []

//create user
const createUser = (userName , email)=>{
    let userId = users.push({
        userName,
        email,
        favourites: []
    })
    return userId-1
}
// Select name from Movies where name=movieName
const searchMovie=(movieName)=>{
    for(let i =0 ; i<movies.length;++i){
        if(movies[i].name === movieName){
            return movies[i]
        }
    }
    return "movie not found"
}
const addToFavourite=(userId,movieName)=>{
    for(let i =0 ; i<movies.length;++i){
        if(movies[i].name === movieName){
            // i is the movie index
            users[userId].favourites.push(i)
        }
    }
}
const removeFromFavourite=(userId , movieName)=>{
    for(let i =0 ; i<movies.length;++i){
        if(movies[i].name === movieName){
            
            // i is the movie index
            for(let j = 0 ; j<users[userId].favourites.length ; ++j){
                
                if(users[userId].favourites[j] == i){
                    users[userId].favourites.splice(j , 1)
                }
            }
            
        }
    }
    console.log('removed movie from favourites')
}
const listMyFaves = (userId)=>{
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        console.log(movies[users[userId].favourites[i]])
    }
}
const searchFavesByName =(userId , movieName)=>{
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        if(movies[users[userId].favourites[i]].name === movieName){
            console.log(movies[users[userId].favourites[i]])
            return
        }
    }
    console.log("movie not found in faves")
}
                          //0 categor , 1 cast , 2 genre
const searchFavesByAux =( userId , movieCat)=>{
    found = []
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        if(movies[users[userId].favourites[i]].category === movieCat){
            found.push(movies[users[userId].favourites[i]].name)            
        }
    }
    return found
}
const searchFavesByCast =(userId , movieCast)=>{
    found = []
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        if(movies[users[userId].favourites[i]].cast === movieCast){
            found.push(movies[users[userId].favourites[i]].name)            
        }
    }
    return found
}
