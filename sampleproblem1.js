const prompt = require("prompt-sync")();

console.log("Welcome To Booking-com");

var hotels = [
  {
    name: "Radission",
    description: "Best hotel in dhaka",
    location: "Dhaka",
    price: 12500,
    food: "Buffet Full day",
    review: [],
    distance: "10",
    rating:0
  },

  {
    name: "Penisula",
    description: "Good in chittagong",
    location: "Chittagong",
    price: 8500,
    pood: "Buffet Breakfast",
    review: [],
    distance: "250",
    rating:0
  },

  {
    name: "Tulip",
    description: "Best hotel in cox",
    location: "Cox Bazar",
    price: 9500,
    food: "Buffet Breakfast",
    review: [],
    distance: "510",
    rating: 0
  },

  {
    name: "Grace",
    description: "budget hotel",
    location: "Cox Bazar",
    price: 4800,
    Food: "N-A",
    review: [],
    distance: "480",
    rating:0
  },
];

while (1) {
  const option = "1. ALL HOTELS 2.SEARCH  3.REVIEW 4.SEE REVIEW 5.FIND NEAREST";
  console.log(option);
  const choose = prompt("Your Choice: ");
  if(choose==1){
    searchALLHotels(hotels);
  } else if(choose ==2){
    const searchString = prompt("Enter Hotel Name or Description:").toLowerCase();
    search(searchString);
  } 
  else if(choose==3){
    const hotelName = prompt("Enter Hotel Name for Review:").toLowerCase();
    review(hotelName);
  } else if (choose == 4){
    sortHotels();
  } else if(choose ==5){
    const distance = prompt("Enter Distance Range From Dhaka: ");
    findNearest(distance)
  }
  else if(choose ==7){
    break;
  }
  // switch (choose) {
  //   case "2":
  //     const search = prompt("Enter Hotel Name or Description:");

  //     hotels.forEach((el) => {
        
  //       if (el.name.includes(search)) {
  //         console.log(el);
  //       }
  //       if (el.description.includes(search)) {
  //         console.log(el);
  //       }
  //     });

  //     break;

  //   case "3":
  //     const search_review = prompt("Enter Hotel Name for Review:");
  //     let i = 0;
  //     hotels.forEach((el) => {
        
  //       if (el.name.includes(search_review)) {
  //         const review_score = prompt(
  //           `Enter Review for hotel Name ${el.name} :`
  //         );

  //         hotels[i].Review = review_score;
  //         console.log(
  //           `Review set successfully for hotel Name ${el.name} with Rating ${el.Review}  :`
  //         );
  //       }
  //       i++;
  //     });

  //     break;

  //   case "4":
  //     hotels.sort(function (a, b) {
  //       return b.Review - a.Review;
  //     });
  //     console.log(hotels);

    
  //     break;

  //   case "5":
  //     const option_nested =
  //      "1.FILTER by Location  2.FILTER by Max Price 3.FILTER by Min Review";
  //     console.log(option_nested);
  //     const choose_nested = prompt("Your Choice: ");
  //     if (choose_nested == 1) {
  //       const Location_name = prompt("Enter Hotel Location:");
  //       hotels.forEach((el) => {
  //         if (el.Location.includes(Location_name)) {
  //           console.log(el);
  //         }
  //       });
  //     }
  //     if (choose_nested == 2) {

  //       const max_price = prompt("Enter Hotel Max Price :");
  //       hotels.forEach((el) => {
  //           if (el.Price <= max_price) {
  //               console.log(el);
  //             }
  //       });
  //     }
  //     if (choose_nested == 3) {

  //       const min_review = prompt("Enter Hotel Max Price :");
  //       hotels.forEach((el) => {
  //           if (el.Review >= min_review) {
  //               console.log(el);
  //             }
  //       });

  //     }

  //     break;

  //   case "6":
  //     const distance_from_dhaka = prompt("Enter Distance Range From Dhaka: ");

  //     hotels.forEach((el) => {
  //       //console.log(el.name);
  //       if (el.Distance < distance_from_dhaka) {
  //         console.log(el);
  //       }
  //     });
  //     break;


  //     case "1":
      

      
  //         console.log(hotels);
      
  //     break;
  // }
}

function searchALLHotels(hotel){
  console.log(hotel);
}

function search(name){
  hotels.forEach((el) => {
        
          if (el.name.toLowerCase() == name) {
            console.log(el);
          }
          if (el.description.toLowerCase() == name) {
            console.log(el);
          }
        });
}

function review(name) {
  hotels.forEach((el) => {
    if (el.name.toLowerCase()==name) {
      const customerReview = prompt(`Enter Review for hotel Name ${el.name} :`);
      el.review.push(customerReview);
      console.log(
        `Review set successfully for hotel Name ${el.name} with Rating ${el.review}  :`
      );
      let customerRating = prompt(`Enter Review for hotel Name ${el.name} :`);
      if(customerRating <1 || customerRating> 5 || typeof customerRating !='number')
        customerRating = prompt(`Please enter a valid rating :`);
      el.rating = rate(el.rating, customerRating);
      console.log(
        `Rating set successfully for hotel Name ${el.name} with Rating ${el.rating}  :`
      );
    }
  });
}

function rate(previousRating,currentRating){
  if(previousRating == 0 ){
    return currentRating;
  }
  else {
    return (parseFloat(previousRating)+ parseFloat(currentRating))/2;
  }
}

function sortHotels(){
  hotels.sort(function (a, b) {
          return b.Review - a.Review;
        });
        hotels.forEach((el) => {
          if(el.review.length>0){
            console.log(el.review);
          }
        })
}

function findNearest(distance){
  hotels.forEach((el) => {
          //console.log(el.name);
          if (el.distance <= distance) {
            console.log(el);
          }
        });
}