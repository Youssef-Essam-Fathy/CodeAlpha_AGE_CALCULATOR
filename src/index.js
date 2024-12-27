const inputDate = document.getElementById('inputDate');
const ageButton = document.getElementById('ageBtn');
const result = document.getElementById('result');

const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");


ageButton.addEventListener("click", function(e) {
        // Prevent reloading default behaviour
        e.preventDefault()

        // Receive date of birth from user
        const input = inputDate.value;

        // Check if user doesn't enter the DOB
        if (!input) {
            alert('You have to enter your Date of birth!');
            return;
        }

        const enteredDate = new Date(input);

        const today = new Date(Date.now());
        const currentDay = today.getDate();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();
        
        const birthDay = enteredDate.getDate();
        const birthMonth = enteredDate.getMonth() + 1;
        const birthYear = enteredDate.getFullYear();

        let userYear = currentYear - birthYear; 
        let userMonth = currentMonth - birthMonth; 
        let userDay = currentDay - birthDay;

        // Dealing with cases in which birth day or month is > current ones
        if (userDay < 0) {
            userMonth--;
            userDay += new Date(currentYear, currentMonth - 1, 0).getDate();
        } 

        if (userMonth < 0) {
            userYear++;
            userMonth += 12;
        }

        result.textContent = `Your age is: ${userYear}years ${userMonth}months ${userDay}days`;
        result.classList.remove("scale-0");
        result.classList.add("scale-100");
})

// Check local storage for the user's preference
if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
  
  // Toggle dark mode and icons on button click
  darkModeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
  
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      localStorage.setItem("theme", "light");
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  });