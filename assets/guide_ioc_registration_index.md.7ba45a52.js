import{o as n,c as s,a,b as t}from"./app.80913d4a.js";const e='{"title":"Registration","description":"","frontmatter":{},"relativePath":"guide/ioc/registration/index.md","lastUpdated":1629293644480}',o={},p=t('<h1 id="registration"><a class="header-anchor" href="#registration" aria-hidden="true">#</a> Registration</h1><p>Lamar provides a streamlined fluent interface called the <em>Registry DSL</em> to configure a Lamar Container with both explicit registrations and conventional auto-registrations based on the older <a href="http://structuremap.github.io/registration/registry-dsl/" target="_blank" rel="noopener noreferrer">StructureMap syntax</a>. In addition, Lamar also directly supports the <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.1" target="_blank" rel="noopener noreferrer">ASP.Net Core DI style of service registrations</a> (<a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection?view=aspnetcore-2.1" target="_blank" rel="noopener noreferrer">IServiceCollection</a>) to ease the usage of Lamar with the entire .Net Core ecosystem.</p><p>The first step in using Lamar is configuring a <code>Container</code> object. The following examples are based on the usage of the <a href="/guide/ioc/registration/registry-dsl.html">ServiceRegistry DSL</a>.</p><p>Let&#39;s say that you have a simple set of services like this:</p>',4),c=t('<p><a id="snippet-sample_foobar-model"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IBar</span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IBar</span></span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IFoo</span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFoo</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">IBar</span> Bar <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token class-name">IBar</span> bar<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Bar <span class="token operator">=</span> bar<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/Samples/Models.cs#L3-L26" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_foobar-model" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>A simple configuration of a Lamar Container might then be:</p>',4),i=t('<p><a id="snippet-sample_quickstart-configure-the-container"></a></p><div class="language-cs"><pre><code><span class="token comment">// Example #1 - Create an container instance and directly pass in the configuration.</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> container1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>\n            <span class="token punctuation">{</span>\n                c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Foo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IBar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Bar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Example #2 - Create an container instance but add configuration later.</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> container2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            container2<span class="token punctuation">.</span><span class="token function">Configure</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>\n            <span class="token punctuation">{</span>\n                c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Foo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IBar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Bar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/quickstart/configuring_the_container.cs#L19-L35" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_quickstart-configure-the-container" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Initializing or configuring the container is usually done at application startup and is located as close as possible to the application&#39;s entry point. This place is sometimes referred to as the composition root of the application. In our example we are composing our application&#39;s object graph by connecting abstractions to concrete types.</p><p>We are using the fluent API <code>For&lt;TInterface&gt;().Use&lt;TConcrete&gt;()</code> which registers a default instance for a given plugin type (the TInterface type in this case). In our example we want an new instance of <code>Foo</code> every time we request the abstraction <code>IFoo</code>.</p><p>The recommended way of using the <a href="/guide/ioc/registration/registry-dsl.html">ServiceRegistry DSL</a> is by defining one or more <code>ServiceRegistry</code> classes. Typically, you would subclass the <code>ServiceRegistry</code> class, then use the Fluent API methods exposed by the <code>ServiceRegistry</code> class to describe a <code>Container</code> configuration. Here&#39;s a sample <code>ServiceRegistry</code> class used to configure the same types as in our previous example:</p>',6),r=t('<p><a id="snippet-sample_foobar-registry"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FooBarRegistry</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ServiceRegistry</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">FooBarRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Foo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IBar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Bar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/Samples/Registries.cs#L3-L13" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_foobar-registry" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>When you set up a <code>Container</code> , you need to simply direct the <code>Container</code> to use the configuration in that <code>ServiceRegistry</code> class.</p>',4),l=t('<p><a id="snippet-sample_quickstart-configure-the-container-using-a-registry"></a></p><div class="language-cs"><pre><code><span class="token comment">// Example #1</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> container1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">FooBarRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Example #2</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> container2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddRegistry</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FooBarRegistry<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Example #3 -- create a container for a single Registry</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> container3 <span class="token operator">=</span> Container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FooBarRegistry<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/quickstart/configuring_the_container.cs#L40-L49" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_quickstart-configure-the-container-using-a-registry" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>The Lamar team highly recommends using <code>ServiceRegistry</code> classes for your real application configuration. The syntax is shorter inside the Registry class constructor than from within the <code>Container</code> constructor method. In addition, Registry classes can be used to modularize the configuration of a bigger application into more manageable chunks. Lastly, using <code>ServiceRegistry</code> classes makes it easier to stand up additional <code>Container</code> objects in testing scenarios that reflect the real application composition.</p></div><p>In real world applications you also have to deal with repetitive similar registrations. Such registrations are tedious, easy to forget and can be a weak spot in your application. Lamar provides <a href="/guide/ioc/registration/auto-registration-and-conventions.html">auto-registration and conventions</a> which mitigates this pain and eases the maintenance burden. Lamar exposes this feature through the <a href="/guide/ioc/registration/registry-dsl.html">ServiceRegistry DSL</a> by the <code>Scan</code> method.</p><p>In our example there is an reoccurring pattern, we are connecting the plugin type <code>ISomething</code> to a concrete type <code>Something</code>, meaning <code>IFoo</code> to <code>Foo</code> and <code>IBar</code> to <code>Bar</code>. Wouldn&#39;t it be cool if we could write a convention for exactly doing that? Fortunately Lamar has already one build in. Let&#39;s see how we can create an container with the same configuration as in the above examples.</p>',6),u=t('<p><a id="snippet-sample_quickstart-configure-the-container-using-auto-registrations-and-conventions"></a></p><div class="language-cs"><pre><code><span class="token comment">// Example #1</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> container1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>\n                c<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span>scanner <span class="token operator">=&gt;</span>\n                <span class="token punctuation">{</span>\n                    scanner<span class="token punctuation">.</span><span class="token function">TheCallingAssembly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    scanner<span class="token punctuation">.</span><span class="token function">WithDefaultConventions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Example #2</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> container2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            container2<span class="token punctuation">.</span><span class="token function">Configure</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>\n                c<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span>scanner <span class="token operator">=&gt;</span>\n                <span class="token punctuation">{</span>\n                    scanner<span class="token punctuation">.</span><span class="token function">TheCallingAssembly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    scanner<span class="token punctuation">.</span><span class="token function">WithDefaultConventions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/quickstart/configuring_the_container.cs#L54-L74" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_quickstart-configure-the-container-using-auto-registrations-and-conventions" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>We instruct the scanner to scan through the calling assembly with default conventions on. This will find and register the default instance for <code>IFoo</code> and <code>IBar</code> which are obviously the concrete types <code>Foo</code> and <code>Bar</code>. Now whenever you add an additional interface <code>IMoreFoo</code> and a class <code>MoreFoo</code> to your application&#39;s code base, it&#39;s automatically picked up by the scanner.</p><p>Sometimes classes need to be supplied with some primitive value in its constructor. For example the <code>System.Data.SqlClient.SqlConnection</code> needs to be supplied with the connection string in its constructor. No problem, just set up the value of the constructor argument in the bootstrapping:</p>',5),k=t('<p><a id="snippet-sample_quickstart-container-with-primitive-value"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//just for demo purposes, normally you don&#39;t want to embed the connection string directly into code.</span>\n    c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnection<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SqlConnection<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Ctor</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span><span class="token string">&quot;YOUR_CONNECTION_STRING&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//a better way would be providing a delegate that retrieves the value from your app config.    </span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/quickstart/configuring_the_container.cs#L79-L86" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_quickstart-container-with-primitive-value" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>So far you have seen an couple of ways to work with the <a href="/guide/ioc/registration/registry-dsl.html">ServiceRegistry DSL</a> and configure a <code>Container</code> object. We have seen examples of configuration that allow us to build objects that don&#39;t depend on anything like the <code>Bar</code> class, or do depend on other types like the <code>Foo</code> class needs an instance of <code>IBar</code>. In our last example we have seen configuration for objects that need some primitive types like strings in its constructor function.</p>',4);o.render=function(t,e,o,d,g,m){return n(),s("div",null,[p,a(" snippet: sample_foobar-model "),c,a(" snippet: sample_quickstart-configure-the-container "),i,a(" snippet: sample_foobar-registry "),r,a(" snippet: sample_quickstart-configure-the-container-using-a-registry "),l,a(" snippet: sample_quickstart-configure-the-container-using-auto-registrations-and-conventions "),u,a(" snippet: sample_quickstart-container-with-primitive-value "),k])};export{e as __pageData,o as default};
