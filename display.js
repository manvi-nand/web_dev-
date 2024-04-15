document.addEventListener('DOMContentLoaded', function() {
    const queryParams = new URLSearchParams(window.location.search);
    const surveyDataDiv = document.getElementById('surveyData');

    if (queryParams.has('name') && queryParams.has('age') && queryParams.has('gender') && queryParams.has('feedback')) {
        const name = queryParams.get('name');
        const age = queryParams.get('age');
        const gender = queryParams.get('gender');
        const feedback = queryParams.get('feedback');

        const surveyDataHtml = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Feedback:</strong> ${feedback}</p>
        `;

        surveyDataDiv.innerHTML = surveyDataHtml;
    } else {
        surveyDataDiv.innerHTML = '<p>No survey data found.</p>';
    }
});
