var ExampleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {    
    this.tasks = new ExampleApp.Collections.Tasks(data.tasks);
    new ExampleApp.Routers.Tasks({ tasks: this.tasks });
    Backbone.history.start();
  }
}