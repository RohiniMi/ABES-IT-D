const generateAge = ()=>{
    const dob = document.getElementById('dob').value;
    const output = document.getElementById('output');

    const currentDate = new Date();
    const birthDate = new Date(dob);
    // console.log(currentDate, dob);   

    const currentDateYear = currentDate.getFullYear();
    const currentDateMonth = currentDate.getMonth();

    const dobYear = birthDate.getFullYear();
    const dobMonth = birthDate.getMonth();

    let age = currentDateYear - dobYear; 
    let ageInMonths = currentDateMonth - dobMonth;
    
    if(currentDateMonth < dobMonth){
        age -= 1;
    }
    if(ageInMonths < 0){
        ageInMonths += 12;
    }
    output.innerText = `Your age is ${age} years ${ageInMonths} months`;

    console.log(Date.now());
    
}