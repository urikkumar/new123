define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/ganttv4.html'
], function($, _, Backbone, ganttv4) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(ganttv4);

            this.$el.html(compiledTemplate);
        }
    });
});
