(function () {
    'use strict';

    angular
        .module('testingApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();
