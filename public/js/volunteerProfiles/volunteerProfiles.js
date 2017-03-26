angular.module('volunteerProfiles', [
    // We want to include all the submodules that an employee object will have access to.
    // employees module is then routed to the main application
    // 'employees.create',
    // 'employees.edit',
    'wombat.models.volunteerProfiles'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.volunteerProfiles', {
                //by extending the nav module we are actually making employees a submodule of nav
                //this is how we maintain a persistent navigation bar across many views
                url: 'volunteerProfiles',
                views: {
                    'content@': {
                        controller: 'VolunteerProfilesCtrl as volunteerProfilesCtrl',
                        templateUrl: 'js/volunteerProfiles/volunteerProfiles.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('volunteerProfilesCtrl', function (VolunteerProfileModel) {
        var volunteerProfilesCtrl = this;

        // function openEdit(employee) {
        //     $state.go('wombat.nav.employees.edit', {params: {employeeId: employee.id}})
        // }
        VolunteerProfileModel.getEmployees()
            .then(function (employees) {
                volunteerProfilesCtrl.employees = employees;
            });

        // pull functions from the EmployeesModel into the employeesCtrl
        // to follow a function, hold ctrl and hover your mouse over the function
        // employeesCtrl.deleteEmployee = EmployeesModel.deleteEmployee;
        // employeesCtrl.openEdit = openEdit;
    })
;

