define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/ganttv3.html'
], function($, _, Backbone, ganttv3) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(ganttv3);

            this.$el.html(compiledTemplate);
        }
    });
});
