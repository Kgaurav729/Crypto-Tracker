# ⚙️ Setup Instructions

Follow these steps to run the project locally:

## 1. Clone the Repository

```bash
git clone https://github.com/Kgaurav729/Crypto-Tracker.git
cd crypto-tracker-app
```
---

## 2. Install Dependencies

```bash
npm install
```
---

-Create a .env.local file (if needed) to store API-related keys (optional for CoinGecko).

---

## 3. Start Development Server

```bash
npm run dev
```
- The app will be available at http://localhost:5173

---

# Testing Setup

This project uses Vitest and React Testing Library for unit testing.

## 🔹 Running Tests
To run the test suite:

```bash
npm run test
```
or if using Vitest directly:

```bash
npx vitest
```


## 🔹 What is Covered

Homepage.test.jsx: Verifies crypto cards render correctly based on mocked API data.

The test ensures:

-Proper rendering of all coin data (symbol, logo, price, 24h/7d changes).
-Card layout integrity.


---

