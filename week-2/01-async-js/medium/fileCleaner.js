const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else {
    const words = data.split(" ");
    let newData = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        newData = newData + words[i] + " ";
      }
    }
    fs.writeFile("a.txt", newData, (err) => {
      if (err) console.log(err);
      else console.log("successfully updated the file");
    });
  }
});
