// 진단 질문 데이터 (1~8번 선택형)
const QUESTIONS = [
  {
    id: 1,
    question: "새로운 게임 프로젝트 기획 회의 중<br>당신은 어떤 말을 더 자주 하나요?",
    choices: [
      { text: "(A) 이거 정말 대박 아이디어 같아요! 이대로 만들면 엄청 재미있을 거예요!", score: { 개방성: 1 } },
      { text: "(B) 기존 성공작들의 데이터를 분석해보니, 개선점이 좀 있네요.", score: { 섬세함: 1 } }
    ]
  },
  {
    id: 2,
    question: "게임 출시일이 임박했을 때 당신이라면?",
    choices: [
      { text: "(A) 출시 전 마지막 빌드 점검! 버그 하나 놓치지 않고 완벽하게 확인해야지.", score: { 성실성: 1 } },
      { text: "(B) 막판까지 최적화해야지! 출시 직전까지도 개선은 계속되어야 해.", score: { 개방성: 1 } }
    ]
  },
  {
    id: 3,
    question: "지스타 같은 대규모 행사의 담당자가 되었다! 당신이라면?",
    choices: [
      { text: "(A) 저희 부스에 놀러 오세요! 제가 직접 시연 보여드릴게요!", score: { 외향성: 1 } },
      { text: "(B) 방문한 유저들을 조용히 도와주고 설명해주는 게 좋아.", score: { 친화성: 1 } }
    ]
  },
  {
    id: 4,
    question: "의견 충돌이 생겼을 때 당신의 평소 반응은?",
    choices: [
      { text: "(A) 서로 조금씩 양보해서 좀 더 이야기 해보시죠.", score: { 친화성: 1 } },
      { text: "(B) 제 아이디어 괜찮아요. 저를 한 번 믿어보시죠!", score: { 외향성: 1 } }
    ]
  },
  {
    id: 5,
    question: "게임 서비스 중 예상치 못한 치명적인 오류가 발생했다!?",
    choices: [
      { text: "(A) 당장 패치해야 해! 유저들 항의가 쇄도하겠네!ㅠㅠ", score: { 섬세함: 1 } },
      { text: "(B) 침착해.. 원인을 분석하고 빠르게 해결책을 찾아보자!ㅠㅠ", score: { 성실성: 1 } }
    ]
  },
  {
    id: 6,
    question: "신작 게임을 플레이할 때 당신은?",
    choices: [
      { text: "(A) 일단 해보자. 죽으면서 배우는 거야!", score: { 개방성: 1 } },
      { text: "(B) 튜토리얼부터 철저히 파악하고, 공략집도 찾아보자.", score: { 성실성: 1 } }
    ]
  },
  {
    id: 7,
    question: "게임 유저 커뮤니티나 포럼을 탐색할 때 당신은?",
    choices: [
      { text: "(A) 어떤 이야기가 오가는지 항상 궁금해! 모든 글이 다 정보지.", score: { 개방성: 1 } },
      { text: "(B) 너무 정신없어..중요한 내용만 우선 골라서 보자.", score: { 섬세함: 1 } }
    ]
  },
  {
    id: 8,
    question: "퇴근 후 당신은 주로?",
    choices: [
      { text: "(A) 친구들이랑 게임 서버에서 만나기로 했어!", score: { 친화성: 1 } },
      { text: "(B) 저녁 약속에, 할 일이 너무 많아. 바쁘다 바뻐!", score: { 외향성: 1 } }
    ]
  }
];

// 캐릭터 데이터
const CHARACTERS = {
  개방성: {
    name: "🧙‍♂️ 마법사",
    image: "attached_assets/1.%20개방성%20마법사_1751530976675.JPG",
    description: "새로운 아이디어와 지식에 대한 끝없는 탐구심을 가진 당신은 미지의 마법을 배우고 새로운 해결책을 찾아내는 마법사나 고대 지식을 탐구하는 현자와 같습니다. 당신은 조직에서 변화를 두려워하지 않고 창의적인 방식으로 업무에 접근하며, 항상 새로운 시도를 하는군요!"
  },
  성실성: {
    name: "⚔️ 팔라딘",
    image: "attached_assets/2.%20성실성%20팔라딘_1751530976676.JPG",
    description: "맡은 바 임무를 철저히 수행하고, 약속과 기한을 중요하게 여기는 당신은 성스러운 맹세를 지키는 팔라딘과 닮았습니다. 당신은 조직에서 꾸준한 노력과 철저한 준비로 팀의 든든한 버팀목이 되며, 어떤 업무든 당신에게 맡기면 안심할 수 있겠네요!"
  },
  외향성: {
    name: "⚡ 버서커",
    image: "attached_assets/3.%20외향성%20버서커_1751530976676.JPG",
    description: "사람들과의 교류를 즐기고 에너지가 넘치는 당신은 동료들을 이끌고 전장에서 용맹하게 앞장서는 버서커와 같습니다. 당신은 조직에서 활발한 소통으로 팀 분위기를 밝게 만들고, 사람들을 하나로 모으는 능력으로 긍정적인 영향을 미치고 있어요!"
  },
  친화성: {
    name: "💚 힐러",
    image: "attached_assets/4.%20친화성%20힐러_1751530976676.JPG",
    description: "타인의 감정에 공감하고 배려심이 깊은 당신은 아픈 동료를 치유하고 정신적으로 지지해주는 힐러와 같습니다. 당신은 조직에서 갈등을 중재하고 조화로운 관계를 만들며, 따뜻한 마음으로 주변 사람들을 보살피고 있네요! 당신 덕분에 조직의 분위기가 항상 온화하답니다."
  },
  섬세함: {
    name: "🗡️ 어쌔신",
    image: "attached_assets/5.%20섬세함%20어쌔신_1751530976676.JPG",
    description: "섬세하고 예민하여 주변 환경에 민감하게 반응하는 당신은 위험을 감지하고 신중하게 움직이는 어쌔신과 유사합니다. 당신은 조직에서 주변을 면밀히 살피고 잠재적인 위험을 감지하고 있어요. 높은 통찰력으로 상황을 분석하고 전략적인 움직임으로 목표를 달성하는군요!"
  }
};

