ApprenticeNetApp.controller( 'JobSeekerController', [
'EmployeeFactory',
'JobFactory',
'$scope',
'$routeParams',
'$rootScope',
function( EmployeeFactory, JobFactory, $scope, $routeParams, $rootScope ) {
	$scope.user = EmployeeFactory.init(0);
	$scope.job = JobFactory.init(0);

	/**
	 * Called once per module from directive in left panel. Pulls a partial based 
	 * on the module we want which is described in the factory data.
	 * @param {Number} index
	 */
	$scope.initLeftModuleTemplate = function( index ) {
		return '/templates/left_panel_modules/' + $scope.user.modules[ index ].partial;
	}	

	/**
	 * Called once per module from directive in left panel. Sets a CSS class based 
	 * on the module we want which is described in the factory data.
	 * @param {Number} index
	 */
	$scope.initLeftModuleStyles = function( index ) {
		return 'left-panel-' + $scope.user.modules[ index ].css_class;
	}

	/**
	 * Called once per module from directive in right panel. Pulls a partial based 
	 * on the module we want described in the factory data. 
	 * @param {Number} index
	 */
	$scope.initRightModuleTemplate = function( index ) {
		return '/templates/right_panel_modules/' + $scope.job.modules[ index ].partial;
	}	

	/**
	 * Called once per module from directive in right panel. Sets a CSS class based 
	 * on the module we want which is described in the factory data.
	 * @param {Number} index
	 */
	$scope.initRightModuleStyles = function( index ) {
		if( index % 2 === 0 )
			return 'clear-float right-panel-' + $scope.job.modules[ index ].css_class;
		return 'right-panel-' + $scope.job.modules[ index ].css_class;
	}

	/**
	 * Called when a user clicks interested or not interested on a job. Handles the
	 * animation as well as gets another job
	 */
	$scope.makeJobDecision = function( decision ) {
		$('#right-panel').children().not('#' + decision).fadeOut(400);	
		setTimeout( function() { 
			$scope.job = JobFactory.init(1); 
			if(!$scope.$$progress)
				$scope.$digest();
			$('#right-panel').children().fadeIn(400);
		}, 400)
	}
}]);