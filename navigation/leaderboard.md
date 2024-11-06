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

        /* CTA Button Style for Team Links */
        .cta {
            position: relative;
            display: block;
            margin: 15px auto;
            padding: 12px 18px;
            text-align: center;
            text-decoration: none;
            transition: all 0.2s ease;
            border: none;
            background: none;
            cursor: pointer;
        }

        .cta:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            border-radius: 50px;
            background: #b1dae7;
            width: 45px;
            height: 45px;
            transition: all 0.3s ease;
        }

        .cta span {
            position: relative;
            font-family: "Ubuntu", sans-serif;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.05em;
            color: #234567;
        }

        .cta svg {
            position: relative;
            top: 0;
            margin-left: 10px;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke: #234567;
            stroke-width: 2;
            transform: translateX(-5px);
            transition: all 0.3s ease;
        }

        .cta:hover:before {
            width: 100%;
            background: #b1dae7;
        }

        .cta:hover svg {
            transform: translateX(0);
        }

        .cta:active {
            transform: scale(0.95);
        }

        .stats-container {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-top: 1px solid #444;
            border-bottom: 1px solid #444;
            color: #234567;
            font-weight: bold;
        }

        .team-members {
            font-size: 0.9em;
            color: #cccccc;
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
            <a class="cta" href="#" target="_blank"> <!-- Link placeholder -->
                <div class="team-card">
                    <div class="rank">#<span class="rank-number"></span></div>
                    <div class="stats-container">
                        <div class="balance">Balance: <span class="balance-amount"></span></div>
                        <div class="roi">ROI: <span class="roi-percentage"></span></div>
                    </div>
                    <div class="team-members">
                        <strong>Team Members:</strong>
                        <ul class="member-list"></ul>
                    </div>
                </div>
            </a>
        </template>
    </div>
</div>

<script>
    // Team data with link, balance, ROI, and team members
    const teamsData = [
        { name: "Team Alpha", balance: 3200, roi: "15%", members: ["Alice", "Bob", "Charlie"], link: "https://example.com/team-alpha" },
        { name: "Team Beta", balance: 2900, roi: "10%", members: ["David", "Eva", "Frank"], link: "https://example.com/team-beta" },
        { name: "Team Gamma", balance: 2500, roi: "12%", members: ["George", "Helen", "Ivy"], link: "https://example.com/team-gamma" },
        { name: "Team Delta", balance: 2100, roi: "11%", members: ["Jack", "Kara", "Liam"], link: "https://example.com/team-delta" },
        { name: "Team Epsilon", balance: 4000, roi: "14%", members: ["Mona", "Nathan", "Olivia"], link: "https://example.com/team-epsilon" },
        { name: "Team Zeta", balance: 3000, roi: "9%", members: ["Paul", "Quincy", "Rachel"], link: "https://example.com/team-zeta" }
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
            teamElement.querySelector('.balance-amount').textContent = `$${team.balance.toLocaleString()}`;
            teamElement.querySelector('.roi-percentage').textContent = team.roi;
            teamElement.querySelector('.cta').href = team.link;

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