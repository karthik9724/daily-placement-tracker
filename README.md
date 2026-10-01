
# 📅 Daily Placement Tracker

A simple and responsive **Daily Placement Preparation Tracker** designed to help students organize their daily routine and consistently prepare for placements.

The tracker allows you to mark activities as completed, monitor your daily progress, and view your progress over the last 7 days.

## 🚀 Live Demo

👉 **[Open Daily Placement Tracker](https://daily-placement-tracker.vercel.app/)**

You can open the live website on your laptop or Android phone and install it as an app.

---

## ✨ Features

- 📅 Daily timetable
- ☑️ Mark activities as completed
- 📊 Today's progress percentage
- 📈 Last 7 days progress graph
- 💾 Progress saved using browser Local Storage
- 🔄 Automatic reset for a new day
- ✅ Complete All button
- 🔁 Reset Day button
- 📱 Responsive mobile-friendly design
- 📲 Progressive Web App (PWA)
- ⚡ Installable on Android
- 🌐 Deployed using Vercel

---

## 🕐 Daily Schedule

| Time | Activity |
|------|----------|
| 5:15 AM | 🌅 Wake Up |
| 5:15–5:30 | 💧 Fresh Up + Water |
| 5:30–7:00 | 💻 DSA / Coding |
| 7:00–7:40 | 🏋️ Workout |
| 7:40–8:20 | 🚿 Bath + Breakfast |
| 8:20–8:50 | 🎒 Get Ready |
| 8:50–9:00 | 🚶 Walk to College |
| 9:00–3:20 | 🏫 College |
| 3:20–3:40 | 🚶 Walk to Hostel |
| 3:40–4:00 | 😌 Rest |
| 4:00–5:00 | 🧮 Aptitude |
| 5:00–5:40 | 🍪 Snacks + Break |
| 5:40–6:00 | 🧮 Aptitude Revision |
| 6:00–7:15 | 📚 Core CS |
| 7:15–8:00 | 📚 Core / College Work |
| 8:00–9:00 | 🍽️ Dinner + Relax |
| 9:00–10:00 | 🚀 Project |
| 10:00–10:30 | 🗣️ Communication |
| 10:30–10:40 | 🔄 Daily Review |
| 10:40–10:50 | 🌙 Prepare for Bed |
| 10:50 PM | 😴 Sleep |

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Chart.js
- Local Storage
- Progressive Web App (PWA)
- Service Worker
- Vercel
- GitHub

---

## 📱 PWA Support

The project is built as a Progressive Web App.

It can be installed on supported devices and used like a normal application.

### On Android

1. Open the live demo in Chrome.
2. Open the browser menu.
3. Select **Install app** or **Add to Home screen**.
4. Open the installed Placement Tracker.

---

## 💾 Data Storage

The application uses the browser's **Local Storage** to save:

- Daily task completion
- Current day's progress
- 7-day progress history

No external database is required.

### Important

Progress is stored locally on each device.

For example:

```text
Laptop → Laptop progress

Phone → Phone progress
````

The progress does not automatically synchronize between devices.

---

## 📈 Progress Tracking

The application calculates the percentage of completed activities for each day.

For example:

```text
Completed Activities: 10
Total Activities: 20

Progress: 50%
```

The last 7 days are displayed using a line graph.

---

## 📂 Project Structure

```text
DailyPlacementTracker/
│
├── index.html
├── manifest.json
├── service-worker.js
├── icon-192.png
├── icon-512.png
└── README.md
```

---

## ⚙️ Run Locally

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Go into the project folder:

```bash
cd DailyPlacementTracker
```

Then open `index.html` in a browser.

For the best PWA experience, run the project using a local web server such as VS Code Live Server.

---

## 🌐 Deployment

The project is deployed using **Vercel**.

Every time the project is updated and pushed to the connected GitHub repository, Vercel can automatically deploy the latest version.

### Deployment Flow

```text
VS Code
   ↓
Git
   ↓
GitHub
   ↓
Vercel
   ↓
Live Website
```

---

## 🎯 Purpose

The main purpose of this project is to maintain consistency during placement preparation by dividing the day into focused activities such as:

* DSA
* Coding
* Aptitude
* Core Computer Science
* Projects
* Communication
* College Work
* Workout
* Daily Review

Instead of only planning the day, the tracker helps record whether each activity was actually completed.

---

## 🔮 Future Improvements

Possible future improvements include:

* 🔥 Daily streak tracking
* 📊 Monthly progress statistics
* 📅 Calendar-based history
* ☁️ Cloud synchronization
* 🔔 Notifications and reminders
* 🎯 Custom timetable
* 📝 Personal notes for each task
* 🏆 Achievement system
* 🌙 Dark mode

---

## 👨‍💻 Author

**Karthik**

Computer Science & Engineering Student

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

### 🔗 Live Demo

**https://daily-placement-tracker.vercel.app/**


You can create the file in GitHub as **`README.md`**, paste this content, and commit it. The **Live Demo** link will then appear near the top of your repository page.
```
