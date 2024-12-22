---
sidebar_position: 2
---

# AWS CLI Setup Guide

This guide will help you set up the AWS CLI and configure AWS SSO to access AWS resources on your local machine.

## Install CLI

AWS CLI may already be installed on your machine, but we **highly recommend** that you upgrade it to the latest version.
For more information on how to install/upgrade AWS CLI, please refer to
the [official AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

## Configure SSO

Currently, during local development, you will only need access to the staging account. We will configure a new CLI
profile **umahive-staging** to access the staging account with PowerUserAccess permissions. For information on other
accounts, refer to the [Accounts documentation](./organization#accounts).

### Step 1: Modify AWS config

Open the AWS CLI configuration file located at `~/.aws/config` and append the following lines at the end of the file:

```mdx title="~/.aws/config"
[sso-session umahive-sso]
sso_region = eu-central-1
sso_start_url = https://umahive.awsapps.com/start

[profile umahive-staging]
sso_session = umahive-sso
sso_account_id = 445567076235
sso_role_name = PowerUserAccess
```

### Step 2: Login via CLI

Run the following command in the terminal to log in. This will open your default browser and redirect you to the AWS SSO
login page. Use your IAM user credentials to log in. Once logged in successfully, you can close the browser and return
to the terminal.

```bash
aws sso login --profile umahive-staging
```

:::warning

During the first login, browser may prompt you to allow the AWS CLI access to your data, accept it to proceed. If you
have any issues with the login, please refer to
the [official AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#cli-configure-sso-login).

:::

### Step 3: Verify login

In order to verify that you have successfully logged in, run the following command:

```bash
aws sts get-caller-identity --profile umahive-staging
```

which should return the following example output:

```json
{
  "UserId": "<example-id>:<your-iam-username>",
  "Account": "445567076235",
  "Arn": "arn:aws:sts::445567076235:assumed-role/AWSReservedSSO_PowerUserAccess_6d65bc367474cc62/<your-iam-username>"
}
```

## Summary

You have successfully configured the AWS CLI with SSO to access the staging account. You can now use the
`--profile umahive-staging` in your commands to run them against staging account. You should also use this profile
to run AWS CDK commands.  
