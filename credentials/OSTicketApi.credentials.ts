import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OSTicketApi implements ICredentialType {
	name = 'osTicketApi';
	displayName = 'OSTicket API';

	properties: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		default: '',
	},
	{
		displayName: 'API Key',
		name: 'apiKey',
		type: 'string',
		typeOptions: { password: true },
		default: '',
	},
	{
		displayName: 'Self Signed Certifiate',
		name: 'selfSigned',
		type: 'boolean',
		default: false,
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

	test: ICredentialTestRequest = {
		request: {
			method: 'POST',
			baseURL: '={{$credentials?.domain}}',
			url: '/api/tickets.json',
			skipSslCertificateValidation: '={{$credentials?.selfSigned}}',
			body: '{}',
			ignoreHttpStatusErrors: true,
		},
		// Need to find out how to return a 400 status as a success
	};
}
