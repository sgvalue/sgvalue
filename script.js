// 진단 질문 데이터 (1~10번 선택형)
const QUESTIONS = [
  {
    id: 1,
    question: "조직에서 새로운 프로젝트를 시작할 때 나는?",
    choices: [
      { text: "(A) 이전에 없던 새로운 방법을 시도해보고 싶다", score: { 창의형: 1 } },
      { text: "(B) 성과를 낼 수 있는 구체적인 계획을 세운다", score: { 추진형: 1 } }
    ]
  },
  {
    id: 2,
    question: "구성원과 협업 중 의견이 나뉘었을 때 나는?",
    choices: [
      { text: "(A) 모두가 동의할 수 있는 방법을 찾아본다", score: { 협업형: 1 } },
      { text: "(B) 어떤 방법이 더 효과적인지 논리적으로 따져본다", score: { 분석형: 1 } }
    ]
  },
  {
    id: 3,
    question: "맡은 일을 잘해내는 나만의 방식은?",
    choices: [
      { text: "(A) 실수가 없도록 꼼꼼히 검토하는 것", score: { 분석형: 1 } },
      { text: "(B) 남들이 생각하지 못한 방식으로 접근하는 것", score: { 창의형: 1 } }
    ]
  },
  {
    id: 4,
    question: "구성원들과 함께 일할 때 가장 중요한 것은?",
    choices: [
      { text: "(A) 목표를 명확히 하고 함께 달성하는 것", score: { 추진형: 1 } },
      { text: "(B) 서로 편하게 이야기하며 신뢰를 쌓는 것", score: { 사교형: 1 } }
    ]
  },
  {
    id: 5,
    question: "업무 중 문제가 생겼을 때 나의 첫 번째 반응은?",
    choices: [
      { text: "(A) 정확한 원인을 찾아 분석해본다", score: { 분석형: 1 } },
      { text: "(B) 다른 시선으로 문제를 새롭게 바라본다", score: { 창의형: 1 } }
    ]
  },
  {
    id: 6,
    question: "협업하기에 조직 분위기가 좋지 않을 때 나는?",
    choices: [
      { text: "(A) 팀 전체가 다시 뭉칠 수 있도록 행동한다", score: { 협업형: 1 } },
      { text: "(B) 가까운 동료들과 대화하며 분위기를 풀어본다", score: { 사교형: 1 } }
    ]
  },
  {
    id: 7,
    question: "중요한 결정을 내려야 할 때 나는?",
    choices: [
      { text: "(A) 빠르게 판단하고 실행에 옮긴다", score: { 추진형: 1 } },
      { text: "(B) 충분한 정보와 의견을 수집해 신중히 결정한다", score: { 분석형: 1 } }
    ]
  },
  {
    id: 8,
    question: "내가 업무를 효율적으로 하기 위해 하는 방식은?",
    choices: [
      { text: "(A) 동료들과 자주 소통하며 함께 조율한다", score: { 사교형: 1 } },
      { text: "(B) 모든 팀원이 동참할 수 있도록 설계한다", score: { 협업형: 1 } }
    ]
  },
  {
    id: 9,
    question: "새로운 업무를 맡게 되었을 때 나는?",
    choices: [
      { text: "(A) 기존 방식보다 더 효과적인 새로운 방식을 찾는다", score: { 창의형: 1 } },
      { text: "(B) 실현 가능한 목표를 정하고 실행 계획부터 세운다", score: { 추진형: 1 } }
    ]
  },
  {
    id: 10,
    question: "팀의 성과를 높이기 위해 내가 중요하게 여기는 것은?",
    choices: [
      { text: "(A) 팀원 모두의 의견을 듣고 조율해가는 과정", score: { 협업형: 1 } },
      { text: "(B) 팀원들과 소통하며 유대감을 높이는 것", score: { 사교형: 1 } }
    ]
  }
];