// 전역 변수
let currentQuestionIndex = 0;
let scores = { 개방성: 0, 성실성: 0, 외향성: 0, 친화성: 0, 섬세함: 0 };
let selectedChoice = null;
let subjectiveAnswer = '';

// DOM 요소들
const mainScreen = document.getElementById('mainScreen');
const diagnosisScreen = document.getElementById('diagnosisScreen');
const matchingScreen = document.getElementById('matchingScreen');
const resultModal = document.getElementById('resultModal');
const startBtn = document.getElementById('startBtn');
const progressFill = document.getElementById('progressFill');
const currentStep = document.getElementById('currentStep');
const totalSteps = document.getElementById('totalSteps');
const questionTitle = document.getElementById('questionTitle');
const choicesContainer = document.getElementById('choicesContainer');
const subjectiveContainer = document.getElementById('subjectiveContainer');
const subjectiveInput = document.getElementById('subjectiveInput');
const charCount = document.getElementById('charCount');
const nextBtn = document.getElementById('nextBtn');
const completeBtn = document.getElementById('completeBtn');
const restartBtn = document.getElementById('restartBtn');
const closeModal = document.getElementById('closeModal');
const characterName = document.getElementById('characterName');
const characterDescription = document.getElementById('characterDescription');

// 이벤트 리스너
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  startBtn.addEventListener('click', startDiagnosis);
  nextBtn.addEventListener('click', nextQuestion);
  completeBtn.addEventListener('click', completeDiagnosis);
  restartBtn.addEventListener('click', restartDiagnosis);
  closeModal.addEventListener('click', closeResultModal);
  resultModal.addEventListener('click', handleModalClick);
  subjectiveInput.addEventListener('input', handleSubjectiveInput);

  totalSteps.textContent = 9; // 8개 객관식 + 1개 주관식
}

function startDiagnosis() {
  mainScreen.classList.add('hidden');
  diagnosisScreen.classList.remove('hidden');
  currentQuestionIndex = 0;
  scores = { 개방성: 0, 성실성: 0, 외향성: 0, 친화성: 0, 섬세함: 0 };
  showQuestion();
}

function showQuestion() {
  // 1~8번 객관식 질문 처리
  if (currentQuestionIndex >= QUESTIONS.length) {
    showSubjectiveQuestion();
    return;
  }

  const question = QUESTIONS[currentQuestionIndex];
  questionTitle.innerHTML = question.question;

  // 선택형 질문 표시
  choicesContainer.innerHTML = '';
  choicesContainer.classList.remove('hidden');

  // 주관식 완전히 숨기기
  subjectiveContainer.classList.add('hidden');

  // 1~8번에는 다음 버튼만 (숨김 상태)
  nextBtn.classList.add('hidden');
  completeBtn.classList.add('hidden');

  // 선택지 생성
  question.choices.forEach((choice, index) => {
    const choiceBtn = document.createElement('button');
    choiceBtn.className = 'choice-btn';
    choiceBtn.textContent = choice.text;
    choiceBtn.addEventListener('click', () => selectChoice(index, choice));
    choicesContainer.appendChild(choiceBtn);
  });

  selectedChoice = null;
  updateProgress();
}

function selectChoice(index, choice) {
  // 이전 선택 해제
  document.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('selected'));

  // 현재 선택 표시
  document.querySelectorAll('.choice-btn')[index].classList.add('selected');

  selectedChoice = choice;

  // 1~8번에서는 다음 버튼만 표시
  nextBtn.classList.remove('hidden');
  completeBtn.classList.add('hidden');
}

