ApprenticeNetApp.factory('EmployeeFactory', function($http) {
	var self = {};

	/**
	 * Grabs an entry from the ghetto db and returns it
	 * @param {Number} ghetto_db_id
	 */
	self.init = function(ghetto_db_id) {
		self.employee_name = window.GhettoDatabase.employees[ghetto_db_id].employee_name;
		self.employee_description = window.GhettoDatabase.employees[ghetto_db_id].employee_description;
		self.modules = window.GhettoDatabase.employees[ghetto_db_id].modules;
		return self;
	} 

	return self;
});