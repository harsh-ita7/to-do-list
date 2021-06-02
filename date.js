
exports.getdate=function()
{
var today = new Date();
var options=
{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
};

return today.toLocaleDateString("en-US",options);
// var todaysDay = "";
// if (day === 1)
//   todaysDay = "sunday";
// else if (day === 2)
//   todaysDay = "monday";
// else if (day === 3)
//   todaysDay = "tueday";
// else if (day === 4)
//   todaysDay = "wednesday";
// else if (day === 5)
//   todaysDay = "thursday";
// else if (day === 6)
//   todaysDay = "friday";
// else if (day === 7)
//   todaysDay = "saturday";
}
