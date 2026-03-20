// 英语学习小站 - 主逻辑

// 步骤配置
const steps = [
  { id: 1, title: '无字幕视频', icon: '🎬' },
  { id: 2, title: '音频', icon: '🎧' },
  { id: 3, title: '中英双语字幕', icon: '📺' },
  { id: 4, title: '重点词汇', icon: '📚' },
  { id: 5, title: '句式表达', icon: '✍️' },
  { id: 6, title: '中英文本', icon: '📖' },
  { id: 7, title: '纯英文本', icon: '📝' },
  { id: 8, title: '听写填空', icon: '📋' }
];

// 当前状态
let currentStep = 1;
let currentLesson = null;

// DOM 元素
let mainContentEl;
let navStepsEl;
let sidebarEl;
let backHomeBtn;
let courseInfoBar;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initElements();

  // 检查是否有选中的课程
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('course');

  if (courseId && allLessons[courseId]) {
    // 进入学习页面
    showLearningPage(allLessons[courseId]);
  } else {
    // 显示首页
    showHomePage();
  }
});

// 初始化 DOM 元素引用
function initElements() {
  mainContentEl = document.getElementById('mainContent');
  navStepsEl = document.getElementById('navSteps');
  sidebarEl = document.querySelector('.sidebar');
  backHomeBtn = document.getElementById('backHome');
  courseInfoBar = document.getElementById('courseInfoBar');

  // 返回主页按钮事件
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', showHomePage);
  }
}

// 显示首页
function showHomePage() {
  document.body.innerHTML = `
    <button class="back-home visible" id="backHome" style="display:none">
      ← 返回首页
    </button>
    <div class="homepage">
      <div class="home-header">
        <h1 class="home-title">📖 英语学习小站</h1>
        <p class="home-subtitle">采用八步学习法，系统提升英语听说读写能力</p>
      </div>
      <div class="course-grid">
        <div class="course-card" onclick="selectCourse('daily')">
          <div class="course-icon">🍽️</div>
          <h2 class="course-title">日常英语</h2>
          <p class="course-description">学习在餐厅点餐的常用表达，掌握实用场景对话</p>
          <div class="course-features">
            <span class="course-tag">6 个词汇</span>
            <span class="course-tag">6 个句型</span>
            <span class="course-tag">对话练习</span>
            <span class="course-tag">听写填空</span>
          </div>
          <button class="course-btn">开始学习</button>
        </div>
        <div class="course-card" onclick="selectCourse('ielts')">
          <div class="course-icon">🌍</div>
          <h2 class="course-title">雅思英语</h2>
          <p class="course-description">雅思口语高频话题：环境保护，提升答题能力</p>
          <div class="course-features">
            <span class="course-tag">8 个词汇</span>
            <span class="course-tag">6 个句型</span>
            <span class="course-tag">范文朗读</span>
            <span class="course-tag">听写填空</span>
          </div>
          <button class="course-btn">开始学习</button>
        </div>
      </div>
    </div>
  `;

  // 重新绑定返回按钮事件
  document.getElementById('backHome').addEventListener('click', showHomePage);
}

// 选择课程
function selectCourse(courseId) {
  if (allLessons[courseId]) {
    showLearningPage(allLessons[courseId]);
    // 更新 URL（不刷新页面）
    history.pushState({ course: courseId }, '', `?course=${courseId}`);
  }
}

// 显示学习页面
function showLearningPage(lesson) {
  currentLesson = lesson;

  document.body.innerHTML = `
    <button class="back-home visible" id="backHome">
      ← 返回首页
    </button>
    <div class="container">
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-header" onclick="showHomePage()">
          <div class="sidebar-logo">📖</div>
          <div class="sidebar-logo-text">英语学习小站</div>
        </div>
        <nav class="nav-steps" id="navSteps">
          <!-- 导航项由 JavaScript 动态生成 -->
        </nav>
      </aside>
      <main class="main-content" id="mainContent">
        <!-- 内容由 JavaScript 动态生成 -->
      </main>
    </div>
  `;

  // 重新初始化
  initElements();
  renderCourseInfoBar();
  renderNavigation();
  renderStep(1);
  initSidebar();
}

