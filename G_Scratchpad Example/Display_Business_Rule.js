(function executeRule(current, previous /*null when async*/) {
	
	/*******************************************************
	// fetches the property to get list of restricted groups
	********************************************************/
	g_scratchpad.restricted_group_property = gs.getProperty('restricted_group_sys_id');

})(current, previous);