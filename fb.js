const prompt = require("prompt-sync")();
console.log("Welcome To Facebook")
let users = [];
let mail = [];
let usersPost = []
let frndReqsts= ["A", "B"]
let acceptedReq = []
let rejReq = []

const uname = prompt("Enter UserName: ");
//users.push(uname);
const Mmail = prompt("Enter Email: ");
mail.push(Mmail);
let tempObj = {
    name: uname,
    mail: Mmail,
    post: [],
    friend: [],
    friendReq: [],
    }
    users.push(tempObj);
    let index = users.length-1;
console.log(`Welcome ${uname}`);

console.log("What do you want to do?")

while (1) {
    const option =
      "1.Create Post 2.Send Friend Req 3. See All req 4.Accept Req 5.Reject Req";
    console.log(option);
    const choose = prompt("Your Choice: ");

switch (choose) {
    case "1":
        const choose = prompt("Enter Your Post: ")
        const tempObj1 = {
            content: choose, 
            created_at: Date.now()

        }
        users[index].post.push(tempObj1);
        break;
    case "2":
        const frndReq = prompt("Enter The user name you want to send Req: ")
        const sendReqName = users.find(x=> x==frndReq);
       
        users[index].friendReq.push(sendReqName);
        //frndReqsts.push(sendReqName)
        console.log(`Friend Req Sent to ${sendReqName}`)
        break;

    case "3":
        
        console.log("See Friend Requests: ");
        console.log(users[index].friendReq);
        break;
    case "4":
        console.log("Accept Friend Request")
        users [index].friendReq.forEach((x) => {
            const acceptReq = prompt(`Do you want to accept ${x}? 1. Yes 2.No`)
            if (
                acceptReq == "no"
                
            )
            console.log("friend request not accepted");
            else {
                
                users[index].friend.push(x); 
            
            console.log("friend request accepted");
            }
        })

        
        break;
    
    default:

}
}
// we can use split function to split the array by space to search each word in each post.


