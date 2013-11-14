require.config({
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },
    /**
   * HACK:
   * Modified Underscore and Backbone to be AMD compatible (define themselves)
   * since it didn't work properly with the RequireJS shim when optimizing
   */
    paths: {
        text             : 'lib/text',

       // jquery           : 'lib/jquery',
        underscore          : 'lib/underscore-amd',
        backbone            : 'lib/backbone-amd',
        bootstrap           : 'lib/bootstrap',
        // 'App'              : 'app',
        Router              : 'router',
        jquery              : 'lib/jquery-2.0.3',
        ace                 : 'lib/ace',
        aceEditable         : 'lib/ace-editable',
        aceElements         : 'lib/ace-elements',
        aceExtra            : 'lib/ace-extra',
        addmethods          : 'lib/additional-methods',
        bootbox             : 'lib/bootbox',
        bootstrap           : 'lib/bootstrap.min',
        colorpicker         : 'lib/bootstrap-colorpicker.min',
        bootstrapDatepicker : 'lib/bootstrap-datepicker.min',
        bootstrapEditable   : 'lib/bootstrap-editable',
        bootstrapMarkdown   : 'lib/bootstrap-markdown.min',
        bootstrapTag        : 'lib/bootstrap-tag.min',
        bootstrapTimepicker : 'lib/bootstrap-timepicker.min',
        wysiwyg             : 'lib/bootstrap-wysiwyg.min',
        chosenjquery        : 'lib/chosen.jquery.min',
        daterangepicker     : 'lib/daterangepicker.min',
        dropzone            : 'lib/dropzone.min',
        excanvas            : 'lib/excanvas.min',
        spinner             : 'lib/fuelux.spinner.min',
        tree                : 'lib/fuelux.tree.min',
        treeSampledata      : 'lib/fuelux.tree-sampledata',
        wizard              : 'lib/fuelux.wizard.min',
        fullcalendar        : 'lib/fullcalendar',
        gridlocale          : 'lib/grid.locale-en',
        html5shiv           : 'lib/html5shiv',
        autosize            : 'lib/jquery.autosize',
        colorbox            : 'lib/jquery.colorbox',
        dataTablesBootstrap : 'lib/jquery.dataTables.bootstrap',
        dataTables          : 'lib/jquery.dataTables',
        piechart            : 'lib/jquery.easy-pie-chart',
        flot                : 'lib/jquery.flot',
        pie                 : 'lib/jquery.flot.pie',
        resize              : 'lib/jquery.flot.resize',
        gritter             : 'lib/jquery.gritter',
        hotkeys             : 'lib/jquery.hotkeys',
        inputlimiter        : 'lib/jquery.inputlimiter.1.3.1',
        jqgrid              : 'lib/jquery.jqGrid.min',
        knob                : 'lib/jquery.knob',
        maskedinput         : 'lib/jquery.maskedinput',
        mobilecustom        : 'lib/jquery.mobile.custom.min',
        nestable            : 'lib/jquery.nestable.min',
        slimscroll          : 'lib/jquery.slimscroll',
        sparkline           : 'lib/jquery.sparkline',
        touchpunch          : 'lib/jquery.ui.touch-punch.min',
        validate            : 'lib/jquery.validate',
        jquery1             : 'lib/jquery-1.10.2.min',
        jqueryCustom        : 'lib/jquery-ui-1.10.3.custom.min',
        jqueryFull          : 'lib/jquery-ui-1.10.3.full.min',
        markdown            : 'lib/markdown.min',
        moment              : 'lib/moment.min',
        prettify            : 'lib/prettify',
        respond             : 'lib/respond.min',
        select2             : 'lib/select2.min',
        spin                : 'lib/spin',
        typeahead           : 'lib/typeahead-bs2.min',
        url_spy             : 'url_spy',
        jqueryui            : 'lib/jquery-ui.min',
        smartfunnel         : 'lib/jquery.smartfunnel',
        jquerygantt         : 'lib/gantt1/jquery.fn.gantt',
        tooltip             : 'lib/tooltip',
        popover             : 'lib/popover'
 
    }
});


require(['app'], function(app) {
    //alert("main")
    app.initialize();
});




