var $ = require("jQuery");

module.exports = {
  getActivities: function() {
    var activities = [];

    try {
      //activities = JSON.parse(stringTodos);
      // Use fitbit API to get all tracked activities
      activities = [{
        id: 1,
        date: "Feb 22, 9:10PM",
        activity: "Activity",
        steps: "5351",
        distance: "2.48 miles",
        duration: "55:00",
        calories: "480 cals"
      }, {
        id: 2,
        date: "Feb 18, 9:13AM",
        activity: "Soccer",
        steps: "7642",
        distance: "3.55 miles",
        duration: "1:20:00",
        calories: "631 cals"
      }, {
        id: 3,
        date: "Feb 15, 9:07PM",
        activity: "Activity",
        steps: "6069",
        distance: "2.82 miles",
        duration: "1:00:00",
        calories: "518 cals"
      }, {
        id: 4,
        date: "Feb 15, 9:07PM",
        activity: "Dancing lessons",
        steps: "6069",
        distance: "2.82 miles",
        duration: "1:00:00",
        calories: "518 cals"
      }];
    } catch (e) {

    }

    return $.isArray(activities) ? activities : [];
  }
};
