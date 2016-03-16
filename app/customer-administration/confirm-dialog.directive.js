export default function confirm() {
    return new ConfirmDialog();
}

class ConfirmDialog {
  constructor() {
    this.restrict= 'E';
    this.templateUrl= './customer-administration/confirm-dialog.template.html';
    this.scope= {
      call: '&',
      title: '@',
      content: '@'
    };
  }
    link(scope, element) {
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
  }
