# What is the dumb zone?

- Canal: Matt Pocock
- Link: https://www.youtube.com/watch?v=sOd7svdu_1I
- Publicado em: 2026-07-20
- Duração: 01:47
- Legenda: en-orig, gerada automaticamente (pode conter erros, principalmente em nomes próprios)

Many models now ship with 1 million tokens of context window, but it's pretty shocking how little of that is usable for actual work. All models suffer from attention degradation, which means that the more tokens you have in

## [10% - 00:10]

the context window, the worse the agent performs. The reason for this is whenever you add a token to the context window, the model needs to keep track of not just that token, but also its relationships to every other token. So, here we have five tokens, but 10 attention relationships. If you have 10,000 tokens, then that's 1 million

## [25% - 00:26]

attention relationships, which means that at some point the model starts to perform worse, starts to create more hallucinations, starts to retrieve information less well, starts to write worse code. And so, practically, you can think of the agent as having a smart zone and a dumb zone. This isn't a like immediate drop-off, it slowly sinks down, and some tasks don't need that much of a smart zone. So, you can do some tasks in the dumb zone. But, if you

## [50% - 00:53]

want to get the most out of the tokens that you're spending, you want to spend those tokens in the smart zone, not the dumb zone. So, the question is, where does the dumb zone begin? And this is hotly debated, and it's different per model, and probably different per task. However, I think a useful rule of thumb is around 150,000 tokens. It's pretty easy to design workflows where you break down tasks into small chunks, and then run them in new context windows. And I found that doing this means I spend fewer tokens, and I get better results.

## [75% - 01:20]

This recommendation has moved as well. I used to think it was around 100K tokens about 6 months ago. Now, it is going up, and it will continue to creep up. But, when you reach the dumb zone, you should use that as a signal to either clear the context, compact the context, hand off, or think on how you can work your

## [90% - 01:36]

workflow differently to design tasks that don't need that much context window. And also, if you're seeing hallucinations, especially faithfulness hallucinations, then you're probably in the dumb zone.
