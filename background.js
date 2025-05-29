chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'startReminder') {
    const minutes = request.minutes;
    if (!minutes || minutes <= 0) return;

    chrome.alarms.create('walkifyAlarm', { periodInMinutes: minutes });

    sendResponse({ success: true });
  } else if (request.type === 'stopReminder') {
    chrome.alarms.clear('walkifyAlarm', () => {
      sendResponse({ success: true });
    });
  }
  return true; // Indicate async response
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'walkifyAlarm') {
    chrome.notifications.create('', {
      type: 'basic',
      iconUrl: 'icon.png',
      title: '🚶 Time to move!',
      message: 'Take a walk, stretch or do a pushup 💪',
      priority: 2,
    });
  }
});
