
// const generateEngineer = engineers => {

//     for (i = 0; i <= engineers.length; i++) {
    //     return `
    //     <div class="col-4">
    //     <div class="card">
    //         <h3 class="card-subtitle m-auto">${engineers[i].name}</h3>
    //         <h3 class="card-subtitle m-auto">${engineers[i].getRole()}</h3>
    //     </div>
    //     <div class="card-body">
    //         <p>${engineers[i].id}</p>
    //         <p>${engineers[i].email}</p>
    //         <p>${engineers[i].gitHub}</p>
    //     </div>
    // </div>
        
    //     `
//     }
// }

module.exports = (employees, engineers, interns) => {

    const internHtml = interns.map(({name, id, email, school}) => {
        return `
        <div class="col-4">
        <div class="card ">
            <div class="card-body">
                <h4 class="card-header mx-auto text-center bg-primary text-light">${name}</h4>
                <h5 class="card-header text-center bg-primary text-light">Intern</h4>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: <a href=mailto:${email}></a>${email}</p>
                <p class="card-text">School: ${school}</p>
            </div>
        </div>
    </div>
        `
    })

    const engineerHtml = engineers.map(({name, id, email, gitHub})=> {

        return `
        <div class="col-4">
        <div class="card ">
            <div class="card-body">
                <h4 class="card-header mx-auto text-center bg-primary text-light">${name}</h4>
                <h5 class="card-header text-center bg-primary text-light">Engineer</h4>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: <a href=mailto:${email}></a>${email}</p>
                <p class="card-text">GitHub: <a href='https://github.com/${gitHub}' target='_blank'>${gitHub}</a></p>
            </div>
        </div>
    </div>
        `

    })

    const {name, id, email, officeNumber} = employees[0];
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1 class="text-center mt-3 text-light bg-danger">My Team</h1>
    </header>
    <main class="flex-column d-flex justify-space-between justify-content-center">
        <div class="m-5 row justify-content-around">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-header text-center bg-primary text-light">${employees[0].name}</h4>
                        <h5 class="card-header text-center bg-primary text-light">${employees[0].getRole()}</h4>
                        <p class="card-text">ID: ${employees[0].id}</p>
                        <p class="card-text">Email: <a href=mailto:${email}></a>}${email}</p>
                        <p class="card-text">Office Number: ${employees[0].officeNumber}</p>
                    </div>
                </div>
            </div>
            ${engineerHtml.join('')}
            ${internHtml.join('')}
        </div>
    </main>   
</body>
</html>
    </main>   
</body>
</html>

    `
}


// module.exports = employees => {

//     console.log(employees);
//     const {name, id, email, officeNumber} = employees[0];
//     return `
    
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
//     <title>Team Profile</title>
// </head>
// <body>
//     <header>
//         <h1 class="text-center mt-3">My Team</h1>
//     </header>
//     <main class="flex-row d-flex justify-space-between justify-content-center">
//         <div class="col-4">
//             <div class="card">
//                 <h3 class="card-subtitle m-auto">${name}</h3>
//                 <h3 class="card-subtitle m-auto">${employees[0].getRole()}</h3>
//             </div>
//             <div class="card-body">
//                 <p>${id}</p>
//                 <p><a href=mailto:${email}>${email}</a></p>
//                 <p>${officeNumber}</p>
//             </div>
//         </div>
//         ${generateEngineer(engineers)}
//     </main>   
// </body>
// </html>

//     `
// }