// 渲染课程信息栏
function renderCourseInfoBar() {
  const infoBar = document.createElement('div');
  infoBar.className = 'course-info-bar';
  infoBar.id = 'courseInfoBar';
  infoBar.innerHTML = `
    <div class="course-current">
      <span class="course-current-icon">${currentLesson.icon}</span>
      <div class="course-current-text">
        <h3>${currentLesson.title}</h3>
        <p>${currentLesson.description}</p>
      </div>
    </div>
    <div class="switch-course">
      <button class="switch-btn ${currentLesson.id === 'daily' ? 'active' : ''}"
              onclick="switchToCourse('daily')">🍽️ 日常英语</button>
      <button class="switch-btn ${currentLesson.id === 'ielts' ? 'active' : ''}"
              onclick="switchToCourse('ielts')">🌍 雅思英语</button>
    </div>
  `;
  mainContentEl.parentNode.insertBefore(infoBar, mainContentEl);
}

// 切换课程
window.switchToCourse = function(courseId) {
  if (allLessons[courseId] && courseId !== currentLesson.id) {
    showLearningPage(allLessons[courseId]);
    history.pushState({ course: courseId }, '', `?course=${courseId}`);
  }
};

// 初始化侧边栏交互
function initSidebar() {
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebarEl.classList.toggle('expanded');
    });
  }

  // 点击侧边栏外部时收起（移动端）
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!sidebarEl.contains(e.target) && !e.target.closest('#sidebarToggle')) {
        sidebarEl.classList.remove('expanded');
      }
    }
  });
}

// 渲染导航
function renderNavigation() {
  if (!navStepsEl) return;

  navStepsEl.innerHTML = steps.map(step => `
    <div class="nav-item">
      <button class="nav-btn ${step.id === currentStep ? 'active' : ''}" data-step="${step.id}">
        <span class="nav-number">${step.id}</span>
        <span class="nav-label">${step.title}</span>
      </button>
    </div>
  `).join('');

  // 绑定点击事件
  navStepsEl.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const stepId = parseInt(btn.dataset.step);
      renderStep(stepId);
    });
  });
}

// 渲染步骤内容
function renderStep(stepId) {
  currentStep = stepId;

  // 更新导航状态
  navStepsEl.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.step) === stepId);
  });

  // 获取当前步骤配置
  const stepConfig = steps.find(s => s.id === stepId);

  // 渲染内容
  mainContentEl.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">${stepConfig.icon} ${stepConfig.title}</h1>
    </div>
    ${getStepContent(stepId)}
  `;

  // 初始化步骤特定的交互
  initStepInteractions(stepId);
}

// 获取步骤内容
function getStepContent(stepId) {
  switch (stepId) {
    case 1:
      return renderNoSubtitleVideo();
    case 2:
      return renderAudio();
    case 3:
      return renderWithSubtitleVideo();
    case 4:
      return renderVocabulary();
    case 5:
      return renderSentencePatterns();
    case 6:
      return renderBilingualText();
    case 7:
      return renderEnglishText();
    case 8:
      return renderDictation();
    default:
      return '<p>请选择一个步骤</p>';
  }
}

// 步骤 1: 无字幕视频
function renderNoSubtitleVideo() {
  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">🎬</span>
        无字幕视频
      </h2>
      <div class="video-container">
        <video controls>
          <source src="${currentLesson.media.noSubtitleVideo}" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>
      <p style="margin-top: 16px; color: var(--text-secondary); text-align: center;">
        💡 <strong>学习提示：</strong>先关闭字幕观看视频，尝试理解大意。可以重复观看 2-3 次。
      </p>
    </div>
  `;
}

