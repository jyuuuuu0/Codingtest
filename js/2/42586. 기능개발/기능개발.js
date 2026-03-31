function solution(progresses, speeds) {
  let days = progresses.map((p, idx) => Math.ceil((100 - p) / speeds[idx]));
  let answer = [];
  let count = 1;
  let current = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= current) {
      count++;
    } else {
      answer.push(count);
      current = days[i];
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
