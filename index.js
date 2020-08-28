const inquirer = require("inquirer");
const mysql = require("mysql");
const connections = require("./greatBayDBConnections.js")

const chooseTask = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "task",
        choices: [
            "Post a new item",
            "Bid on an item",
            "Exit the app"
        ]
    }
];

const postItemQuestions = [
    {
        type: "input",
        message: "Name of the item",
        name: "item"
    },
    {
        type: "input",
        message: "Set the starting bid",
        name: "price"
    }
];

const bidItemQuestions = [
    {
        type: "list",
        message: "What would you like to bid on?",
        name: "bid",
        choices: itemArray
    }
]

function greatBayTasks() {
    inquirer.prompt(chooseTask).then(answers => {

        switch (answers.task) {
            case "Post a new item":
                postItem();
                break;

            case "Bid on an item":
                bidItem();
                break;

            case "Exit the app":
                console.log("Thanks for using the app!");
                break;
        
            default: 
                greatBayTasks();
        }
    })
}

function postItem() {
    inquirer.prompt(postItemQuestions).then(answers => {
        // putting the answers into the database
        const 
    })
};

function bidItem() {
    inquirer.prompt(bidItemQuestions), then(answers => {
        console.log(answers.bid)
    })
};

greatBayTasks();