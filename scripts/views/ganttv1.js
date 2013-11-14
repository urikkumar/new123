define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/ganttv1.html'
], function($, _, Backbone, ganttv1) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(ganttv1);

            this.$el.html(compiledTemplate);
        }
    });
});
