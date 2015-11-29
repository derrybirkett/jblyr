Jobs = new Mongo.Collection("jobs");

if (Meteor.isClient) {
  Meteor.startup(function () {
    // injectTapEventPlugin();
    React.render(<App />, document.getElementById("App"));
  });
}
