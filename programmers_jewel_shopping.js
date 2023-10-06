// s를 옮기는 건 요소를 Delete하는 것, e를 옮기는 것은 요소를 add하는 것이라는 것을 기억하자!

function solution(gems) {
  const count = new Set(gems).size; // 중복 없는 Set의 크기
  let answer = [1, gems.length]; // answer의 초기값은 1과 gems.length(0 + 1, 끝 인덱스 + 1)
  let start = 0,
    end = 0; // 시작 포인터(s), 끝 포인터(e)
  const temp = new Map(); // 구간 내의 모든 인자가 담길 temp Map 객체
  temp.set(gems[0], 1); // temp 맵 객체에 먼저 0번째 인자를 넣는다.

  while (end < gems.length) {
    // 끝 포인터가 인덱스 끝까지 가면 반복문 종료
    if (temp.size === count) {
      // start를 옮기는 조건 => 1) 모든 요소가 배열 안에 들어왔을 경우
      if (answer[1] - answer[0] > end - start) {
        // 2) 최소구간이 증명되면 answer에 넣는다.
        answer = [start + 1, end + 1];
      }
      temp.set(gems[start], temp.get(gems[start]) - 1); // start를 하나씩 옮기며 중복 요소를 하나씩 제거해서 마침내 중복이 없어진 요소(값이 1인)만 ans에 남게 된다.
      if (temp.get(gems[start]) === 0) {
        // 안에 요소의 값이 0개면 아예 해당 키를 없애자.
        temp.delete(gems[start]);
      }
      start++;
    } else {
      // start를 너무 옮겨 아예 요소 자체가 MAP에서 삭제되면 end를 옮기게 된다.(temp의 size가 count와 달라질테니)
      end++;
      let endValue = temp.get(gems[end]);
      temp.set(gems[end], endValue ? endValue + 1 : 1);
    }
  }
  return answer;
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
