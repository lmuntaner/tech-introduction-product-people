# Comparison

Table comparison of the responsibilities of the team developing an application depending on the architecture they decide to implement:

Layers | On Premise Data Center | Shared Data Center | Cloud Computing | FaaS
---- | ---- | ---- | ---- | ----
Investment in hardware | yes | no | no | no
Maintenance of hardware | yes | no | no | no
Scale hardware | yes | yes | no | no
Setup hardware | yes | yes | no | no
Setup application environment | yes | yes | yes | no
Setup application | yes | yes | yes | no
Manage dependencies | yes | yes | yes | yes
Execute task | yes | yes | yes | yes

**Serverless does NOT mean without servers.**

It means that your team does not handle servers.

The tendency is to move the responsibility of the infrastructure towards infrastructure providers.
