const prompt = require('prompt-sync')();
console.log("Welcome To News Portal");
var newspaper = [
    {
     newsTitle: "Sinha Murdered",
     textDescription: "Sinha Murder Ray published last yesterday",
     publisherName: "Anu",
     publisherTag: "crime",
     publisherDate: "29-01-22",
     bookmarked: 0,
    },
    {
        newsTitle: "University Closed",
        textDescription: "Again Govt decided to close University for covd increasing rate",
        publisherName: "Zia",
        publisherTag: "Education",
        publisherDate: "2-02-22",
        bookmarked: 0,
       },
       {
        newsTitle: "BD wins match",
        textDescription: "After long time BD wins matches",
        publisherName: "Asma",
        publisherTag: "Sports",
        publisherDate: "20-01-22",
        bookmarked: 0,   
       },    
];
while(1){
    const option = ("1. view all news   2. search  3.bookmark 4.bookmarked news 5. quit");
    console.log(option);
    const choose = prompt("Enter your choice : ")
    {
        if (choose == 1){
            viewAllNews(newspaper);
        }
        else if (choose == 2){
            const searchOption = ("Enter publisher name or publisher tag");
            const searchOptionLower = searchOption.toLowerCase();
            console.log(searchOptionLower);
            search(searchOptionLower);
        }
    }
    





}
function viewAllNews(newspaper){
    console.log(newspaper);
}

function search(SeachString){
    newspaper.sort (function (a,b)
    {
}