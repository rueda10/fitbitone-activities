var React = require("react");

var TodoList = require("ActivitiesList");
var ActivityAPI = require("ActivityAPI");
var ActivitiesList = require("ActivitiesList");

var Main = React.createClass({
  getInitialState: function() {
    return {
      activities: ActivityAPI.getActivities()
    };
  },
  render: function() {
    var {activities} = this.state;
    return (
      <div>
        <h1 className="page-title">My Tracked Activities</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ActivitiesList activities={activities}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
