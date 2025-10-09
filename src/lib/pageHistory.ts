// Track page visit history for better client communication context

export interface PageVisit {
  path: string;
  timestamp: number;
  title?: string;
}

const HISTORY_KEY = 'diwave:page_history';
const MAX_HISTORY = 20; // Keep last 20 pages

export function trackPageVisit(path: string, title?: string): void {
  try {
    const history = getPageHistory();
    const visit: PageVisit = {
      path,
      timestamp: Date.now(),
      title
    };

    // Add new visit at the beginning
    history.unshift(visit);

    // Keep only last MAX_HISTORY items
    const trimmed = history.slice(0, MAX_HISTORY);

    localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
  } catch (e) {
    console.error('Failed to track page visit:', e);
  }
}

export function getPageHistory(): PageVisit[] {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (e) {
    console.error('Failed to get page history:', e);
    return [];
  }
}

export function formatPageHistory(): string {
  const history = getPageHistory();
  if (history.length === 0) {
    return 'Історія перегляду порожня (клієнт одразу перейшов на контактну форму)';
  }

  const formatted = history.map((visit, index) => {
    const date = new Date(visit.timestamp);
    const timeStr = date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const title = visit.title || visit.path;
    return `${index + 1}. [${timeStr}] ${title} (${visit.path})`;
  }).join('\n');

  return `📊 Історія перегляду сторінок:\n${formatted}`;
}

export function clearPageHistory(): void {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    console.error('Failed to clear page history:', e);
  }
}
