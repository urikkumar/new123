//'use strict'; //allows you to place a program, or a function, in a “strict” operating context
//strict context prevents certain actions from being taken and throws more exceptions
//It catches some common coding bloopers, throwing exceptions.
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  

    uglify: {
    options: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
      mangle: {
        except: ['jQuery', 'Backbone']
      }
    },
    my_target: {
      files: {
        'public/build/output.min.js': ['scripts/lib/*.js']
      }
    }
  },  
       

  imagemin: {                          // Task
    static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 6
      }
      /*files: {                         // Dictionary of files
        'dist/img.png': 'src/img.png', // 'destination': 'source'
        'dist/img.jpg': 'src/img.jpg',
        'dist/img.gif': 'src/img.gif'
      }*/
   },
    dynamic: {
      options: {                       // Target options
        optimizationLevel: 6,
        interlaced: true,
        pngquant: true,
        progressive: true
      },
      
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'assets/',          // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'public/img/'                  // Destination path prefix
      }]
    }
  },
  cssmin: {
  add_banner: {
    options: {
      banner: '/* My minified css file */'
    },
    files: {
      'public/build/output.min.css': ['<banner>','assets/css/ace.min.css', 'assets/css/ace-rtl.min.css', 'assets/css/ace-skins.min.css','assets/css/prettify.css','assets/css/jquery-ui-1.10.3.custom.min.css','assets/css/jquery.gritter.css','assets/css/fullcalendar.css','assets/css/jquery-ui-1.10.3.full.min.css','assets/css/datepicker.css','assets/css/ui.jqgrid.css','assets/css/jquery-ui-1.10.3.custom.min.css','assets/css/daterangepicker.css','assets/css/colorpicker.css','assets/css/ace-fonts.css','assets/css/bootstrap-editable.css']
    }
  }
},
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes : true,
        removeRedundantAttributes: true,
        removeOptionalTags: true,
        removeEmptyElements: true
      },
      files: {                                   // Dictionary of files
        'public/templates/dashboard.html': 'scripts/templates/dashboard.html',    // 'destination': 'source'
        'public/templates/blank.html': 'scripts/templates/blank.html',
        'public/templates/buttons.html': 'scripts/templates/buttons.html',
        'public/templates/dropzone.html': 'scripts/templates/dropzone.html',
        'public/templates/elements.html': 'scripts/templates/elements.html',
        'public/templates/error_404.html': 'scripts/templates/error_404.html',     
        //'dist/contact.html': 'src/contact.html'
      }
    }
  },
  
  csslint: {
  strict: {
    options: {
      import: 2
    },
    src: ['assets/css/bootstrap.css']
  }
},

  clean: ["path/to/dir/one", "path/to/dir/two"],



 
   jst: {
  compile: {
    options: {
      templateSettings: {
        interpolate : /\{\{(.+?)\}\}/g
      }
    },
    files: {
      "path/to/compiled/templates.js": ["path/to/source/**/*.html"]
    }
  }
},
   watch: {
  scripts: {
    files: '**/*.css',
    tasks: ['concat'],
    options: {
     // livereload: true,
      interrupt: true,
      event: ['all', 'changed', 'added', 'deleted']
    }
  }
}
  


  });
  /*jshint: {
    all: ['Gruntfile.js', 'scripts/lib/** rmove space/*.js']
  }*/
/*cssmin: {
  combine: {
    files: {
      'assets/css/one.css': ['assets/css/prettify.css', 'assets/css/select2.css']
    }
  }
}*/
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  //Precompile Underscore templates to JST file.
  grunt.loadNpmTasks('grunt-contrib-jst');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  //grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  //runs predefined tasks whenever watched file patterns are added, changed or deleted
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-express');

  //grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify','imagemin','cssmin','clean','watch']);
  //grunt.registerTask('server',['express','watch']);
  //grunt.registerTask('cssmin');
  grunt.registerTask('compile-template',['jst']);
  grunt.registerTask('css-lint',['csslint']);
  grunt.registerTask('html-min',['htmlmin']);

};