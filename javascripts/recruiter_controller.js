ApprenticeNetApp.controller( 'RecruiterController', [
'ApprenticeFactory',
'ApprenticeshipFactory',
'$scope',
'$routeParams',
'$rootScope',
function( ApprenticeFactory, ApprenticeshipFactory, $scope, $routeParams, $rootScope ) {
	$scope.left_panel = ApprenticeshipFactory.init(parseInt($routeParams.id));
	$scope.right_panel = ApprenticeFactory.init(0);
	$scope.user_apprenticeships = ApprenticeshipFactory.getApprenticeshipsFromMaster( $scope.left_panel );
	$scope.matched = false;

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
	$scope.makeApprenticeDecision = function( decision ) {
		$('#right-panel-recruiter').children().not('#' + decision).fadeOut(400);	
		setTimeout( function() { 
			// decide whether to show next apprentice or to show matched popup
			if( $scope.right_panel.apprentice_id === 2 ) {
				console.log('here');
				$scope.matched = true;
				$('#matches').css('background-color','#EDAF42');
				if(!$scope.$$progress)
					$scope.$digest();


			} else {
				$scope.right_panel = ApprenticeFactory.init( $scope.right_panel.apprentice_id + 1 ); 
				if(!$scope.$$progress)
					$scope.$digest();
				$('#right-panel-recruiter').children().fadeIn(400);
			}
		}, 400)
	}

	$scope.changeCurrentApprenticeship = function( apprentice ) {
		$scope.left_panel = apprentice;
		$scope.user_apprenticeships = ApprenticeshipFactory.getApprenticeshipsFromMaster( $scope.left_panel );
		$('#other-apprenticeships-container').css("display", "none");

		// put this at the back of the operation queue
		setTimeout( function() { 
			$('#other-apprenticeships-container').css("display", "");
		}, 0)
	}


}]);