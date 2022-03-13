// generate the rest of the team cards
function getTeam(team) {
    return 'temp';
}

// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const team = templateData;
    const manager = team[0];

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <div class="container">
            <!-- Header -->
            <div class="row">
                <div class="d-flex col-lg-12 jumbo justify-content-center">
                    <h1 class="heading">My Team</h1>
                </div>
            </div>

            <!-- Team Cards -->
            <div class="row">
                <div class="d-flex col-lg-12 flex-wrap">
                    <!-- Manager -->
                    <div class="card">
                        <!-- Name and Job Title-->
                        <div class="card-body">
                            <h3>${manager.getName()}</h4>
                            <h4><i class="bi bi-cup-fill"></i> ${manager.getRole()} </h5>
                        </div>
                        <!-- ID and Info -->
                        <div class="list-group list-group-flush employee-info">
                            <li class="list-group-item">${manager.getId()}</li>
                            <li class="list-group-item">${manager.getEmail()}</li>
                            <li class="list-group-item">${manager.getOfficeNumber()}</li>
                        </div>
                    </div>

                    ${getTeam(team)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    };