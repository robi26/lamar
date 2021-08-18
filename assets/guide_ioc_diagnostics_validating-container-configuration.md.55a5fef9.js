import{o as n,c as i,a as t,d as a,e,b as o}from"./app.80913d4a.js";const s='{"title":"Validating Container Configuration","description":"","frontmatter":{},"relativePath":"guide/ioc/diagnostics/validating-container-configuration.md","lastUpdated":1629293644462}',r={},l=a("h1",{id:"validating-container-configuration"},[a("a",{class:"header-anchor",href:"#validating-container-configuration","aria-hidden":"true"},"#"),e(" Validating Container Configuration")],-1),c=a("p",null,"To find any potential holes in your Lamar configuration like missing dependencies, unclear defaults of plugin types, validation errors, or just plain build errors, you can use this method below:",-1),p=o('<p><a id="snippet-sample_container.assertconfigurationisvalid"></a></p><div class="language-cs"><pre><code>container<span class="token punctuation">.</span><span class="token function">AssertConfigurationIsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Diagnostics/AssertConfigurationIsValid_Smoke_Tester.cs#L15-L17" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_container.assertconfigurationisvalid" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Running this method will walk over every single registration in your <code>Container</code> and:</p><ol><li>Try to create a build plan for that Instance that will flush out any problems with missing dependencies or invalid inline configuration</li><li>Try to build every single configured Instance</li><li>Call any methods on built objects decorated with the <code>[ValidationMethod]</code> attribute to perform environment tests. See <a href="/guide/ioc/diagnostics/environment-tests.html">environment tests</a> for more information on this usage.</li></ol><p>If Lamar encounters any errors of any kind during this method, it will throw an exception summarizing <strong>all</strong> of the problems that it encountered.</p>',6);r.render=function(a,e,o,s,r,d){return n(),i("div",null,[l,c,t(" snippet: sample_container.AssertConfigurationIsValid "),p])};export{s as __pageData,r as default};
