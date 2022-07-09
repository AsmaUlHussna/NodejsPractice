const prompt = require("prompt-sync")();


console.log("Welcome To Facebook")


let users = ["Suvra", "Priya"];
let usersPost = []
let frndReqsts= ["A", "B"]
let acceptedReq = []
let rejReq = []

const uname = prompt("Enter UserName: ");
users.push(uname)
console.log(`Welcome ${uname}`);

console.log("What do you want to do?")

//starter
const option = `"1. Create Post "2.Send Friend Req" 3.Accept Req 4.Reject Req`
console.log(option)
const choose = prompt("Your Choice: ")


const options =()=>{
    const option = `"1. Create Post "2.Send Friend Req" 3.See Friend Req 4.Exit`
    console.log(option)
    const choose = prompt("Your Choice: ")
}



switch (choose) {
    case "1":
        const choose = prompt("Enter Your Post: ")
        usersPost.push(choose)
        options();
        break;
    case "2":
        const frndReq = prompt("Enter The user name you want to send Req: ")
        const sendReqName = users.find(x=> x==frndReq);
        frndReqsts.push(sendReqName)
        console.log(`Friend Req Sent to ${sendReqName}`)
        options();
        break;

    case "3":
        console.log("See Friend Requests: ")
        console.log(frndReqsts)
        frndReqsts.map(x=>console.log(`Do you want to accept ${x}? 1. Yes 2.No`))



        options();
        break;

    default:

}




