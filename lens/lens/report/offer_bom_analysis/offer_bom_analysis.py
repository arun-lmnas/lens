# Copyright (c) 2013, LMNAs Cloud Solutions and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
filters = frappe._dict(filters or {})
	columns = get_columns(filters)
	data = get_data(filters)
	return columns, data

def get_columns(filters):
	columns = [
		{
			"label": _("Offer"),
			"fieldtype": "Link",
			"fieldname": "quotation",
			"options": "Quotation",
			"width": 100
		},
		{
			"label": _("EBITDA"),
			"fieldtype": "Currency",
			"fieldname": "ll_ebitda",
			"width": 100
		},
		{
			"label": _("EBITDA Percent"),
			"fieldtype": "Percent",
			"fieldname": "ll_ebitda_percent",
			"width": 100
		},
		{
			"label": _("Item"),
			"fieldtype": "Link",
			"fieldname": "item",
			"options": "Item",
			"width": 100
		},
		{
			"label": _("BOM"),
			"fieldtype": "Link",
			"fieldname": "bom",
			"options": "BOM",
			"hidden": 1,
			"width": 50
		}
		
	]

	return columns

def get_data(filters):

	data = []
	quotation = frappe.db.get_value("Quotation", filters.quotation, ['name', 'll_ebitda', 'll_ebitda_percent'], as_dict=1)

	row = {"quotation": quotation.name, "ll_ebitda": quotation.ll_ebitda, "ll_ebitda_percent": quotation.ll_ebitda_percent,  
	       "item": "", "bom": ""}

	data.append(row)

	return data
