const courseContainer = document.querySelector("#course-cards");
const totalCreditsElement = document.querySelector("#total-credits");
const filterButtons = document.querySelectorAll(".filter-btn");


// Renders whatever array is passed in (all courses, or filtered subset)

function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p class="course-title">${course.title}</p>
            <p class="course-credits">${course.credits} credits</p>
        `;
        courseContainer.appendChild(courseCard);
    });

    updateTotalCredits(courseList);
}


// Uses reduce to total credits for whatever is currently displayed

function updateTotalCredits(courseList) {
    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `Total Credits: ${total}`;
}


// Wire up the filter buttons

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        if (filter === "all") {
            displayCourses(courses);
        } else {
            displayCourses(courses.filter((course) => course.subject === filter));
        }

        // Optional: highlight the active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// Initial render on page load
displayCourses(courses);