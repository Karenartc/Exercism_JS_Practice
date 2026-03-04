//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MINUTES_IN_DAY = 24 * 60;

export class Clock {
  constructor(hour, minute = 0) {
    const total = hour * 60 + minute;
    this.totalMinutes = (((total % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY);
  }

  toString() {
    let hour = String(Math.floor(this.totalMinutes / 60));
    let minutes = String(this.totalMinutes % 60);
    
    return `${hour.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  }

  plus(minutes) {
    return new Clock(0, this.totalMinutes + minutes);
  }

  minus(minutes) {
    return new Clock(0, this.totalMinutes - minutes);
  }

  equals(other) {
    return this.totalMinutes === other.totalMinutes;
  }
}
