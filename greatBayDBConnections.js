var mysql = require("mysql");

var itemArray = [];

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatBay_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
 
});


//POST AN ITEM
function postItem() {
  console.log("Auctioning a new item...\n");
  var query = connection.query(
    "INSERT INTO auctions SET ?",
    {
      // SET
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " auction item inserted!\n");
      // Call updateItem AFTER the INSERT completes
      updateItem();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

//UPDATE ITEM
function updateItem() {
  console.log("Updating all auction items...\n");
  var query = connection.query(
    "UPDATE auction SET ? WHERE ?",
    [
      {
        //SET
      },
      {
       // WHERE 
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " auction items updated!\n");
      connection.end();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// SHOW ALL
function displayItems() {

    console.log("Selecting all auction items...\n");
    connection.query("SELECT * FROM auctions", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].item + " | " + res[i].bid);
      }
      connection.end();
    });

}

function auctionItems() {

  console.log("Selecting all auction items...\n");
  connection.query("SELECT * FROM auctions", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    itemArray = [];
    for (var i = 0; i < res.length; i++) {
      var newItem = (`${res[i].item} | ${res[i].bid}`);
      itemArray.push(newItem);
    }
    connection.end();
  });

}

// {
//   type: "list",
//   name: "role",
//   message: "Please select the Employee's role:",
//   choices: [auctionItems]
// },
