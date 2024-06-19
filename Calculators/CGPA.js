let courseCount = 1;

function addCourse() {
    courseCount++;
    const courseContainer = document.getElementById('courses-container');
    const newCourse = document.createElement('div');
    newCourse.className = 'course';
    newCourse.innerHTML = `
        <label for="grade${courseCount}">Grade:</label>
        <input type="text" id="grade${courseCount}" class="grade" required>
        <label for="credit${courseCount}">Credit Hours:</label>
        <input type="number" id="credit${courseCount}" class="credit" required>
    `;
    courseContainer.appendChild(newCourse);
}

function calculateCGPA() {
    const grades = document.getElementsByClassName('grade');
    const credits = document.getElementsByClassName('credit');
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i].value.toUpperCase();
        const credit = parseFloat(credits[i].value);
        if (isNaN(credit)) {
            alert("Please enter valid credit hours.");
            return;
        }

        let gradePoint;
        switch (grade) {
            case 'A': gradePoint = 5.0; break;
            case 'B': gradePoint = 4.0; break;
            case 'C': gradePoint = 3.0; break;
            case 'D': gradePoint = 2.0; break;
            case 'F': gradePoint = 0.0; break;
            default:
                alert("Please enter valid grades (A, B, C, D, F).");
                return;
        }

        totalPoints += gradePoint * credit;
        totalCredits += credit;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('answer').innerHTML = `
        <p>Your CGPA is: ${cgpa.toFixed(2)}</p>
    `;
}