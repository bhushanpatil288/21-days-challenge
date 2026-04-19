# 📌 Project Name: Digital Clock
## 🧠 PROJECT FLOW PLANNING
### 🎯 Goal: Create a real-time digital clock that displays the current time and date.

🧩 Features:
- Real-time Clock (Hours, Minutes, Seconds)
- Current Date Display
- Time Spent Tracker (Session duration)
- Responsive Design

🔄 Flow (Step by Step):
1. Create the basic HTML structure with placeholders for time components.
2. Initialize JavaScript variables to target the Clock and Date elements.
3. Define a function to get the current time using the `Date` object.
4. Format the time values (add a leading zero if the value is less than 10).
5. Inject the formatted time into the HTML elements.
6. Use `setInterval` to trigger the time update function every 1000 milliseconds (1 second).
7. Extract and display the current date in a human-readable format.
8. Calculate the elapsed time since the page was loaded to show "Time Spent."

🖥 UI Plan:
- Large centered clock display (HH : MM : SS)
- Date widget below the clock
- Session tracker widget (Time Spent)
- Clean, dark-themed or professional background

⚙️ Logic Plan:
- `new Date()` to capture the current system time.
- `setInterval(updateTime, 1000)` for live updates.
- `padStart(2, "0")` or conditional logic for two-digit formatting.

🚧 Edge Cases:
- Handling the transition from 59 seconds to 00 seconds.
- Ensuring the clock doesn't lag if the browser tab is inactive.
- Correct date formatting based on different time zones.