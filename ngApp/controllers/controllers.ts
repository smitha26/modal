namespace modal.Controllers {
  export class HomeController {

      public showModal(animalName: string) {
          this.$uibModal.open({
              templateUrl: '/ngApp/views/dialog.html',
              controller: 'DialogController',
              controllerAs: 'modal',
              resolve: {
                  animalName: () => animalName
              },
              size: 'sm'
          });
      }

      constructor(private $uibModal: angular.ui.bootstrap.IModalService) { }
  }

angular.module('modal').controller('HomeController', HomeController);

    export class DialogController {
      public ok() {
            this.$uibModalInstance.close();
        }
        // public message = 'Hello from the about page!';
        constructor(public animalName: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
    }
angular.module('modal').controller('DialogController', DialogController);
}
