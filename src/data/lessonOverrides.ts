import type { SubCourse } from './courses';

export const lessonOverrides: Record<string, Partial<SubCourse>> = {
  'ielts-speaking-01': {
    title: 'Part 2 人物描述｜从提纲到两分钟回答',
    titleEn: 'Part 2: Describe an Inspiring Person',
    titleChinese: 'Part 2 人物描述｜从提纲到两分钟回答',
    description: '目标 7 分：用人物、经历、影响和反思组织一段 1–2 分钟回答',
    icon: '🎙️',
    vocabulary: [
      { word: 'influential', phonetic: '/ˌɪnfluˈenʃl/', meaning: 'adj. 有影响力的', example: 'My English teacher was highly influential in my life.' },
      { word: 'encouraging', phonetic: '/ɪnˈkʌrɪdʒɪŋ/', meaning: 'adj. 鼓舞人心的', example: 'She was always encouraging when I made mistakes.' },
      { word: 'approachable', phonetic: '/əˈprəʊtʃəbl/', meaning: 'adj. 平易近人的', example: 'What made her special was how approachable she was.' },
      { word: 'determined', phonetic: '/dɪˈtɜːmɪnd/', meaning: 'adj. 坚定、有决心的', example: 'She is one of the most determined people I know.' },
      { word: 'look up to', phonetic: '/lʊk ʌp tuː/', meaning: '敬佩、仰慕', example: 'I have always looked up to her.' },
      { word: 'make an impact', phonetic: '/meɪk ən ˈɪmpækt/', meaning: '产生影响', example: 'Her advice made a lasting impact on me.' },
      { word: 'step outside my comfort zone', phonetic: '/step ˌaʊtˈsaɪd maɪ ˈkʌmfət zəʊn/', meaning: '走出舒适区', example: 'She encouraged me to step outside my comfort zone.' },
      { word: 'turning point', phonetic: '/ˈtɜːnɪŋ pɔɪnt/', meaning: '转折点', example: 'That conversation became a turning point in my studies.' }
    ],
    sentencePatterns: [
      { english: "I'd like to talk about a person who has had a lasting influence on me.", chinese: '我想谈谈一位对我产生持久影响的人。', usage: '直接切题并自然开场' },
      { english: 'I first met her when I was..., and what struck me most was...', chinese: '我第一次见到她是在……，最打动我的是……', usage: '交代背景并加入鲜明特征' },
      { english: 'One experience that clearly illustrates this was when...', chinese: '最能说明这一点的一次经历是……', usage: '引出具体故事，避免空泛评价' },
      { english: 'Instead of simply..., she encouraged me to...', chinese: '她没有只是……，而是鼓励我……', usage: '使用对比增加句型范围' },
      { english: 'Had it not been for her support, I probably would not have...', chinese: '如果没有她的支持，我可能不会……', usage: '目标 7 分的复杂条件句' },
      { english: 'Looking back, I realise that she taught me not only..., but also...', chinese: '回头看，我意识到她不仅教会我……还教会我……', usage: '总结影响并提升答案深度' }
    ],
    bilingualText: {
      english: `I'd like to talk about my high-school English teacher, Ms Chen, who has had a lasting influence on me. I first met her when I was sixteen. At that time, I was quite shy and rarely spoke English in class because I was afraid of making mistakes.

What struck me most was how approachable and encouraging she was. Instead of correcting every small error immediately, she listened patiently and helped me express the same idea more clearly. One experience that clearly illustrates this was a school speaking competition. I wanted to quit after forgetting part of my speech during practice, but she encouraged me to step outside my comfort zone and focus on communicating rather than being perfect.

With her support, I completed the competition and won second prize. More importantly, it became a turning point in the way I learned languages. I stopped treating mistakes as failures and started seeing them as useful feedback.

Looking back, I realise that she taught me not only how to speak English, but also how to become a more determined learner. Had it not been for her support, I probably would not have developed the confidence I have today. That is why she is someone I genuinely look up to.`,
      chinese: `我想谈谈我的高中英语老师陈老师，她对我产生了持久的影响。我十六岁时第一次遇见她。当时我很害羞，因为害怕犯错，几乎不在课堂上说英语。

最打动我的是她既平易近人又善于鼓励学生。她不会立刻纠正每一个小错误，而是耐心听完，再帮助我把同一个意思表达得更清楚。最能说明这一点的是一次校内演讲比赛。我在练习时忘词，想要退出，但她鼓励我走出舒适区，把注意力放在交流而不是完美上。

在她的支持下，我完成了比赛并获得二等奖。更重要的是，这成为我学习语言方式的转折点。我不再把错误看成失败，而是把它们当作有用的反馈。

回头看，我意识到她不仅教会我如何说英语，也教会我如何成为更坚定的学习者。如果没有她的支持，我可能不会拥有今天的自信。这就是我真正敬佩她的原因。`
    },
    englishText: `Describe a person who encouraged you to achieve a goal.

You should say:
- who this person is
- how you know this person
- what goal they encouraged you to achieve
- and explain how their encouragement affected you

Use this four-part plan: identify the person, give the background, tell one specific story, and explain the lasting impact. Aim to speak for 90–120 seconds. Include details rather than a list of adjectives, and try to use at least five expressions from this lesson.`,
    dictationExercises: [
      { sentence: 'She has had a lasting ___ on me.', answer: 'influence', hint: '影响' },
      { sentence: 'I was afraid of making ___.', answer: 'mistakes', hint: '错误' },
      { sentence: 'What struck me most was how ___ she was.', answer: 'approachable', hint: '平易近人的' },
      { sentence: 'She encouraged me to step outside my comfort ___.', answer: 'zone', hint: '区域' },
      { sentence: 'It became a turning ___ in the way I learned languages.', answer: 'point', hint: '点' },
      { sentence: 'I started seeing mistakes as useful ___.', answer: 'feedback', hint: '反馈' },
      { sentence: 'She helped me become a more ___ learner.', answer: 'determined', hint: '坚定的' },
      { sentence: 'She is someone I genuinely look up ___.', answer: 'to', hint: '介词' }
    ]
  }
};
