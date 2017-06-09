(function() {
  'use strict';

  angular
    .module('bnpapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
