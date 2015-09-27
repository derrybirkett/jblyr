Jobs = new Mongo.Collection("jobs");

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.getElementById("App"));
  });
}
