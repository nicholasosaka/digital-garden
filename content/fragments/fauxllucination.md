---
title: fauxllucination
created: 2025-11-13
modified: 2025-11-13
published: 2025-11-13
draft: false
tags:
  - artificial-intelligence
---
The commonplace term for when a large language model (LLM) produces probable yet false information is "hallucination" [@huang_survey_2025]. There are several issues with this term.

Hallucination implies two things (and maybe more):
1. The LLM has interpretive capacities (in that hallucinations require interpretation of experience).
2. Something went 'wrong' during inference.

However, neither of these things are really true. LLMs do not have interpretive capacities.[^1] Furthermore, nothing went 'wrong' during inference. LLMs are fundamentally text *prediction* tools. They predict the next most likely token (word, symbol, etc.), with some exceptions.[^2] While it may produce *false* information, nothing went wrong in the inference process. Of course, the result may be outside of acceptable variance for a model. 

The important thing here is that "hallucination" as a term conjures up images of interpretive capacities gone wrong, where there's something hidden happening in the interior mind of the LLM. It's necessary to eschew such ideas, as they are not grounded in the technical architecture of LLMs nor are they rooted in a cohesive and responsible theory of mind.  

[^1]: I'll update more on this in a different fragment, and link it once done.
[^2]: For example, there's some randomness built in when selecting the next 'most likely' token.