// 步骤 2: 音频
function renderAudio() {
  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">🎧</span>
        音频练习
      </h2>
      <div class="audio-container">
        <audio controls>
          <source src="${currentLesson.media.audio}" type="audio/mpeg">
          您的浏览器不支持音频播放。
        </audio>
      </div>
      <p style="margin-top: 16px; color: var(--text-secondary); text-align: center;">
        💡 <strong>学习提示：</strong>闭上眼睛专注听，尝试捕捉每个单词。可以反复听直到理解。
      </p>
    </div>
  `;
}

// 步骤 3: 中英双语字幕视频
function renderWithSubtitleVideo() {
  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">📺</span>
        中英双语字幕
      </h2>
      <div class="video-container">
        <video controls>
          <source src="${currentLesson.media.withSubtitleVideo}" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>
      <p style="margin-top: 16px; color: var(--text-secondary); text-align: center;">
        💡 <strong>学习提示：</strong>对照中英文字幕理解内容，注意生词和表达方式。
      </p>
    </div>
  `;
}

// 步骤 4: 重点词汇
function renderVocabulary() {
  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">📚</span>
        重点词汇
      </h2>
      <div class="vocabulary-grid">
        ${currentLesson.vocabulary.map(vocab => `
          <div class="vocab-card">
            <div class="vocab-word">${vocab.word}</div>
            <div class="vocab-phonetic">${vocab.phonetic}</div>
            <div class="vocab-meaning">${vocab.meaning}</div>
            <div class="vocab-example">
              <strong>例句：</strong>${vocab.example}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 步骤 5: 句式表达
function renderSentencePatterns() {
  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">✍️</span>
        句式表达
      </h2>
      <div class="pattern-list">
        ${currentLesson.sentencePatterns.map(pattern => `
          <div class="pattern-card">
            <div class="pattern-english">${pattern.english}</div>
            <div class="pattern-chinese">${pattern.chinese}</div>
            <div class="pattern-usage">${pattern.usage}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 步骤 6: 中英文本
function renderBilingualText() {
  const enParagraphs = currentLesson.bilingualText.english.trim().split('\n').filter(p => p.trim());
  const cnParagraphs = currentLesson.bilingualText.chinese.trim().split('\n').filter(p => p.trim());

  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">📖</span>
        中英文对照
      </h2>
      <div class="bilingual-container">
        <div class="bilingual-column">
          <h4>English</h4>
          <div class="bilingual-text">
            ${enParagraphs.map(p => `<p>${p.trim()}</p>`).join('')}
          </div>
        </div>
        <div class="bilingual-column">
          <h4>中文</h4>
          <div class="bilingual-text">
            ${cnParagraphs.map(p => `<p>${p.trim()}</p>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// 步骤 7: 纯英文本
function renderEnglishText() {
  const paragraphs = currentLesson.englishText.trim().split('\n').filter(p => p.trim());

  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">📝</span>
        纯英文文本
      </h2>
      <div class="english-text-container">
        ${paragraphs.map(p => `<p>${p.trim()}</p>`).join('')}
      </div>
      <p style="margin-top: 16px; color: var(--text-secondary);">
        💡 <strong>学习提示：</strong>大声朗读文本，练习发音和语感。可以多次朗读直到流利。
      </p>
    </div>
  `;
}

// 步骤 8: 听写填空
function renderDictation() {
  return `
    <div class="content-card">
      <h2 class="card-title">
        <span class="card-icon">📋</span>
        听写填空
      </h2>
      <div class="toggle-all-container">
        <button class="btn btn-secondary" id="checkAllBtn">核对答案</button>
        <button class="btn btn-secondary" id="resetAllBtn">重置</button>
      </div>
      <div class="dictation-list">
        ${currentLesson.dictationExercises.map((exercise, index) => `
          <div class="dictation-item" data-index="${index}">
            <div class="dictation-sentence">
              ${formatDictationSentence(exercise.sentence)}
            </div>
            <div class="dictation-hint">💡 提示：${exercise.hint}</div>
            <div class="dictation-actions">
              <button class="btn btn-primary check-btn">核对</button>
              <button class="btn btn-secondary reset-btn">重置</button>
            </div>
            <div class="dictation-result"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 格式化听写句子（将下划线替换为输入框）
function formatDictationSentence(sentence) {
  return sentence.replace(/___/g, '<span class="blank"><input type="text" autocomplete="off" placeholder="填入单词"></span>');
}

// 初始化步骤特定交互
function initStepInteractions(stepId) {
  if (stepId === 8) {
    initDictation();
  }
}

// 初始化听写功能
function initDictation() {
  // 单个核对按钮
  document.querySelectorAll('.check-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => checkAnswer(index));
  });

  // 单个重置按钮
  document.querySelectorAll('.reset-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => resetItem(index));
  });

  // 核对全部按钮
  const checkAllBtn = document.getElementById('checkAllBtn');
  if (checkAllBtn) {
    checkAllBtn.addEventListener('click', checkAllAnswers);
  }

  // 重置全部按钮
  const resetAllBtn = document.getElementById('resetAllBtn');
  if (resetAllBtn) {
    resetAllBtn.addEventListener('click', resetAllItems);
  }
}

// 检查单个答案
function checkAnswer(index) {
  const exercise = currentLesson.dictationExercises[index];
  const itemEl = document.querySelector(`.dictation-item[data-index="${index}"]`);
  const input = itemEl.querySelector('input');
  const resultEl = itemEl.querySelector('.dictation-result');
  const blankEl = itemEl.querySelector('.blank');

  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = exercise.answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    blankEl.classList.add('correct');
    blankEl.classList.remove('incorrect');
    resultEl.textContent = '✅ 正确！Great job!';
    resultEl.className = 'dictation-result show correct';
  } else {
    blankEl.classList.add('incorrect');
    blankEl.classList.remove('correct');
    resultEl.textContent = `❌ 不对哦。正确答案是：${exercise.answer}`;
    resultEl.className = 'dictation-result show incorrect';
  }
}

// 重置单个项目
function resetItem(index) {
  const itemEl = document.querySelector(`.dictation-item[data-index="${index}"]`);
  const input = itemEl.querySelector('input');
  const resultEl = itemEl.querySelector('.dictation-result');
  const blankEl = itemEl.querySelector('.blank');

  input.value = '';
  resultEl.className = 'dictation-result';
  blankEl.classList.remove('correct', 'incorrect');
}

// 检查所有答案
function checkAllAnswers() {
  currentLesson.dictationExercises.forEach((exercise, index) => {
    checkAnswer(index);
  });
}

// 重置所有项目
function resetAllItems() {
  currentLesson.dictationExercises.forEach((exercise, index) => {
    resetItem(index);
  });
}

// 键盘快捷键支持
document.addEventListener('keydown', (e) => {
  // Alt + 数字键切换步骤
  if (e.altKey && e.key >= '1' && e.key <= '8') {
    e.preventDefault();
    const stepId = parseInt(e.key);
    renderStep(stepId);
  }

  // 空格键播放/暂停视频（如果在视频步骤）
  if (e.code === 'Space' && currentStep <= 3) {
    const video = document.querySelector('video');
    if (video && document.activeElement !== video) {
      e.preventDefault();
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
});

// 浏览器后退按钮支持
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.course && allLessons[e.state.course]) {
    showLearningPage(allLessons[e.state.course]);
  } else {
    showHomePage();
  }
});

// 导出函数供外部使用
window.englishLearning = {
  selectCourse,
  switchToCourse,
  showHomePage,
  renderStep,
  checkAnswer,
  resetItem,
  checkAllAnswers,
  resetAllItems,
  getCurrentStep: () => currentStep,
  getCurrentLesson: () => currentLesson
};
