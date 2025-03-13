document.write(
"<div class=\"accordion\" id=\"accordiontest-unit-information\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingtest-unit-information\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#test-unit-information\" onclick=\"setAnchorAndToggle('test-unit-information')\" type=\"button\"><span class=\"property-name\">test-unit-information</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingtest-unit-information\" class=\"collapse property-definition-div\" data-parent=\"#accordiontest-unit-information\" id=\"test-unit-information\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: object</span><br/>\n<span class=\"description\"><p>Miscellaneous test unit information can be defined. After the execution they are available in the test report.</p>\n</span>\n<div class=\"accordion\" id=\"accordiontest-unit-information_caption\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingtest-unit-information_caption\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#test-unit-information_caption\" onclick=\"setAnchorAndToggle('test-unit-information_caption')\" type=\"button\"><span class=\"property-name\">caption</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingtest-unit-information_caption\" class=\"collapse property-definition-div\" data-parent=\"#accordiontest-unit-information_caption\" id=\"test-unit-information_caption\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: string</span><br/>\n<span class=\"description\"><p>Caption of the test unit.</p>\n</span>\n<br/>\n<div class=\"badge badge-secondary\">Example:</div>\n<br/><div class=\"jumbotron examples\" id=\"test-unit-information_caption_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"l l-Scalar l-Scalar-Plain\">My caption</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"accordion\" id=\"accordiontest-unit-information_description\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingtest-unit-information_description\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#test-unit-information_description\" onclick=\"setAnchorAndToggle('test-unit-information_description')\" type=\"button\"><span class=\"property-name\">description</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingtest-unit-information_description\" class=\"collapse property-definition-div\" data-parent=\"#accordiontest-unit-information_description\" id=\"test-unit-information_description\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: string</span><br/>\n<span class=\"description\"><p>Description of the test unit.</p>\n</span>\n<br/>\n<div class=\"badge badge-secondary\">Example:</div>\n<br/><div class=\"jumbotron examples\" id=\"test-unit-information_description_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"l l-Scalar l-Scalar-Plain\">My description</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"accordion\" id=\"accordiontest-unit-information_version\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingtest-unit-information_version\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#test-unit-information_version\" onclick=\"setAnchorAndToggle('test-unit-information_version')\" type=\"button\"><span class=\"property-name\">version</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingtest-unit-information_version\" class=\"collapse property-definition-div\" data-parent=\"#accordiontest-unit-information_version\" id=\"test-unit-information_version\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: string</span><br/>\n<span class=\"description\"><p>Version of the test unit.</p>\n</span>\n<br/>\n<div class=\"badge badge-secondary\">Example:</div>\n<br/><div class=\"jumbotron examples\" id=\"test-unit-information_version_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"l l-Scalar l-Scalar-Plain\">v1.1</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"accordion\" id=\"accordiontest-unit-information_test-designers\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingtest-unit-information_test-designers\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#test-unit-information_test-designers\" onclick=\"setAnchorAndToggle('test-unit-information_test-designers')\" type=\"button\"><span class=\"property-name\">test-designers</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingtest-unit-information_test-designers\" class=\"collapse property-definition-div\" data-parent=\"#accordiontest-unit-information_test-designers\" id=\"test-unit-information_test-designers\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: array of object</span><br/>\n<span class=\"description\"><p>Information on the test developer(s). A sequence of key-value pairs that can be freely selected.</p>\n</span>\n<h4>Each item of this array must be:</h4>\n<div class=\"card\">\n<div class=\"card-body items-definition\" id=\"test-unit-information_test-designers_items\">\n<span class=\"badge badge-dark value-type\">Type: object</span><br/>\n</div>\n</div><br/>\n<div class=\"badge badge-secondary\">Example:</div>\n<br/><div class=\"jumbotron examples\" id=\"test-unit-information_test-designers_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"p p-Indicator\">[{</span><span class=\"s\">'prename'</span><span class=\"p p-Indicator\">:</span><span class=\"w\"> </span><span class=\"s\">'Max'</span><span class=\"p p-Indicator\">,</span><span class=\"w\"> </span><span class=\"s\">'surname'</span><span class=\"p p-Indicator\">:</span><span class=\"w\"> </span><span class=\"s\">'S.'</span><span class=\"p p-Indicator\">,</span><span class=\"w\"> </span><span class=\"s\">'department'</span><span class=\"p p-Indicator\">:</span><span class=\"w\"> </span><span class=\"s\">'Department</span><span class=\"nv\"> </span><span class=\"s\">A'</span><span class=\"p p-Indicator\">},</span><span class=\"w\"> </span><span class=\"p p-Indicator\">{</span><span class=\"s\">'prename'</span><span class=\"p p-Indicator\">:</span><span class=\"w\"> </span><span class=\"s\">'Linda'</span><span class=\"p p-Indicator\">,</span><span class=\"w\"> </span><span class=\"s\">'department'</span><span class=\"p p-Indicator\">:</span><span class=\"w\"> </span><span class=\"s\">'Department</span><span class=\"nv\"> </span><span class=\"s\">B'</span><span class=\"p p-Indicator\">}]</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"accordion\" id=\"accordiontest-unit-information_additional-information\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingtest-unit-information_additional-information\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#test-unit-information_additional-information\" onclick=\"setAnchorAndToggle('test-unit-information_additional-information')\" type=\"button\"><span class=\"property-name\">additional-information</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingtest-unit-information_additional-information\" class=\"collapse property-definition-div\" data-parent=\"#accordiontest-unit-information_additional-information\" id=\"test-unit-information_additional-information\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: array of object</span><br/>\n<span class=\"description\"><p>Additional key-value pairs. One key 'name' is required, the other keys can be freely selected.</p>\n</span>\n<h4>Each item of this array must be:</h4>\n<div class=\"card\">\n<div class=\"card-body items-definition\" id=\"test-unit-information_additional-information_items\">\n<span class=\"badge badge-dark value-type\">Type: object</span><br/>\n<div class=\"accordion\" id=\"accordiontest-unit-information_additional-information_items_name\">\n<div class=\"card\">\n<div class=\"card-header\" id=\"headingtest-unit-information_additional-information_items_name\">\n<h2 class=\"mb-0\">\n<button class=\"btn btn-link property-name-button\" href=\"#test-unit-information_additional-information_items_name\" onclick=\"setAnchorAndToggle('test-unit-information_additional-information_items_name')\" type=\"button\"><span class=\"property-name\">name</span> <span class=\"badge badge-warning required-property\">Required</span></button>\n</h2>\n</div>\n<div aria-labelledby=\"headingtest-unit-information_additional-information_items_name\" class=\"collapse property-definition-div\" data-parent=\"#accordiontest-unit-information_additional-information_items_name\" id=\"test-unit-information_additional-information_items_name\">\n<div class=\"card-body pl-5\">\n<span class=\"badge badge-dark value-type\">Type: string</span><br/>\n<br/>\n<div class=\"badge badge-secondary\">Example:</div>\n<br/><div class=\"jumbotron examples\" id=\"test-unit-information_additional-information_items_name_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"l l-Scalar l-Scalar-Plain\">A descriptive name</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div><br/>\n<div class=\"badge badge-secondary\">Example:</div>\n<br/><div class=\"jumbotron examples\" id=\"test-unit-information_additional-information_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"p p-Indicator\">[{</span><span class=\"s\">'name'</span><span class=\"p p-Indicator\">:</span><span class=\"w\"> </span><span class=\"s\">'SUT'</span><span class=\"p p-Indicator\">,</span><span class=\"w\"> </span><span class=\"s\">'customerName'</span><span class=\"p p-Indicator\">:</span><span class=\"w\"> </span><span class=\"s\">'Customer</span><span class=\"nv\"> </span><span class=\"s\">A'</span><span class=\"p p-Indicator\">}]</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div><br/>\n<div class=\"badge badge-secondary\">Example:</div>\n<br/><div class=\"jumbotron examples\" id=\"test-unit-information_ex1\"><div class=\"highlight\"><pre><span></span><span class=\"nt\">caption</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">This is a caption</span>\n<span class=\"nt\">description</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">This is a description</span>\n<span class=\"nt\">version</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">v1.0.0</span>\n<span class=\"nt\">test-designers</span><span class=\"p\">:</span>\n<span class=\"p p-Indicator\">-</span><span class=\"w\"> </span><span class=\"nt\">name</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">Max</span>\n<span class=\"w\">  </span><span class=\"nt\">department</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">PND123</span>\n<span class=\"p p-Indicator\">-</span><span class=\"w\"> </span><span class=\"nt\">name</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">Lisa</span>\n<span class=\"w\">  </span><span class=\"nt\">department</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">PND345</span>\n<span class=\"nt\">additional-information</span><span class=\"p\">:</span>\n<span class=\"p p-Indicator\">-</span><span class=\"w\"> </span><span class=\"nt\">name</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">Software Under Test</span>\n<span class=\"w\">  </span><span class=\"nt\">CustomerName</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"l l-Scalar l-Scalar-Plain\">My customer</span>\n<span class=\"w\">  </span><span class=\"nt\">SpareNumber</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"s\">'</span><span class=\"nv\"> </span><span class=\"s\">012345'</span>\n<span class=\"w\">  </span><span class=\"nt\">SRSBasleine</span><span class=\"p\">:</span><span class=\"w\"> </span><span class=\"s\">'4.1'</span>\n</pre></div>\n</div>\n</div>\n</div>\n</div>\n</div>"
);
