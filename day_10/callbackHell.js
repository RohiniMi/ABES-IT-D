const printMessage = (msg)=>{
    console.log(msg);  
}
const bookTicket = ()=>{
    printMessage("Welcome!");
    setTimeout(()=>{
        printMessage("Login successfully");
        setTimeout(()=>{
            printMessage("seat has been selected successfully.");
            setTimeout(()=>{
                printMessage("Your seat has been confirmed. Proceed for payment.");
                setTimeout(()=>{
                    printMessage("Payment has been done.");
                    setTimeout(()=>{
                        printMessage("Ticket has been issued.");
                        printMessage("Thankyou for visiting our site.");
                    },3000)
                },4000)
            },3000)
        },2000)
    },3000)
}