const prompt = require("prompt-sync")();

console.log("Welcome To Booking-com");

var hotels = [
  {
    name: "Radission",
    description: "Best hotel in dhaka",
    Location: "Dhaka",
    Price: 12500,
    Food: "Buffet Full day",
    Review: "0",
    Distance: "10",
  },

  {
    name: "Penisula",
    description: "Good in chittagong",
    Location: "Chittagong",
    Price: 8500,
    Food: "Buffet Breakfast",
    Review: "0",
    Distance: "250",
  },

  {
    name: "Tulip",
    description: "Best hotel in cox",
    Location: "Cox Bazar",
    Price: 9500,
    Food: "Buffet Breakfast",
    Review: "0",
    Distance: "510",
  },

  {
    name: "Grace",
    description: "budget hotel",
    Location: "Cox Bazar",
    Price: 4800,
    Food: "N-A",
    Review: "0",
    Distance: "480",
  },
];

while (1) {
  const option = "1. ALL HOTELS 2.SEARCH  3.REVIEW 4.SEE REVIEW 5.FILTER 6.FIND NEAREST";
  console.log(option);
  const choose = prompt("Your Choice: ");

  switch (choose) {
    case "2":
      const searchme = prompt("Enter Hotel Name or Description:");

      hotels.forEach((el) => {
        //console.log(el.name);
        if (el.name.includes(searchme)) {
          console.log(el);
        }
        if (el.description.includes(searchme)) {
          console.log(el);
        }
      });

      break;

    case "3":
      const search_review = prompt("Enter Hotel Name for Review:");
      let i = 0;
      hotels.forEach((el) => {
        //console.log(el.name);
        if (el.name.includes(search_review)) {
          const review_score = prompt(
            `Enter Review for hotel Name ${el.name} :`
          );

          hotels[i].Review = review_score;
          console.log(
            `Review set successfully for hotel Name ${el.name} with Rating ${el.Review}  :`
          );
        }
        i++;
      });

      break;

    case "4":
      hotels.sort(function (a, b) {
        return b.Review - a.Review;
      });
      console.log(hotels);

      // options();
      break;

    case "5":
      const option_nested =
        "1.FILTER by Location  2.FILTER by Max Price 3.FILTER by Min Review";
      console.log(option_nested);
      const choose_nested = prompt("Your Choice: ");
      if (choose_nested == 1) {
        const Location_name = prompt("Enter Hotel Location:");
        hotels.forEach((el) => {
          if (el.Location.includes(Location_name)) {
            console.log(el);
          }
        });
      }
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

    case "6":
      const distance_from_dhaka = prompt("Enter Distance Range From Dhaka: ");

      hotels.forEach((el) => {
        //console.log(el.name);
        if (el.Distance < distance_from_dhaka) {
          console.log(el);
        }
      });
      break;


      case "1":
      

      
          console.log(hotels);
      
      break;
  }
}
