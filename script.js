// script.js

document.addEventListener("DOMContentLoaded", () => {
    // ---------- GLOBAL NAVIGATION ----------
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href !== "#") {
                window.location.href = href; // Navigate to the page
            }
        });
    });

    // ---------- LOGIN ----------
    const loginBtn = document.querySelector("#loginForm button");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            // Normally you'd validate credentials here
            alert("Login successful! Redirecting to dashboard...");
            window.location.href = "dashboard.html";
        });
    }

    // ---------- SIGNUP ----------
    const signupBtn = document.querySelector("#signupForm button");
    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            alert("Signup successful! Please login.");
            window.location.href = "login.html";
        });
    }

    // ---------- DASHBOARD ----------
    const dashboardCards = document.querySelectorAll(".card");
    if (dashboardCards.length > 0) {
        dashboardCards.forEach(card => {
            card.addEventListener("click", () => {
                const section = card.querySelector("h3").innerText;
                switch (section) {
                    case "Total Students":
                        window.location.href = "students.html";
                        break;
                    case "Total Teachers":
                        window.location.href = "teachers.html";
                        break;
                    case "Coureses":
                        window.location.href = "coureses.html";
                        break;
                    case "Attendance":
                        window.location.href = "attendance.html";
                        break;
                }
            });
        });
    }

    // ---------- STUDENTS / TEACHERS ----------
    const editButtons = document.querySelectorAll(".edit");
    const deleteButtons = document.querySelectorAll(".delete");

    editButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Edit functionality coming soon!");
        });
    });

    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this record?")) {
                btn.closest("tr").remove();
            }
        });
    });

    // ---------- COURSES ----------
    const courseRows = document.querySelectorAll("table tr");
    courseRows.forEach(row => {
        row.addEventListener("click", () => {
            const cells = row.querySelectorAll("td");
            if (cells.length > 0) {
                alert(`Course Selected: ${cells[1].innerText}`);
            }
        });
    });

    // ---------- GRADES ----------
    const gradeRows = document.querySelectorAll(".container table tr");
    gradeRows.forEach(row => {
        row.addEventListener("click", () => {
            const cells = row.querySelectorAll("td");
            if (cells.length > 0) {
                alert(`Student: ${cells[1].innerText}, Grade: ${cells[4].innerText}`);
            }
        });
    });

    // ---------- ATTENDANCE ----------
    const attendanceBtn = document.querySelector(".form-box button");
    if (attendanceBtn) {
        attendanceBtn.addEventListener("click", () => {
            alert("Attendance submitted successfully!");
        });
    }
});
