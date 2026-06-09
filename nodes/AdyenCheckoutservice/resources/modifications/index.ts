import type { INodeProperties } from 'n8n-workflow';

export const modificationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					]
				}
			},
			"options": [
				{
					"name": "Post Cancels",
					"value": "Post Cancels",
					"action": "Cancel an authorised payment",
					"description": "Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**TECHNICAL_CANCEL** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).\n\nIf you want to cancel a payment using the [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference), use the [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) endpoint instead.\n\nIf you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.\n\nFor more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/cancels"
						}
					}
				},
				{
					"name": "Post Payments Payment Psp Reference Amount Updates",
					"value": "Post Payments Payment Psp Reference Amount Updates",
					"action": "Update an authorised amount",
					"description": "Increases or decreases the authorised payment amount and returns a unique reference for this request. You get the outcome of the request asynchronously, in an [**AUTHORISATION_ADJUSTMENT** webhook](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes).\n\nYou can only update authorised amounts that have not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures).\n\nThe amount you specify in the request is the updated amount, which is larger or smaller than the initial authorised amount.\n\nFor more information, refer to [Authorisation adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#use-cases).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payments/{{$parameter[\"paymentPspReference\"]}}/amountUpdates"
						}
					}
				},
				{
					"name": "Post Payments Payment Psp Reference Cancels",
					"value": "Post Payments Payment Psp Reference Cancels",
					"action": "Cancel an authorised payment",
					"description": "Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/paymentPspReference/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCELLATION** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).\n\nIf you want to cancel a payment but don't have the [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference), use the [`/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cancels) endpoint instead.\n\nIf you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.\n\nFor more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payments/{{$parameter[\"paymentPspReference\"]}}/cancels"
						}
					}
				},
				{
					"name": "Post Payments Payment Psp Reference Captures",
					"value": "Post Payments Payment Psp Reference Captures",
					"action": "Capture an authorised payment",
					"description": " Captures an authorised payment and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CAPTURE** webhook](https://docs.adyen.com/online-payments/capture#capture-notification).\n\nYou can capture either the full authorised amount or a part of the authorised amount. By default, any unclaimed amount after a partial capture gets cancelled. This does not apply if you enabled multiple partial captures on your account and the payment method supports multiple partial captures. \n\n[Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture) is the default setting for most payment methods. In these cases, you don't need to make capture requests. However, making capture requests for payments that are captured automatically does not result in double charges.\n\nFor more information, refer to [Capture](https://docs.adyen.com/online-payments/capture).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payments/{{$parameter[\"paymentPspReference\"]}}/captures"
						}
					}
				},
				{
					"name": "Post Payments Payment Psp Reference Refunds",
					"value": "Post Payments Payment Psp Reference Refunds",
					"action": "Refund a captured payment",
					"description": "Refunds a payment that has been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**REFUND** webhook](https://docs.adyen.com/online-payments/refund#refund-webhook).\n\nYou can refund either the full captured amount or a part of the captured amount. You can also perform multiple partial refunds, as long as their sum doesn't exceed the captured amount.\n\n> Some payment methods do not support partial refunds. To learn if a payment method supports partial refunds, refer to the payment method page such as [cards](https://docs.adyen.com/payment-methods/cards#supported-cards), [iDEAL](https://docs.adyen.com/payment-methods/ideal), or [Klarna](https://docs.adyen.com/payment-methods/klarna). \n\nIf you want to refund a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.\n\nFor more information, refer to [Refund](https://docs.adyen.com/online-payments/refund).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payments/{{$parameter[\"paymentPspReference\"]}}/refunds"
						}
					}
				},
				{
					"name": "Post Payments Payment Psp Reference Reversals",
					"value": "Post Payments Payment Psp Reference Reversals",
					"action": "Refund or cancel a payment",
					"description": "[Refunds](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/refunds) a payment if it has already been captured, and [cancels](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) a payment if it has not yet been captured. Returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCEL_OR_REFUND** webhook](https://docs.adyen.com/online-payments/reverse#cancel-or-refund-webhook).\n\nThe reversed amount is always the full payment amount.\n> Do not use this request for payments that involve multiple partial captures.\n\nFor more information, refer to [Reversal](https://docs.adyen.com/online-payments/reversal).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payments/{{$parameter[\"paymentPspReference\"]}}/reversals"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /cancels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Cancels"
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
						"Modifications"
					],
					"operation": [
						"Post Cancels"
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
			"description": "The merchant account that is used to process the payment.",
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
						"Modifications"
					],
					"operation": [
						"Post Cancels"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payment Reference",
			"name": "paymentReference",
			"type": "string",
			"default": "",
			"description": "The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment that you want to cancel.",
			"routing": {
				"send": {
					"property": "paymentReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Cancels"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the cancel request. Maximum length: 80 characters.",
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
						"Modifications"
					],
					"operation": [
						"Post Cancels"
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
						"Modifications"
					],
					"operation": [
						"Post Cancels"
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
						"Modifications"
					],
					"operation": [
						"Post Cancels"
					]
				}
			}
		},
		{
			"displayName": "POST /payments/{paymentPspReference}/amountUpdates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
					]
				}
			}
		},
		{
			"displayName": "Payment Psp Reference",
			"name": "paymentPspReference",
			"required": true,
			"description": "The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
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
			"description": "The updated amount. The `currency` must match the currency used in authorisation.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
					]
				}
			}
		},
		{
			"displayName": "Industry Usage",
			"name": "industryUsage",
			"type": "options",
			"default": "delayedCharge",
			"description": "The reason for the amount update. Possible values: \n* **delayedCharge** \n* **noShow** \n* **installment**",
			"options": [
				{
					"name": "Delayed Charge",
					"value": "delayedCharge"
				},
				{
					"name": "Installment",
					"value": "installment"
				},
				{
					"name": "No Show",
					"value": "noShow"
				}
			],
			"routing": {
				"send": {
					"property": "industryUsage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
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
			"description": "The merchant account that is used to process the payment.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the amount update request. Maximum length: 80 characters.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
					]
				}
			}
		},
		{
			"displayName": "Splits",
			"name": "splits",
			"type": "json",
			"default": "[\n  {\n    \"amount\": {}\n  }\n]",
			"description": "An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Amount Updates"
					]
				}
			}
		},
		{
			"displayName": "POST /payments/{paymentPspReference}/cancels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Cancels"
					]
				}
			}
		},
		{
			"displayName": "Payment Psp Reference",
			"name": "paymentPspReference",
			"required": true,
			"description": "The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to cancel. ",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Cancels"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Cancels"
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
			"description": "The merchant account that is used to process the payment.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Cancels"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the cancel request. Maximum length: 80 characters.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Cancels"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Cancels"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Cancels"
					]
				}
			}
		},
		{
			"displayName": "POST /payments/{paymentPspReference}/captures",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
					]
				}
			}
		},
		{
			"displayName": "Payment Psp Reference",
			"name": "paymentPspReference",
			"required": true,
			"description": "The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to capture.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
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
			"description": "The amount that you want to capture. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
					]
				}
			}
		},
		{
			"displayName": "Line Items",
			"name": "lineItems",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).\n> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
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
			"description": "The merchant account that is used to process the payment.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the capture request. Maximum length: 80 characters.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
					]
				}
			}
		},
		{
			"displayName": "Splits",
			"name": "splits",
			"type": "json",
			"default": "[\n  {\n    \"amount\": {}\n  }\n]",
			"description": "An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Captures"
					]
				}
			}
		},
		{
			"displayName": "POST /payments/{paymentPspReference}/refunds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
					]
				}
			}
		},
		{
			"displayName": "Payment Psp Reference",
			"name": "paymentPspReference",
			"required": true,
			"description": "The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to refund.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
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
			"description": "The amount that you want to refund. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
					]
				}
			}
		},
		{
			"displayName": "Line Items",
			"name": "lineItems",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).\n> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
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
			"description": "The merchant account that is used to process the payment.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
					]
				}
			}
		},
		{
			"displayName": "Merchant Refund Reason",
			"name": "merchantRefundReason",
			"type": "options",
			"default": "FRAUD",
			"description": "Your reason for the refund request",
			"options": [
				{
					"name": "FRAUD",
					"value": "FRAUD"
				},
				{
					"name": "CUSTOMER REQUEST",
					"value": "CUSTOMER REQUEST"
				},
				{
					"name": "RETURN",
					"value": "RETURN"
				},
				{
					"name": "DUPLICATE",
					"value": "DUPLICATE"
				},
				{
					"name": "OTHER",
					"value": "OTHER"
				}
			],
			"routing": {
				"send": {
					"property": "merchantRefundReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the refund request. Maximum length: 80 characters.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
					]
				}
			}
		},
		{
			"displayName": "Splits",
			"name": "splits",
			"type": "json",
			"default": "[\n  {\n    \"amount\": {}\n  }\n]",
			"description": "An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Refunds"
					]
				}
			}
		},
		{
			"displayName": "POST /payments/{paymentPspReference}/reversals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Reversals"
					]
				}
			}
		},
		{
			"displayName": "Payment Psp Reference",
			"name": "paymentPspReference",
			"required": true,
			"description": "The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to reverse. ",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Reversals"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Reversals"
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
			"description": "The merchant account that is used to process the payment.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Reversals"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the reversal request. Maximum length: 80 characters.",
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Reversals"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Reversals"
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
						"Modifications"
					],
					"operation": [
						"Post Payments Payment Psp Reference Reversals"
					]
				}
			}
		},
];