function nextQuestion() {
  if (selectedChoice) {
    // 점수 적용
    Object.keys(selectedChoice.score).forEach(trait => {
      scores[trait] += selectedChoice.score[trait];
    });

    currentQuestionIndex++;

    // 8번 완료 후 9번 주관식으로 이동
    if (currentQuestionIndex >= QUESTIONS.length) {
      showSubjectiveQuestion();
    } else {
      showQuestion();
    }
  }
}

function showSubjectiveQuestion() {
  // 9번째 주관식 질문
  questionTitle.innerHTML = "우리 조직의 방향성을 생각할 때<br>여러분 업무의 목표와 역할은 무엇인가요?<br>상세하게 적어주세요!";

  // 선택형 질문 완전히 숨기기
  choicesContainer.classList.add('hidden');
  choicesContainer.innerHTML = '';

  // 주관식 박스 보이기
  subjectiveContainer.classList.remove('hidden');

  // 9번에는 캐릭터 확인하기 버튼만
  nextBtn.classList.add('hidden');
  completeBtn.classList.remove('hidden');

  // 버튼 상태 업데이트
  updateCompleteButton();
  updateProgress();
}

function handleSubjectiveInput() {
  subjectiveAnswer = subjectiveInput.value;
  updateCharCount();
  updateCompleteButton();
}

function updateCharCount() {
  charCount.textContent = subjectiveAnswer.length;
  charCount.style.color = subjectiveAnswer.length >= 20 ? '#48bb78' : '#e53e3e';
}

function updateCompleteButton() {
  if (subjectiveAnswer.length >= 20) {
    completeBtn.disabled = false;
  } else {
    completeBtn.disabled = true;
  }
}

function completeDiagnosis() {
  if (subjectiveAnswer.length >= 20) {
    diagnosisScreen.classList.add('hidden');
    matchingScreen.classList.remove('hidden');

    // 2초 후 결과 표시
    setTimeout(() => {
      showResult();
    }, 2000);
  }
}

function showResult() {
  matchingScreen.classList.add('hidden');
  diagnosisScreen.classList.remove('hidden');

  // 가장 높은 점수의 성향 찾기
  const maxScore = Math.max(...Object.values(scores));
  const topTraits = Object.keys(scores).filter(trait => scores[trait] === maxScore);

  // 동점일 경우 일관성 있는 랜덤 선택
  let selectedTrait;
  if (topTraits.length === 1) {
    selectedTrait = topTraits[0];
  } else {
    // 점수 조합으로 시드 생성 (동일한 점수 조합은 동일한 결과)
    const scoreString = Object.values(scores).join(',');
    const seed = scoreString.split('').reduce((acc, char, index) => {
      return acc + char.charCodeAt(0) * (index + 1);
    }, 0);

    // 시드 기반 랜덤 선택
    const selectedIndex = seed % topTraits.length;
    selectedTrait = topTraits[selectedIndex];
  }

  const character = CHARACTERS[selectedTrait];

  characterName.textContent = '';
  characterDescription.innerHTML = `
    <img src="${character.image}" alt="${character.name}" class="character-image" />
  `;

  resultModal.classList.remove('hidden');
}

function closeResultModal() {
  resultModal.classList.add('hidden');
  // 팝업을 닫으면 처음부터 다시하기 버튼 표시
  restartBtn.classList.remove('hidden');
}

function restartDiagnosis() {
  // 모든 화면 숨기기
  diagnosisScreen.classList.add('hidden');
  matchingScreen.classList.add('hidden');
  resultModal.classList.add('hidden');

  // 메인 화면으로 돌아가기
  mainScreen.classList.remove('hidden');

  // 모든 상태 초기화
  currentQuestionIndex = 0;
  scores = { 개방성: 0, 성실성: 0, 외향성: 0, 친화성: 0, 섬세함: 0 };
  selectedChoice = null;
  subjectiveAnswer = '';

  // 모든 버튼 숨기기
  nextBtn.classList.add('hidden');
  completeBtn.classList.add('hidden');
  restartBtn.classList.add('hidden');

  // 주관식 입력 초기화
  subjectiveInput.value = '';
  charCount.textContent = '0';
}

function handleModalClick(event) {
  if (event.target === resultModal || event.target.classList.contains('modal-backdrop')) {
    closeResultModal();
  }
}

function updateProgress() {
  let currentStepNumber;
  if (currentQuestionIndex < QUESTIONS.length) {
    // 1~8번 객관식 질문
    currentStepNumber = currentQuestionIndex + 1;
  } else {
    // 9번 주관식 질문
    currentStepNumber = 9;
  }

  const progress = (currentStepNumber / 9) * 100;
  progressFill.style.width = `${progress}%`;
  currentStep.textContent = currentStepNumber;
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !resultModal.classList.contains('hidden')) {
    closeResultModal();
  }
});