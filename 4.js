const prompt = require("prompt-sync")();
console.log("Welcome To MovieTheather");
const movies = [
    {
        name:'movie1',
        category:'action',
        cast:'SRK',
        release : '2020',
        budget:'300 mil',
    },
    {
        name:'movie2',
        category:'Comedy',
        cast:'Akshoy Kumer',
        release : '2021',
        budget:'130 mil',
    },
    {
        name:'movie3',
        category:'Horror',
        cast:'Salman Khan',
        release : '2018',
        budget:'200 mil',
    },
];
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

while (1) {
  const option =
    "1. ALL Movies 2.addToFavourite 3.removetofavourite 4.listMyFaves 5.search 6.FIND NEAREST";
  console.log(option);
  const choose = prompt("Your Choice: ");
  switch (choose) {
    case "2":
      const addtofavorite  = prompt("Enter your favorite movie name:");
      movies.forEach((el) => {
            if(movies.name === el){
                
                el.favourites.includes(addtofavorite)
            }
    });
    break;
    case "3":
      const removeFromFavourite  = prompt("Enter favorite movie name that you want to remove:");
      movies.forEach((el) => {
            if(movies.name === el){
                
                el.favourites.includes(removeFromFavourite)
            }
    });
    case "4":
        users.search(favourites);
    case "1":
      console.log(movies);

      break;
      
    case "5":
        const search = prompt("Enter Movie Name or Cast Name or Category Name:");

        movies.forEach((el) => {
          
          if (el.name.includes(search)) {
            console.log(el);
          }
          if (el.cast.includes(search)) {
            console.log(el);
          }
          if (el.category.includes(search)){
              console.log(el);
          }
        });
  
        break;
        
                    
              case "6":
        if (choose_nested == 2) {
  
          const max_price = prompt("Enter Hotel Max Price :");
          hotels.forEach((el) => {
              if (el.Price <= max_price) {
                  console.log(el);
                }
          });
        }
        if (choose_nested == 3) {
  
          const min_review = prompt("Enter Hotel Max Price :");
          hotels.forEach((el) => {
              if (el.Review >= min_review) {
                  console.log(el);
                }
          });
  
        }
  
        break;
  }
}
