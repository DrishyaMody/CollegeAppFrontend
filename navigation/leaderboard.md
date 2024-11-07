---
layout: post
title: Leaderboard Page
type: issues
permalink: /leaderboard/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
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

        .leaderboard-container {
            max-width: 1200px;
            width: 100%;
            background-color: #121212;
            border-radius: 8px;
            padding: 20px;
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
            font-size: 2em;
        }

        /* New Button Style for Team Links */
        button {
            background: #fbca1f;
            font-family: inherit;
            padding: 0.6em 1.3em;
            font-weight: 900;
            font-size: 18px;
            border: 3px solid black;
            border-radius: 0.4em;
            box-shadow: 0.1em 0.1em;
            cursor: pointer;
            width: 100%;
            text-align: left;
        }

        button:hover {
            transform: translate(-0.05em, -0.05em);
            box-shadow: 0.15em 0.15em;
        }

        button:active {
            transform: translate(0.05em, 0.05em);
            box-shadow: 0.05em 0.05em;
        }

        .stats-container {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            color: black;
            font-weight: bold;
        }

        .team-members {
            font-size: 0.9em;
            color: #333333;
        }

    </style>
</head>
<body>

<div class="leaderboard-container">
    <div class="header">
        <h1>Leaderboard</h1>
        <p>Ranking Teams by Balance</p>
    </div>
    <div class="team-list" id="team-list">
        <!-- Team template for each leaderboard entry -->
        <template id="team-template">
            <a href="#" target="_blank"> <!-- Link placeholder -->
                <button>
                    <div class="team-card">
                        <div class="rank">#<span class="rank-number"></span> <span class="team-name"></span></div>
                        <div class="stats-container">
                            <div class="balance">Balance: <span class="balance-amount"></span></div>
                            <div class="roi">ROI: <span class="roi-percentage"></span></div>
                        </div>
                        <div class="team-members">
                            <strong>Team Members:</strong>
                            <ul class="member-list"></ul>
                        </div>
                    </div>
                </button>
            </a>
        </template>
    </div>
</div>

<script>
    // Team data with link, balance, ROI, and team members
    const teamsData = [
        { name: "Team Alpha", balance: 3200, roi: "15%", members: ["Alice", "Bob", "Charlie"], link: "https://drishyamody.github.io/CollegeAppFrontend/Team/" },
        { name: "Team Beta", balance: 2900, roi: "10%", members: ["David", "Eva", "Frank"], link: "https://drishyamody.github.io/CollegeAppFrontend/Team/" },
        { name: "Team Gamma", balance: 2500, roi: "12%", members: ["George", "Helen", "Ivy"], link: "https://drishyamody.github.io/CollegeAppFrontend/Team/" },
        { name: "Team Delta", balance: 2100, roi: "11%", members: ["Jack", "Kara", "Liam"], link: "https://drishyamody.github.io/CollegeAppFrontend/Team/" },
        { name: "Team Epsilon", balance: 4000, roi: "14%", members: ["Mona", "Nathan", "Olivia"], link: "https://drishyamody.github.io/CollegeAppFrontend/Team/" },
        { name: "Team Zeta", balance: 3000, roi: "9%", members: ["Paul", "Quincy", "Rachel"], link: "https://drishyamody.github.io/CollegeAppFrontend/Team/" }
    ];

    // Sort teams by balance in descending order
    const sortedTeams = teamsData.sort((a, b) => b.balance - a.balance);

    // Populate the leaderboard with ranked teams
    function populateLeaderboard(teams) {
        const teamList = document.getElementById('team-list');
        const template = document.getElementById('team-template').content;

        teams.forEach((team, index) => {
            const teamElement = document.importNode(template, true);

            // Fill in the rank, balance, ROI, members, and link
            teamElement.querySelector('.rank-number').textContent = index + 1;
            teamElement.querySelector('.team-name').textContent = team.name;
            teamElement.querySelector('.balance-amount').textContent = `$${team.balance.toLocaleString()}`;
            teamElement.querySelector('.roi-percentage').textContent = team.roi;
            teamElement.querySelector('a').href = team.link;

            const memberList = teamElement.querySelector('.member-list');
            team.members.forEach(member => {
                const memberItem = document.createElement('li');
                memberItem.textContent = member;
                memberList.appendChild(memberItem);
            });

            // Append to leaderboard
            teamList.appendChild(teamElement);
        });
    }

    // Initialize leaderboard
    populateLeaderboard(sortedTeams);
</script>

</body>
</html>