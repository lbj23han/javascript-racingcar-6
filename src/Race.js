import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Race {
  constructor(CAR_NAMES, ROUNDS) {
    this.CAR_NAMES = CAR_NAMES;
    this.ROUNDS = ROUNDS;
    this.POSITIONS = CAR_NAMES.map(() => 0);
  }

  moveCars() {
    this.POSITIONS = this.POSITIONS.map((POSITION, i) => {
      const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(0, 9);
      return RANDOM_VALUE >= 4 ? POSITION + 1 : POSITION;
    });
  }

  raceResults() {
    this.POSITIONS.forEach((POSITION, i) => {
      const CAR_NAME = this.CAR_NAMES[i];
      const ROUND_RESULT = "-".repeat(POSITION);
      Console.print(`${CAR_NAME} : ${ROUND_RESULT}`);
    });
  }

  run() {
    Console.print("실행 결과");
    for (let i = 0; i < this.ROUNDS; i++) {
      this.moveCars();
      this.raceResults();
      Console.print(""); // 라운드 구분을 위한 빈 줄
    }
  }
}

export default Race;
