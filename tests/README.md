# Copyright 2023. All rights reserved.
# License: MIT License

"""
infra-terraform
================

A Terraform configuration for infrastructure provisioning.

Features
---------

* Infrastructure deployment and management using Terraform.
* Support for AWS, GCP, and Azure cloud providers.

Requirements
------------

* Terraform >= 1.0
* AWS CLI >= 2.0 (for AWS provider)
* gcloud CLI >= 340.0 (for GCP provider)
* Azure CLI >= 2.28 (for Azure provider)

Installation
------------

To install the required tools, run:

```bash
pip install terraform
pip install awscli
pip install google-cloud-sdk
pip install azure-cli
```

Usage
-----

To deploy infrastructure, run:

```bash
terraform init
terraform apply
```

To destroy infrastructure, run:

```bash
terraform destroy
```

Testing
-------

To run tests, use the built-in `terraform` testing tools. For example:

```bash
terraform init
terraform test
```

Changelog
----------

See [CHANGELOG.md](CHANGELOG.md) for release notes.

Contributing
------------

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
"""

__version__ = "1.0.0"