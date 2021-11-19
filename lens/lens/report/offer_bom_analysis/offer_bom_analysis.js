// Copyright (c) 2016, LMNAs Cloud Solutions and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Offer BOM Analysis"] = {
	"filters": [
		{
			"fieldname":"quotation",
			"label": __("Offer"),
			"fieldtype": "Link",
			"options": "Quotation",
			"reqd": 1,
		},

	]
};
