ApprenticeNetApp.factory('JobFactory', function($http) {
	var self = {};
	
	/**
	 * Grabs a job from the ghetto db and returns it
	 */
	self.init = function(ghetto_db_id) {
		self.job_name = window.GhettoDatabase.jobs[ghetto_db_id].job_name;
		self.employer_name = window.GhettoDatabase.jobs[ghetto_db_id].employer_name;
		self.dates = window.GhettoDatabase.jobs[ghetto_db_id].dates;
		self.hours = window.GhettoDatabase.jobs[ghetto_db_id].hours;
		self.modules = window.GhettoDatabase.jobs[ghetto_db_id].modules;

		return self;
	}

	return self;
});