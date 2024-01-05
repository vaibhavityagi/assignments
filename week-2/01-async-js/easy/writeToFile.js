const { isUtf8 } = require("buffer");
const fs = require("fs");

const data = "hello from the other side x2";

fs.writeFile("write.txt", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("successfully wrote data to the file");
    fs.readFile("write.txt", "utf-8", (err, data) => console.log(data));
  }
});
