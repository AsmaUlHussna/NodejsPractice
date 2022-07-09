const prompt = require("prompt-sync")();
console.log("Welcome To Booking-com");
let users = [];
let mail = [];
const uname = prompt("Enter UserName: ");
users.push(uname)
const Mmail = prompt("Enter Email: ");
mail.push(Mmail)
console.log(`Welcome ${uname}`);
const movies = [
    {
        name:"Chennai Express",
        category:"Comedy",
        cast:"SRK",
        release : "2016",
        budget:"200 mil",
        favotires: 0,
    },
    {
        name:"Jab We Meet",
        category:"Romantic",
        cast:"Sahid Kapoor",
        release : "2014",
        budget:"100 mil",
        favotires: 0,
    },
    {
        name:"Movie3",
        category:"Action",
        cast:"Aksay Kumer",
        release : "2021",
        budget:"300 mil",
        favotires: 0,
    },
];
while (1) {
    const option =
      "1. ALL Movies 2.SEARCH  3.BOOKMARK 4.BOOKMARKED WRITTER NEWS 5.FILTER 6.FIND NEAREST";
    console.log(option);
    const choose = prompt("Your Choice: ");
  
    switch (choose) {
      case "2":
        const searchme = prompt("Enter  Movie Name or cast or category :");
         movies.forEach((el) => {
          
          if (el.name.includes(searchme)) {
            console.log(el);
          }
          if (el.cast.includes(searchme)) {
            console.log(el);
          }
          if (el.category.includes(searchme)) {
            console.log(el);
        }
    });
  
        break;
  
      case "3":
        const fab = prompt("Movie Name for Favorites:");
        let i = 0;
        movies.forEach((el) => {
          //console.log(el.name);
          if (el.name.includes(fab)) {
            const book = prompt(
              `1 for favorites movie:  ${el.name} :`
            );
  
            movies[i].favorites = book;
            console.log(`Favorites set successfully for   ${el.name}`);
          }
          i++;
        });
  
        break;
  
      case "4":
       const remove = prompt("Enter Movie Name that you want to remove: ")
       
        movies.forEach((el) => {
          //console.log(el.name);
          if (el == movies.name) {
            console.log(el);
          }
         
        });
  
        break;
  
      case "1":
        console.log(movies);
  
        break;
    }
  }
  