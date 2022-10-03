
const team = {
      userName: "user name",
      userAge: 19,
      hobbi: "Play Game",
    }

const copyTeam = JSON.parse(JSON.stringify(team));

console.log("Client request...");
console.log("started loadiing ...");

const promise = new Promise ((resolve, reject)=>{
   setTimeout(()=> {
      const err = false;

      if(!err){const response = { status:200, url: "https://google.com",};
         console.log("Client get response from server", team);
         console.log("preparing data ...");resolve(team);
      } else{reject("status code 404,not found");}},2000);})
.then((res)=>{
   setTimeout(()=>{
      const data ={
         userName: "John",
         userAge: 19,
      };
      console.log("client get data", data, res);
   }, 2000);
   return "Hi";
})
.then((msg)=> alert(msg))
.catch((err) => console.log("we have error", err))
.finally(() => console.log("loading ended"));


