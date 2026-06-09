import type { INodeProperties } from 'n8n-workflow';

export const ordersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					]
				}
			},
			"options": [
				{
					"name": "Post Orders",
					"value": "Post Orders",
					"action": "Create an order",
					"description": "Creates an order to be used for partial payments. Make a POST `/orders` call before making a `/payments` call when processing payments with different payment methods.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders"
						}
					}
				},
				{
					"name": "Post Orders Cancel",
					"value": "Post Orders Cancel",
					"action": "Cancel an order",
					"description": "Cancels an order. Cancellation of an order results in an automatic rollback of all payments made in the order, either by canceling or refunding the payment, depending on the type of payment method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/cancel"
						}
					}
				},
				{
					"name": "Post Payment Methods Balance",
					"value": "Post Payment Methods Balance",
					"action": "Get the balance of a gift card",
					"description": "Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make a POST `/paymentMethods/balance` call and include the gift card's details inside a `paymentMethod` object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/paymentMethods/balance"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
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
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "json",
			"default": "{}",
			"description": "The total amount of the order.",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"displayName": "Expires At",
			"name": "expiresAt",
			"type": "string",
			"default": "",
			"description": "The date that order expires; e.g. 2019-03-23T12:25:28Z. If not provided, the default expiry duration is 1 day.",
			"routing": {
				"send": {
					"property": "expiresAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier, with which you want to process the order.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "A custom reference identifying the order.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
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
						"Orders"
					],
					"operation": [
						"Post Orders"
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
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders Cancel"
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
						"Orders"
					],
					"operation": [
						"Post Orders Cancel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier that orderData belongs to.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders Cancel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Order",
			"name": "order",
			"type": "json",
			"default": "{}",
			"description": "The order request object that contains a pspReference that represents the order and the matching encrypted order data.",
			"routing": {
				"send": {
					"property": "order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders Cancel"
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
						"Orders"
					],
					"operation": [
						"Post Orders Cancel"
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
						"Orders"
					],
					"operation": [
						"Post Orders Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /paymentMethods/balance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
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
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Account Info",
			"name": "accountInfo",
			"type": "json",
			"default": "{}",
			"description": "Shopper account information for 3D Secure 2.\n> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.",
			"routing": {
				"send": {
					"property": "accountInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Additional Amount",
			"name": "additionalAmount",
			"type": "json",
			"default": "{}",
			"description": "If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).\nRequired to be in the same currency as the `amount`. ",
			"routing": {
				"send": {
					"property": "additionalAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Additional Data",
			"name": "additionalData",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "additionalData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "json",
			"default": "{}",
			"description": "The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Application Info",
			"name": "applicationInfo",
			"type": "json",
			"default": "{\n  \"adyenLibrary\": {},\n  \"adyenPaymentSource\": {},\n  \"externalPlatform\": {},\n  \"merchantApplication\": {},\n  \"merchantDevice\": {},\n  \"shopperInteractionDevice\": {}\n}",
			"description": "Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).",
			"routing": {
				"send": {
					"property": "applicationInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Billing Address",
			"name": "billingAddress",
			"type": "json",
			"default": "{}",
			"description": "The address where to send the invoice.\n> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.\n>* For 3D Secure 2 transactions in all browser-based and mobile implementations.\n>* For cross-border payouts to and from Canada.",
			"routing": {
				"send": {
					"property": "billingAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Browser Info",
			"name": "browserInfo",
			"type": "json",
			"default": "{\n  \"javaScriptEnabled\": true\n}",
			"description": "The shopper's browser information.\n> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 1.",
			"routing": {
				"send": {
					"property": "browserInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Capture Delay Hours",
			"name": "captureDelayHours",
			"type": "number",
			"default": 0,
			"description": "The delay between the authorisation and scheduled auto-capture, specified in hours.",
			"routing": {
				"send": {
					"property": "captureDelayHours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "",
			"description": "The shopper's date of birth.\n\nFormat [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Dcc Quote",
			"name": "dccQuote",
			"type": "json",
			"default": "{\n  \"baseAmount\": {},\n  \"buy\": {},\n  \"interbank\": {},\n  \"sell\": {}\n}",
			"description": "The forex quote as returned in the response of the forex service.",
			"routing": {
				"send": {
					"property": "dccQuote",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Delivery Address",
			"name": "deliveryAddress",
			"type": "json",
			"default": "{}",
			"description": "The address where the purchased goods should be delivered.",
			"routing": {
				"send": {
					"property": "deliveryAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Delivery Date",
			"name": "deliveryDate",
			"type": "string",
			"default": "",
			"description": "The date and time the purchased goods should be delivered.\n\nFormat [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD\n\nExample: 2017-07-17T13:42:40.428+01:00",
			"routing": {
				"send": {
					"property": "deliveryDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Device Fingerprint",
			"name": "deviceFingerprint",
			"type": "string",
			"default": "",
			"description": "A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).",
			"routing": {
				"send": {
					"property": "deviceFingerprint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Fraud Offset",
			"name": "fraudOffset",
			"type": "number",
			"default": 0,
			"description": "An integer value that is added to the normal fraud score. The value can be either positive or negative.",
			"routing": {
				"send": {
					"property": "fraudOffset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Installments",
			"name": "installments",
			"type": "json",
			"default": "{}",
			"description": "Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).",
			"routing": {
				"send": {
					"property": "installments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Localized Shopper Statement",
			"name": "localizedShopperStatement",
			"type": "json",
			"default": "{}",
			"description": "This field allows merchants to use dynamic shopper statement in local character sets.\nThe local shopper statement field can be supplied in markets where localized merchant descriptors are used. Currently, Adyen only supports this in the Japanese market\n.The available character sets at the moment are:\n* Processing in Japan: **ja-Kana**\nThe character set **ja-Kana** supports UTF-8 based Katakana and alphanumeric and special characters.\nMerchants can use half-width or full-width characters.\nAn example request would be:\n> {\n  \"shopperStatement\" : \"ADYEN - SELLER-A\",\n  \"localizedShopperStatement\" : {\n    \"ja-Kana\" : \"ADYEN - セラーA\"\n  }\n}\nWe recommend merchants to always supply the field localizedShopperStatement in addition to the field shopperStatement.It is issuer dependent whether the localized shopper statement field is supported.\nIn the case of non-domestic transactions (e.g. US-issued cards processed in JP) the field `shopperStatement` is used to modify the statement of the shopper.\nAdyen handles the complexity of ensuring the correct descriptors are assigned.\nPlease note, this field can be used for only Visa and Mastercard transactions.",
			"routing": {
				"send": {
					"property": "localizedShopperStatement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Mcc",
			"name": "mcc",
			"type": "string",
			"default": "",
			"description": "The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.",
			"routing": {
				"send": {
					"property": "mcc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier, with which you want to process the transaction.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Merchant Order Reference",
			"name": "merchantOrderReference",
			"type": "string",
			"default": "",
			"description": "This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.\nThe same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.\n> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.",
			"routing": {
				"send": {
					"property": "merchantOrderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Merchant Risk Indicator",
			"name": "merchantRiskIndicator",
			"type": "json",
			"default": "{\n  \"giftCardAmount\": {}\n}",
			"description": "Additional risk fields for 3D Secure 2.\n> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.",
			"routing": {
				"send": {
					"property": "merchantRiskIndicator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Metadata consists of entries, each of which includes a key and a value.\nLimits:\n* Maximum 20 key-value pairs per request. When exceeding, the \"177\" error occurs: \"Metadata size exceeds limit\".\n* Maximum 20 characters per key.\n* Maximum 80 characters per value. ",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Order Reference",
			"name": "orderReference",
			"type": "string",
			"default": "",
			"description": "When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.",
			"routing": {
				"send": {
					"property": "orderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payment Method",
			"name": "paymentMethod",
			"type": "json",
			"default": "{}",
			"description": "The collection that contains the type of the payment method and its specific information.",
			"routing": {
				"send": {
					"property": "paymentMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Recurring",
			"name": "recurring",
			"type": "json",
			"default": "{}",
			"description": "The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).",
			"routing": {
				"send": {
					"property": "recurring",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Recurring Processing Model",
			"name": "recurringProcessingModel",
			"type": "options",
			"default": "CardOnFile",
			"description": "Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.\nAllowed values:\n* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.\n* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.\n* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.\n",
			"options": [
				{
					"name": "Card On File",
					"value": "CardOnFile"
				},
				{
					"name": "Subscription",
					"value": "Subscription"
				},
				{
					"name": "Unscheduled Card On File",
					"value": "UnscheduledCardOnFile"
				}
			],
			"routing": {
				"send": {
					"property": "recurringProcessingModel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.\nIf you need to provide multiple references for a transaction, separate them with hyphens (\"-\").\nMaximum length: 80 characters.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Selected Brand",
			"name": "selectedBrand",
			"type": "string",
			"default": "",
			"description": "Some payment methods require defining a value for this field to specify how to process the transaction.\n\nFor the Bancontact payment method, it can be set to:\n* `maestro` (default), to be processed like a Maestro card, or\n* `bcmc`, to be processed like a Bancontact card.",
			"routing": {
				"send": {
					"property": "selectedBrand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Selected Recurring Detail Reference",
			"name": "selectedRecurringDetailReference",
			"type": "string",
			"default": "",
			"description": "The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.",
			"routing": {
				"send": {
					"property": "selectedRecurringDetailReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"description": "A session ID used to identify a payment session.",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Shopper Email",
			"name": "shopperEmail",
			"type": "string",
			"default": "",
			"description": "The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.\n> For 3D Secure 2 transactions, schemes require `shopperEmail` for all browser-based and mobile implementations.",
			"routing": {
				"send": {
					"property": "shopperEmail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Shopper IP",
			"name": "shopperIP",
			"type": "string",
			"default": "",
			"description": "The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).\n> For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations.\nThis field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).",
			"routing": {
				"send": {
					"property": "shopperIP",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Shopper Interaction",
			"name": "shopperInteraction",
			"type": "options",
			"default": "Ecommerce",
			"description": "Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.",
			"options": [
				{
					"name": "Ecommerce",
					"value": "Ecommerce"
				},
				{
					"name": "Cont Auth",
					"value": "ContAuth"
				},
				{
					"name": "Moto",
					"value": "Moto"
				},
				{
					"name": "POS",
					"value": "POS"
				}
			],
			"routing": {
				"send": {
					"property": "shopperInteraction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Shopper Locale",
			"name": "shopperLocale",
			"type": "string",
			"default": "",
			"description": "The combination of a language code and a country code to specify the language to be used in the payment.",
			"routing": {
				"send": {
					"property": "shopperLocale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Shopper Name",
			"name": "shopperName",
			"type": "json",
			"default": "{}",
			"description": "The shopper's full name.",
			"routing": {
				"send": {
					"property": "shopperName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"type": "string",
			"default": "",
			"description": "Required for recurring payments. \nYour reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.\n> Your reference must not include personally identifiable information (PII), for example name or email address.",
			"routing": {
				"send": {
					"property": "shopperReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Shopper Statement",
			"name": "shopperStatement",
			"type": "string",
			"default": "",
			"description": "The text to be shown on the shopper's bank statement.\n We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.\n Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.",
			"routing": {
				"send": {
					"property": "shopperStatement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Social Security Number",
			"name": "socialSecurityNumber",
			"type": "string",
			"default": "",
			"description": "The shopper's social security number.",
			"routing": {
				"send": {
					"property": "socialSecurityNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Splits",
			"name": "splits",
			"type": "json",
			"default": "[\n  {\n    \"amount\": {}\n  }\n]",
			"description": "An array of objects specifying how the payment should be split when using [Adyen for Platforms](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information) or [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).",
			"routing": {
				"send": {
					"property": "splits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Store",
			"name": "store",
			"type": "string",
			"default": "",
			"description": "The ecommerce or point-of-sale store that is processing the payment. Used in [partner model integrations](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#route-payments) for Adyen for Platforms.",
			"routing": {
				"send": {
					"property": "store",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Telephone Number",
			"name": "telephoneNumber",
			"type": "string",
			"default": "",
			"description": "The shopper's telephone number.",
			"routing": {
				"send": {
					"property": "telephoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Three DS 2 Request Data",
			"name": "threeDS2RequestData",
			"type": "json",
			"default": "{\n  \"acctInfo\": {},\n  \"authenticationOnly\": false,\n  \"deviceRenderOptions\": {\n    \"sdkInterface\": \"both\",\n    \"sdkUiType\": [\n      null\n    ]\n  },\n  \"homePhone\": {},\n  \"messageVersion\": \"2.1.0\",\n  \"mobilePhone\": {},\n  \"sdkEphemPubKey\": {},\n  \"sdkMaxTimeout\": 60,\n  \"threeDSRequestorAuthenticationInfo\": {},\n  \"threeDSRequestorPriorAuthenticationInfo\": {},\n  \"workPhone\": {}\n}",
			"description": "Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.",
			"routing": {
				"send": {
					"property": "threeDS2RequestData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Three DS Authentication Only",
			"name": "threeDSAuthenticationOnly",
			"type": "boolean",
			"default": false,
			"description": "If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.",
			"routing": {
				"send": {
					"property": "threeDSAuthenticationOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Totals Group",
			"name": "totalsGroup",
			"type": "string",
			"default": "",
			"description": "The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).",
			"routing": {
				"send": {
					"property": "totalsGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
		{
			"displayName": "Trusted Shopper",
			"name": "trustedShopper",
			"type": "boolean",
			"default": true,
			"description": "Set to true if the payment should be routed to a trusted MID.",
			"routing": {
				"send": {
					"property": "trustedShopper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
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
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
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
						"Orders"
					],
					"operation": [
						"Post Payment Methods Balance"
					]
				}
			}
		},
];
