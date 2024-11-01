---
layout: post
title: Team Profile Page
type: issues
permalink: /Team/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    background-color: #121212;
    padding: 20px;
}

.profile-container {
    max-width: 1200px;
    width: 100%;
    background-color: #121212;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.header {
    text-align: center;
    padding: 20px;
    background-color: #2a7de1;
    border-radius: 8px;
    color: #ffffff;
}

.header h1 {
    margin-bottom: 10px;
    font-size: 2em;
}

.header p {
    font-size: 1.2em;
}

.team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.team-member {
    background-color: #000000;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.team-member h2 {
    font-size: 1.5em;
    margin-bottom: 5px;
}

.team-member .username {
    color: #FFFFFF;
    margin-bottom: 10px;
}

.stats-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.stat-item h3 {
    font-size: 0.9em;
    color: #FFFFFF;
    margin-bottom: 5px;
}

.stat-item p {
    font-size: 1.1em;
    color: #2a7de1;
    font-weight: bold;
}

    </style>
</head>
<body>

<div class="profile-container">
    <div class="header">
        <div class="cover-photo"></div>
        <h1>Our Team</h1>
        <p>@ourteam</p>
    </div>
    <div class="team-container" id="team-container">
        <!-- Template for each team member -->
        <template id="team-member-template">
            <div class="team-member">
                <h2 class="name"></h2>
                <p class="username"></p>
                <div class="stats-container">
                    <div class="stat-item">
                        <h3>Balance</h3>
                        <p class="balance"></p>
                    </div>
                    <div class="stat-item">
                        <h3>Progress Time</h3>
                        <p class="progress-time"></p>
                    </div>
                    <div class="stat-item">
                        <h3>ROI</h3>
                        <p class="roi"></p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</div>

<script>
    // Mock data to simulate backend data (replace this with a real fetch request in production)
    const teamData = [
        { name: "Alice Smith", username: "@alice", balance: "$1,800", progressTime: "100 hrs", roi: "12%" },
        { name: "Bob Johnson", username: "@bob", balance: "$2,200", progressTime: "110 hrs", roi: "14%" },
        { name: "Charlie Brown", username: "@charlie", balance: "$1,500", progressTime: "95 hrs", roi: "10%" },
        { name: "Diana Prince", username: "@diana", balance: "$2,400", progressTime: "115 hrs", roi: "16%" }
    ];

    // Function to populate team members using the template
    function populateTeamMembers(data) {
        const teamContainer = document.getElementById('team-container');
        const template = document.getElementById('team-member-template').content;

        data.forEach(member => {
            const memberElement = document.importNode(template, true);

            // Fill in the team member's data
            memberElement.querySelector('.name').textContent = member.name;
            memberElement.querySelector('.username').textContent = member.username;
            memberElement.querySelector('.balance').textContent = member.balance;
            memberElement.querySelector('.progress-time').textContent = member.progressTime;
            memberElement.querySelector('.roi').textContent = member.roi;

            // Append the filled template to the team container
            teamContainer.appendChild(memberElement);
        });
    }

    // Fetch data from the backend (replace the mock data with a real fetch in production)
    function fetchTeamData() {
        // Replace with a real API request, e.g., fetch('/api/team')
        populateTeamMembers(teamData);
    }

    // Initialize the page by fetching team data
    fetchTeamData();
</script>
 
</body>
</html>