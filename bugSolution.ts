function printName(name: string = "Anonymous"): void {
  console.log(name);
}

printName(); // This will print 'Anonymous'
printName("John Doe"); // This will print 'John Doe' 

//Alternative solution with explicit undefined check:
function printName2(name?: string): void {
  if(name === undefined){
    console.log("Name not provided");
  } else {
    console.log(name);
  }
}

printName2(); //Prints "Name not provided"
printName2("Jane Doe"); //Prints "Jane Doe"