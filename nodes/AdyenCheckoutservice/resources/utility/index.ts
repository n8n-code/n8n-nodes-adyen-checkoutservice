import type { INodeProperties } from 'n8n-workflow';

export const utilityDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					]
				}
			},
			"options": [
				{
					"name": "Post Apple Pay Sessions",
					"value": "Post Apple Pay Sessions",
					"action": "Get an Apple Pay session",
					"description": "You need to use this endpoint if you have an API-only integration with Apple Pay which uses Adyen's Apple Pay certificate.\n\nThe endpoint returns the Apple Pay session data which you need to complete the [Apple Pay session validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applePay/sessions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /applePay/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Post Apple Pay Sessions"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Key",
			"name": "Idempotency-Key",
			"description": "A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).",
			"default": "37ca9c97-d1d1-4c62-89e8-706891a563ed",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Idempotency-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Post Apple Pay Sessions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"description": "This is the name that your shoppers will see in the Apple Pay interface.\n\nThe value returned as `configuration.merchantName` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Post Apple Pay Sessions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain Name",
			"name": "domainName",
			"type": "string",
			"default": "",
			"description": "The domain name you provided when you added Apple Pay in your Customer Area.\n\nThis must match the `window.location.hostname` of the web shop.",
			"routing": {
				"send": {
					"property": "domainName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Post Apple Pay Sessions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Identifier",
			"name": "merchantIdentifier",
			"type": "string",
			"default": "",
			"description": "Your merchant identifier registered with Apple Pay.\n\nUse the value of the `configuration.merchantId` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.",
			"routing": {
				"send": {
					"property": "merchantIdentifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Post Apple Pay Sessions"
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
						"Utility"
					],
					"operation": [
						"Post Apple Pay Sessions"
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
						"Utility"
					],
					"operation": [
						"Post Apple Pay Sessions"
					]
				}
			}
		},
];
