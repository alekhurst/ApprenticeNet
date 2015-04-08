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
		return './templates/left_panel_modules/' + $scope.user.modules[ index ].partial;
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
		return './templates/right_panel_modules/' + $scope.job.modules[ index ].partial;
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

	/**
	 * When a user is typing in the tag search, this funciton gets called onchange
	 * @param {String} tag
	 */
	$scope.checkTagQuery = function( tag ) {
		if( tag )
			$scope.show_add_tag_button = true;
		else
			$scope.show_add_tag_button = false;
	}

	/**
	 * Adds the tag to apprentice search when a user types in a tag to the query box
	 * and then presses the add button
	 * @param {String} tag
	 */
	$scope.addTag = function( tag) {
		$scope.user.employee_tags.unshift(tag);
		$scope.current_tag_query = '';
		$scope.show_add_tag_button = false;
	}

	/**
	 * Removes a tag from the users profile when a user clicks the x next to the 
	 * respective tag in the tags dropdown
	 * @param {Number} index
	 */
	$scope.removeTag = function( index ) {
		$scope.user.employee_tags.splice(index, 1);
	}
}]);