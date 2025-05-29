// popup.js
document.addEventListener('DOMContentLoaded', function() {
  const timeInput = document.getElementById('timeInput');
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const statusDiv = document.getElementById('statusDiv');
  const intervalText = document.getElementById('intervalText');
  const quickSelectButtons = document.querySelectorAll('.quick-select');

  // Load current state
  loadCurrentState();

  // Quick select buttons
  quickSelectButtons.forEach(button => {
    button.addEventListener('click', function() {
      timeInput.value = this.getAttribute('data-time');
    });
  });

  // Start button
  startBtn.addEventListener('click', function() {
    const minutes = parseInt(timeInput.value);
    if (!minutes || minutes <= 0) {
      alert('Please set a valid time in minutes');
      return;
    }

    // Send message to background script to start reminder
    chrome.runtime.sendMessage({
      action: 'startReminder',
      minutes: minutes
    }, function(response) {
      if (response && response.success) {
        updateUI(true, minutes);
      }
    });
  });

  // Stop button
  stopBtn.addEventListener('click', function() {
    chrome.runtime.sendMessage({
      action: 'stopReminder'
    }, function(response) {
      if (response && response.success) {
        updateUI(false, 0);
      }
    });
  });

  function updateUI(isRunning, minutes) {
    if (isRunning) {
      startBtn.style.display = 'none';
      stopBtn.style.display = 'block';
      statusDiv.style.display = 'block';
      intervalText.textContent = minutes;
    } else {
      startBtn.style.display = 'block';
      stopBtn.style.display = 'none';
      statusDiv.style.display = 'none';
    }
  }

  function loadCurrentState() {
    chrome.runtime.sendMessage({
      action: 'getStatus'
    }, function(response) {
      if (response) {
        updateUI(response.isRunning, response.minutes);
        if (response.minutes > 0) {
          timeInput.value = response.minutes;
        }
      }
    });
  }
});