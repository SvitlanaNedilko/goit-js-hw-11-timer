class CountdownTimer {
  constructor(data) {
    const timerEl = document.querySelector(data.selector);
    this.daysEl = timerEl.querySelector('[data-value="days"]');
    this.hoursEl = timerEl.querySelector('[data-value="hours"]');
    this.minutesEl = timerEl.querySelector('[data-value="mins"]');
    this.secondsEl = timerEl.querySelector('[data-value="secs"]');
    this.targetDate = data.targetDate;

    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      if (currentTime >= this.targetDate) {
        return;
      }
      const restOfTime = this.targetDate - currentTime;
      const time = this.getTimeComponets(restOfTime);
      this.updateClockface(time);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponets(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  updateClockface({ days, hours, mins, secs }) {
    this.daysEl.textContent = `${days}`;
    this.hoursEl.textContent = `${hours}`;
    this.minutesEl.textContent = `${mins}`;
    this.secondsEl.textContent = `${secs}`;
  }
}

export default CountdownTimer;
