---
layout: post
title: Crypto Portfolio
type: issues
permalink: /portfolio/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Investment Portfolio</title>
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/portfolio.css">
    <script src="{{site.baseurl}}/assets/js/api/config.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* Basic Styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
        }

        h1 {
            color: #333;
            margin-top: 20px;
        }

        .container {
            width: 90%;
            max-width: 1000px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .user-balance {
            margin: 20px 0;
            font-weight: bold;
        }

        /* Crypto List Styling */
        .crypto-list {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            overflow-y: auto;
            max-height: 400px;
            padding: 10px;
            background-color: #fafafa;
            border-radius: 10px;
            box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }

        .crypto-item {
            background-color: #333;
            color: #fff;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            text-align: center;
            width: 120px;
            transition: transform 0.2s;
        }

        .crypto-item:hover {
            transform: scale(1.05);
            background-color: #444;
        }

        /* Modal Styling */
        .modal {
            display: none;
            position: fixed;
            z-index: 10;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            position: relative;
            color: #333;
        }

        .modal-content h2, .modal-content p {
            color: #333;
        }

        .chart-container {
            height: 300px;
            margin: 20px 0;
        }

        .modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 18px;
            color: #333;
        }

        /* Button Styling */
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
            font-size: 1em;
        }

        .btn-invest {
            background-color: #4CAF50;
            color: #fff;
        }

        .btn-close {
            background-color: #f44336;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Crypto Investment Portfolio</h1>
        <!-- User Balance Display -->
        <div class="user-balance">
            Current Balance: $<span id="user-balance">5000</span>
        </div>
        <!-- Crypto List Section -->
        <div class="crypto-list" id="crypto-list-container">
            <!-- Dynamically populated list of cryptocurrencies -->
        </div>
    </div>
    <!-- Modal for Crypto Details -->
    <div class="modal" id="crypto-modal">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal()">&times;</span>
            <h2 id="modal-crypto-name">Crypto Details</h2>
            <p>Current Price: $<span id="modal-crypto-price"></span></p>
            <p>Change (24h): <span id="modal-crypto-change"></span>%</p>
            <div class="chart-container">
                <canvas id="crypto-chart"></canvas>
            </div>
            <button class="btn btn-invest" onclick="investInCrypto()">Invest</button>
        </div>
    </div>
    <script type="module">
        import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

        const userBalance = 5000;  // Example starting balance
        document.getElementById('user-balance').innerText = userBalance;

        // Fetch and Display Cryptos
        function fetchCryptos() {
            fetch(`${javaURI}/api/crypto/live`, fetchOptions)
                .then(response => response.json())
                .then(cryptos => {
                    const cryptoListContainer = document.getElementById('crypto-list-container');
                    cryptoListContainer.innerHTML = '';
                    cryptos.forEach(crypto => {
                        const cryptoItem = document.createElement('div');
                        cryptoItem.className = 'crypto-item';
                        cryptoItem.innerHTML = `<strong>${crypto.name}</strong><br>$${crypto.price.toFixed(2)}`;
                        cryptoItem.onclick = () => openModal(crypto);
                        cryptoListContainer.appendChild(cryptoItem);
                    });
                })
                .catch(error => console.log('Error fetching cryptos:', error));
        }

        // Open Modal with Crypto Details
        function openModal(crypto) {
            document.getElementById('modal-crypto-name').innerText = crypto.name;
            document.getElementById('modal-crypto-price').innerText = crypto.price.toFixed(2);
            document.getElementById('modal-crypto-change').innerText = crypto.changePercentage.toFixed(2);

            // Fetch and display trend data
            fetchCryptoTrend(crypto.name.toLowerCase(), 7); // Adjust days as needed

            document.getElementById('crypto-modal').style.display = 'flex';
        }

        // Function to fetch and render the trend chart
        async function fetchCryptoTrend(cryptoId, days) {
            try {
                const response = await fetch(`${javaURI}/api/crypto/trend?cryptoId=${cryptoId}&days=${days}`);
                const prices = await response.json();

                // Generate labels for each day
                const labels = Array.from({ length: prices.length }, (_, i) => `Day ${i + 1}`);

                // Get canvas context for chart
                const ctx = document.getElementById('crypto-chart').getContext('2d');

                // Destroy previous chart instance if exists to avoid overlap
                if (window.cryptoChart) window.cryptoChart.destroy();

                // Create new line chart
                window.cryptoChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: `${cryptoId} Price Trend (USD)`,
                            data: prices,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                title: { display: true, text: 'Days Ago' }
                            },
                            y: {
                                title: { display: true, text: 'Price (USD)' }
                            }
                        }
                    }
                });
            } catch (error) {
                console.error("Error fetching trend data:", error);
            }
        }

        // Close Modal function
        function closeModal() {
            document.getElementById('crypto-modal').style.display = 'none';
        }

        // Add click event to close modal when clicking outside the modal content
        window.onclick = function(event) {
            const modal = document.getElementById('crypto-modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Investment function (Placeholder)
        function investInCrypto() {
            const amount = prompt("Enter the amount you want to invest:");
            if (amount && amount > 0) {
                alert(`You've invested $${amount} in ${document.getElementById('modal-crypto-name').innerText}.`);
            } else {
                alert("Invalid investment amount.");
            }
        }

        // Initialize the crypto list on page load
        fetchCryptos();
    </script>
</body>
</html>
