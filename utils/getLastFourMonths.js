function getLast4Months() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var today = new Date();
  var last4Months = [];

  for (let i = 0; i < 4; i++) {
    last4Months.push(monthNames[today.getMonth() - i]);
  }
  return last4Months;
}

export default getLast4Months();
