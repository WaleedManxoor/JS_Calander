    var dobDate = new Date(dob);
    var currentDate = new Date();

    var years = currentDate.getFullYear() - dobDate.getFullYear();
    var months = currentDate.getMonth() - dobDate.getMonth();
    var days = currentDate.getDate() - dobDate.getDate();

    function calculateAge() {
        var dob = document.getElementById('dob').value;
        
        if (!dob) {
            alert('Please enter your date of birth');
            return;
        }