
// 전역 상태 관리 객체
const AppState = {
  userVision: '', // 사용자 입력 텍스트를 저장하는 전역 상태
  
  // 상태 업데이트 함수
  setUserVision(vision) {
    this.userVision = vision;
  },
  
  // 상태 조회 함수  
  getUserVision() {
    return this.userVision;
  }
};

// 랜덤 퍼센트 생성 함수
function getRandomPercentage() {
  const percentages = [90, 95, 100];
  return percentages[Math.floor(Math.random() * percentages.length)];
}

// 랜덤 추가 속성 생성 함수
function getRandomAdditionalAttribute() {
  const attributes = [
    {
      icon: "🔥",
      name: "열정",
      description: "강력한 동기부여와 에너지로 팀 전체의 분위기를 끌어올림"
    },
    {
      icon: "🎯",
      name: "사명감",
      description: "조직의 목표 달성을 위한 확고한 신념과 책임감으로 성과 창출"
    }
  ];
  return attributes[Math.floor(Math.random() * attributes.length)];
}

// RPG 직업군 캐릭터 데이터 배열 (5개의 캐릭터)
const CHARACTERS = [
  {
    name: "⚔️ 전사 (Warrior)",
    description: `
      <strong>직업 특성:</strong> 최전선에서 조직을 수호하는 강력한 방패<br><br>
      
      <strong>스킬:</strong><br>
      • 위기 관리 마스터리 (Crisis Management Mastery)<br>
      • 팀 보호 오라 (Team Protection Aura)<br>
      • 책임감 버프 (Responsibility Buff)<br><br>
      
      <strong>조직 기여도:</strong><br>
      🗣️ <strong>소통력 +{communicationPercent}%:</strong> '이해'를 목적으로 다양한 범위에서 협업할 수 있도록 온라인/오프라인을 망라하여 상호 간 생각하는 바를 명확히 표현<br>
      🤝 <strong>공유력 +{sharingPercent}%:</strong> '이해'를 목적으로, 시간과 거리의 한계를 넘어 협업의 범위를 확장시키고, 지속적인 Know-how 공유 차원에서 Material을 주고 받음<br>
      {additionalIcon} <strong>{additionalName} +{additionalPercent}%:</strong> {additionalDescription}
    `
  },
  {
    name: "🧙‍♂️ 마법사 (Mage)", 
    description: `
      <strong>직업 특성:</strong> 창의적 마법으로 불가능을 가능하게 만드는 혁신자<br><br>
      
      <strong>스킬:</strong><br>
      • 창조 마법 (Creation Magic)<br>
      • 혁신 주문 (Innovation Spell)<br>
      • 미래 예측술 (Future Sight)<br><br>
      
      <strong>조직 기여도:</strong><br>
      🗣️ <strong>소통력 +{communicationPercent}%:</strong> '이해'를 목적으로 다양한 범위에서 협업할 수 있도록 온라인/오프라인을 망라하여 상호 간 생각하는 바를 명확히 표현<br>
      🤝 <strong>공유력 +{sharingPercent}%:</strong> '이해'를 목적으로, 시간과 거리의 한계를 넘어 협업의 범위를 확장시키고, 지속적인 Know-how 공유 차원에서 Material을 주고 받음<br>
      {additionalIcon} <strong>{additionalName} +{additionalPercent}%:</strong> {additionalDescription}
    `
  },
  {
    name: "🏹 궁수 (Archer)",
    description: `
      <strong>직업 특성:</strong> 정확한 소통으로 모든 이를 하나로 연결하는 중재자<br><br>
      
      <strong>스킬:</strong><br>
      • 정밀 소통술 (Precision Communication)<br>
      • 갈등 해결 화살 (Conflict Resolution Arrow)<br>
      • 팀워크 강화 사격 (Teamwork Enhancement Shot)<br><br>
      
      <strong>조직 기여도:</strong><br>
      🗣️ <strong>소통력 +{communicationPercent}%:</strong> '이해'를 목적으로 다양한 범위에서 협업할 수 있도록 온라인/오프라인을 망라하여 상호 간 생각하는 바를 명확히 표현<br>
      🤝 <strong>공유력 +{sharingPercent}%:</strong> '이해'를 목적으로, 시간과 거리의 한계를 넘어 협업의 범위를 확장시키고, 지속적인 Know-how 공유 차원에서 Material을 주고 받음<br>
      {additionalIcon} <strong>{additionalName} +{additionalPercent}%:</strong> {additionalDescription}
    `
  },
  {
    name: "🔍 도적 (Rogue)",
    description: `
      <strong>직업 특성:</strong> 숨겨진 정보를 찾아내어 전략적 우위를 제공하는 정보 전문가<br><br>
      
      <strong>스킬:</strong><br>
      • 데이터 탐지술 (Data Detection)<br>
      • 분석 은신술 (Analysis Stealth)<br>
      • 치명적 인사이트 (Critical Insight)<br><br>
      
      <strong>조직 기여도:</strong><br>
      🗣️ <strong>소통력 +{communicationPercent}%:</strong> '이해'를 목적으로 다양한 범위에서 협업할 수 있도록 온라인/오프라인을 망라하여 상호 간 생각하는 바를 명확히 표현<br>
      🤝 <strong>공유력 +{sharingPercent}%:</strong> '이해'를 목적으로, 시간과 거리의 한계를 넘어 협업의 범위를 확장시키고, 지속적인 Know-how 공유 차원에서 Material을 주고 받음<br>
      {additionalIcon} <strong>{additionalName} +{additionalPercent}%:</strong> {additionalDescription}
    `
  },
  {
    name: "⚡ 광전사 (Berserker)",
    description: `
      <strong>직업 특성:</strong> 압도적인 실행력으로 모든 장애물을 돌파하는 추진 엔진<br><br>
      
      <strong>스킬:</strong><br>
      • 번개 실행술 (Lightning Execution)<br>
      • 열정 폭발 (Passion Burst)<br>
      • 불굴의 의지 (Indomitable Will)<br><br>
      
      <strong>조직 기여도:</strong><br>
      🗣️ <strong>소통력 +{communicationPercent}%:</strong> '이해'를 목적으로 다양한 범위에서 협업할 수 있도록 온라인/오프라인을 망라하여 상호 간 생각하는 바를 명확히 표현<br>
      🤝 <strong>공유력 +{sharingPercent}%:</strong> '이해'를 목적으로, 시간과 거리의 한계를 넘어 협업의 범위를 확장시키고, 지속적인 Know-how 공유 차원에서 Material을 주고 받음<br>
      {additionalIcon} <strong>{additionalName} +{additionalPercent}%:</strong> {additionalDescription}
    `
  }
];

