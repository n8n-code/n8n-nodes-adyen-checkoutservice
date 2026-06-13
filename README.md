# @n8n-dev/n8n-nodes-adyen-checkoutservice

![adyen-checkoutservice Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-adyen-checkoutservice.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-adyen-checkoutservice)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing adyen-checkoutservice API integrations by hand.**

Every time you connect n8n to adyen-checkoutservice, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to adyen-checkoutservice took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **Modifications**, **Orders**, **Classic Checkout SDK**, **Utility**, **Recurring**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-adyen-checkoutservice
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-adyen-checkoutservice`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **adyen-checkoutservice API** → paste your API key
3. Drag the **adyen-checkoutservice** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Modifications</b> (6 operations)</summary>

- Post Cancel an authorised payment
- Post Update an authorised amount
- Post Cancel an authorised payment
- Post Capture an authorised payment
- Post Refund a captured payment
- Post Refund or cancel a payment

</details>

<details>
<summary><b>Orders</b> (3 operations)</summary>

- Post Create an order
- Post Cancel an order
- Post Get the balance of a gift card

</details>

<details>
<summary><b>Utility</b> (1 operations)</summary>

- Post Get an Apple Pay session

</details>

<details>
<summary><b>Recurring</b> (2 operations)</summary>

- Get tokens for stored payment details
- Delete a token for stored payment details

</details>

<details>
<summary><b>Payments</b> (6 operations)</summary>

- Post Get the list of brands on the card
- Post Start a transaction for donations
- Post Get a list of available payment methods
- Post Start a transaction
- Post Submit details for a payment
- Post Create a payment session

</details>

<details>
<summary><b>Payment Links</b> (3 operations)</summary>

- Post Create a payment link
- Get a payment link
- Patch Update the status of a payment link

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from adyen-checkoutservice docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official adyen-checkoutservice OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **adyen-checkoutservice** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the adyen-checkoutservice API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
