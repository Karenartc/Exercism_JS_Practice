export class SplitSecondStopwatch {
  constructor() {
    this._state = 'ready';
    this._currentLapSeconds = 0;
    this._totalSeconds = 0;
    this._previousLaps = [];
  }

  get state() {
    return this._state;
  }

  get currentLap() {
    return this._formatTime(this._currentLapSeconds);
  }

  get total() {
    return this._formatTime(this._totalSeconds);
  }

  get previousLaps() {
    return [...this._previousLaps];
  }

  start() {
    if (this._state === 'running') {
      throw new Error('cannot start an already running stopwatch');
    }

    if (this._state === 'ready' || this._state === 'stopped') {
      this._state = 'running';
    }
  }

  stop() {
    if (this._state !== 'running') {
      throw new Error('cannot stop a stopwatch that is not running');
    }

    this._state = 'stopped';
  }

  lap() {
    if (this._state !== 'running') {
      throw new Error('cannot lap a stopwatch that is not running');
    }

    this._previousLaps.push(this._formatTime(this._currentLapSeconds));
    this._currentLapSeconds = 0;
  }

  reset() {
    if (this._state !== 'stopped') {
      throw new Error('cannot reset a stopwatch that is not stopped');
    }

    this._state = 'ready';
    this._currentLapSeconds = 0;
    this._totalSeconds = 0;
    this._previousLaps = [];
  }

  advanceTime(duration) {
    if (this._state !== 'running') {
      return;
    }

    const seconds = this._parseTime(duration);
    this._currentLapSeconds += seconds;
    this._totalSeconds += seconds;
  }

  _parseTime(duration) {
    const [hours, minutes, seconds] = duration.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  _formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${this._pad(hours)}:${this._pad(minutes)}:${this._pad(seconds)}`;
  }

  _pad(value) {
    return String(value).padStart(2, '0');
  }
}