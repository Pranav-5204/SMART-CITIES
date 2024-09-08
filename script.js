// Sample data for demonstration
const accidentData = {
    impactStatus: "Crash",
    magnitude: 3.5,
    gpsLocation: "37.7749° N, 122.4194° W"
};

// Populate the main page with accident details
document.getElementById('impact-status').textContent = accidentData.impactStatus;
document.getElementById('magnitude-value').textContent = accidentData.magnitude;
document.getElementById('gps-location').textContent = accidentData.gpsLocation;
