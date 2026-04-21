# 📌 Project Name: Digital Clock
## 🧠 PROJECT FLOW PLANNING
### 🎯 Goal: Create a real-time digital clock that displays the current time and date.

🧩 Features:
- Real-time Clock (Hours, Minutes, Seconds)
- Current Date Display
- Time Spent Tracker (Session duration)
- **Interactive Dashboard**: Drag and drop widgets to customize layout
- **Reordering Logic**: Smart insertion of widgets within containers
- Responsive Design with dynamic font scaling

🔄 Flow (Step by Step):
1. Create the basic HTML structure with placeholders for time components and widget containers.
2. Initialize JavaScript variables to target the Clock, Date, and Draggable elements.
3. Define functions for real-time updates:
   - `updateClock`: Updates HH:MM:SS every second.
   - `updateDate`: Updates the date every 10 minutes.
   - `updateSpentTime`: Tracks session duration.
4. Format time values using `padStart(2, '0')`.
5. Implement Drag and Drop logic:
   - Add `dragstart` and `dragend` listeners for visual feedback.
   - Add `dragover` listeners to containers to handle reordering.
   - Implement `getDragAfterElement` to determine the correct insertion point.
6. Inject formatted data into the DOM and handle dynamic layout changes.

🖥 UI Plan:
- Large centered clock display (HH : MM : SS) with responsive sizing (`clamp`).
- Date widget and Session tracker in a flexible grid.
- Visual feedback during drag (opacity changes and dashed borders).
- Smooth transitions and hover effects for interactivity.

⚙️ Logic Plan:
- `new Date()` to capture the current system time.
- `setInterval` for live updates (1s for clock, 10m for date).
- `getBoundingClientRect()` to calculate widget positions during drag.
- `insertBefore` and `appendChild` for dynamic DOM manipulation.

🚧 Edge Cases:
- Handling the transition from 59 seconds to 00 seconds.
- Ensuring widgets fit correctly when moved from large to small containers (responsive fonts).
- Maintaining drag performance by efficiently calculating insertion points.
- Preventing default browser behavior on `dragover` to enable custom dropping.