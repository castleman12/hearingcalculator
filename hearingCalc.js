document.getElementById('hearingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var frequency = parseFloat(document.getElementById('frequency').value);
    var threshold = parseFloat(document.getElementById('threshold').value);

    // Perform calculation
    var hearingImpairment = 0;
    if (frequency >= 500 && frequency <= 2000) {
        hearingImpairment = 1.5 * threshold - 75;
    } else if (frequency > 2000 && frequency <= 8000) {
        hearingImpairment = 0.75 * threshold - 7.5;
    } else {
        alert('Please enter a valid frequency between 250 and 8000 Hz.');
        return;
    }

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '<h3>Calculated Hearing Impairment:</h3>' +
                              '<p>Frequency: ' + frequency + ' Hz</p>' +
                              '<p>Hearing Threshold: ' + threshold + ' dB HL</p>' +
                              '<p>Hearing Impairment: ' + hearingImpairment.toFixed(2) + ' dB HL</p>';
});
