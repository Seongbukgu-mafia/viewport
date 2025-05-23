const players = [
  {
    name: "제이미 바디",
    nationality: "잉글랜드",
    position: "공격수",
    age: 38,
    height: 179,
    number: 9,
    video: "https://www.youtube.com/embed/HraAJx9DlDw"
  },
  {
    name: "해리 윙크스",
    nationality: "잉글랜드",
    position: "미드필더",
    age: 29,
    height: 178,
    number: 8,
    video: "https://youtube.com/embed/OBJ6mSCD734?si=J-_QUZ9FcQWayRIv"
  },
  {
    name: "윌프레드 은디디",
    nationality: "나이지리아",
    position: "미드필더",
    age: 28,
    height: 183,
    number: 6,
    video: "https://youtube.com/embed/bGKOlB-HZ1g?si=QzAejf4nY8N4tsFW"
  },
  {
  name: "제임스 저스틴",
  nationality: "잉글랜드",
  position: "수비수",
  age: 27,
  height: 183,
  number: 2,
  video:"https://youtube.com/embed/VnG_lJvwYV0?si=cqQF5XHI9qmUfuAC"
  },
  {
  name: "리카르도 페레이라",
  nationality: "포르투갈",
  position: "수비수",
  age: 31,
  height: 175,
  number: 21,
  video:"https://youtube.com/embed/J_GQHAdje5Y?si=wiXBKGYGh74DhwMn"
  },
  {
  name: "코너 코디",
  nationality: "잉글랜드",
  position: "수비수",
  age: 32,
  height: 186,
  number: 4,
  video:"https://youtube.com/embed/shAuhLwz_gQ?si=IHDm_nL75lsUEmYJ"
  },
  {
  name: "부바카리 수마레",
  nationality: "프랑스",
  position: "미드필더",
  age: 26,
  height: 188,
  number: 24,
  video:"https://www.youtube.com/embed/FQdMtHRa2rs"
  },
  {
  name: "빌랄 엘 카누스",
  nationality: "모로코",
  position: "미드필더",
  age: 21,
  height: 180,
  number: 11,
  video:"https://youtube.com/embed/G_Evf4o2a8c?si=gRU4AoYb7Wlna7Hw"
  },
  {
  name: "압둘 파타우 이사하쿠",
  nationality: "가나",
  position: "공격수",
  age: 21,
  height: 177,
  number: 7,
  video:"https://youtube.com/embed/KshQVwuQ2kQ?si=tpnvrXkzH0IDr8Jj"
  },
  {
  name: "마비디디",
  nationality: "잉글랜드",
  position: "공격수",
  age: 26,
  height: 180,
  number: 10,
  video:"https://youtube.com/embed/gbxH9UHqM70?si=vwfF6tqw_KLDlGGq"
  },
  {
  name: "마스 헤르만센",
  nationality: "덴마크",
  position: "골키퍼",
  age: 24,
  height: 187,
  number: 30,
  video:"https://youtube.com/embed/7nHGUXIqwmY?si=gusijjKoJFgJ3grc"
  },
  {
  name: "케이시 맥아티어",
  nationality: "아일랜드",
  position: "공격수",
  age: 23,
  height:179,
  number: 35,
  video:"https://youtube.com/embed/7HRdgS6OZpk?si=FH34-kO3uqbgz45-"
  },
  {
  name: "팻슨 다카",
  nationality: "잠비아",
  position: "공격수",
  age: 25,
  height: 183,
  number: 20,
  video:"https://youtube.com/embed/i-E6V5FnD8g?si=nhSJ1nreQm3eyf_k"
  },
  {
  name: "조르당 아이유",
  nationality: "가나",
  position: "공격수",
  age: 33,
  height: 182,
  number: 18,
  video:"https://youtube.com/embed/GULpHkk3PIk?si=N-RSc6Rlnw8piLX8"
  },
  {
  name: "올리버 스킵",
  nationality: "잉글랜드",
  position: "미드필더",
  age: 24,
  height: 185,
  number: 22,
  video:"https://youtube.com/embed/cvFbqtOknXQ?si=hKN1axyrpCq-yjMI"
  },
  {
  name: "빅토르 크리스티안센",
  nationality: "덴마크",
  position: "수비수",
  age: 22,
  height: 181,
  number: 16,
  video:"https://youtube.com/embed/EFcepEyhQGk?si=XCRX-fcMhMek8OVT"
  },
  {
  name: "루크 토마스",
  nationality: "잉글랜드",
  position: "수비수",
  age: 23,
  height: 181,
  number: 33,
  video:"https://youtube.com/embed/RjWvqvjAQAY?si=WeIR0rRiOoNUErG6"
  },
  {
  name: "바우트 파스",
  nationality: "벨기에",
  position: "수비수",
  age: 27,
  height: 187,
  number: 3,
  video:"https://youtube.com/embed/aJwQRMAW8Ss?si=dpCixsHtFtLQ7jUf"
  },
  {
  name: "야닉 베스터고르",
  nationality: "덴마크",
  position: "수비수",
  age: 32,
  height: 199,
  number: 23,
  video:"https://youtube.com/embed/tw0QwGPdhpE?si=rwT0-F1KjONGhiYK"
  },
  {
  name: "야쿠프 스톨라르치크",
  nationality: "폴란드",
  position: "골키퍼",
  age: 24,
  height: 194,
  number: 41,
  video:"https://youtube.com/embed/f8KcjiaIIg0?si=eGQuasCebRN7mHi5"
  }
  ];

  document.addEventListener("DOMContentLoaded", () => {
    let answer = players[Math.floor(Math.random() * players.length)];
    let attemptsLeft = 4;
  
    const input = document.getElementById("guess-input");
    const button = document.getElementById("submit-button");
    const resetBtn = document.getElementById("reset-button");
    const resultBox = document.getElementById("result-box");
    const startBtn = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const mainGame = document.querySelector(".main-game");
    const logList = document.getElementById("log-list");
  
    startBtn.addEventListener("click", () => {
      startScreen.style.display = "none";
      mainGame.style.display = "flex";
      input.focus();
    });
  
    function checkAnswer() {
      resultBox.innerHTML = '';
      const guess = input.value.trim();
      const player = players.find(p => p.name === guess);
      const logItem = document.createElement("li");
  
      if (!player) {
        const errorMsg = document.createElement("p");
        errorMsg.className = "hint-row";
        errorMsg.textContent = "존재하지 않는 선수입니다. 이름을 확인하세요.";
        resultBox.appendChild(errorMsg);
        logItem.textContent = `${guess} - 존재하지 않는 선수`;
        logList.appendChild(logItem);
        return;
      }
  
      const container = document.createElement("div");
      container.className = "hint-block";
  
      const nationHint = player.nationality === answer.nationality ? '✔' : '✖';
      const positionHint = player.position === answer.position ? '✔' : '✖';
      const ageHintSymbol = player.age === answer.age ? '✔' : player.age > answer.age ? '▼' : '▲';
      const heightHintSymbol = player.height === answer.height ? '✔' : player.height > answer.height ? '▼' : '▲';
      const numberHintSymbol = player.number === answer.number ? '✔' : player.number > answer.number ? '▼' : '▲';
  
      const ageHint = `${player.age}${ageHintSymbol}`;
      const heightHint = `${player.height}${heightHintSymbol}`;
      const numberHint = `${player.number}${numberHintSymbol}`;
  
      logItem.innerHTML = `${player.name} - 국적: ${nationHint}, 포지션: ${positionHint}, 나이: ${ageHint}, 키: ${heightHint}, 등번호: ${numberHint}`;
      logList.appendChild(logItem);
  
      if (player.name === answer.name) {
        container.innerHTML = `<p class="hint-row match">🎉 정답입니다! ${answer.name}!</p>`;
        const iframe = document.createElement("iframe");
        iframe.width = "100%";
        iframe.height = "350";
        iframe.src = `${player.video}?autoplay=1&mute=1`;
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
        resultBox.appendChild(container);
        input.disabled = true;
        button.disabled = true;
        resetBtn.style.display = 'block';
        return;
      }
  
      attemptsLeft--;
      const hintHTML = [];
      hintHTML.push(`<div class="hint-row">⏱ ${4 - attemptsLeft}번째 시도 - ${player.name}</div>`);
      hintHTML.push(`<div class="hint-row">국적: <span class="${player.nationality === answer.nationality ? 'match' : ''}">${player.nationality}</span> ${player.nationality === answer.nationality ? '(일치)' : '(불일치)'}</div>`);
      hintHTML.push(`<div class="hint-row">포지션: <span class="${player.position === answer.position ? 'match' : ''}">${player.position}</span> ${player.position === answer.position ? '(일치)' : '(불일치)'}</div>`);
      hintHTML.push(`<div class="hint-row">나이: <span class="${player.age === answer.age ? 'match' : player.age > answer.age ? 'down' : 'up'}">${player.age}</span> ${ageHintSymbol}</div>`);
      hintHTML.push(`<div class="hint-row">키: <span class="${player.height === answer.height ? 'match' : player.height > answer.height ? 'down' : 'up'}">${player.height}cm</span> ${heightHintSymbol}</div>`);
      hintHTML.push(`<div class="hint-row">등번호: <span class="${player.number === answer.number ? 'match' : player.number > answer.number ? 'down' : 'up'}">${player.number}</span> ${numberHintSymbol}</div>`);
  
      container.innerHTML += hintHTML.join('');
      resultBox.appendChild(container);
      input.value = "";
  
      if (attemptsLeft === 0) {
        input.disabled = true;
        button.disabled = true;
        resetBtn.style.display = 'block';
        const finalWrap = document.createElement("div");
        finalWrap.className = "final-box";
        finalWrap.innerHTML = `
          <h2>💥 GAME OVER 💥</h2>
          <p>정답은 <strong>${answer.name}</strong>였습니다!</p>
        `;
        resultBox.prepend(finalWrap);
      }
    }
  
    button.addEventListener("click", checkAnswer);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkAnswer();
      }
    });
  
    resetBtn.addEventListener("click", () => {
      answer = players[Math.floor(Math.random() * players.length)];
      attemptsLeft = 4;
      resultBox.innerHTML = '';
      input.value = '';
      input.disabled = false;
      button.disabled = false;
      resetBtn.style.display = 'none';
      logList.innerHTML = '';
      input.focus();
    });
  });
  