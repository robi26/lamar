import{o as a,c as n,a as e,b as s}from"./app.7c563280.js";const t='{"title":"Lamar Diagnostics","description":"","frontmatter":{},"headers":[{"level":2,"title":"Validating the Container Configuration","slug":"validating-the-container-configuration"},{"level":2,"title":"Analyzing the Lamar Configuration","slug":"analyzing-the-lamar-configuration"},{"level":2,"title":"Type Scanning Diagnostics","slug":"type-scanning-diagnostics"},{"level":2,"title":"Programmatic Diagnostics","slug":"programmatic-diagnostics"}],"relativePath":"guide/ioc/diagnostics/index.md","lastUpdated":1629820368385}',o={},i=s('<h1 id="lamar-diagnostics"><a class="header-anchor" href="#lamar-diagnostics" aria-hidden="true">#</a> Lamar Diagnostics</h1><p>Like StructureMap before it, one of Lamar&#39;s big differentiators from other IoC tools is its strong support for built in diagnostic tools.</p><p>The <code>Lamar.Diagnostics</code> NuGet library can be used to expose all of Lamar&#39;s diagnostic capabilities to the command line of your .Net Core or .Net 5.0 systems. To get started, just add a NuGet dependency to <code>Lamar.Diagnostics</code> to your application. This package relies on the .Net command line integration from <a href="https://jasperfx.github.io" target="_blank" rel="noopener noreferrer">Oakton</a>, so you&#39;ll need to set up Oakton as shown in this sample <code>Program.Main()</code> method:</p>',3),c=s('<p><a id="snippet-sample_using-lamar-diagnostics"></a></p><div class="language-cs"><pre><code><span class="token keyword">static</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Start up your HostBuilder as normal</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">UseLamar</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> services<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n        <span class="token punctuation">{</span>\n<span class="token comment">// This adds a Container validation</span>\n<span class="token comment">// to the Oakton &quot;check-env&quot; command</span>\nservices<span class="token punctuation">.</span><span class="token function">CheckLamarConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            \n            <span class="token comment">// And the rest of your application&#39;s </span>\n            <span class="token comment">// DI registrations.</span>\n            services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">IncludeRegistry</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestClassRegistry<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        \n        <span class="token comment">// Call this method to start your application</span>\n        <span class="token comment">// with Oakton handling the command line parsing</span>\n        <span class="token comment">// and delegation</span>\n        <span class="token punctuation">.</span><span class="token function">RunOaktonCommands</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/LamarDiagnosticsWithNetCore3Demonstrator/Program.cs#L18-L39" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_using-lamar-diagnostics" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Once the <code>Lamar.Diagnostics</code> NuGet is installed to your application and you&#39;ve opted into Oakton to handle command line options, typing this command at the root of your project will show all the installed commands:</p><div class="language-bash"><pre><code>dotnet run -- <span class="token builtin class-name">help</span>\n</code></pre></div><p>If <code>Lamar.Diagnostics</code> is installed, you should see three lamar related commands as shown below:</p><div class="language-bash"><pre><code>---------------------------------------------------------------------------------------------\n  Available commands:\n---------------------------------------------------------------------------------------------\n        check-env -<span class="token operator">&gt;</span> Execute all environment checks against the application\n        describe -<span class="token operator">&gt;</span> Writes out a description of your running application<span class="token punctuation">..</span>.\n            <span class="token builtin class-name">help</span> -<span class="token operator">&gt;</span> list all the available commands\n  lamar-scanning -<span class="token operator">&gt;</span> Runs Lamar&#39;s <span class="token builtin class-name">type</span> scanning diagnostics\n  lamar-services -<span class="token operator">&gt;</span> List all the registered Lamar services\n  lamar-validate -<span class="token operator">&gt;</span> Runs all the Lamar container validations\n              run -<span class="token operator">&gt;</span> Runs the configured AspNetCore application\n---------------------------------------------------------------------------------------------\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>All the diagnostic commands expose an <code>-e</code> flag to control the host environment name of the running application.</p></div><h2 id="validating-the-container-configuration"><a class="header-anchor" href="#validating-the-container-configuration" aria-hidden="true">#</a> Validating the Container Configuration</h2><p>To validate the Lamar configuration of your system, use this command from the root of your project:</p><div class="language-bash"><pre><code>dotnet run -- lamar-validate\n</code></pre></div><p>Running that command is going to:</p><ol><li>Bootstrap your application which sets up the Lamar container</li><li>Checks that every service registration can find all necessary dependencies</li><li>If running in the default &quot;full&quot; mode, tries to build all known registrations one by one</li><li>If running in the default &quot;full&quot; mode, executes all the <a href="/guide/ioc/diagnostics/environment-tests.html">Lamar environment checks</a> in your system</li><li>Write out the stack traces of any and all exceptions that Lamar encounters</li></ol><p>If everything checks out, you&#39;ll get this friendly output in green:</p><div class="language-bash"><pre><code>Lamar registrations are all good<span class="token operator">!</span>\n</code></pre></div><p>Otherwise, you&#39;re going to get a whole lot of .Net exception stack traces with explanatory text about what registrations or environment tests failed.</p><p>The command itself will return a non zero exit code, so if <code>lamar-validate</code> is used within your automated build, it will fail your build if the validation fails <strong>by design</strong>.</p><p>To run a faster check of only the configuration, use the flag shown below:</p><div class="language-bash"><pre><code>dotnet run -- lamar-validate ConfigOnly\n</code></pre></div><h2 id="analyzing-the-lamar-configuration"><a class="header-anchor" href="#analyzing-the-lamar-configuration" aria-hidden="true">#</a> Analyzing the Lamar Configuration</h2><p>The old Lamar/StructureMap <em>WhatDoIHave()</em> diagnostic report is available from the command line in an enhanced command like this:</p><div class="language-bash"><pre><code>dotnet run -- lamar-services\n</code></pre></div><p>This command makes heavy usage of the <a href="https://spectresystems.github.io/spectre.console" target="_blank" rel="noopener noreferrer">Spectre.Console</a> library to format the output in a much more readable way than the old, purely textual version.</p><p>The output is somewhat ellided to eliminate some of the noise registrations added by <code>HostBuilder</code> like <code>IOptions&lt;T&gt;</code> or <code>ILogger&lt;T&gt;</code>. To see <strong>everything</strong>, use the verbose flag:</p><div class="language-bash"><pre><code>dotnet run -- lamar-services --verbose\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>All service registration filtering is done by the <strong>service type</strong> rather than the <strong>implementation type</strong></p></div><p>To filter the results to zero in on specific type registrations, you can filter by assembly:</p><div class="language-bash"><pre><code>dotnet run -- lamar-services --assembly YourAssemblyName\n</code></pre></div><p>or by namespace (and this is inclusive):</p><div class="language-bash"><pre><code>dotnet run -- lamar-services --namespace NamespaceName\n</code></pre></div><p>or by a specific type name:</p><div class="language-bash"><pre><code>dotnet run -- lamar-services --type YourTypeName\n</code></pre></div><p>The filtering by type name is case insensitive, and looks for type names that contain your filter. So looking for <code>--type options</code> will find every possible registration of <code>IOptions&lt;T&gt;</code> for example.</p><p>To get more detailed information about exactly how Lamar is building these service registrations, use this option:</p><div class="language-bash"><pre><code>dotnet run -- lamar-services --build-plans\n</code></pre></div><p>Lastly, you can save off the output of the <code>lamar-services</code> command to either a text file:</p><div class="language-bash"><pre><code>dotnet run -- lamar-services --build-plans --file services.txt\n</code></pre></div><p>or keep the formatting in HTML by naming the file with either an <code>htm</code> or <code>html</code> file extension:</p><div class="language-bash"><pre><code>dotnet run -- lamar-services --build-plans --file services.htm\n</code></pre></div><h2 id="type-scanning-diagnostics"><a class="header-anchor" href="#type-scanning-diagnostics" aria-hidden="true">#</a> Type Scanning Diagnostics</h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The type scanning mechanics are somewhat brittle when there are dependency issues in your application, and this command can help you spot where problems may be occurring.</p></div><p>The <a href="/guide/ioc/diagnostics/type-scanning.html">type scanning</a> can be accessed at the command line with this command:</p><div class="language-bash"><pre><code>dotnet run -- lamar-scanning\n</code></pre></div><h2 id="programmatic-diagnostics"><a class="header-anchor" href="#programmatic-diagnostics" aria-hidden="true">#</a> Programmatic Diagnostics</h2><p>The older, programmatic usages of Lamar diagnostics are described in other sections.</p>',45);o.render=function(s,t,o,r,p,l){return a(),n("div",null,[i,e(" snippet: sample_using-lamar-diagnostics "),c])};export{t as __pageData,o as default};
