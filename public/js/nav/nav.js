angular.module('nav', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav', {
                url: '/',
                views: {
                    //target the ui-view named 'nav' in ROOT state (wombat)
                    //this lets us have a persistent side bar and to include partials in the rest of the layout
                    'topNav@': {
                        controller: 'TopNavCtrl as topNavCtrl',
                        templateUrl: 'js/nav/topNav.tmpl.html'
                    },
                    'sideNav@': {
                        controller: 'SideNavCtrl as sideNavCtrl',
                        templateUrl: 'js/nav/sideNav.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('TopNavCtrl', function TopNavCtrl() {
        // var navCtrl = this;
    })
    .controller('SideNavCtrl', function SideNavCtrl() {
        // var navCtrl = this;
    })
;