// Sample function to provide suggestions
function getSuggestions(severity) {
    const suggestions = {
        "High Severity": [
            "Call emergency services immediately.",
            "Ensure the safety of all individuals involved.",
            "Provide first aid if trained."
        ],
        "Medium Severity": [
            "Check for injuries and call for assistance if needed.",
            "Move to a safe location if possible."
        ],
        "Low Severity": [
            "Exchange information with other parties.",
            "Document the scene with photos."
        ]
    };
    return suggestions[severity] || [];
}

// Assuming we have access to the severity data
const severity = "High Severity"; // This should be dynamically set based on previous page
const suggestionsList = getSuggestions(severity);

const suggestionsOutput = document.getElementById('suggestions-output');
suggestionsList.forEach(suggestion => {
    const li = document.createElement('li');
    li.textContent = suggestion;
    suggestionsOutput.appendChild(li);
});
