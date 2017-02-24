var React = require("react");

var Activity = require("Activity");

var ActivitiesList = React.createClass({
  render: function() {
    var {activities} = this.props;
    var renderActivities = () => {
      if (activities.length === 0) {
        return (
          <p className="container__message">No Tracked Activities</p>
        );
      }
      return activities.map((activity) => {
        return (
          <Activity key={activity.id} {...activity}/>
        );
      });
    };

    return (
      <div>
        {renderActivities()}
      </div>
    );
  }
});

module.exports = ActivitiesList;
