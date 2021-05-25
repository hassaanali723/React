const { students, colleges } = require("./db");
const fs = require("fs");

const Query =  {
    greetings:() => "Hello There",
    student: () => students.list()
  
};
module.exports = { Query };