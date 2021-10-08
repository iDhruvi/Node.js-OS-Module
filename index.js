/*
Get the following information about the computer's operating system:
- OS CPU architecture
- Free memory of the system
- Total memory of the system
- OS Platform
- Information about the current user
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const os = require("os");

var menu = () => {
    console.log("\n1. OS CPU Architecture");
    console.log("2. Free memory of the system");
    console.log("3. Total memory of the system");
    console.log("4. OS Platform");
    console.log("5. Information about the current user");
    console.log("6. Exit");
};

var start = () => {
    rl.question("Enter Your Choice: ", (ans) => {
        switch (ans) {
            case "1":
                console.log("OS CPU Architecture : " + os.arch());
                repeat();
                break;

            case "2":
                console.log("Free memory of the System : " + os.freemem() / (1024*1024*1024) + " GB");
                repeat();
                break;

            case "3":
                console.log("Total memory of the system : " + os.totalmem() / (1024*1024*1024) + " GB");
                repeat();
                break;
            
            case "4":
                console.log("OS Platform : " + os.platform());
                repeat();
                break;

            case "5":
                const ui = os.userInfo();
                console.log("Information about the current user \n");
                console.log("Uid: " + ui.uid);
                console.log("Gid: " + ui.gid);
                console.log("User name: " + ui.username);
                console.log("Home Directory: " + ui.homedir);
                console.log("Shell: " + ui.shell);
                repeat();
                break;

            case "6":
                rl.close();
                break;
            
            default:
                console.log("Invalid Input");
                repeat();
        }
    });
};

var repeat = () => {
    menu();
    start();
}

console.log("Welcome");
repeat();