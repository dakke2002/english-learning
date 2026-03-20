// ============================================
// 课程 1: 日常英语 - 英语播客 248 集
// ============================================
const dailyEnglishLesson = {
  id: "daily",
  title: "English Podcast - Daily Conversation",
  description: "每天一个话题，带你进入全英文语境",
  icon: "🎬",

  media: {
    noSubtitleVideo: "videos/【英语播客】248 集合集 _  每天一个话题，带你进入全英文语境 _ 绝佳的口语听力素材_P1_Level 2 Episode  (1).mp4",
    audio: "videos/【英语播客】248 集合集 _  每天一个话题，带你进入全英文语境 _ 绝佳的口语听力素材_P1_Level 2 Episode  (1).mp4",
    withSubtitleVideo: "videos/【英语播客】248 集合集 _  每天一个话题，带你进入全英文语境 _ 绝佳的口语听力素材_P1_Level 2 Episode  (1).mp4"
  },

  vocabulary: [
    {
      word: "conversation",
      phonetic: "/ˌkɒnvərˈseɪʃn/",
      meaning: "n. 对话，交谈",
      example: "We had a long conversation about our future plans."
    },
    {
      word: "pronunciation",
      phonetic: "/prəˌnʌnsiˈeɪʃn/",
      meaning: "n. 发音",
      example: "Your pronunciation is very clear."
    },
    {
      word: "expression",
      phonetic: "/ɪkˈspreʃn/",
      meaning: "n. 表达；短语",
      example: "This is a common English expression."
    },
    {
      word: "improve",
      phonetic: "/ɪmˈpruːv/",
      meaning: "v. 改善，提高",
      example: "I want to improve my English speaking skills."
    },
    {
      word: "practice",
      phonetic: "/ˈpræktɪs/",
      meaning: "n. 练习 v. 实践",
      example: "Practice makes perfect."
    },
    {
      word: "understand",
      phonetic: "/ˌʌndərˈstænd/",
      meaning: "v. 理解，明白",
      example: "Do you understand what I'm saying?"
    }
  ],

  sentencePatterns: [
    {
      english: "What do you think about...?",
      chinese: "你对...怎么看？",
      usage: "询问对方观点的常用句型"
    },
    {
      english: "In my opinion, ...",
      chinese: "在我看来，...",
      usage: "表达个人观点"
    },
    {
      english: "Could you explain that again?",
      chinese: "你能再解释一遍吗？",
      usage: "没听懂时请求重复解释"
    },
    {
      english: "That makes sense.",
      chinese: "有道理。",
      usage: "表示理解并赞同"
    },
    {
      english: "I'm not sure about that.",
      chinese: "我不太确定。",
      usage: "委婉表达不确定或不同意"
    },
    {
      english: "Let me think about it.",
      chinese: "让我考虑一下。",
      usage: "需要时间思考时的回应"
    }
  ],

  bilingualText: {
    english: `
Welcome to today's English podcast.
In this episode, we'll be discussing daily conversations.
Learning a new language takes time and practice.
The key is to listen carefully and speak as much as possible.
Don't be afraid of making mistakes.
Mistakes are how we learn.
Try to practice every day, even if it's just for a few minutes.
Listen to English podcasts, watch English videos, and read English books.
The more you expose yourself to the language, the faster you'll improve.
Remember, consistency is more important than perfection.
Keep practicing and you'll see progress.
    `,
    chinese: `
欢迎收听今天的英语播客。
在这一集中，我们将讨论日常对话。
学习一门新语言需要时间和练习。
关键是仔细听，尽可能多说。
不要害怕犯错误。
错误是我们学习的方式。
尝试每天练习，哪怕只有几分钟。
听英语播客，看英语视频，读英语书籍。
你接触语言越多，进步就越快。
记住，坚持比完美更重要。
继续练习，你会看到进步。
    `
  },

  englishText: `
Welcome to today's English podcast.
In this episode, we'll be discussing daily conversations.
Learning a new language takes time and practice.
The key is to listen carefully and speak as much as possible.
Don't be afraid of making mistakes.
Mistakes are how we learn.
Try to practice every day, even if it's just for a few minutes.
Listen to English podcasts, watch English videos, and read English books.
The more you expose yourself to the language, the faster you'll improve.
Remember, consistency is more important than perfection.
Keep practicing and you'll see progress.
`,

  dictationExercises: [
    {
      sentence: "Welcome to today's English ___.",
      answer: "podcast",
      hint: "播客"
    },
    {
      sentence: "In this ___, we'll be discussing daily conversations.",
      answer: "episode",
      hint: "集，节目"
    },
    {
      sentence: "Learning a new language takes time and ___.",
      answer: "practice",
      hint: "练习"
    },
    {
      sentence: "The ___ is to listen carefully and speak as much as possible.",
      answer: "key",
      hint: "关键"
    },
    {
      sentence: "Don't be afraid of making ___.",
      answer: "mistakes",
      hint: "错误"
    },
    {
      sentence: "___ is more important than perfection.",
      answer: "Consistency",
      hint: "坚持，一致性"
    },
    {
      sentence: "Keep ___ and you'll see progress.",
      answer: "practicing",
      hint: "练习（现在分词）"
    },
    {
      sentence: "The more you expose yourself to the language, the ___ you'll improve.",
      answer: "faster",
      hint: "更快"
    }
  ]
};

