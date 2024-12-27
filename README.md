# CodeAlpha_AGE_CALCULATOR

A simple web-based **Age Calculator** that calculates users' ages based on their submitted date of birth (day, month, and year). This project leverages JavaScript's built-in date and time functions to simplify the age calculation process.

---

## 📝 Features
- **User-Friendly Interface**: Enter your date of birth using a date picker.
- **Accurate Age Calculation**: Dynamically calculates your exact age in years, months, and days.
- **Real-Time Functionality**: Provides instant results upon submission.
- **Responsive Design**: Works seamlessly across devices of different screen sizes.
- **Dark Mode**: Toggle between light and dark themes, with preferences saved in local storage.

---

## 🚀 How It Works
1. **Input Your Date of Birth**: Provide the day, month, and year in the date picker.
2. **Click Calculate**: Hit the "Calculate" button to instantly get your age.
3. **View Results**: Your age will be displayed in years, months, and days.

---

## 🛠️ Technologies Used
- **HTML**: For structuring the application.
- **CSS**: For styling the application (using Tailwind CSS for utility-based styling).
- **JavaScript**: To handle the logic of age calculation and date handling.

---

## 📂 Project Structure
```plaintext
CodeAlpha_AGE_CALCULATOR/
│
├── index.html         # The main HTML file containing the structure of the app.
├── src/
│   ├── output.css     # Compiled Tailwind CSS file.
│   ├── style.css      # The main styling file.
│   └── script.js      # The JavaScript file containing the age calculation logic.
├── README.md          # Documentation of the project.
├── tailwind.config.js # Tailwind CSS configuration file.
├── .gitignore         # Git ignore file for ignored directories and files.
└── package.json       # Configuration for Node.js dependencies.
```

---

## ⚙️ Installation

To set up the project locally, follow these steps:

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Download and install Node.js](https://nodejs.org)
- **npm**: Comes bundled with Node.js.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Youssef-Essam-Fathy/CodeAlpha_AGE_CALCULATOR.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CodeAlpha_AGE_CALCULATOR
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build Tailwind CSS:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```
5. Open the application:
   Open `index.html` in your browser to view the application.

---

## 🎨 Customization

Modify the `tailwind.config.js` file to extend the theme or add custom configurations. Update the HTML and JavaScript files to implement additional features.

---

## 🤝 Contribution

Feel free to fork this repository and submit pull requests. Contributions are welcome!

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

--- 

