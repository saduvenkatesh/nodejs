// All about path module

const path = require('path')

console.log(path.sep)  // "\" The delimeter "\" that seperates the path like "\folder\subFOlder\content.txt"

const filepath = path.join('/folder/','subFOlder','content.txt')
console.log(filepath); // Gives the file path of content.txt that is "\folder\subFOlder\content.txt"

const base = path.basename(filepath) 
console.log(base); // prints the "content.txt"

const absolute = path.resolve(__dirname,'folder', 'subFolder', 'content.txt')
console.log(absolute); // prints the absolute path like "C:\Users\saduv\OneDrive\Desktop\nodejs\folder\subFolder\content.txt"