// ============================================
// 课程 2: 雅思英语 - 环境话题
// ============================================
const ieltsEnglishLesson = {
  id: "ielts",
  title: "IELTS Speaking: Environment",
  description: "雅思口语高频话题：环境保护",
  icon: "🌍",

  media: {
    noSubtitleVideo: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    withSubtitleVideo: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
  },

  vocabulary: [
    {
      word: "sustainable",
      phonetic: "/səˈsteɪnəbl/",
      meaning: "adj. 可持续的",
      example: "We need to adopt sustainable practices to protect the environment."
    },
    {
      word: "conservation",
      phonetic: "/ˌkɒnsərˈveɪʃn/",
      meaning: "n. 保护，保存",
      example: "Wildlife conservation is crucial for maintaining biodiversity."
    },
    {
      word: "emission",
      phonetic: "/ɪˈmɪʃn/",
      meaning: "n. 排放，排放物",
      example: "The government should impose stricter regulations on carbon emissions."
    },
    {
      word: "renewable",
      phonetic: "/rɪˈnuːəbl/",
      meaning: "adj. 可再生的",
      example: "Solar and wind energy are examples of renewable resources."
    },
    {
      word: "deforestation",
      phonetic: "/diːˌfɒrɪˈsteɪʃn/",
      meaning: "n. 森林砍伐",
      example: "Deforestation is one of the leading causes of climate change."
    },
    {
      word: "biodiversity",
      phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/",
      meaning: "n. 生物多样性",
      example: "The loss of biodiversity poses a serious threat to ecosystems."
    },
    {
      word: "contaminate",
      phonetic: "/kənˈtæmɪneɪt/",
      meaning: "v. 污染，弄脏",
      example: "Industrial waste can contaminate water sources."
    },
    {
      word: "mitigate",
      phonetic: "/ˈmɪtɪɡeɪt/",
      meaning: "v. 减轻，缓和",
      example: "We need to take action to mitigate the effects of global warming."
    }
  ],

  sentencePatterns: [
    {
      english: "From my perspective, ...",
      chinese: "在我看来，...",
      usage: "表达个人观点的正式说法，适合雅思口语 Part 3"
    },
    {
      english: "One of the main causes of... is...",
      chinese: "...的主要原因之一是...",
      usage: "分析原因的句型，展示逻辑思维"
    },
    {
      english: "There are several measures that can be taken to...",
      chinese: "有几个措施可以用来...",
      usage: "提出解决方案的高级表达"
    },
    {
      english: "It is crucial that we...",
      chinese: "我们...是至关重要的",
      usage: "强调重要性，使用虚拟语气"
    },
    {
      english: "Not only... but also...",
      chinese: "不仅...而且...",
      usage: "并列结构，增加语言复杂度"
    },
    {
      english: "If we don't take action now, ...",
      chinese: "如果我们现在不采取行动，...",
      usage: "条件句，用于预测后果"
    }
  ],

  bilingualText: {
    english: `
Climate change is one of the most pressing issues of our time.
From my perspective, there are two main factors contributing to this problem.
Firstly, the burning of fossil fuels releases enormous amounts of carbon dioxide into the atmosphere.
Secondly, deforestation has reduced the Earth's capacity to absorb these emissions.
The consequences are already visible: rising sea levels, extreme weather events, and loss of biodiversity.
However, I believe there are several measures that can be taken to mitigate these effects.
Governments should invest more in renewable energy sources such as solar and wind power.
Individuals can also contribute by adopting sustainable lifestyles, like reducing waste and using public transportation.
It is crucial that we act now before the situation becomes irreversible.
If we don't take action today, future generations will face even greater challenges.
    `,
    chinese: `
气候变化是我们这个时代最紧迫的问题之一。
在我看来，有两个主要因素导致了这个问题。
首先，燃烧化石燃料向大气中释放了大量的二氧化碳。
其次，森林砍伐降低了地球吸收这些排放的能力。
后果已经显而易见：海平面上升、极端天气事件和生物多样性丧失。
然而，我相信可以采取一些措施来减轻这些影响。
政府应该更多地投资可再生能源，如太阳能和风能。
个人也可以通过采取可持续的生活方式做出贡献，比如减少浪费和使用公共交通。
在情况变得不可逆转之前，我们现在采取行动是至关重要的。
如果我们今天不采取行动，后代将面临更大的挑战。
    `
  },

  englishText: `
Climate change is one of the most pressing issues of our time.
From my perspective, there are two main factors contributing to this problem.
Firstly, the burning of fossil fuels releases enormous amounts of carbon dioxide into the atmosphere.
Secondly, deforestation has reduced the Earth's capacity to absorb these emissions.
The consequences are already visible: rising sea levels, extreme weather events, and loss of biodiversity.
However, I believe there are several measures that can be taken to mitigate these effects.
Governments should invest more in renewable energy sources such as solar and wind power.
Individuals can also contribute by adopting sustainable lifestyles, like reducing waste and using public transportation.
It is crucial that we act now before the situation becomes irreversible.
If we don't take action today, future generations will face even greater challenges.
`,

  dictationExercises: [
    {
      sentence: "Climate change is one of the most ___ issues of our time.",
      answer: "pressing",
      hint: "紧迫的"
    },
    {
      sentence: "From my ___, there are two main factors contributing to this problem.",
      answer: "perspective",
      hint: "观点，视角"
    },
    {
      sentence: "The burning of fossil fuels ___ enormous amounts of carbon dioxide.",
      answer: "releases",
      hint: "释放"
    },
    {
      sentence: "Deforestation has reduced the Earth's ___ to absorb these emissions.",
      answer: "capacity",
      hint: "能力，容量"
    },
    {
      sentence: "The consequences are already ___: rising sea levels, extreme weather events.",
      answer: "visible",
      hint: "可见的"
    },
    {
      sentence: "Governments should invest more in ___ energy sources.",
      answer: "renewable",
      hint: "可再生的"
    },
    {
      sentence: "It is ___ that we act now before the situation becomes irreversible.",
      answer: "crucial",
      hint: "至关重要的"
    },
    {
      sentence: "If we don't take action today, future ___ will face even greater challenges.",
      answer: "generations",
      hint: "一代人（复数）"
    }
  ]
};

// 导出课程数据
const allLessons = {
  daily: dailyEnglishLesson,
  ielts: ieltsEnglishLesson
};
