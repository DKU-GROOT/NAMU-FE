import { styles as layoutStyles } from "../chat/styles.css";
import * as styles from "./styles.css";

export default function Page() {
  return (
    <div className={layoutStyles.summaryArea}>
      <h1 className={styles.title}>요약</h1>
      <p className={styles.content}>
        상호배제(Mutual Exclusion)는 운영체제와 병렬 프로그래밍에서 여러
        프로세스나 스레드가 동시에 하나의 공유 자원(예: 메모리, 파일)에 접근할
        때 발생할 수 있는 문제를 방지하기 위한 개념입니다. 상호배제를 통해 공유
        자원에 여러 프로세스가 동시에 접근하지 못하게 하여 데이터 일관성을
        보장합니다. 1. 상호배제가 필요한 이유 여러 프로세스가 동시에 공유 자원에
        접근하게 되면 **경쟁 조건(Race Condition)**이 발생할 수 있습니다. 예를
        들어, 두 프로세스가 동시에 변수에 접근하여 값을 수정하면, 두 프로세스 중
        하나의 수정이 덮어씌워져 데이터가 예상치 못한 상태가 될 수 있습니다.
        상호배제는 이러한 문제를 방지하고 자원의 일관성을 유지하기 위해
        사용됩니다. 2. 상호배제의 구현 방식 상호배제를 구현하는 방식에는 다양한
        방법이 있습니다. 대표적인 방법은 다음과 같습니다. 뮤텍스(Mutex): 하나의
        프로세스가 자원을 사용할 때 다른 프로세스가 해당 자원에 접근하지 못하게
        잠금을 거는 방식입니다. 프로세스가 자원을 다 사용하면 잠금을 해제하여
        다른 프로세스가 자원을 사용할 수 있도록 합니다. 세마포어(Semaphore):
        세마포어는 특정 값(주로 정수)을 통해 공유 자원의 접근을 관리하는
        방식입니다. 주로 공유 자원에 접근할 수 있는 최대 프로세스 수를 제한할 때
        사용되며, 뮤텍스보다 유연하게 동작할 수 있습니다. 모니터(Monitor):
        고수준의 상호배제 방법으로, 객체를 통해 자원 접근을 관리하는 구조입니다.
        객체 내의 메서드를 호출할 때 객체 자체가 자동으로 상호배제를 제공해주며,
        일반적으로 고급 언어에서 제공하는 기능입니다. 3. 상호배제 조건
        상호배제가 제대로 이루어지려면 다음 조건들이 충족되어야 합니다. 상호배제
        조건: 하나의 프로세스만 자원을 사용할 수 있어야 합니다. 진행 조건:
        자원이 비어있으면 사용하려는 프로세스가 즉시 자원을 얻을 수 있어야
        합니다. 유한 대기 조건: 자원을 기다리는 시간이 무한하지 않아야 하며,
        모든 프로세스가 제한된 시간 안에 자원을 얻을 수 있어야 합니다.
      </p>
    </div>
  );
}
