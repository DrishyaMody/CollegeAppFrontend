---
layout: post
title: Login Page
type: issues
permalink: /login/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Game Login</title>
    <style>
        /* Basic reset for consistent styling */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: #1b1b2f; /* Dark background */
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url('/CollegeAppFrontend/images/cryptoBackground.png'); 
            background-size: cover;
            background-position: center;
        }

        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .login-box {
            background: rgba(0, 0, 0, 0.7); /* Semi-transparent dark background */
            padding: 40px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
        }

        .title {
            color: #fff;
            font-size: 2rem;
            margin-bottom: 20px;
            font-family: 'Orbitron', sans-serif; /* A cool, futuristic font */
        }

        .input-field {
            width: 100%;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            border: none;
            outline: none;
            font-size: 1rem;
            color: #333;
        }

        .input-field::placeholder {
            color: #999;
        }

        .login-button {
            width: 100%;
            padding: 15px;
            font-size: 1rem;
            background: #00ffcc; /* Bright neon button */
            border: none;
            border-radius: 8px;
            cursor: pointer;
            color: #333;
            transition: background 0.3s ease;
        }

        .login-button:hover {
            background: #00cc99; /* Slightly darker on hover */
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-box">
            <h1 class="title">Crypto Game Login</h1>
            <form id="login-form">
                <input type="text" placeholder="Username" class="input-field" required>
                <input type="password" placeholder="Password" class="input-field" required>
                <button type="submit" class="login-button">Login</button>
            </form>
        </div>
    </div>
</body>
</html>