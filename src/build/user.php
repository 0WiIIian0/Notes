<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="Save your daily notes online">
    <link rel="stylesheet" type="text/css" href="./assets/css/simplified.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/elementManager.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/user.css">
    <title>Notes</title>
  </head>
  <body class="flexBox justifyCenter columnDirection">
    <div class="flexBoxAlign">
      <h1>Hi, welcome to Notes :)<h1>
    </div>
    <div class="flexBox justifyEvenly rowDirection flexWrap">
      <form id="signin" class="flexBox columnDirection">
        <h2>Sign In</h2>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input class="hoverGrow" type="submit"/>
      </form>
      <form id="signup" class="flexBox columnDirection">
        <h2>Sign Up</h2>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" />
        <input class="hoverGrow" type="submit"/>
      </form>
    </div>
    <script src="./assets/js/elementManager.js"></script>
    <script type="module" src="./assets/js/screens/Login.js"></script>
  </body>
</html>