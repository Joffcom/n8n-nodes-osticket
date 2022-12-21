import { INodeProperties } from 'n8n-workflow';

export const ticketOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new ticket',
				description: 'Create a new ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/tickets.json',
						json: true,
					},
				},
			},
		],
		default: 'create',
	},
];

export const ticketFields: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'subject',
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Alert',
				name: 'alert',
				type: 'boolean',
				default: true,
				description: 'Whether to disable alerts to staff',
				routing: {
					send: {
						type: 'body',
						property: 'alert',
					},
				},
			},
			{
				displayName: 'Autorespond',
				name: 'autorespond',
				type: 'boolean',
				default: true,
				description: 'Whether to disable autorespond',
				routing: {
					send: {
						type: 'body',
						property: 'autorespond',
					},
				},
			},
			{
				displayName: 'Priority ID',
				name: 'priorityId',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 1,
					},
					{
						name: 'Normal',
						value: 2,
					},
					{
						name: 'High',
						value: 3,
					},
					{
						name: 'Emergency',
						value: 4,
					},
				],
				default: 1,
				description: 'Priority ID for the new ticket to assume',
				routing: {
					send: {
						type: 'body',
						property: 'priority',
					},
				},
			},
		],
	},
];
