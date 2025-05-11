// 宣言
let wordObj,
  wordStr,
  wordMeaning,
  chars,
  i,
  correctNum,
  scene,
  inputEnabled,
  timerId,
  initialTime,
  timeLeft,
  keysTypedNum,
  keysMistypedList,
  quizesCorrect,
  quizesIncorrect,
  mistookWordsList;
// DOM
const startElm = document.getElementById("start"),
  timeInputElm = document.getElementById("time-input"),
  startButtonElm = document.getElementById("start-button"),
  mainElm = document.getElementById("main"),
  timerElm = document.getElementById("timer"),
  mainInputElm = document.getElementById("main-input"),
  typedElm = document.getElementById("typed"),
  notTypedElm = document.getElementById("not-typed"),
  incorrectElm = document.getElementById("incorrect"),
  choicesWrapperElm = document.getElementById("choices-wrapper"),
  choicesElm = document.getElementById("choices"),
  choiceElms = choicesElm.children,
  endElm = document.getElementById("end"),
  resultElm = document.getElementById("result");
// ランダム関数
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// 制限時間入力
timeInputElm.oninput = () => {
  let inputVal = timeInputElm.value;
  startButtonElm.disabled = !(!isNaN(inputVal) && inputVal > 0);
};
// 新しい単語
const newWord = () => {
  choicesWrapperElm.style.display = "none";
  Array.prototype.forEach.call(
    choiceElms,
    (choiceElm) => (choiceElm.style.color = "#000")
  );
  wordObj = words[rand(0, words.length)];
  wordStr = wordObj.eng;
  wordMeaning = wordObj.jpn;
  chars = wordStr.split("");
  i = 0;
  correctNum = rand(0, 3);
  scene = "typing";
  inputEnabled = true;
  typedElm.textContent = "";
  notTypedElm.textContent = wordStr.replaceAll(" ", "_");
};
const quiz = (keyPressed) => {
  if (!/[0-3]/.test(keyPressed)) return;
  // 単語の意味クイズ
  const numPressed = parseInt(keyPressed);
  const selectedChoice = choiceElms[numPressed];
  const correctChoice = choiceElms[correctNum];
  correctChoice.style.color = "#0f0";
  inputEnabled = false;
  if (numPressed === correctNum) {
    // 正解
    quizesCorrect += 1;
    correctChoice.textContent += " ⭕️";
  } else {
    // 不正解
    quizesIncorrect += 1;
    mistookWordsList.push({ str: wordStr, meaning: wordMeaning });
    selectedChoice.style.color = "#f00";
    selectedChoice.textContent += " ❌";
  }
  // タイピングに移動
  setTimeout(newWord, 1000);
};
// スタート画面遷移
const startScene = () => {
  startElm.style.display = "";
  mainElm.style.display = "none";
  endElm.style.display = "none";
};
// ゲーム画面遷移
const mainScene = () => {
  startElm.style.display = "none";
  mainElm.style.display = "";
  endElm.style.display = "none";
  incorrectElm.textContent = "";
  keysTypedNum = 0;
  keysMistypedList = {};
  quizesCorrect = 0;
  quizesIncorrect = 0;
  mistookWordsList = [];
  initialTime = parseInt(timeInputElm.value);
  timeLeft = initialTime;
  const timer = () => {
    if (!inputEnabled) return;
    timeLeft -= 0.01;
    timerElm.textContent = `残り時間：${Math.round(timeLeft * 100) / 100}秒`;
    if (timeLeft <= 10) timerElm.style.color = "#f00";
    else timerElm.style.color = "#000";
    if (timeLeft <= 0) {
      clearInterval(timerId);
      endScene();
    }
  };
  timerId = setInterval(timer, 10);
  newWord();
};
// 終了画面遷移
const endScene = () => {
  startElm.style.display = "none";
  mainElm.style.display = "none";
  endElm.style.display = "";
  resultElm.innerHTML = `
  <br>制限時間：${initialTime}秒</br>
  <br>正しく打てた文字数：${keysTypedNum}</br>
  <br>ミスタイプ数：${Object.values(keysMistypedList).reduce(
    (sum, num) => sum + num,
    0
  )}</br>
  <br>1文字あたり時間：${Math.round((30 / keysTypedNum) * 100) / 100}秒</br>
  <br>苦手なキー：${Object.keys(keysMistypedList).reduce(
    (key1, key2) =>
      keysMistypedList[key1] > keysMistypedList[key2] ? key1 : key2,
    "なし"
  )}</br>
  <br>クイズ正解数：${quizesCorrect}</br>
  <br>クイズ不正解数：${quizesIncorrect}</br>
  <br>間違えた語彙：</br>
  <table>
      ${mistookWordsList
        .map((word) => `<tr><td>${word.str}</td><td>${word.meaning}</td></tr>`)
        .join("")}
  </table>
  `;
};
// メイン処理
startScene();
document.addEventListener("keydown", (e) => {
  if (!inputEnabled) return;
  let keyPressed = e.key;
  incorrectElm.textContent = "";
  if (scene === "typing") {
    // タイピング
    if (keyPressed === chars[i]) {
      // タイピング正解
      keysTypedNum += 1;
      typedElm.textContent = chars
        .slice(0, i + 1)
        .join("")
        .replaceAll(" ", "_");
      notTypedElm.textContent = chars
        .slice(i + 1)
        .join("")
        .replaceAll(" ", "_");
      i++;
      // 単語の意味クイズに移動
      if (i === chars.length) {
        choicesWrapperElm.style.display = "";
        let sameCategoryWords = words.filter(
          (word) => word.category === wordObj.category && word.eng !== wordStr
        );
        let indexForChoices = [];
        for (let i = 0; i < choiceElms.length; i++) {
          let choiceText;
          if (i === correctNum) {
            // 正解選択肢
            choiceText = wordMeaning;
          } else {
            // 不正解選択肢
            while (true) {
              const randIndex = rand(0, sameCategoryWords.length - 1);
              if (!indexForChoices.includes(randIndex)) {
                indexForChoices.push(randIndex);
                choiceText = sameCategoryWords[randIndex].jpn;
                break;
              }
            }
          }
          choiceElms[i].textContent = `${i}. ${choiceText}`;
        }
        scene = "quiz";
      }
    } else {
      // タイピング不正解
      keysMistypedList[chars[i]] = keysMistypedList[chars[i]] + 1 || 1;
      incorrectElm.textContent = `❌  ${keyPressed}`;
    }
  } else if ((scene = "quiz")) quiz(keyPressed);
});
// 選択肢クリックで解答
for (let i = 0; i < choiceElms.length; i++) {
  choiceElms[i].addEventListener("click", () => quiz(i));
}
