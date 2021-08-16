

const sentence = "hello there from lighthouse labs";

const printer = function() {
  if (location < sentence.length ) {
    process.stdout.write(sentence.charAt(location));
    location++;
  } else {
    console.log("\n");
    clearInterval(printSentence);
  }
}

var printSentence = setInterval(printer, 50);

