import FoulType from 'models/game/type/foul.model'

enum State {
  WARMING_UP = 'WARMING_UP',
  BENCHED = 'BENCHED',
  PLAYING = 'PLAYING',
  FOULED = 'FOULED',
  FOULED_ON = 'FOULED_ON',
  FOULED_OUT = 'FOULED_OUT',
  INJURED = 'INJURED',
}

export default class PlayerState {
  private state: State
  private freethrows: number

  constructor() {
    this.setWarmingUp()
    this.freethrows = 0
  }

  public isWarmingUp(): boolean {
    return this.state === State.WARMING_UP
  }

  public isBenched(): boolean {
    return this.state === State.BENCHED
  }

  public isPlaying(): boolean {
    return this.state === State.PLAYING
  }

  public isFouled(): boolean {
    return this.state === State.FOULED
  }

  public isFouledOn(): boolean {
    return this.state === State.FOULED_ON
  }

  public isFouledOut(): boolean {
    return this.state === State.FOULED_OUT
  }

  public isInjured(): boolean {
    return this.state === State.INJURED
  }

  public setWarmingUp(): PlayerState {
    this.state = State.WARMING_UP
    return this
  }

  public setBenched(): PlayerState {
    this.state = State.BENCHED
    return this
  }

  public setPlaying(): PlayerState {
    this.state = State.PLAYING
    return this
  }

  public setFouled(foul: FoulType): PlayerState {
    this.state = State.FOULED

    switch (foul) {
      case FoulType.INSIDE:
        this.freethrows = 2
        break
      case FoulType.OUTSIDE:
        this.freethrows = 3
        break
      case FoulType.INSIDE_AND:
      case FoulType.OUTSIDE_AND:
      case FoulType.TECHNICAL:
        this.freethrows = 1
        break
      default:
        this.freethrows = 0
        break
    }

    return this
  }

  public setFouledOn(): PlayerState {
    this.state = State.FOULED_ON
    return this
  }

  public setFouledOut(): PlayerState {
    this.state = State.FOULED_OUT
    return this
  }

  public setInjured(): PlayerState {
    this.state = State.INJURED
    return this
  }

  public shotFreethrow(): void {
    this.freethrows--
  }

  public getFreethrows(): number {
    return this.freethrows
  }

  public getData(): State {
    return this.state
  }
}