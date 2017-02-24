var React = require("react");

var Activity = React.createClass({
  getInitialState: function() {
    return {
      showActivity: false
    };
  },
  toggleActivityDisplay: function() {
    this.setState({
      showActivity: !this.state.showActivity
    });
  },
  render: function() {
    var {id, date, activity, steps, distance, duration, calories} = this.props;
    var activityItem = (
      <div className="activity">
        <p>
          Steps: {steps}<br/>
          Distance: {distance}<br/>
          Duration: {duration}<br/>
          Calories: {calories}<br/>
        </p>
      </div>
    );

    return (
      <div>
        <div className="activity-header" onClick={this.toggleActivityDisplay}>
          {date} - {activity}
        </div>
        { this.state.showActivity ? activityItem : null }
      </div>
    )
  }
});

module.exports = Activity;
