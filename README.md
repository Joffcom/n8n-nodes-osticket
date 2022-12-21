# n8n-nodes-osticket

This is an n8n community node. It lets you use OSTicket in your n8n workflows. At the moment this node is limited to only being able to create new tickets. When OSTicket 2.0 is released the API should support more options.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Ticket
 - Create

## Credentials

### Domain
The domain is the hostname / ip / FQDN of your OSTicket server including protocol and port, As an example if you use `http://osticket.myhost.com` to access your osticket server this would be the value you enter here.

### Token
The token can be found in the osticket admin panel under Manage > API

### Self Signed Certificate
If you are using a self signed certificate or if you don't know enable this option.

## Compatibility

This node has been tested with n8n 0.208.1 and osticket 1.17.2

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## Version history

0.1.0 - Initial Release
