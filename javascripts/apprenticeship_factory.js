ApprenticeNetApp.factory('ApprenticeshipFactory', function($http) {
	var self = {};
	
	/**
	 * Grabs a job from the ghetto db and returns it
	 * @param { Number } ghetto_db_id
	 */
	self.init = function( ghetto_db_id ) {
		for( var i = 0; i < window.GhettoDatabase.apprenticeships.length; i++ ) {
			if( ghetto_db_id == window.GhettoDatabase.apprenticeships[ i ].apprenticeship_id) {
				self.apprenticeship_id = window.GhettoDatabase.apprenticeships[ i ].apprenticeship_id;
				self.master_id = window.GhettoDatabase.apprenticeships[ i ].master_id;
				self.apprenticeship_name = window.GhettoDatabase.apprenticeships[ i ].apprenticeship_name;
				self.master_name = window.GhettoDatabase.apprenticeships[ i ].master_name;
				self.dates = window.GhettoDatabase.apprenticeships[ i ].dates;
				self.hours = window.GhettoDatabase.apprenticeships[ i ].hours;
				self.modules = window.GhettoDatabase.apprenticeships[ i ].modules;
				self.profile_picture = window.GhettoDatabase.apprenticeships[ i ].profile_picture;
				return self;
			} else if( i === ( window.GhettoDatabase.apprenticeships.length - 1 ) ) {
				self.apprenticeship_id = window.GhettoDatabase.apprenticeships[ 0 ].apprenticeship_id;
				self.master_id = window.GhettoDatabase.apprenticeships[ 0 ].master_id;
				self.apprenticeship_name = window.GhettoDatabase.apprenticeships[ 0 ].apprenticeship_name;
				self.master_name = window.GhettoDatabase.apprenticeships[ 0 ].master_name;
				self.dates = window.GhettoDatabase.apprenticeships[ 0 ].dates;
				self.hours = window.GhettoDatabase.apprenticeships[ 0 ].hours;
				self.modules = window.GhettoDatabase.apprenticeships[ 0 ].modules;
				self.profile_picture = window.GhettoDatabase.apprenticeships[ 0 ].profile_picture;
				return self;
			}
		}
	}

	/**
	 * Gets all of the apprenticeships from a specified master except for the one
	 * currently selected
	 * @param { Object } master
	 */
	self.getApprenticeshipsFromMaster = function( master ) {
		var results = [];
		for( var i = 0; i < window.GhettoDatabase.apprenticeships.length; i++ ) {
			if( window.GhettoDatabase.apprenticeships[i].master_id === master.master_id
				&& window.GhettoDatabase.apprenticeships[i].apprenticeship_id != master.apprenticeship_id) {
				results.push( window.GhettoDatabase.apprenticeships[i] );
			}
		}
		return results;
	}

	return self;
});