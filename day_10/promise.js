const printMessage = (msg) => {
    console.log(msg);
}
const wait = (msg, sec) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            printMessage(msg);
            resolve();
        }, sec);
    })
}
const bookTicket = async () => {
    printMessage("Welcome!");
   await wait("Login successfully", 3000)
    await wait("seat has been selected successfully.", 2000)
    await wait("Your seat has been confirmed. Proceed for payment.", 3000)
    await wait("Payment has been done.", 4000)
    await wait("Ticket has been issued.", 3000)
    printMessage("Thankyou for visiting our site.");
}
// const bookTicket = () => {
//     printMessage("Welcome!");
//     wait("Login successfully", 3000)
//         .then(() => wait("seat has been selected successfully.", 2000))
//         .then(() => wait("Your seat has been confirmed. Proceed for payment.", 3000))
//         .then(() => wait("Payment has been done.", 4000))
//         .then(() => wait("Ticket has been issued.", 3000))
//         .then(() => printMessage("Thankyou for visiting our site."));
// }