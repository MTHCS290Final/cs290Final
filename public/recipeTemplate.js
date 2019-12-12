(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recipeTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <li data-ingredient=\""
    + alias4(((helper = (helper = helpers.ingredient || (depth0 != null ? depth0.ingredient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredient","hash":{},"data":data,"loc":{"start":{"line":9,"column":41},"end":{"line":9,"column":55}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.ingredient || (depth0 != null ? depth0.ingredient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredient","hash":{},"data":data,"loc":{"start":{"line":9,"column":57},"end":{"line":9,"column":71}}}) : helper)))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"recipe\" data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":39}}}) : helper)))
    + "\">\n    <h1 class=\"recipe-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":37}}}) : helper)))
    + "</h1>\n        <div class=\"recipe-contents\">\n            <div class=\"recipe-image-container\">\n                <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":26},"end":{"line":5,"column":38}}}) : helper)))
    + "\" alt=\"hamburger\">\n            </div>\n            <div class=\"recipe-ingredients-container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":10,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n</div>\n";
},"useData":true});
})();