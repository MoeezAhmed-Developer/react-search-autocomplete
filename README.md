# React Search Autocomplete

A responsive and interactive search autocomplete component built with **React**. This project provides real-time search filtering, dynamic suggestions, and navigation using React Router.

## Features

- Real-time search filtering
- Dynamic autocomplete suggestions
- React Router navigation
- Clear search input functionality
- Responsive design
- Fast and lightweight
- CSS Modules for component styling

## Technologies

- React
- Vite
- React Router
- JavaScript
- CSS Modules
- Unicons

## Project Structure

```text
src/
├── components/
│   ├── Searchbar.jsx
│   ├── SearchInput.jsx
│   └── AutoSuggestion.jsx
│
├── css/
|   |── auto-suggestion.module.css
│   ├── searchbar.module.css
│   └── search-input.module.css
│
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MoeezAhmed-Developer/react-search-autocomplete.git
```

### 2. Navigate to the project

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install or npm i
```

### 4. Start the development server

```bash
npm run dev
```

Open the local development URL provided by Vite in your browser.

## How It Works

The search input stores the user's query using React state. The search results are filtered dynamically based on the entered text, and matching results are displayed as autocomplete suggestions.

```text
User Input
    ↓
React State
    ↓
Filter Search Results
    ↓
Display Suggestions
    ↓
React Router Navigation
```

## Future Improvements

- Search API integration
- Debounced search
- Keyboard navigation
- Recent searches
- Search result categories
- Loading states
- Backend-powered search

## Author

**Muhammad Moeez**

Web Developer

## License

This project is available for learning and development purposes.
