// Task component - represents a single todo item
Job = React.createClass({
  render() {
    return (
      <li>{this.props.job.title}</li>
    );
  }
});
