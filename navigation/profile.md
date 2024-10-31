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