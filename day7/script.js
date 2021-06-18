
// Write a JavaScript program to list the properties of a JavaScript object
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var get_keys = function(student){
  let keys = [];
  for(key in student){
    keys.push(key);
  }
  return keys;
}

console.log( get_keys(student));





// Write a JavaScript program to delete the rollno property from the following object.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
delete student.rollno;
console.log(student);





// 3. Write a JavaScript program to get the length of a JavaScript object.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var size = Object.keys(student).length;
console.log(size);





// 4. Write a JavaScript program to display the reading status
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++)
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }





 // Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes
function Cylinder(cyl_heig, cyl_dia) {
  this.cyl_heig = cyl_heig;
  this.cyl_dia = cyl_dia;
}

Cylinder.prototype.Volume = function () {
  var r = this.cyl_dia/ 2;
  return this.cyl_heig * Math.PI * r * r;
};

var cyl = new Cylinder(5, 3);
console.log('volume =', cyl.Volume().toFixed(4));






// 6. Write a JavaScript program to sort an array of JavaScript objects.
var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
library.sort((a,b)=>{
    return b.libraryID - a.libraryID;
});
library.forEach((e)=>{
    console.log(`${e.title} ${e.libraryID} ${e.author}`);
});
