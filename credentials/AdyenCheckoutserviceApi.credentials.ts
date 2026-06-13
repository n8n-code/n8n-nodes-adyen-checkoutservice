import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenCheckoutserviceApi implements ICredentialType {
        name = 'N8nDevAdyenCheckoutserviceApi';

        displayName = 'Adyen Checkoutservice API';

        icon: Icon = { light: 'file:../nodes/AdyenCheckoutservice/adyen-checkoutservice.png', dark: 'file:../nodes/AdyenCheckoutservice/adyen-checkoutservice.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://checkout-test.adyen.com/v70',
                        required: true,
                        placeholder: 'https://checkout-test.adyen.com/v70',
                        description: 'The base URL of your Adyen Checkoutservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
