ApprenticeNetApp.factory('ApprenticeFactory', function($http) {
	var self = {};

	/**
	 * Grabs an entry from the ghetto db and returns it
	 * @param {Number} ghetto_db_id
	 */
	self.init = function(ghetto_db_id) {
		for( var i = 0; i < window.GhettoDatabase.apprentices.length; i++ ) {
			if( ghetto_db_id === window.GhettoDatabase.apprentices[ i ].apprentice_id ) {
				self.apprentice_id = window.GhettoDatabase.apprentices[ i ].apprentice_id;
				self.apprentice_name = window.GhettoDatabase.apprentices[ i ].apprentice_name;
				self.apprentice_subtitle = window.GhettoDatabase.apprentices[ i ].apprentice_subtitle;
				self.apprentice_description = window.GhettoDatabase.apprentices[ i ].apprentice_description;
				self.apprentice_tags = window.GhettoDatabase.apprentices[ i ].apprentice_tags;
				self.modules = window.GhettoDatabase.apprentices[ i ].modules;
				self.profile_picture = window.GhettoDatabase.apprentices[ i ].profile_picture;
				return self;
			} else if ( i === ( window.GhettoDatabase.apprentices.length - 1) ) {
				self.apprentice_id = window.GhettoDatabase.apprentices[ 0 ].apprentice_id;
				self.apprentice_name = window.GhettoDatabase.apprentices[ 0 ].apprentice_name;
				self.apprentice_subtitle = window.GhettoDatabase.apprentices[ 0 ].apprentice_subtitle;
				self.apprentice_description = window.GhettoDatabase.apprentices[ 0 ].apprentice_description;
				self.apprentice_tags = window.GhettoDatabase.apprentices[ 0 ].apprentice_tags;
				self.modules = window.GhettoDatabase.apprentices[ 0 ].modules;
				self.profile_picture = window.GhettoDatabase.apprentices[ 0 ].profile_picture;
				return self;
			}

		}
	} 

	return self;
});