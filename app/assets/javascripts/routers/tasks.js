ExampleApp.Routers.Tasks = Backbone.Router.extend({

  routes: {
    "" : "index"
  },

  index: function() {    
    var view  = new ExampleApp.Views.TasksIndex({collection: ExampleApp.tasks });
    $('body').html(view.render().$el);
  }

});