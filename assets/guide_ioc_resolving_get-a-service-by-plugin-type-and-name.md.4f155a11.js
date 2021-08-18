import{o as n,c as s,a,d as t,e as p,b as e}from"./app.80913d4a.js";const c='{"title":"Get a Service by Plugin Type and Name","description":"","frontmatter":{},"relativePath":"guide/ioc/resolving/get-a-service-by-plugin-type-and-name.md","lastUpdated":1629293644491}',o={},u=t("h1",{id:"get-a-service-by-plugin-type-and-name"},[t("a",{class:"header-anchor",href:"#get-a-service-by-plugin-type-and-name","aria-hidden":"true"},"#"),p(" Get a Service by Plugin Type and Name")],-1),l=t("p",null,[p("You can also request a named configuration for a given service type by using the overloads of "),t("code",null,"IContainer.GetInstance()"),p(" that take in a name like this:")],-1),i=e('<p><a id="snippet-sample_getinstance-by-name"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">get_a_named_instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Named</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Named</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Named</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// or</span>\n\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/get_all_instances.cs#L63-L85" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_getinstance-by-name" title="Start of snippet">anchor</a></sup><a id="snippet-sample_getinstance-by-name-1"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">get_a_named_instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Named</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Named</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Named</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// or</span>\n\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/SimpleScenarios.cs#L26-L48" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_getinstance-by-name-1" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',5);o.render=function(t,p,e,c,o,k){return n(),s("div",null,[u,l,a(" snippet: sample_GetInstance-by-name "),i])};export{c as __pageData,o as default};
