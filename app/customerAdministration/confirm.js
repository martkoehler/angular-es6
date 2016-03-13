export default function confirm() {
    return {
      restrict: 'E',
      template: '<button type="button" class="close" aria-label="Close" ng-click="confirm()"> <span class = "glyphicon glyphicon-remove-circle"> </span> </button>',
      scope: {
        call: '&',
        title: '@',
        content: '@'
      },
      link: function(scope, element) {
        scope.confirm = function() {
          angular.element.confirm({
            title: scope.title,
            content: scope.content,
            confirmButton: 'Yes',
            cancelButton: 'No',
            confirm: function() {
            scope.$apply(function() {
               scope.call();
            });

            },
            cancel: function() {

            }
          });
        }
      }
    };

  }
