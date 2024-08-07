
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frisbee Killer Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game-container">
        <!-- Sun element -->
        <div id="sun" class="symbol">☀️</div>
        
        <!-- Score display -->
        <div id="score">Score: <span id="player1-score">0</span> - <span id="player2-score">0</span></div>
        
        <!-- Get ready message -->
        <div id="get-ready">GET READY</div>
        
        <!-- Player 1 and Player 2 elements -->
        <div id="player1" class="player"><img src="images/cowboy.png" alt="Player 1"></div>
        <div id="player2" class="player"><img src="images/cowboy_inv.png" alt="Player 2"></div>
        
        <!-- Trees -->
        <div id="tree1" class="tree symbol">🌳</div>
        <div id="tree2" class="tree symbol">🌳</div>
        
        <!-- Dog and squirrel as barriers -->
        <div id="dog1" class="symbol">🐕</div>
        <div id="squirrel1" class="symbol">🐿️</div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
