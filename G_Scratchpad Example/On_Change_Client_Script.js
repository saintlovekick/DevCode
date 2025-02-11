function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var restricted_group = g_scratchpad.restricted_group_property;
    if (restricted_group.includes(newValue)) {
        g_form.clearMessages();
        g_form.addErrorMessage("You cannot assign an Incident to this group");
        // Clear the assignment group field
        g_form.setValue("assignment_group", "");
    }

}