// 캐릭터 데이터
const CHARACTERS = {
  창의형: {
    name: "🧙‍♂️ 창의형",
    image: "attached_assets/1.%20창의형%20마법사_1751530976675.JPG",
    description: "새로운 아이디어와 지식에 대한 끝없는 탐구심을 가진 당신은 미지의 마법을 배우고 새로운 해결책을 찾아내는 마법사나 고대 지식을 탐구하는 현자와 같습니다. 당신은 조직에서 변화를 두려워하지 않고 창의적인 방식으로 업무에 접근하며, 항상 새로운 시도를 하는군요!"
  },
  사교형: {
    name: "⚔️ 사교형",
    image: "attached_assets/2.%20사교형%20팔라딘_1751530976676.JPG",
    description: "맡은 바 임무를 철저히 수행하고, 약속과 기한을 중요하게 여기는 당신은 성스러운 맹세를 지키는 팔라딘과 닮았습니다. 당신은 조직에서 꾸준한 노력과 철저한 준비로 팀의 든든한 버팀목이 되며, 어떤 업무든 당신에게 맡기면 안심할 수 있겠네요!"
  },
  추진형: {
    name: "⚡ 추진형",
    image: "attached_assets/3.%20추진형%20버서커_1751530976676.JPG",
    description: "사람들과의 교류를 즐기고 에너지가 넘치는 당신은 동료들을 이끌고 전장에서 용맹하게 앞장서는 버서커와 같습니다. 당신은 조직에서 활발한 소통으로 팀 분위기를 밝게 만들고, 사람들을 하나로 모으는 능력으로 긍정적인 영향을 미치고 있어요!"
  },
  협업형: {
    name: "💚 협업형",
    image: "attached_assets/4.%20협업형%20힐러_1751530976676.JPG",
    description: "타인의 감정에 공감하고 배려심이 깊은 당신은 아픈 동료를 치유하고 정신적으로 지지해주는 힐러와 같습니다. 당신은 조직에서 갈등을 중재하고 조화로운 관계를 만들며, 따뜻한 마음으로 주변 사람들을 보살피고 있네요! 당신 덕분에 조직의 분위기가 항상 온화하답니다."
  },
  분석형: {
    name: "🗡️ 분석형",
    image: "attached_assets/5.%20분석형%20어쌔신_1751530976676.JPG",
    description: "섬세하고 예민하여 주변 환경에 민감하게 반응하는 당신은 위험을 감지하고 신중하게 움직이는 어쌔신과 유사합니다. 당신은 조직에서 주변을 면밀히 살피고 잠재적인 위험을 감지하고 있어요. 높은 통찰력으로 상황을 분석하고 전략적인 움직임으로 목표를 달성하는군요!"
  }
};

// 전역 변수
let currentQuestionIndex = 0;
let scores = { 창의형: 0, 사교형: 0, 추진형: 0, 협업형: 0, 분석형: 0 };
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

  totalSteps.textContent = 10; // 10개 객관식만
}

function startDiagnosis() {
  mainScreen.classList.add('hidden');
  diagnosisScreen.classList.remove('hidden');
  currentQuestionIndex = 0;
  scores = { 창의형: 0, 사교형: 0, 추진형: 0, 협업형: 0, 분석형: 0 };
  showQuestion();
}

function showQuestion() {
  // 1~8번 객관식 질문 처리
  if (currentQuestionIndex >= QUESTIONS.length) {
    completeDiagnosis();
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

  // 10번째 질문인지 확인
  if (currentQuestionIndex === QUESTIONS.length - 1) {
    // 10번째 질문에서는 캐릭터 확인하기 버튼 표시
    nextBtn.classList.add('hidden');
    completeBtn.classList.remove('hidden');
  } else {
    // 1~9번에서는 다음 버튼만 표시
    nextBtn.classList.remove('hidden');
    completeBtn.classList.add('hidden');
  }
}

function nextQuestion() {
  if (selectedChoice) {
    // 점수 적용
    Object.keys(selectedChoice.score).forEach(trait => {
      scores[trait] += selectedChoice.score[trait];
    });

    currentQuestionIndex++;

    // 10번 완료 후 바로 진단 완료
    if (currentQuestionIndex >= QUESTIONS.length) {
      completeDiagnosis();
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
  diagnosisScreen.classList.add('hidden');
  matchingScreen.classList.remove('hidden');

  // 2초 후 결과 표시
  setTimeout(() => {
    showResult();
  }, 2000);
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
  scores = { 창의형: 0, 사교형: 0, 추진형: 0, 협업형: 0, 분석형: 0 };
  selectedChoice = null;

  // 모든 버튼 숨기기
  nextBtn.classList.add('hidden');
  completeBtn.classList.add('hidden');
  restartBtn.classList.add('hidden');
}

function handleModalClick(event) {
  if (event.target === resultModal || event.target.classList.contains('modal-backdrop')) {
    closeResultModal();
  }
}

function updateProgress() {
  const currentStepNumber = currentQuestionIndex + 1;
  const progress = (currentStepNumber / 10) * 100;
  progressFill.style.width = `${progress}%`;
  currentStep.textContent = currentStepNumber;
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !resultModal.classList.contains('hidden')) {
    closeResultModal();
  }
});
