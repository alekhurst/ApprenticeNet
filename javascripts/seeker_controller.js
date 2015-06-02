ApprenticeNetApp.controller( 'SeekerController', [
'ApprenticeFactory',
'ApprenticeshipFactory',
'$scope',
'$routeParams',
'$rootScope',
function( ApprenticeFactory, ApprenticeshipFactory, $scope, $routeParams, $rootScope ) {
	$scope.left_panel = ApprenticeFactory.init(parseInt($routeParams.id));
	$scope.right_panel = ApprenticeshipFactory.init(0);

	/**
	 * Called once per module from directive in left panel. Pulls a partial based 
	 * on the module we want which is described in the factory data.
	 * @param {Number} index
	 */
	$scope.initLeftModuleTemplate = function( index ) {
		return './templates/left_panel_modules/' + $scope.left_panel.modules[ index ].partial;
	}	

	/**
	 * Called once per module from directive in left panel. Sets a CSS class based 
	 * on the module we want which is described in the factory data.
	 * @param {Number} index
	 */
	$scope.initLeftModuleStyles = function( index ) {
		return 'left-panel-' + $scope.left_panel.modules[ index ].css_class;
	}

	/**
	 * Called once per module from directive in right panel. Pulls a partial based 
	 * on the module we want described in the factory data. 
	 * @param {Number} index
	 */
	$scope.initRightModuleTemplate = function( index ) {
		return './templates/right_panel_modules/' + $scope.right_panel.modules[ index ].partial;
	}	

	/**
	 * Called once per module from directive in right panel. Sets a CSS class based 
	 * on the module we want which is described in the factory data.
	 * @param {Number} index
	 */
	$scope.initRightModuleStyles = function( index ) {
		if( index % 2 === 0 )
			return 'clear-float right-panel-' + $scope.right_panel.modules[ index ].css_class;
		return 'right-panel-' + $scope.right_panel.modules[ index ].css_class;
	}

	/**
	 * Called when a user clicks interested or not interested on an apprenticeship. 
	 * Handles the animation as well as gets another apprenticeship
	 */
	$scope.makeApprenticeshipDecision = function( decision ) {
		$('#right-panel-seeker').children().not('#' + decision).fadeOut(400);	
		setTimeout( function() { 
			$scope.right_panel = ApprenticeshipFactory.init( ++$scope.right_panel.apprenticeship_id ); 
			if(!$scope.$$progress)
				$scope.$digest();
			$('#right-panel-seeker').children().fadeIn(400);
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
		$scope.left_panel.apprentice_tags.unshift(tag);
		$scope.current_tag_query = '';
		$scope.show_add_tag_button = false;
	}

	/**
	 * Removes a tag from the users profile when a user clicks the x next to the 
	 * respective tag in the tags dropdown
	 * @param {Number} index
	 */
	$scope.removeTag = function( index ) {
		$scope.left_panel.apprentice_tags.splice(index, 1);
	}
}]);