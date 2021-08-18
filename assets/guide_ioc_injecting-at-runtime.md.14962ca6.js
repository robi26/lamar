import{o as n,c as s,a,b as t}from"./app.80913d4a.js";const e='{"title":"Injecting Services at Runtime","description":"","frontmatter":{},"relativePath":"guide/ioc/injecting-at-runtime.md","lastUpdated":1629293644441}',p={},o=t('<h1 id="injecting-services-at-runtime"><a class="header-anchor" href="#injecting-services-at-runtime" aria-hidden="true">#</a> Injecting Services at Runtime</h1><p>Lamar&#39;s predecessor <a href="https://structuremap.github.io" target="_blank" rel="noopener noreferrer">StructureMap</a> allowed you to override service registrations in nested containers in a general way. Some .Net application frameworks depend on this functionality to inject some kind of contextual service into a nested container. <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core&#39;s <code>HttpContext</code> is an example. MassTransit&#39;s <a href="https://github.com/MassTransit/MassTransit/blob/develop/src/MassTransit/ConsumeContext.cs" target="_blank" rel="noopener noreferrer">ConsumeContext</a> is another.</p><p>Using that as an example, let&#39;s say that our application framework has this context type that the framework creates and wants to inject directly into nested containers for some kind of operation:</p>',3),c=t('<p><a id="snippet-sample_executioncontext"></a></p><div class="language-cs"><pre><code><span class="token comment">// This class is specific to some kind of short lived </span>\n<span class="token comment">// process and lives in a nested container</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExecutionContext</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> Guid<span class="token punctuation">.</span><span class="token function">NewGuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/inject_to_scope.cs#L191-L198" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_executioncontext" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>We might well have a service in our code that is resolved from a Lamar container that depends on that <code>ExecutionContext</code> interface:</p>',4),i=t('<p><a id="snippet-sample_contextusingservice"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContextUsingService</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ExecutionContext</span> Context <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">ContextUsingService</span><span class="token punctuation">(</span><span class="token class-name">ExecutionContext</span> context<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Context <span class="token operator">=</span> context<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/inject_to_scope.cs#L179-L189" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_contextusingservice" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>The first thing we have to do is make a registration in Lamar <strong>upfront</strong> that lets the container know that <code>ExecutionContext</code> is going to be injected at runtime:</p>',4),r=t('<p><a id="snippet-sample_container-with-injectable"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    _<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Injectable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ExecutionContext<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/inject_to_scope.cs#L155-L160" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_container-with-injectable" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>At runtime, we can inject <code>ExecutionContext</code> like this:</p>',4),l=t('<p><a id="snippet-sample_injecting-context-to-nested"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ExecutionContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> nested <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">GetNestedContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nnested<span class="token punctuation">.</span><span class="token function">Inject</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/inject_to_scope.cs#L162-L167" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_injecting-context-to-nested" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Finally, when we resolve a service that depends on <code>ExecutionContext</code> from the nested container we built above, we can see that it has a reference to our context object:</p>',4),u=t('<p><a id="snippet-sample_resolving-using-context"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> service <span class="token operator">=</span> nested<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ContextUsingService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nservice<span class="token punctuation">.</span>Context<span class="token punctuation">.</span><span class="token function">ShouldBeSameAs</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/inject_to_scope.cs#L170-L173" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_resolving-using-context" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',3);p.render=function(t,e,p,k,d,_){return n(),s("div",null,[o,a(" snippet: sample_ExecutionContext "),c,a(" snippet: sample_ContextUsingService "),i,a(" snippet: sample_container-with-injectable "),r,a(" snippet: sample_injecting-context-to-nested "),l,a(" snippet: sample_resolving-using-context "),u])};export{e as __pageData,p as default};
