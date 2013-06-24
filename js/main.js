// SINGLE PROJECT MODEL
var Project = Backbone.Model.extend({
  defaults: {
    name: 'Project Name',
    company: 'Company Name',
    language: 'Language'
  }
});

// LIST OF PROJECTS
var ProjectCollection = Backbone.Collection.extend({
  model: Project
});

// VIEW FOR ALL PROJECTS
var ProjectsView = Backbone.View.extend({
  tagName: 'ul',

  render: function() {
    // FILTER THROUGH ALL ITEMS AND CREATE NEW PROJECTVIEW APPEND TO ROOT ELEMENT
    this.collection.each(function(project) {
      var projectView = new ProjectView({ model : project });

      this.$el.append(projectView.render().el);
    }, this);

    return this;
  }
});

// SINGLE PROJECT VIEW
var ProjectView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#projectTemplate').html() ),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

// AND BOOM GOES THE DYNAMITE
var projectCollection = new ProjectCollection([
  {
    name: 'corkcicle',
    company: 'push',
    language: 'coffee'
  },
  {
    name: 'italio',
    company: 'push',
    language: 'sass'
  }
]);

var projectsView = new ProjectsView({ collection : projectCollection });

$(document.body).append(projectsView.render().el);