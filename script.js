    function calculateAge() {
        var dob = document.getElementById('dob').value;
        
        if (!dob) {
            alert('Please enter your date of birth');
            return;
        }

        var dobDate = new Date(dob);
        var currentDate = new Date();

        var years = currentDate.getFullYear() - dobDate.getFullYear();
        var months = currentDate.getMonth() - dobDate.getMonth();
        var days = currentDate.getDate() - dobDate.getDate();
    
        if (days < 0) {
            months--;  
            var previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += previousMonth.getDate(); 
        }
    
        if (months < 0) {
            years--; 
            months += 12;  
        }
        
        document.getElementById('years').innerHTML = years + " Years";
        document.getElementById('months').innerHTML = months + " Months";
        document.getElementById('days').innerHTML = days + " Days";
}