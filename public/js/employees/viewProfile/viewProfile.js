angular.module('employees.viewProfile', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.employees.viewProfile', {
                url: '/viewProfile',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'js/employees/viewProfile/viewProfile.tmpl.html',
                controller: 'ViewProfileCtrl as viewProfileCtrl'
            })
        ;
    })
    .controller('ViewProfileCtrl', function($state, EmployeesModel, USStatesModel, CountriesModel) {
        var viewProfileCtrl = this;

        function returnToEmployees() {
            $state.go('wombat.nav.employees')
        }
        //
        // function cancelCreating() {
        //     returnToEmployees();
        // }
        //
        // function createEmployee() {
        //     EmployeesModel.createEmployee(createEmployeeCtrl.newEmployee);
        //     returnToEmployees();
        // }
        //
        // function resetForm() {
        //     createEmployeeCtrl.newEmployee = {
        //         id: '',
        //         FirstName: '',
        //         MI: '',
        //         LastName: '',
        //         HouseNumber: '',
        //         Street: '',
        //         City: '',
        //         County: '',
        //         EmployeeState: '',
        //         EmployeeCountry: '',
        //         Zip: '',
        //         DateOfBirth: '',
        //         HireDate: '',
        //         LicenseDate: '',
        //         TerminationDate: '',
        //         Salary: ''
        //     };
        // }
        //
        // createEmployeeCtrl.today = new Date();
        // createEmployeeCtrl.minAge = new Date(18*365*24*60*60*1000);
        // // years/days/hours/minutes/seconds/milliseconds
        // USStatesModel.getUSStates()
        //     .then(function (usstates) {
        //         createEmployeeCtrl.usstates = usstates;
        //     });
        // CountriesModel.getCountries()
        //     .then(function (countries) {
        //         createEmployeeCtrl.countries = countries;
        //     });
        //
        // createEmployeeCtrl.cancelCreating = cancelCreating;
        // createEmployeeCtrl.createEmployee = createEmployee;
        //
        // resetForm();
    });