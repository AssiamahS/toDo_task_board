$(document).ready(function() {
    // Example function to calculate deadline status
    function calculateDeadlineStatus(deadline) {
      // Parse the deadline date using Day.js
      var deadlineDate = dayjs(deadline);
  
      // Get the current date
      var currentDate = dayjs();
  
      // Calculate the difference in days between the deadline and the current date
      var daysDifference = deadlineDate.diff(currentDate, 'day');
  
      // Determine the status based on the difference in days
      if (daysDifference < 0) {
        // Deadline is overdue
        return 'overdue';
      } else if (daysDifference <= 1) {
        // Deadline is nearing
        return 'nearing';
      } else {
        // Deadline is not nearing or overdue
        return 'normal';
      }
    }
  
    // Example usage
    var deadline = '2024-03-31'; // Example deadline date
    var status = calculateDeadlineStatus(deadline);
    console.log(status); // Output: 'nearing' or 'overdue' or 'normal'
  });
  
