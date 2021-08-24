import{o as n,c as s,a,b as t}from"./app.80913d4a.js";const p='{"title":"Try Getting an Optional Service by Plugin Type","description":"","frontmatter":{},"headers":[{"level":2,"title":"Concrete Types","slug":"concrete-types"},{"level":2,"title":"Optional Generic Types","slug":"optional-generic-types"}],"relativePath":"guide/ioc/resolving/try-getting-an-optional-service-by-plugin-type.md","lastUpdated":1629294083831}',e={},o=t('<h1 id="try-getting-an-optional-service-by-plugin-type"><a class="header-anchor" href="#try-getting-an-optional-service-by-plugin-type" aria-hidden="true">#</a> Try Getting an Optional Service by Plugin Type</h1><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>The Lamar team does not recommend using &quot;optional&quot; dependencies as shown in this topic, but external frameworks like <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> MVC and Web API use this concept in their IoC container integration, so here it is. The Lamar team prefers the usage of the <a href="http://en.wikipedia.org/wiki/Null_Object_pattern" target="_blank" rel="noopener noreferrer">Nullo pattern</a> instead.</p></div><p>In normal usage, if you ask Lamar for a service and Lamar doesn&#39;t recognize the requested type, the requested name, or know what the default should be for that type, Lamar will fail fast by throwing an exception rather than returning a null. Sometimes though, you may want to retrieve an <em>optional</em> service from Lamar that may or may not be registered in the Container. If that particular registration doesn&#39;t exist, you just want a null value. Lamar provides first class support for <em>optional</em> dependencies through the usage of the <code>IContainer.TryGetInstance()</code> methods.</p><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>In Lamar, the <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core <code>IServiceProvider.GetService()</code> method has the same functionality and meaning as the <code>TryGetInstance()</code> method. If you were wondering how Lamar&#39;s StructureMap-flavored <code>GetInstance()</code> method is different, that&#39;s how.</p></div><p>Say you have a simple interface <code>IFoo</code> that may or may not be registered in the Container:</p>',5),c=t('<p><a id="snippet-sample_optional-foo"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IFoo</span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFoo</span></span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/OptionalDependencies.cs#L8-L17" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_optional-foo" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>In your own code you might request the <code>IFoo</code> service like the code below, knowing that you&#39;ll take responsibility yourself for building the <code>IFoo</code> service if Lamar doesn&#39;t have a registration for <code>IFoo</code>:</p>',4),l=t('<p><a id="snippet-sample_optional-real-usage"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFoo</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFoo</span></span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">real_usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// if the container doesn&#39;t know about it,</span>\n    <span class="token comment">// I&#39;ll build it myself</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> foo <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n              <span class="token operator">??</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/OptionalDependencies.cs#L95-L112" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_optional-real-usage" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Just to make this perfectly clear, if Lamar has a default registration for <code>IFoo</code>, you get this behavior:</p>',4),i=t('<p><a id="snippet-sample_optional-got-it"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">i_have_got_that</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span> _<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Foo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">ShouldNotBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// -- or --</span>\n\n    container<span class="token punctuation">.</span><span class="token function">TryGetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IFoo</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">ShouldNotBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/OptionalDependencies.cs#L19-L34" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_optional-got-it" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>If Lamar knows nothing about <code>IFoo</code>, you get a null:</p>',4),u=t('<p><a id="snippet-sample_optional-dont-got-it"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">i_do_not_have_that</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">ShouldBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// -- or --</span>\n\n    container<span class="token punctuation">.</span><span class="token function">TryGetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IFoo</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">ShouldBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/OptionalDependencies.cs#L36-L51" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_optional-dont-got-it" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="concrete-types"><a class="header-anchor" href="#concrete-types" aria-hidden="true">#</a> Concrete Types</h2><p>Since it&#39;s not a perfect world, there are some gotchas you need to be aware of. While Lamar will happily <em>auto-resolve</em> concrete types that aren&#39;t registered, that does not apply to the <code>TryGetInstance</code> mechanism:</p>',5),r=t('<p><a id="snippet-sample_optional-no-concrete"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteThing</span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">no_auto_resolution_of_concrete_types</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ConcreteThing<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">ShouldBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// now register ConcreteThing and do it again</span>\n    container<span class="token punctuation">.</span><span class="token function">Configure</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> _<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ConcreteThing<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ConcreteThing<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ConcreteThing<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">ShouldNotBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/OptionalDependencies.cs#L53-L73" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_optional-no-concrete" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="optional-generic-types"><a class="header-anchor" href="#optional-generic-types" aria-hidden="true">#</a> Optional Generic Types</h2><p>If you are using open generic types, the <code>TryGetInstance()</code> mechanism <strong>can</strong> close the open generic registration to satisfy the optional dependency like this sample:</p>',5),k=t('<p><a id="snippet-sample_optional-close-generics"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IThing<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Thing<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IThing<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">can_try_get_open_type_resolution</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> _<span class="token punctuation">.</span><span class="token function">For</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IThing<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Thing<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IThing<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Thing<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/OptionalDependencies.cs#L75-L93" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_optional-close-generics" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',3);e.render=function(t,p,e,d,m,g){return n(),s("div",null,[o,a(" snippet: sample_optional-foo "),c,a(" snippet: sample_optional-real-usage "),l,a(" snippet: sample_optional-got-it "),i,a(" snippet: sample_optional-dont-got-it "),u,a(" snippet: sample_optional-no-concrete "),r,a(" snippet: sample_optional-close-generics "),k])};export{p as __pageData,e as default};