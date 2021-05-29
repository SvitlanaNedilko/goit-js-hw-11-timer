import CountdownTimer from './timer.js';

const myTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

const myTimer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('May 20, 2021'),
});
