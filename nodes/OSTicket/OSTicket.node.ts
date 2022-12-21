import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { ticketFields, ticketOperations } from './descriptions';

export class OSTicket implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OSTicket',
		name: 'osTicket',
		icon: 'file:osticket-logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with OSTicket',
		defaults: {
			name: 'OSTicket',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'osTicketApi',
				required: true,
			},
		],
		// Defaults
		requestDefaults: {
			baseURL: '={{$credentials.domain.replace(new RegExp("/$"), "")}}',
			skipSslCertificateValidation: '={{$credentials.selfSigned}}',
			headers: {},
		},
		// Properties
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Ticket',
						value: 'ticket',
						description: 'Manage tickets',
					},
				],
				default: 'ticket',
			},
			...ticketOperations,
			...ticketFields,
		],
	};
}
