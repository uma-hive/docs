---
sidebar_position: 3
---

# Networking

We use Route53 as our DNS service. The root domains are managed in the root AWS account. Currently, we have the
following root domains:

- _umahive.com_ - production
- _staging-umahive.com_ - staging

Hosted zones are created in Route53 for each domain in the root account. To configure a subdomain, the managed account
creates its own public hosted zone (for the subdomain). Then, an NS record for the subdomain is added in the root
account, pointing to the hosted zone in the managed account. For more details on this configuration, refer to
[this article](https://medium.com/@sapna.mandhare/cross-account-subdomain-delegation-with-amazon-route-53-209159df08b2).

Currently, the following subdomains are configured:

### Web Domains

These are created in Vercel and linked to Route53 by adding a CNAME record. Additionally, a redirect
from the root domain to the _www_ subdomain is set up in Vercel (A record). The certificates are managed by Vercel.

- _www.umahive.com_
- _www.staging-umahive.com_

### API domains

These are created in **production** and **staging** [accounts](./organization#accounts) as public hosted zones in
Route53. The certificates for these domains are managed by ACM in their respective accounts.

- _api.umahive.com_
- _api.staging-umahive.com_
