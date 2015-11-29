const {
  FontIcons,
  IconButton,
  Icons,
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;


// Task component - represents a single todo item
Job = React.createClass({
  render() {
    return (
      <ListItem
        primaryText={ this.props.job.title }
        leftAvatar={ <Avatar src={ this.props.job.company_logo }/> }
        secondaryText={ this.props.job.location }
        href={this.props.job.company_url}
        rightIcon={ <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub" /> }
      />
    );
  }
});
