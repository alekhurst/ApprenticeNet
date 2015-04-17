ApprenticeNetApp.factory('ApprenticeFactory', function($http) {
	var self = {};

	/**
	 * Grabs an entry from the ghetto db and returns it
	 * @param {Number} ghetto_db_id
	 */
	self.init = function(ghetto_db_id) {
		self.apprentice_name = window.GhettoDatabase.apprentices[ghetto_db_id].apprentice_name;
		self.apprentice_description = window.GhettoDatabase.apprentices[ghetto_db_id].apprentice_description;
		self.apprentice_tags = window.GhettoDatabase.apprentices[ghetto_db_id].apprentice_tags;
		self.modules = window.GhettoDatabase.apprentices[ghetto_db_id].modules;
		self.profile_picture = window.GhettoDatabase.apprentices[ghetto_db_id].profile_picture;
		return self;
	} 

	return self;
});