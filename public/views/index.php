<!doctype html>
<!--MainApp binds to the MainApp angular module in js/Main.js-->
<!--This serves as the root of our application structure-->
<html ng-app="MainApp">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Project WLS</title>

    <base href="/">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/custom-style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link rel="stylesheet" href="assets/css/eggly.css">
    <link rel="stylesheet" href="assets/css/animations.css">
<!--    <link rel="stylesheet" href="assets/css/app.css">-->

</head>
<body>
<div class="container-fluid">
    <div class="row">
<!--        // input smad majors page here-->
<!--        // For smad majors angular bootstrap page for example of pretty looking things for our page.-->
<!--        // Nav is the navigation bars. So if we have more than one copy the nav line and rename it TopNav-->
<!-- <div class="col-sm-3 col-md-2 sidebar" ui-view="nav"></div>-->
        <header class="header dark-bg" ui-view="topNav"></header>
        <aside>
            <div id="sidebar" class="nav-collapse" ui-view="sideNav"></div>
        </aside>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" ui-view="content"></div>
    </div>
</div>

<!--the order and version of these external libraries matters!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.1/lodash.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.js"></script>
<script src="vendor/angular-ui-router.min.js"></script>
<script src="assets/js/jquery.nicescroll.js"></script>
<script src="assets/js/jquery.scrollTo.min.js"></script>
<script src="assets/js/scripts.js"></script>

<!--We can include all of our angular modules into our main view-->
<script src="js/MainApp.js"></script>
<script src="js/nav/nav.js"></script>


<script src="js/common/models/volunteerProfile-model.js"></script>
<script src="js/common/models/accidents-model.js"></script>
<script src="js/common/models/claims-model.js"></script>
<script src="js/common/models/countries-model.js"></script>
<script src="js/common/models/employees-model.js"></script>
<script src="js/common/models/usstates-model.js"></script>


<script src="js/employees/employees.js"></script>
<script src="js/employees/edit/employee-edit.js"></script>
<script src="js/employees/create/employee-create.js"></script>

<script src="js/accidents/accidents.js"></script>
<script src="js/accidents/edit/accident-edit.js"></script>
<script src="js/accidents/create/accident-create.js"></script>

<script src="js/claims/claims.js"></script>
<script src="js/claims/edit/claim-edit.js"></script>
<script src="js/claims/create/claim-create.js"></script>

<script src="js/employees/viewProfile/viewProfile.js"></script>

</body>
</html>