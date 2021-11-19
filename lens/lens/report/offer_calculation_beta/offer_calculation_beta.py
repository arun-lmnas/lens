# Copyright (c) 2013, LMNAs Cloud Solutions and contributors
# For license information, please see license.txt

# import frappe

def get_columns():
  return [
    {
      "fieldname": "someField",
      "fieldtype": "Int",
      "label": "Some Field",
      "width": 100
    },
  ]

def get_data(fltr):
  values = [
    { "someField":  30 },
    { "someField":  45 },
    { "someField":  60 },
    { "someField":  75 },
    { "someField":  90 },
    { "someField": 105 }
  ]
  return [ v for v in values if v["someField"] > int(fltr.someField) ]

def execute(filters=None):
  return get_columns(), get_data(filters) 
