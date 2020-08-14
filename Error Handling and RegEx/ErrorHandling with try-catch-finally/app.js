// try and catch

const person = {email:"hello@email.com"}

try {
  //Produce reference error but continues to the next line of code
  myFunction()

  //produce a TypeError
  // null.myFuncton()

  //will produce syntax error
  //this will evaluate js as a string
  // eval('hello') 

  //throw a custom error message
  // if(!person.name){
  //   throw new Error("No stupid Name")
  // }

} catch (e) {
  console.log(e);
  //Get only the message
  console.log(e.message); 
  //test the type of error
  console.log(e instanceof SyntaxError); 
}finally{
  //it will run no matter what
  console.log("hey it works no matter what")
}

console.log("Hey it continues")