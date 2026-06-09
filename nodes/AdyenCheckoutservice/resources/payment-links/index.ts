import type { INodeProperties } from 'n8n-workflow';

export const paymentLinksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					]
				}
			},
			"options": [
				{
					"name": "Post Payment Links",
					"value": "Post Payment Links",
					"action": "Create a payment link",
					"description": "Creates a payment link to our hosted payment form where shoppers can pay. The list of payment methods presented to the shopper depends on the `currency` and `country` parameters sent in the request.\n\nFor more information, refer to [Pay by Link documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/paymentLinks"
						}
					}
				},
				{
					"name": "Get Payment Links Link ID",
					"value": "Get Payment Links Link ID",
					"action": "Get a payment link",
					"description": "Retrieves the payment link details using the payment link `id`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentLinks/{{$parameter[\"linkId\"]}}"
						}
					}
				},
				{
					"name": "Patch Payment Links Link ID",
					"value": "Patch Payment Links Link ID",
					"action": "Update the status of a payment link",
					"description": "Updates the status of a payment link. Use this endpoint to [force the expiry of a payment link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/paymentLinks/{{$parameter[\"linkId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /paymentLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Allowed Payment Methods",
			"name": "allowedPaymentMethods",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).\n\nExample: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`",
			"routing": {
				"send": {
					"property": "allowedPaymentMethods",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
			"description": "The payment amount and currency.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Billing Address",
			"name": "billingAddress",
			"type": "json",
			"default": "{}",
			"description": "The address where to send the invoice.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Blocked Payment Methods",
			"name": "blockedPaymentMethods",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).\n\nExample: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`",
			"routing": {
				"send": {
					"property": "blockedPaymentMethods",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"type": "string",
			"default": "",
			"description": "The shopper's two-letter country code.",
			"routing": {
				"send": {
					"property": "countryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Deliver At",
			"name": "deliverAt",
			"type": "string",
			"default": "",
			"description": "The date and time when the purchased goods should be delivered.\n\n[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.",
			"routing": {
				"send": {
					"property": "deliverAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A short description visible on the payment page.\nMaximum length: 280 characters.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Expires At",
			"name": "expiresAt",
			"type": "string",
			"default": "",
			"description": "The date when the payment link expires.\n\n[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.\n\nThe maximum expiry date is 70 days after the payment link is created.\n\nIf not provided, the payment link expires 24 hours after it was created.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Installment Options",
			"name": "installmentOptions",
			"type": "json",
			"default": "{}",
			"description": "A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.",
			"routing": {
				"send": {
					"property": "installmentOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Line Items",
			"name": "lineItems",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Price and product information about the purchased items, to be included on the invoice sent to the shopper.\nThis parameter is required for open invoice (_buy now, pay later_) payment methods such Afterpay, Clearpay, Klarna, RatePay, and Zip.",
			"routing": {
				"send": {
					"property": "lineItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Manual Capture",
			"name": "manualCapture",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the payment must be [captured manually](https://docs.adyen.com/online-payments/capture).",
			"routing": {
				"send": {
					"property": "manualCapture",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
			"description": "The merchant account identifier for which the payment link is created.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Merchant Order Reference",
			"name": "merchantOrderReference",
			"type": "string",
			"default": "",
			"description": "This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Metadata consists of entries, each of which includes a key and a value.\nLimitations:\n* Maximum 20 key-value pairs per request. Otherwise, error \"177\" occurs: \"Metadata size exceeds limit\"\n* Maximum 20 characters per key. Otherwise, error \"178\" occurs: \"Metadata key size exceeds limit\"\n* A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Recurring Processing Model",
			"name": "recurringProcessingModel",
			"type": "options",
			"default": "CardOnFile",
			"description": "Defines a recurring payment type. Required when creating a token to store payment details.\nPossible values:\n* **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule.\n* **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.\n* **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.\n",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
			"description": "A reference that is used to uniquely identify the payment in future communications about the payment status.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Required Shopper Fields",
			"name": "requiredShopperFields",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).\n\nPossible values:\n* **billingAddress** – The address where to send the invoice.\n* **deliveryAddress** – The address where the purchased goods should be delivered.\n* **shopperEmail** – The shopper's email address.\n* **shopperName** – The shopper's full name.\n* **telephoneNumber** – The shopper's phone number.\n",
			"routing": {
				"send": {
					"property": "requiredShopperFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Return URL",
			"name": "returnUrl",
			"type": "string",
			"default": "",
			"description": "Website URL used for redirection after payment is completed.\nIf provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.",
			"routing": {
				"send": {
					"property": "returnUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Reusable",
			"name": "reusable",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.",
			"routing": {
				"send": {
					"property": "reusable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Risk Data",
			"name": "riskData",
			"type": "json",
			"default": "{}",
			"description": "Any risk-related settings to apply to the payment.",
			"routing": {
				"send": {
					"property": "riskData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Shopper Email",
			"name": "shopperEmail",
			"type": "string",
			"default": "",
			"description": "The shopper's email address.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Shopper Locale",
			"name": "shopperLocale",
			"type": "string",
			"default": "",
			"description": "The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.\n\nFor a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#language).",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Shopper Name",
			"name": "shopperName",
			"type": "json",
			"default": "{}",
			"description": "The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"type": "string",
			"default": "",
			"description": "Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.\n> Your reference must not include personally identifiable information (PII), for example name or email address.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Show Remove Payment Method Button",
			"name": "showRemovePaymentMethodButton",
			"type": "boolean",
			"default": true,
			"description": "Set to **false** to hide the button that lets the shopper remove a stored payment method.",
			"routing": {
				"send": {
					"property": "showRemovePaymentMethodButton",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Split Card Funding Sources",
			"name": "splitCardFundingSources",
			"type": "boolean",
			"default": false,
			"description": "Boolean value indicating whether the card payment method should be split into separate debit and credit options.",
			"routing": {
				"send": {
					"property": "splitCardFundingSources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Splits",
			"name": "splits",
			"type": "json",
			"default": "[\n  {\n    \"amount\": {}\n  }\n]",
			"description": "An array of objects specifying how the payment should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Store",
			"name": "store",
			"type": "string",
			"default": "",
			"description": "The physical store, for which this payment is processed.",
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Store Payment Method Mode",
			"name": "storePaymentMethodMode",
			"type": "options",
			"default": "askForConsent",
			"description": "Indicates if the details of the payment method will be stored for the shopper. Possible values:\n* **disabled** – No details will be stored (default).\n* **askForConsent** – If the `shopperReference` is provided, the UI lets the shopper choose if they want their payment details to be stored.\n* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.",
			"options": [
				{
					"name": "Ask For Consent",
					"value": "askForConsent"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Enabled",
					"value": "enabled"
				}
			],
			"routing": {
				"send": {
					"property": "storePaymentMethodMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "Theme ID",
			"name": "themeId",
			"type": "string",
			"default": "",
			"description": "A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to customize the appearance of the payment page. If not specified, the payment page is rendered according to the theme set as default in your Customer Area.",
			"routing": {
				"send": {
					"property": "themeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
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
						"Payment Links"
					],
					"operation": [
						"Post Payment Links"
					]
				}
			}
		},
		{
			"displayName": "GET /paymentLinks/{linkId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Get Payment Links Link ID"
					]
				}
			}
		},
		{
			"displayName": "Link ID",
			"name": "linkId",
			"required": true,
			"description": "Unique identifier of the payment link.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Get Payment Links Link ID"
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
						"Payment Links"
					],
					"operation": [
						"Get Payment Links Link ID"
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
						"Payment Links"
					],
					"operation": [
						"Get Payment Links Link ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /paymentLinks/{linkId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Patch Payment Links Link ID"
					]
				}
			}
		},
		{
			"displayName": "Link ID",
			"name": "linkId",
			"required": true,
			"description": "Unique identifier of the payment link.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Patch Payment Links Link ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "expired",
			"description": "Status of the payment link. Possible values:\n* **expired**",
			"options": [
				{
					"name": "Expired",
					"value": "expired"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Links"
					],
					"operation": [
						"Patch Payment Links Link ID"
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
						"Payment Links"
					],
					"operation": [
						"Patch Payment Links Link ID"
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
						"Payment Links"
					],
					"operation": [
						"Patch Payment Links Link ID"
					]
				}
			}
		},
];
