// Copyright (c) 2016, LMNAs Cloud Solutions and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Offer Calculation Beta"] = {
	"filters": [
    	{
      		fieldname: "xAxisField",
      		label: "Range Selection Filter",
      		fieldtype: "Select",
      		options: "30\n45\n60",
      		default: 30
    	},
	]
};
