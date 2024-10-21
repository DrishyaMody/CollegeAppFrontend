---
layout: post
title: Team Assignment
permalink: /teams/

---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select a Team</title>
    <style>
        .team-box {
            width: 200px;
            height: 200px;
            margin: 20px;
            background-color: lightblue;
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<h1>Select a Team</h1>

<div id="teams-container"></div>

<script>
    const teams = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"];
    
    const teamsContainer = document.getElementById('teams-container');

    teams.forEach(team => {
        const teamBox = document.createElement('div');
        teamBox.classList.add('team-box');
        teamBox.innerText = team;
        
        teamBox.onclick = function() {
            const username = prompt("Please enter your username:");
            if (username) {
                assignTeam(team, username);
            }
        };

        teamsContainer.appendChild(teamBox);
    });

    // function assignTeam(teamName, username) {
    //     fetch(`/api/teams/assign?teamName=${teamName}&username=${username}`, {
    //         method: 'POST'
    //     }).then(response => response.json())
    //       .then(data => {
    //           if (data) {
    //               alert(`You have been assigned to ${teamName}`);
    //           } else {
    //               alert('Team already assigned or an error occurred.');
    //           }
    //       });
    // }
</script>

</body>
</html>
