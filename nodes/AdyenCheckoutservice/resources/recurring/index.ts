import type { INodeProperties } from 'n8n-workflow';

export const recurringDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					]
				}
			},
			"options": [
				{
					"name": "Get Stored Payment Methods",
					"value": "Get Stored Payment Methods",
					"action": "Get tokens for stored payment details",
					"description": "Lists the tokens for stored payment details for the shopper identified in the path, if there are any available. The token ID can be used with payment requests for the shopper's payment. A summary of the stored details is included.\n\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storedPaymentMethods"
						}
					}
				},
				{
					"name": "Delete Stored Payment Methods Recurring ID",
					"value": "Delete Stored Payment Methods Recurring ID",
					"action": "Delete a token for stored payment details",
					"description": "Deletes the token identified in the path. The token can no longer be used with payment requests.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/storedPaymentMethods/{{$parameter[\"recurringId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /storedPaymentMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Get Stored Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"description": "Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.\n> Your reference must not include personally identifiable information (PII), for example name or email address.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shopperReference",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Get Stored Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"description": "Your merchant account.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "merchantAccount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Get Stored Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Get Stored Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Get Stored Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /storedPaymentMethods/{recurringId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Delete Stored Payment Methods Recurring ID"
					]
				}
			}
		},
		{
			"displayName": "Recurring ID",
			"name": "recurringId",
			"required": true,
			"description": "The unique identifier of the token.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Delete Stored Payment Methods Recurring ID"
					]
				}
			}
		},
		{
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"required": true,
			"description": "Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.\n> Your reference must not include personally identifiable information (PII), for example name or email address.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shopperReference",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Delete Stored Payment Methods Recurring ID"
					]
				}
			}
		},
		{
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"required": true,
			"description": "Your merchant account.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "merchantAccount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Delete Stored Payment Methods Recurring ID"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Delete Stored Payment Methods Recurring ID"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recurring"
					],
					"operation": [
						"Delete Stored Payment Methods Recurring ID"
					]
				}
			}
		},
];
