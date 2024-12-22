---
sidebar_position: 1
---

# Organization

We have a root AWS account that only founders have access to, and an AWS Organization has been created from this root
account.

AWS SSO is configured to manage access across accounts. For each new developer, your manager
or founder should create a dedicated IAM user in the organization, ensuring appropriate permissions are assigned.

## SSO

To access the AWS Console, use the following link: https://umahive.awsapps.com/start, and log in with your IAM user
credentials. This will provide you access to the accounts for which you have been granted permissions.

:::tip

Refer to [AWS CLI Setup Guide](./cli-sso-setup) for configuring AWS CLI with SSO.

:::

## Accounts

Currently, we only have 2 accounts:

- **staging** (445567076235)
- **production** (127214192541)

Developers are granted **PowerUserAccess** for the staging account and **ReadOnlyAccess** for the production account.
The staging account is currently used for both _staging_ environment and local development, and actions in the
production account can only be performed through the release pipeline.

:::note

As the number of developers grows, we may introduce dedicated development accounts for each developer (or team),
enabling local development in isolation. For more details on development accounts and ephemeral environments, refer
to [this article](https://blog.serverlessadvocate.com/serverless-ephemeral-environments-with-serverful-aws-services-c803d24b353f).

:::
