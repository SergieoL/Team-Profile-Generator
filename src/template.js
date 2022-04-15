
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
        <div class="card bg-primary text-light">
            <h3 class="card-subtitle m-auto">${name}</h3>
            <h3 class="card-subtitle m-auto">Intern</h3>
        </div>
        <div class="card-body">
            <p>ID: ${id}</p>
            <p><a href=mailto:${email}>Email: ${email}</a></p>
            <p>School: ${school}</p>
        </div>
    </div>
        
        `
    })

    const engineerHtml = engineers.map(({name, id, email, gitHub})=> {

        return `
        <div class="col-4">
        <div class="card bg-primary text-light">
            <h3 class="card-subtitle m-auto">${name}</h3>
            <h3 class="card-subtitle m-auto">Engineer</h3>
        </div>
        <div class="card-body">
            <p>ID: ${id}</p>
            <p><a href=mailto:${email}>${email}</a></p>
            <p><a href='https://github.com/${gitHub}' target='_blank'>GitHub: ${gitHub}</a></p>
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
    <main class="flex-row d-flex justify-space-between justify-content-center">
        <div class="col-4">
            <div class="card bg-primary text-light">
                <h3 class="card-subtitle m-auto">${name}</h3>
                <h3 class="card-subtitle m-auto">${employees[0].getRole()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${id}</p>
                <p><a href=mailto:${email}>Email: ${email}</a></p>
                <p>Office number: ${officeNumber}</p>
            </div>
        </div>
        ${engineerHtml.join('')}
        ${internHtml.join('')}
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

