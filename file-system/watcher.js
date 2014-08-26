/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
 ***/

const fs = require('fs');
fs.watch('target.txt', function() {
    console.log("File 'target.txt' just changed!");
});
console.log("Now watching target.txt for changes...");

