import ReactDOM from 'react-dom/client';
import './index.css'; // Import any styles you may have
import App from './App'; // Import your main App component

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <App />
  );
} else {
  console.error('Failed to find the root element');
}