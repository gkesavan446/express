const fs = require('fs');

// console.log(fs);

//to write file

const quote = 'Push yourself because no one is going to do for you!!!';

// fs.writeFile('./awesome.html', quote, (err)=>{
//     console.log("Completed Successfully");
// });

//task to create 10 html docs into backup folder with quote:

// const quote2 = "Reasons wont get results";

// for(var i=1; i<11; i++){
//     fs.writeFile(`./backup/text${i}.html`, quote2, (err)=>{
//         console.log("Completed Successfully");
//     });
// }

//one more task
//need to create n no of html files based on input given by user:

// const quote2 = "Reasons wont get results";

// const [, , num] = process.argv;

// for(var i=1; i<=num; i++){
//     fs.writeFile(`./backup/text${i}.html`, quote2, (err)=>{
//         console.log("Completed Successfully");
//     });
// }

//to read file

// fs.readFile("./cool.txt", "utf-8", (err, data)=>{
//     console.log(data);
//   });

// to handle error

// fs.readFile("./cool1.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log("Error found:", err)
//     } else {
//         console.log(data);
//     }    
//   });

// append file

const quote3 = "Love what you to do, do what you love"

// fs.appendFile("./cool.txt", quote3, (err, data)=>{
//     if(err){
//         console.log("Error found:", err)
//     } else {
//         console.log("Completed Successfully");
//     }    
//   });


// fs.appendFile("./cool.txt", "\n" + quote3, (err, data)=>{
//     if(err){
//         console.log("Error found:", err)
//     } else {
//         console.log("Completed Successfully");
//     }    
//   });

// to delete


// fs.unlink("./deleteme.css", (err, data)=>{
//     if(err){
//         console.log("Error found:", err)
//     } else {
//         console.log("Completed Successfully");
//     }    
//   });


  


