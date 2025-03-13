document.write(
"<div class=\"accordion\" id=\"accordionincludes\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingincludes\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#includes\" onclick=\"setAnchorAndToggle('includes')\" type=\"button\"><span class=\"property-name\">includes</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingincludes\" class=\"collapse property-definition-div\" data-parent=\"#accordionincludes\" id=\"includes\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: object</span><br/>\n<span class=\"description\"><p>Include a different file (similar to #include of the c preprocessor). The order of includes does not matter. Circular / multiple includes are resolved correctly.</p>\n</span>\n<div class=\"one-of-value\" id=\"includes_oneOf\"><h2 class=\"handle\">\n<label>One of</label>\n</h2><ul class=\"nav nav-tabs\" id=\"tabsincludes_oneOf_oneOf\" role=\"tablist\"><li class=\"nav-item\">\n<a class=\"nav-link active oneOf-option\" data-toggle=\"tab\" href=\"#tab-pane_includes_oneOf_i0\" id=\"includes_oneOf_i0\" onclick=\"setAnchor('#includes_oneOf_i0')\" role=\"tab\">\n            \n            Option 1\n        </a>\n</li><li class=\"nav-item\">\n<a class=\"nav-link oneOf-option\" data-toggle=\"tab\" href=\"#tab-pane_includes_oneOf_i1\" id=\"includes_oneOf_i1\" onclick=\"setAnchor('#includes_oneOf_i1')\" role=\"tab\">\n            \n            Option 2\n        </a>\n</li></ul>\n<div class=\"tab-content card\"><div class=\"tab-pane fade card-body active show\" id=\"tab-pane_includes_oneOf_i0\" role=\"tabpanel\">\n<span class=\"badge badge-dark value-type\">Type: string</span><br/>\n<span class=\"pattern-value\" id=\"includes_oneOf_i0_pattern\">Must match regular expression: <code>\\.([Yy][Aa][Mm][Ll]|[Jj][Ss][Oo][Nn])$</code></span>\n</div><div class=\"tab-pane fade card-body\" id=\"tab-pane_includes_oneOf_i1\" role=\"tabpanel\">\n<span class=\"badge badge-dark value-type\">Type: array</span><br/>\n<h4>Each item of this array must be:</h4>\n<div class=\"card\">\n<div class=\"card-body items-definition\" id=\"includes_oneOf_i1_items\">\n<span class=\"badge badge-dark value-type\">Type: string</span><br/>\n<a class=\"ref-link\" href=\"#includes_oneOf_i0\" onclick=\"anchorLink('includes_oneOf_i0')\">Same definition as includes_oneOf_i0</a>\n</div>\n</div>\n</div></div></div>\n<br/>\n<div class=\"badge badge-secondary\">Examples:</div>\n<br/><div class=\"jumbotron examples\" id=\"includes_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"l l-Scalar l-Scalar-Plain\">my_include.yaml</span>\n</pre></div>\n</div><div class=\"jumbotron examples\" id=\"includes_ex2\"><div class=\"highlight\"><pre><span></span><span class=\"p p-Indicator\">[</span><span class=\"s\">'my_include.yaml'</span><span class=\"p p-Indicator\">,</span><span class=\"w\"> </span><span class=\"s\">'my_other_include.json'</span><span class=\"p p-Indicator\">]</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div>"
);
