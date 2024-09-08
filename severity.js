// Sample function to determine severity based on impact and magnitude
function getSeverity(impactStatus, magnitude) {
    if (impactStatus === "Crash" && magnitude > 3) {
        return "High Severity";
    } else if (impactStatus === "Crash" && magnitude <= 3) {
        return "Medium Severity";
    } else {
        return "Low Severity";
    }
}

// Assuming we have access to the accident data
const accidentData = {
    impactStatus: "Crash",
    magnitude: 3.5
};

document.getElementById('severity-output').textContent = getSeverity(accidentData.impactStatus, accidentData.magnitude);
