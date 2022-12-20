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

	];

	authenticate: IAuthenticateGeneric = {
	};

	test: ICredentialTestRequest = {

	};
}
