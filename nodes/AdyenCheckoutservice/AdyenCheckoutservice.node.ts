import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { modificationsDescription } from './resources/modifications';
import { ordersDescription } from './resources/orders';
import { utilityDescription } from './resources/utility';
import { recurringDescription } from './resources/recurring';
import { paymentsDescription } from './resources/payments';
import { paymentLinksDescription } from './resources/payment-links';

export class AdyenCheckoutservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Adyen Checkoutservice',
		name: 'N8nDevAdyenCheckoutservice',
		icon: { light: 'file:./adyen-checkoutservice.png', dark: 'file:./adyen-checkoutservice.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Adyen Checkout API enables online payment initiation and authorization across cards, 3D Secure, and mobile wallets.',
		defaults: { name: 'Adyen Checkoutservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenCheckoutserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Modifications",
					"value": "Modifications",
					"description": ""
				},
				{
					"name": "Orders",
					"value": "Orders",
					"description": ""
				},
				{
					"name": "Utility",
					"value": "Utility",
					"description": ""
				},
				{
					"name": "Recurring",
					"value": "Recurring",
					"description": ""
				},
				{
					"name": "Payments",
					"value": "Payments",
					"description": ""
				},
				{
					"name": "Payment Links",
					"value": "Payment Links",
					"description": ""
				}
			],
			"default": ""
		},
		...modificationsDescription,
		...ordersDescription,
		...utilityDescription,
		...recurringDescription,
		...paymentsDescription,
		...paymentLinksDescription
		],
	};
}