// DOM 요소들
const visionInput = document.getElementById('visionInput');
const findClassBtn = document.getElementById('findClassBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const characterName = document.getElementById('characterName');
const characterDescription = document.getElementById('characterDescription');

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  // 입력창 변화 감지하여 전역 상태 업데이트
  visionInput.addEventListener('input', handleVisionInput);
  
  // 클래스 찾기 버튼 클릭 이벤트
  findClassBtn.addEventListener('click', handleFindClass);
  
  // 모달 닫기 이벤트들
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', handleModalClick);
  
  // ESC 키로 모달 닫기
  document.addEventListener('keydown', handleKeydown);
  
  console.log('앱이 초기화되었습니다.');
}

// 사용자 입력 처리 함수
function handleVisionInput(event) {
  const inputValue = event.target.value;
  AppState.setUserVision(inputValue);
  console.log('사용자 비전이 업데이트되었습니다:', AppState.getUserVision());
}

// 클래스 찾기 버튼 클릭 처리
function handleFindClass() {
  const userVision = AppState.getUserVision();
  
  // 입력값이 없는 경우 알림
  if (!userVision.trim()) {
    alert('먼저 조직 비전 달성을 위한 목표와 역할을 입력해주세요!');
    visionInput.focus();
    return;
  }
  
  // 랜덤 캐릭터 선택 및 팝업 표시
  const randomCharacter = getRandomCharacter();
  showCharacterModal(randomCharacter);
  
  console.log('선택된 캐릭터:', randomCharacter.name);
}

// 랜덤 캐릭터 선택 함수
function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
  const character = CHARACTERS[randomIndex];
  
  // 랜덤 퍼센트 생성
  const communicationPercent = getRandomPercentage();
  const sharingPercent = getRandomPercentage();
  const additionalPercent = getRandomPercentage();
  
  // 랜덤 추가 속성 선택
  const additionalAttribute = getRandomAdditionalAttribute();
  
  // 설명 문자열에 랜덤 값들을 적용
  const processedDescription = character.description
    .replace(/{communicationPercent}/g, communicationPercent)
    .replace(/{sharingPercent}/g, sharingPercent)
    .replace(/{additionalPercent}/g, additionalPercent)
    .replace(/{additionalIcon}/g, additionalAttribute.icon)
    .replace(/{additionalName}/g, additionalAttribute.name)
    .replace(/{additionalDescription}/g, additionalAttribute.description);
  
  return {
    ...character,
    description: processedDescription
  };
}

// 캐릭터 모달 표시 함수
function showCharacterModal(character) {
  characterName.textContent = character.name;
  characterDescription.innerHTML = character.description;
  
  
  
  // 모달 표시 (hidden 클래스 제거)
  modal.classList.remove('hidden');
  
  // 접근성을 위한 포커스 설정
  closeModalBtn.focus();
  
  // 스크롤 방지
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  modal.classList.add('hidden');
  
  // 스크롤 복원
  document.body.style.overflow = 'auto';
  
  // 버튼으로 포커스 복귀
  findClassBtn.focus();
  
  console.log('모달이 닫혔습니다. 입력된 텍스트는 유지됩니다.');
}

// 모달 배경 클릭 시 닫기
function handleModalClick(event) {
  // 모달 콘텐츠 영역 외부 클릭 시에만 닫기
  if (event.target === modal || event.target.classList.contains('modal-backdrop')) {
    closeModal();
  }
}

// 키보드 이벤트 처리 (ESC 키로 모달 닫기)
function handleKeydown(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}

// 유틸리티 함수들
const Utils = {
  // 디바운스 함수 (필요시 사용)
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // 로컬 스토리지에 상태 저장 (선택적 기능)
  saveToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('로컬 스토리지 저장 실패:', error);
    }
  },
  
  // 로컬 스토리지에서 상태 불러오기
  loadFromLocalStorage(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.warn('로컬 스토리지 불러오기 실패:', error);
      return null;
    }
  }
};
