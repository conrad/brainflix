// Make sure to include the `ui.router` module as a dependency
var app = angular.module('Movme', [
  'ui.router', 
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize',
  'ngRoute',
  // 'firebase',
  // 'flow',
  // 'stripe',
  // 'ngEmoticons',
  // 'textAngular',
  // 'angularjs-facebook-sdk',
  // 'angulartics.google.analytics',

  
])

app.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;


    }
  ]
)

// app.config(function facebookConfig (facebookConfigProvider) {
//       facebookConfigProvider.setAppId('1415417408775009');
//       facebookConfigProvider.setLanguage('en-US');
//       facebookConfigProvider.setDebug(false);

//       // When autoInit is setted to false you need to initialize
//       // the facebookConfig service manually inside a run block.
//       facebookConfigProvider.autoInit(false);

//       // Same: developers.facebook.com/docs/javascript/reference/FB.init/
//       facebookConfigProvider.setOptions({
//         status: true
//       });
//     })

// app.run(function appRunner(facebookConfig) {
//       // Only need when auto initialization is disabled
//       // using facebookConfigProvider.autoInit(false)
//       facebookConfig.init().then(function(){
//         console.log('Facebook SDK is loaded.');
//       });
//     })

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}])

// app.config(function(){

// Stripe.setPublishableKey('pk_SOcVcxfKfxOQX7QsGbriRZDDKJAia');

// })

app.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      $urlRouterProvider

        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        .when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id')

        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/');


      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider


        //////////
        // Admin //
        //////////

        .state("home", {

          // Use a url of "/" to set a states as the "index".
          url: "/",

          templateUrl: 'index.html'

        })
        .state("adminShop", {

          // Use a url of "/" to set a states as the "index".
          url: "/admin/shop",

          templateUrl: 'public/views/admin/shop/index.html'

        })







    }
  ]
);
app.directive("filepicker", function(){
  return {
    scope: {
      callback: '&',
      'pickerclass': '@'
    },
    transclude: true,
    restrict: "A",
    template: "<a href='javascript:;' class='{{pickerclass}}' ng-click='pickFiles()' ng-transclude></a>",
    link: function(scope, element, attrs) {
      scope.pickFiles = function () {
        var picker_options = {
          container: 'modal',
          mimetypes: attrs.mimetypes ? eval(attrs.mimetypes) : ['*'],
          multiple: attrs.multiple ? eval(attrs.multiple) : false
          };

        var path = attrs.path ? attrs.path : '/uploads/',
          container = attrs.container ? attrs.container : 'documents.e-freightliner.com';

        var store_options = {
          location: 'S3',
          path: path,
          container: container
        };

        filepicker.pickAndStore(picker_options, store_options, function (fpfiles) {
          scope.$apply(function(){
            scope.callback({file:fpfiles});
          });
        });
      };
    }
  };
});