App = React.createClass({
  mixins: [ReactMeteorData],

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
      <div className="container">
        <header>
          <h1>JBLYR</h1>
        </header>
        <ul>
          {this.renderJobs()}
        </ul>
      </div>
    );
  }
});
