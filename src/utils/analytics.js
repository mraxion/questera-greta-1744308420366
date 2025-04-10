export const trackEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: 1
    });
  }
};

export const trackPhrase = (phraseId, category, action) => {
  trackEvent('Phrases', action, `${category}-${phraseId}`);
};

export const trackExercise = (exerciseId, completed, score) => {
  trackEvent('Exercises', completed ? 'Completed' : 'Started', `${exerciseId}-${score}`);
};

export const trackLanguageSelection = (language) => {
  trackEvent('Language', 'Selected', language);
};

export const trackProgress = (category, completionRate) => {
  trackEvent('Progress', 'Category_Progress', `${category}-${completionRate}`);
};

export const trackSearch = (searchTerm) => {
  trackEvent('Search', 'Phrase_Search', searchTerm);
};

export const initializeAnalytics = (measurementId) => {
  if (!window.gtag) {
    console.warn('Google Analytics not loaded');
    return;
  }
  
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
    send_page_view: true
  });
};