ApprenticeNetApp.factory('ApprenticeshipFactory', function($http) {
	var self = {};
	
	/**
	 * Grabs a job from the ghetto db and returns it
	 * @param { Number } ghetto_db_id
	 */
	self.init = function( ghetto_db_id ) {
		self.master_id = window.GhettoDatabase.apprenticeships[ ghetto_db_id ].master_id;
		self.apprenticeship_name = window.GhettoDatabase.apprenticeships[ ghetto_db_id ].apprenticeship_name;
		self.master_name = window.GhettoDatabase.apprenticeships[ ghetto_db_id ].master_name;
		self.dates = window.GhettoDatabase.apprenticeships[ ghetto_db_id].dates;
		self.hours = window.GhettoDatabase.apprenticeships[ ghetto_db_id ].hours;
		self.modules = window.GhettoDatabase.apprenticeships[ ghetto_db_id ].modules;
		self.profile_picture = window.GhettoDatabase.apprenticeships[ ghetto_db_id ].profile_picture;

		return self;
	}

	/**
	 * Gets all of the apprenticeships from a specified master except for the one
	 * currently selected
	 * @param { Object } master
	 */
	self.getApprenticeshipsFromMaster = function( master ) {
		var results = [];
		for( var i = 0; i < window.GhettoDatabase.apprenticeships.length; i++ ) {
			if( window.GhettoDatabase.apprenticeships[i].master_name === master.master_name 
				&& window.GhettoDatabase.apprenticeships[i].master_id != master.master_id) {
				results.push( window.GhettoDatabase.apprenticeships[i] );
			}
		}
		return results;
	}

	return self;
});