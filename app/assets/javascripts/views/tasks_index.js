ExampleApp.Views.TasksIndex = Backbone.View.extend({
  render: function() {    
    this.$el.html(JST['tasks/index']({ tasks: this.collection }));
    return this;
  }
});