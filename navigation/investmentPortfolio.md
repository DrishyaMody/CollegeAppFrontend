---
layout: post
title: Crypto Portfolio
type: issues
permalink: /portfolio/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Game - Investment Results</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 800px;
            width: 100%;
        }

        .summary, .leaderboard {
            margin: 20px 0;
        }

        .summary h2, .leaderboard h2 {
            margin-bottom: 10px;
        }

        .investment-chart {
            height: 300px;
            width: 100%;
            background-color: #e0e0e0;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        .chart-placeholder {
            font-size: 1.5em;
            color: #888;
        }

        .leaderboard {
            text-align: left;
        }

        .leaderboard-list {
            list-style-type: none;
            padding: 0;
        }

        .leaderboard-list li {
            padding: 10px;
            background-color: #f7f7f7;
            margin: 5px 0;
            border-radius: 5px;
            color: #333; /* Changed to dark text color for visibility */
        }

        .actions {
            margin-top: 30px;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 0 10px;
            font-size: 1em;
        }

        .btn-restart {
            background-color: #f44336;
            color: #fff;
        }

        .btn-cashout {
            background-color: #4CAF50;
            color: #fff;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Investment Results</h1>

        <!-- Summary of User's Investment -->
        <div class="summary">
            <h2>Your Investment Performance</h2>
            <p>Starting Investment: $<strong>1000</strong></p>
            <p>Current Value: $<strong>1350</strong></p>
            <p>Change: <strong>+35%</strong></p>
        </div>

        <!-- Placeholder for chart/graph -->
        <div class="investment-chart">
            <div class="chart-placeholder">
                Investment Chart (Graph)
            </div>
        </div>

        <!-- Leaderboard Section -->
        <div class="leaderboard">
            <h2>Leaderboard - Top Teams</h2>
            <ul class="leaderboard-list">
                <li><strong>Team A</strong> - $1450</li>
                <li><strong>Team B</strong> - $1420</li>
                <li><strong>Team C</strong> - $1390</li>
            </ul>
        </div>

        <!-- Actions (Restart or Cash Out) -->
        <div class="actions">
            <button class="btn btn-restart" onclick="restartGame()">Restart Game</button>
            <button class="btn btn-cashout" onclick="cashOut()">Cash Out</button>
        </div>
    </div>

    <script>
        // Placeholder functions for actions
        function restartGame() {
            alert("Game Restarted");
            // Logic to restart the game
        }

        function cashOut() {
            alert("You have cashed out!");
            // Logic for cashing out
        }
    </script>

</body>
</html>
