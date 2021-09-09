const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

let items = ["Buy fruits", "Egg Boiling"];

let workItems = [];

app.get("/", function(req, res) {

  // res.add("Hello");

  let today = new Date();
  // let currentDay =  today.getDay();
  // let day ="";

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //   console.log("Error: current day is : "+ currentDay);
  // }
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  //PRAC
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    ListTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
  let item = req.body.newitem;
  items.push(item);
  res.redirect("/");
  // console.log(item);

})

app.get("/work", function(req, res) {
  res.render("list", {
    ListTitle: "Work List",
    newListItems: workItems
  });
})

app.post("/work", function(req, res) {
  let item = req.body.newitem;
  workItems.push(item);
  res.redirect("/work");
  // console.log(item);

})


app.listen(3000, function() {
  console.log("server started on port 3000");
});
