const {
  Paper,
  List,
  ListItem,
  ListDivider,
  Avatar,
  RaisedButton,
  AppBar,
  FlatButton,
  IconButton,
  NavigationClose
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

App = React.createClass({
  mixins: [ReactMeteorData],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getMeteorData() {
    return {
      jobs: Jobs.find({}).fetch()
    }
  },

  componentDidMount() {
      {this.loadJobs()}
  },

  loadJobs() {
    loadJobs = Meteor.call("loadGithubJobs");
  },

  renderJobs() {
    return this.data.jobs.map((job) => {
      return <Job key={job._id} job={job} />;
    });
  },

  render() {
    return (
      <div className="wrapper">
        <AppBar
          title="Github Jobs" />

        <div className="container">
          <List subheader="Latest Github Jobs">
            {this.renderJobs()}
          </List>
        </div>
      </div>
    );
  }
});
