define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/ganttv2.html'
], function($, _, Backbone, ganttv2) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(ganttv2);

            this.$el.html(compiledTemplate);
        }
    });
});
