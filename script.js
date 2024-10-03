    var dobDate = new Date(dob);
    var currentDate = new Date();

    var years = currentDate.getFullYear() - dobDate.getFullYear();
    var months = currentDate.getMonth() - dobDate.getMonth();
    var days = currentDate.getDate() - dobDate.getDate();
