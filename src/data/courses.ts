// 课程配置
// 支持多个主课程类别，每个类别包含多个子课程（视频）

export interface CourseCategory {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  icon: string;
  color: string;
  subCourses: SubCourse[];
}

export interface SubCourse {
  id: string;
  title: string;
  titleEn: string;
  titleChinese: string;
  description: string;
  icon: string;
  videoFile: string;
  vocabulary: Vocabulary[];
  sentencePatterns: SentencePattern[];
  bilingualText: { english: string; chinese: string };
  englishText: string;
  dictationExercises: DictationExercise[];
}

export interface Vocabulary {
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
}

export interface SentencePattern {
  english: string;
  chinese: string;
  usage: string;
}

export interface DictationExercise {
  sentence: string;
  answer: string;
  hint: string;
}

// 日常英语对话课程
export const dailyEnglishCourse: CourseCategory = {
  id: "daily-english",
  title: "日常英语对话",
  titleEn: "Daily English Conversation",
  description: "通过真实视频场景提升英语听力与口语",
  icon: "📺",
  color: "#4f46e5",
  subCourses: [
    {
      id: "daily-english-dream",
      title: "1-我们为什么做梦",
      titleEn: "1 - Why We Dream",
      titleChinese: "1-我们为什么做梦",
      description: "探索梦境的奥秘，了解睡眠对大脑的重要性",
      icon: "🌙",
      videoFile: "/videos/daily-english/dream.mp4",
      vocabulary: [
        { word: "dream", phonetic: "/driːm/", meaning: "n. 梦，梦想 v. 做梦", example: "I had a strange dream last night." },
        { word: "brain", phonetic: "/breɪn/", meaning: "n. 大脑，智力", example: "The brain is the most complex organ in the body." },
        { word: "memory", phonetic: "/ˈmeməri/", meaning: "n. 记忆，回忆", example: "Sleep helps consolidate our memories." },
        { word: "sleep", phonetic: "/sliːp/", meaning: "n./v. 睡眠", example: "We need 7-8 hours of sleep every night." },
        { word: "conscious", phonetic: "/ˈkɒnʃəs/", meaning: "adj. 有意识的，清醒的", example: "He was barely conscious after the accident." },
        { word: "subconscious", phonetic: "/ˌsʌbˈkɒnʃəs/", meaning: "adj. 潜意识的", example: "Our subconscious mind works while we sleep." },
        { word: "neuron", phonetic: "/ˈnjʊərɒn/", meaning: "n. 神经元", example: "Neurons are the basic units of the nervous system." },
        { word: "activity", phonetic: "/ækˈtɪvəti/", meaning: "n. 活动，活跃", example: "Brain activity increases during REM sleep." },
        { word: "process", phonetic: "/ˈprəʊses/", meaning: "v. 处理 n. 过程", example: "The brain processes information while we sleep." },
        { word: "information", phonetic: "/ˌɪnfəˈmeɪʃn/", meaning: "n. 信息，资料", example: "We gather information throughout the day." },
        { word: "consolidate", phonetic: "/kənˈsɒlɪdeɪt/", meaning: "v. 巩固，加强", example: "Sleep helps consolidate what we learned." },
        { word: "stage", phonetic: "/steɪdʒ/", meaning: "n. 阶段，时期", example: "Sleep has multiple stages throughout the night." },
        { word: "cycle", phonetic: "/ˈsaɪkl/", meaning: "n. 循环，周期", example: "We go through several sleep cycles each night." },
        { word: "REM", phonetic: "/ˌɑːr iː ˈem/", meaning: "n. 快速眼动期（睡眠阶段）", example: "REM sleep is when most vivid dreams occur." },
        { word: "function", phonetic: "/ˈfʌŋkʃn/", meaning: "n. 功能 v. 运作", example: "The function of dreams is still debated." },
        { word: "essential", phonetic: "/ɪˈsenʃl/", meaning: "adj. 必要的，本质的", example: "Sleep is essential for good health." },
        { word: "restore", phonetic: "/rɪˈstɔːr/", meaning: "v. 恢复，修复", example: "Sleep helps restore our body and mind." },
        { word: "emotion", phonetic: "/ɪˈməʊʃn/", meaning: "n. 情绪，情感", example: "Dreams often involve strong emotions." },
        { word: "experience", phonetic: "/ɪkˈspɪəriəns/", meaning: "n. 经历，经验 v. 体验", example: "We experience strange scenarios in dreams." }
      ],
      sentencePatterns: [
        { english: "Have you ever wondered why...?", chinese: "你有没有想过为什么...？", usage: "引出话题的常用问句" },
        { english: "Scientists believe that...", chinese: "科学家认为...", usage: "表达科学观点" },
        { english: "Research shows that...", chinese: "研究表明...", usage: "引用研究结果" },
        { english: "It is important to...", chinese: "...是很重要的", usage: "强调重要性" },
        { english: "This helps us understand...", chinese: "这帮助我们理解...", usage: "总结说明" },
        { english: "During..., ... happens.", chinese: "在...期间，...发生。", usage: "描述某个过程中发生的事情" },
        { english: "One theory suggests that...", chinese: "一种理论认为...", usage: "介绍科学假说" },
        { english: "Evidence indicates that...", chinese: "证据表明...", usage: "引用证据支持观点" },
        { english: "This may explain why...", chinese: "这可以解释为什么...", usage: "解释现象的原因" },
        { english: "In conclusion, ...", chinese: "总之，...", usage: "得出结论" },
        { english: "Studies have found that...", chinese: "研究发现...", usage: "引用研究发现" },
        { english: "It appears that...", chinese: "似乎...", usage: "委婉表达观点" }
      ],
      bilingualText: {
        english: `
Have you ever wondered why we dream? Every night, when we close our eyes and drift off to sleep, our brains embark on a remarkable journey through the world of dreams. This mysterious phenomenon has fascinated scientists, philosophers, and ordinary people for thousands of years.

During sleep, our brain does not simply shut down. Instead, it goes through several distinct stages, each with its own unique characteristics. The sleep cycle typically repeats every ninety minutes, and we experience four to six cycles per night. These stages include light sleep, deep sleep, and REM sleep, which stands for Rapid Eye Movement.

Scientists believe that dreams serve multiple important functions. First, they help us process and consolidate memories. Throughout the day, we gather enormous amounts of information. During sleep, especially during REM sleep, our brain sorts through this information, deciding what to keep and what to discard. This is why sleep is crucial for learning and memory.

Research shows that people who are deprived of REM sleep have difficulty remembering new information and solving problems. In one study, participants who were allowed to complete full sleep cycles performed significantly better on memory tests than those who were woken up during REM sleep.

Another theory suggests that dreams help us process emotions. During dreaming, our brain creates simulated scenarios that allow us to work through emotional experiences from the day. This emotional processing may help us wake up feeling more balanced and ready to face new challenges.

The subconscious mind becomes highly active during dreaming. While our conscious mind rests, the subconscious creates elaborate stories, often combining recent experiences with old memories in unexpected ways. This is why dreams can feel so strange yet somehow meaningful.

Some researchers propose that dreaming serves an evolutionary purpose. By simulating threatening scenarios in our dreams, we may be practicing responses to danger, preparing ourselves to handle real threats when we are awake.

Sleep and dreaming are essential for our physical and mental health. People who do not get enough quality sleep often experience mood problems, difficulty concentrating, and weakened immune systems. It is important to prioritize sleep as part of a healthy lifestyle.

In conclusion, while we still do not fully understand every aspect of dreaming, science has revealed that it plays vital roles in memory consolidation, emotional processing, and overall brain health. The next time you drift off to sleep, remember that your brain is about to begin one of its most important and fascinating activities. Sweet dreams!
        `,
        chinese: `
你有没有想过我们为什么会做梦？每天晚上，当我们闭上眼睛进入梦乡时，我们的大脑开始了一段穿越梦境世界的非凡旅程。这个神秘的现象几千年来一直让科学家、哲学家和普通人着迷。

在睡眠期间，我们的大脑并不会简单地关闭。相反，它会经历几个不同的阶段，每个阶段都有其独特的特征。睡眠周期通常每九十分钟重复一次，我们每晚经历四到六个周期。这些阶段包括浅睡眠、深睡眠和 REM 睡眠，即快速眼动睡眠。

科学家认为，梦有多种重要功能。首先，它们帮助我们处理和巩固记忆。一整天下来，我们收集了大量的信息。在睡眠期间，特别是在快速眼动睡眠期间，我们的大脑整理这些信息，决定保留什么、丢弃什么。这就是为什么睡眠对于学习和记忆至关重要。

研究表明，被剥夺快速眼动睡眠的人在记忆新信息和解决问题方面有困难。在一项研究中，被允许完成完整睡眠周期的参与者在记忆测试中的表现明显优于那些在快速眼动睡眠期间被叫醒的人。

另一种理论认为，梦帮助我们处理情绪。在做梦期间，我们的大脑创造模拟场景，让我们能够处理一天中的情感体验。这种情感处理可能帮助我们醒来时感觉更加平衡，准备好面对新的挑战。

潜意识在做梦期间变得高度活跃。当我们的意识休息时，潜意识创造复杂的故事，经常将最近的经历与旧的记忆以意想不到的方式结合起来。这就是为什么梦可能感觉如此奇怪，却又不知何故地有意义。

一些研究人员提出，做梦有进化目的。通过在梦中模拟威胁性场景，我们可能在练习应对危险的方式，为我们在清醒时处理真正的威胁做好准备。

睡眠和做梦对我们的身心健康至关重要。没有获得足够优质睡眠的人经常会出现情绪问题、注意力难以集中和免疫系统减弱。将睡眠作为健康生活方式的一部分来重视是很重要的。

总之，虽然我们仍然没有完全了解做梦的方方面面，但科学已经揭示，它在记忆巩固、情感处理和整体大脑健康方面发挥着至关重要的作用。下次当你入睡时，请记住你的大脑即将开始它最重要、最迷人的活动之一。祝你好梦！
        `
      },
      englishText: `
Have you ever wondered why we dream? Every night, when we close our eyes and drift off to sleep, our brains embark on a remarkable journey through the world of dreams. This mysterious phenomenon has fascinated scientists, philosophers, and ordinary people for thousands of years.

During sleep, our brain does not simply shut down. Instead, it goes through several distinct stages, each with its own unique characteristics. The sleep cycle typically repeats every ninety minutes, and we experience four to six cycles per night. These stages include light sleep, deep sleep, and REM sleep, which stands for Rapid Eye Movement.

Scientists believe that dreams serve multiple important functions. First, they help us process and consolidate memories. Throughout the day, we gather enormous amounts of information. During sleep, especially during REM sleep, our brain sorts through this information, deciding what to keep and what to discard. This is why sleep is crucial for learning and memory.

Research shows that people who are deprived of REM sleep have difficulty remembering new information and solving problems. In one study, participants who were allowed to complete full sleep cycles performed significantly better on memory tests than those who were woken up during REM sleep.

Another theory suggests that dreams help us process emotions. During dreaming, our brain creates simulated scenarios that allow us to work through emotional experiences from the day. This emotional processing may help us wake up feeling more balanced and ready to face new challenges.

The subconscious mind becomes highly active during dreaming. While our conscious mind rests, the subconscious creates elaborate stories, often combining recent experiences with old memories in unexpected ways. This is why dreams can feel so strange yet somehow meaningful.

Some researchers propose that dreaming serves an evolutionary purpose. By simulating threatening scenarios in our dreams, we may be practicing responses to danger, preparing ourselves to handle real threats when we are awake.

Sleep and dreaming are essential for our physical and mental health. People who do not get enough quality sleep often experience mood problems, difficulty concentrating, and weakened immune systems. It is important to prioritize sleep as part of a healthy lifestyle.

In conclusion, while we still do not fully understand every aspect of dreaming, science has revealed that it plays vital roles in memory consolidation, emotional processing, and overall brain health. The next time you drift off to sleep, remember that your brain is about to begin one of its most important and fascinating activities. Sweet dreams!
`,
      dictationExercises: [
        { sentence: "Every night, our brain ___ on a remarkable journey through dreams.", answer: "embarks", hint: "开始，从事" },
        { sentence: "The sleep ___ repeats every ninety minutes.", answer: "cycle", hint: "循环，周期" },
        { sentence: "Dreams help us process and ___ memories.", answer: "consolidate", hint: "巩固" },
        { sentence: "People ___ of REM sleep have difficulty with memory.", answer: "deprived", hint: "被剥夺" },
        { sentence: "Dreams help us ___ emotions.", answer: "process", hint: "处理" },
        { sentence: "The ___ mind becomes highly active during dreaming.", answer: "subconscious", hint: "潜意识的" },
        { sentence: "Sleep is ___ for our physical and mental health.", answer: "essential", hint: "必要的" },
        { sentence: "Dreaming plays ___ roles in brain health.", answer: "vital", hint: "重要的，关键的" }
      ]
    },
    {
      id: "daily-english-music",
      title: "2-音乐对大脑的影响",
      titleEn: "2 - The Effect of Music on the Brain",
      titleChinese: "2-音乐对大脑的影响",
      description: "探索音乐如何塑造我们的大脑和情绪",
      icon: "🎵",
      videoFile: "/videos/daily-english/music-brain.mp4",
      vocabulary: [
        { word: "music", phonetic: "/ˈmjuːzɪk/", meaning: "n. 音乐，乐曲", example: "Music has a powerful effect on our emotions." },
        { word: "rhythm", phonetic: "/ˈrɪðəm/", meaning: "n. 节奏，韵律", example: "The rhythm of the song made me want to dance." },
        { word: "melody", phonetic: "/ˈmelədi/", meaning: "n. 旋律，曲调", example: "The melody of this song is very catchy." },
        { word: "emotion", phonetic: "/ɪˈməʊʃn/", meaning: "n. 情绪，情感", example: "Music can evoke strong emotions in listeners." },
        { word: "stimulate", phonetic: "/ˈstɪmjuleɪt/", meaning: "v. 刺激，激发", example: "Listening to music stimulates brain activity." },
        { word: "therapy", phonetic: "/ˈθerəpi/", meaning: "n. 治疗，疗法", example: "Music therapy is used to treat various conditions." },
        { word: "cognitive", phonetic: "/ˈkɒɡnətɪv/", meaning: "adj. 认知的", example: "Music can improve cognitive performance." },
        { word: "relaxation", phonetic: "/ˌriːlækˈseɪʃn/", meaning: "n. 放松，休息", example: "Soft music promotes relaxation and reduces stress." },
        { word: "dopamine", phonetic: "/ˈdəʊpəmiːn/", meaning: "n. 多巴胺（神经递质）", example: "Listening to pleasurable music releases dopamine." },
        { word: "release", phonetic: "/rɪˈliːs/", meaning: "v. 释放，发布", example: "The brain releases chemicals when we enjoy music." },
        { word: "chemical", phonetic: "/ˈkemɪkl/", meaning: "n. 化学品 adj. 化学的", example: "Dopamine is a feel-good chemical in the brain." },
        { word: "activate", phonetic: "/ˈæktɪveɪt/", meaning: "v. 激活，启动", example: "Music activates multiple areas of the brain." },
        { word: "simultaneously", phonetic: "/ˌsɪmlˈteɪniəsli/", meaning: "adv. 同时地", example: "The brain processes different aspects of music simultaneously." },
        { word: "enhance", phonetic: "/ɪnˈhɑːns/", meaning: "v. 增强，提高", example: "Music can enhance memory and learning." },
        { word: "performance", phonetic: "/pəˈfɔːməns/", meaning: "n. 表现，表演", example: "Students who study music show better academic performance." },
        { word: "well-being", phonetic: "/ˌwel ˈbiːɪŋ/", meaning: "n. 幸福，安康", example: "Music contributes to our overall well-being." },
        { word: "incorporate", phonetic: "/ɪnˈkɔːpəreɪt/", meaning: "v. 包含，吸收", example: "We should incorporate music into our daily routine." },
        { word: "motivation", phonetic: "/ˌməʊtɪˈveɪʃn/", meaning: "n. 动力，动机", example: "Upbeat music increases motivation during exercise." }
      ],
      sentencePatterns: [
        { english: "Music has the power to...", chinese: "音乐有力量...", usage: "描述音乐的影响力" },
        { english: "Studies suggest that...", chinese: "研究表明...", usage: "引用研究发现" },
        { english: "Not only does music..., but it also...", chinese: "音乐不仅...，而且还...", usage: "并列强调句型" },
        { english: "This is because...", chinese: "这是因为...", usage: "解释原因" },
        { english: "As a result, ...", chinese: "因此，...", usage: "表达结果" },
        { english: "In other words, ...", chinese: "换句话说，...", usage: "换种方式说明" },
        { english: "Research has demonstrated that...", chinese: "研究已经证明...", usage: "引用研究证据" },
        { english: "It is widely accepted that...", chinese: "人们普遍认为...", usage: "表达普遍共识" },
        { english: "One explanation is that...", chinese: "一个解释是...", usage: "提供解释" },
        { english: "This finding supports the idea that...", chinese: "这个发现支持了...的观点", usage: "支持某个理论" }
      ],
      bilingualText: {
        english: `
Music has the power to change our mood instantly. Think about the last time you heard your favorite song. Did you notice how your spirits lifted? This is not just in your head; it is actually happening in your brain.

When we listen to music, our brain releases dopamine, a neurotransmitter that makes us feel pleasure and reward. This is the same chemical that is released when we eat delicious food, exercise, or experience something enjoyable. The release of dopamine explains why music can make us feel so good.

Studies suggest that music can improve memory and learning abilities. Researchers have found that students who study music tend to perform better academically than those who do not. This is because learning to play an instrument requires focus, discipline, and the coordination of multiple brain regions.

Not only does music entertain us, but it also stimulates brain activity across multiple areas. When you listen to music, your auditory cortex processes the sound, your motor cortex wants to move to the rhythm, and your limbic system processes the emotions. All of this happens simultaneously, making music a truly full-brain experience.

This is because music is uniquely complex. It combines melody, harmony, rhythm, and lyrics, each processed by different parts of the brain. This comprehensive activation may explain why music is so effective at enhancing cognitive function.

Different types of music have different effects on our emotions. Fast-paced music with a strong beat can increase energy and motivation, which is why many people listen to upbeat music during exercise. Slow, calm music with a gentle melody promotes relaxation and reduces stress, making it ideal for unwinding after a long day.

Music therapy is increasingly used in hospitals, schools, and rehabilitation centers. Therapists use music to help patients recover from brain injuries, manage pain, reduce anxiety, and improve communication skills. In some cases, patients who cannot speak due to brain damage can still sing, demonstrating the powerful connection between music and the brain.

As a result, incorporating music into daily life can enhance our well-being in numerous ways. Whether you are studying, working, exercising, or simply relaxing, music can improve your performance and mood.

In other words, music is not just entertainment. It is a powerful tool that can enhance our cognitive abilities, improve our emotional health, and enrich our lives. So go ahead, turn on your favorite playlist, and let your brain enjoy the many benefits of music.
        `,
        chinese: `
音乐有力量瞬间改变我们的情绪。想想上次你听到最喜欢的歌曲时的情景。你注意到你的情绪是如何提升的吗？这不仅仅是你的感觉；它实际上正在你的大脑中发生。

当我们听音乐时，我们的大脑释放多巴胺，这是一种让我们感到愉悦和奖励的神经递质。这与我们在吃美食、锻炼或体验愉快事物时释放的化学物质相同。多巴胺的释放解释了为什么音乐能让我们感觉如此良好。

研究表明，音乐可以提高记忆力和学习能力。研究人员发现，学习音乐的学生在学业上的表现往往优于不学习音乐的学生。这是因为学习演奏乐器需要专注、自律和多个大脑区域的协调。

音乐不仅娱乐我们，而且还刺激多个大脑区域的活动。当你听音乐时，你的听觉皮层处理声音，你的运动皮层想要跟随节奏移动，你的边缘系统处理情绪。所有这些都同时发生，使音乐成为真正的全脑体验。

这是因为音乐具有独特的复杂性。它结合了旋律、和声、节奏和歌词，每一个都由大脑的不同部分处理。这种全面的激活可能解释了为什么音乐在增强认知功能方面如此有效。

不同类型的音乐对我们的情绪有不同的影响。节奏强劲的快速音乐可以增加能量和动力，这就是为什么许多人在锻炼时听欢快的音乐。旋律柔和的缓慢、平静的音乐促进放松和减轻压力，使其成为长时间工作后放松的理想选择。

音乐治疗越来越多地用于医院、学校和康复中心。治疗师使用音乐帮助患者从脑损伤中恢复、管理疼痛、减少焦虑和改善沟通技巧。在某些情况下，由于脑损伤无法说话的患者仍然可以唱歌，这展示了音乐与大脑之间的强大联系。

因此，将音乐融入日常生活可以在许多方面提升我们的幸福感。无论你是在学习、工作、锻炼还是只是放松，音乐都可以改善你的表现和情绪。

换句话说，音乐不仅仅是娱乐。它是一个强大的工具，可以增强我们的认知能力，改善我们的情绪健康，丰富我们的生活。所以，打开你最喜欢的播放列表，让你的大脑享受音乐的诸多好处吧。
        `
      },
      englishText: `
Music has the power to change our mood instantly. Think about the last time you heard your favorite song. Did you notice how your spirits lifted? This is not just in your head; it is actually happening in your brain.

When we listen to music, our brain releases dopamine, a neurotransmitter that makes us feel pleasure and reward. This is the same chemical that is released when we eat delicious food, exercise, or experience something enjoyable. The release of dopamine explains why music can make us feel so good.

Studies suggest that music can improve memory and learning abilities. Researchers have found that students who study music tend to perform better academically than those who do not. This is because learning to play an instrument requires focus, discipline, and the coordination of multiple brain regions.

Not only does music entertain us, but it also stimulates brain activity across multiple areas. When you listen to music, your auditory cortex processes the sound, your motor cortex wants to move to the rhythm, and your limbic system processes the emotions. All of this happens simultaneously, making music a truly full-brain experience.

This is because music is uniquely complex. It combines melody, harmony, rhythm, and lyrics, each processed by different parts of the brain. This comprehensive activation may explain why music is so effective at enhancing cognitive function.

Different types of music have different effects on our emotions. Fast-paced music with a strong beat can increase energy and motivation, which is why many people listen to upbeat music during exercise. Slow, calm music with a gentle melody promotes relaxation and reduces stress, making it ideal for unwinding after a long day.

Music therapy is increasingly used in hospitals, schools, and rehabilitation centers. Therapists use music to help patients recover from brain injuries, manage pain, reduce anxiety, and improve communication skills. In some cases, patients who cannot speak due to brain damage can still sing, demonstrating the powerful connection between music and the brain.

As a result, incorporating music into daily life can enhance our well-being in numerous ways. Whether you are studying, working, exercising, or simply relaxing, music can improve your performance and mood.

In other words, music is not just entertainment. It is a powerful tool that can enhance our cognitive abilities, improve our emotional health, and enrich our lives. So go ahead, turn on your favorite playlist, and let your brain enjoy the many benefits of music.
`,
      dictationExercises: [
        { sentence: "Music has the power to change our ___ instantly.", answer: "mood", hint: "情绪，心情" },
        { sentence: "When we listen to music, our brain releases ___.", answer: "dopamine", hint: "多巴胺" },
        { sentence: "Students who study music ___ to perform better academically.", answer: "tend", hint: "倾向于" },
        { sentence: "Music stimulates brain activity across ___ areas.", answer: "multiple", hint: "多个的" },
        { sentence: "All of this happens ___, making music a full-brain experience.", answer: "simultaneously", hint: "同时地" },
        { sentence: "Fast-paced music can increase energy and ___.", answer: "motivation", hint: "动力" },
        { sentence: "___ therapy is used to help patients recover.", answer: "Music", hint: "音乐" },
        { sentence: "Music can enhance our cognitive ___ and improve emotional health.", answer: "abilities", hint: "能力" }
      ]
    },
    {
      id: "daily-english-healthy-habits",
      title: "3-5 个简单的习惯，过上健康的生活",
      titleEn: "3 - 5 Simple Habits for a Healthy Life",
      titleChinese: "3-5 个简单的习惯，过上健康的生活",
      description: "学习如何通过简单习惯改善生活质量",
      icon: "🥗",
      videoFile: "/videos/daily-english/03-healthy-habits.mp4",
      vocabulary: [
        { word: "habit", phonetic: "/ˈhæbɪt/", meaning: "n. 习惯", example: "Good habits take time to develop." },
        { word: "healthy", phonetic: "/ˈhelθi/", meaning: "adj. 健康的", example: "Eating healthy food is important for your body." },
        { word: "exercise", phonetic: "/ˈeksəsaɪz/", meaning: "n./v. 运动，锻炼", example: "Regular exercise improves your physical health." },
        { word: "nutrition", phonetic: "/njuˈtrɪʃn/", meaning: "n. 营养", example: "Good nutrition is essential for growth." },
        { word: "hydration", phonetic: "/haɪˈdreɪʃn/", meaning: "n. 补水", example: "Proper hydration is important for your health." },
        { word: "sleep", phonetic: "/sliːp/", meaning: "n./v. 睡眠", example: "Getting enough sleep helps your body recover." },
        { word: "stress", phonetic: "/stres/", meaning: "n. 压力", example: "Too much stress can harm your health." },
        { word: "manage", phonetic: "/ˈmænɪdʒ/", meaning: "v. 管理，控制", example: "Learning to manage stress is important." },
        { word: "balance", phonetic: "/ˈbæləns/", meaning: "n. 平衡", example: "Work-life balance is key to happiness." },
        { word: "routine", phonetic: "/ruːˈtiːn/", meaning: "n. 日常惯例", example: "Having a daily routine helps build habits." },
        { word: "consistency", phonetic: "/ˌkɒnsɪˈstənsi/", meaning: "n. 坚持，一致性", example: "Consistency is the key to success." },
        { word: "wellness", phonetic: "/ˈwelnes/", meaning: "n. 健康，幸福", example: "Mental wellness is as important as physical health." },
        { word: "energy", phonetic: "/ˈenədʒi/", meaning: "n. 能量，精力", example: "Healthy habits give you more energy." },
        { word: "immune", phonetic: "/ɪˈmjuːn/", meaning: "adj. 免疫的", example: "A healthy lifestyle boosts your immune system." },
        { word: "lifestyle", phonetic: "/ˈlaɪfstaɪl/", meaning: "n. 生活方式", example: "A healthy lifestyle includes good habits." }
      ],
      sentencePatterns: [
        { english: "It's important to...", chinese: "做...是很重要的", usage: "表达重要性" },
        { english: "One way to... is to...", chinese: "做...的一个方法是...", usage: "提供建议" },
        { english: "Try to...", chinese: "尝试...", usage: "给出建议" },
        { english: "Make sure you...", chinese: "确保你...", usage: "提醒注意" },
        { english: "This helps you...", chinese: "这帮助你...", usage: "说明好处" },
        { english: "You should consider...", chinese: "你应该考虑...", usage: "提出建议" },
        { english: "It's a good idea to...", chinese: "做...是个好主意", usage: "给出建议" },
        { english: "Don't forget to...", chinese: "不要忘记...", usage: "提醒" },
        { english: "The best way to... is...", chinese: "做...最好的方法是...", usage: "提供最佳方案" },
        { english: "Remember that...", chinese: "记住...", usage: "强调重点" }
      ],
      bilingualText: {
        english: `
Living a healthy life doesn't have to be complicated. In fact, there are five simple habits you can start today that will make a huge difference in your overall well-being.

First, prioritize your sleep. Aim for seven to eight hours of quality sleep each night. Sleep is when your body repairs itself, consolidates memories, and regulates hormones. Create a bedtime routine by going to bed at the same time each night and avoiding screens before sleep.

Second, stay hydrated. Drinking enough water throughout the day keeps your energy levels stable, helps with digestion, and improves skin health. Carry a water bottle with you and sip regularly, even when you don't feel thirsty.

Third, move your body daily. You don't need an intense gym workout. Simple activities like walking, stretching, or dancing to your favorite music can improve cardiovascular health, boost mood, and increase energy. Find an activity you enjoy and make it part of your routine.

Fourth, eat nutritious foods. Focus on whole foods like fruits, vegetables, whole grains, lean proteins, and healthy fats. These provide the vitamins, minerals, and antioxidants your body needs to function optimally. Limit processed foods and added sugars.

Fifth, manage your stress. Chronic stress harms both physical and mental health. Practice relaxation techniques like deep breathing, meditation, or yoga. Make time for hobbies and activities that bring you joy.

Remember, building healthy habits takes time. Start with one habit at a time, be patient with yourself, and celebrate small victories. Consistency is more important than perfection. Over time, these simple habits will become second nature, and you'll enjoy the benefits of a healthier, happier life.
        `,
        chinese: `
过上健康的生活并不需要很复杂。事实上，有五个简单的习惯你今天就可以开始，它们会让你的整体健康状况发生巨大变化。

首先，优先保证睡眠。目标是每晚七到八小时的高质量睡眠。睡眠时你的身体进行自我修复、巩固记忆和调节激素。通过每晚同一时间睡觉和睡前避免使用电子设备来建立睡前惯例。

其次，保持水分充足。全天喝足够的水可以保持能量水平稳定，帮助消化，改善皮肤健康。随身携带水瓶，经常小口喝水，即使你不觉得口渴。

第三，每天活动身体。你不需要高强度的健身房锻炼。简单的活动如散步、拉伸或跟着喜欢的音乐跳舞都可以改善心血管健康、提升情绪和增加能量。找到你喜欢的活动，让它成为你日常的一部分。

第四，吃有营养的食物。专注于天然食物，如水果、蔬菜、全谷物、瘦肉蛋白和健康脂肪。这些提供你的身体正常运作所需的维生素、矿物质和抗氧化剂。限制加工食品和添加糖。

第五，管理你的压力。慢性压力会损害身体和心理健康。练习放松技巧，如深呼吸、冥想或瑜伽。为爱好和带给你快乐的活动留出时间。

记住，建立健康习惯需要时间。一次从一个习惯开始，对自己有耐心，庆祝小的胜利。坚持比完美更重要。随着时间的推移，这些简单的习惯会成为第二天性，你将享受更健康、更快乐生活的好处。
        `
      },
      englishText: `
Living a healthy life doesn't have to be complicated. In fact, there are five simple habits you can start today that will make a huge difference in your overall well-being.

First, prioritize your sleep. Aim for seven to eight hours of quality sleep each night. Sleep is when your body repairs itself, consolidates memories, and regulates hormones. Create a bedtime routine by going to bed at the same time each night and avoiding screens before sleep.

Second, stay hydrated. Drinking enough water throughout the day keeps your energy levels stable, helps with digestion, and improves skin health. Carry a water bottle with you and sip regularly, even when you don't feel thirsty.

Third, move your body daily. You don't need an intense gym workout. Simple activities like walking, stretching, or dancing to your favorite music can improve cardiovascular health, boost mood, and increase energy. Find an activity you enjoy and make it part of your routine.

Fourth, eat nutritious foods. Focus on whole foods like fruits, vegetables, whole grains, lean proteins, and healthy fats. These provide the vitamins, minerals, and antioxidants your body needs to function optimally. Limit processed foods and added sugars.

Fifth, manage your stress. Chronic stress harms both physical and mental health. Practice relaxation techniques like deep breathing, meditation, or yoga. Make time for hobbies and activities that bring you joy.

Remember, building healthy habits takes time. Start with one habit at a time, be patient with yourself, and celebrate small victories. Consistency is more important than perfection. Over time, these simple habits will become second nature, and you'll enjoy the benefits of a healthier, happier life.
`,
      dictationExercises: [
        { sentence: "Living a healthy life doesn't have to be ___.", answer: "complicated", hint: "复杂的" },
        { sentence: "Aim for seven to eight hours of quality ___ each night.", answer: "sleep", hint: "睡眠" },
        { sentence: "Drinking enough water keeps your ___ levels stable.", answer: "energy", hint: "能量" },
        { sentence: "Simple activities like walking can ___ cardiovascular health.", answer: "improve", hint: "改善" },
        { sentence: "Focus on ___ foods like fruits and vegetables.", answer: "whole", hint: "天然的" },
        { sentence: "Chronic ___ harms both physical and mental health.", answer: "stress", hint: "压力" },
        { sentence: "Building healthy habits takes ___.", answer: "time", hint: "时间" },
        { sentence: "___ is more important than perfection.", answer: "Consistency", hint: "坚持" }
      ]
    },
    {
      id: "daily-english-why-tired",
      title: "4-为什么你总是感觉很累",
      titleEn: "4 - Why You Always Feel Tired",
      titleChinese: "4-为什么你总是感觉很累",
      description: "了解疲劳的原因，找到恢复活力的方法",
      icon: "😴",
      videoFile: "/videos/daily-english/04-why-tired.mp4",
      vocabulary: [
        { word: "tired", phonetic: "/ˈtaɪəd/", meaning: "adj. 疲倦的，累的", example: "I feel tired after a long day at work." },
        { word: "fatigue", phonetic: "/fəˈtiːɡ/", meaning: "n. 疲劳，疲惫", example: "Chronic fatigue can be a sign of health problems." },
        { word: "exhausted", phonetic: "/ɪɡˈzɔːstɪd/", meaning: "adj. 筋疲力尽的", example: "I was exhausted after the marathon." },
        { word: "energy", phonetic: "/ˈenədʒi/", meaning: "n. 能量，精力", example: "I need more energy to get through the day." },
        { word: "rest", phonetic: "/rest/", meaning: "n./v. 休息", example: "Your body needs rest to recover." },
        { word: "recovery", phonetic: "/rɪˈkʌvəri/", meaning: "n. 恢复", example: "Sleep is essential for muscle recovery." },
        { word: "dehydrate", phonetic: "/ˌdiːhaɪˈdreɪt/", meaning: "v. 脱水", example: "Not drinking enough water can dehydrate you." },
        { word: "anemia", phonetic: "/əˈniːmiə/", meaning: "n. 贫血", example: "Anemia can cause fatigue and weakness." },
        { word: "thyroid", phonetic: "/ˈθaɪrɔɪd/", meaning: "n. 甲状腺", example: "The thyroid gland regulates metabolism." },
        { word: "metabolism", phonetic: "/məˈtæbəlɪzəm/", meaning: "n. 新陈代谢", example: "A slow metabolism can make you feel tired." },
        { word: "caffeine", phonetic: "/ˈkæfiːn/", meaning: "n. 咖啡因", example: "Too much caffeine can disrupt your sleep." },
        { word: "screen", phonetic: "/skriːn/", meaning: "n. 屏幕", example: "Staring at screens all day strains your eyes." },
        { word: "posture", phonetic: "/ˈpɒstʃə(r)/", meaning: "n. 姿势", example: "Poor posture can cause fatigue." },
        { word: "oxygen", phonetic: "/ˈɒksɪdʒən/", meaning: "n. 氧气", example: "Your brain needs oxygen to function properly." },
        { word: "circulation", phonetic: "/ˌsɜːkjəˈleɪʃn/", meaning: "n. 循环", example: "Exercise improves blood circulation." }
      ],
      sentencePatterns: [
        { english: "One common reason for... is...", chinese: "...的一个常见原因是...", usage: "解释原因" },
        { english: "This is because...", chinese: "这是因为...", usage: "进一步解释" },
        { english: "If you..., you may feel...", chinese: "如果你...，你可能会感到...", usage: "说明因果关系" },
        { english: "To fix this, try...", chinese: "要解决这个问题，尝试...", usage: "提供解决方案" },
        { english: "It's worth checking if...", chinese: "值得检查一下是否...", usage: "提出建议" },
        { english: "Make sure you're getting enough...", chinese: "确保你获得足够的...", usage: "提醒注意" },
        { english: "Consider reducing...", chinese: "考虑减少...", usage: "提出建议" },
        { english: "This could be a sign of...", chinese: "这可能是...的迹象", usage: "警示" },
        { english: "The solution is to...", chinese: "解决方法是...", usage: "提供解决方案" },
        { english: "Don't ignore persistent...", chinese: "不要忽视持续的...", usage: "警告" }
      ],
      bilingualText: {
        english: `
Do you often feel tired no matter how much you sleep? Chronic fatigue is a common problem, but understanding the causes can help you find solutions.

One of the most common reasons for constant tiredness is poor sleep quality. You might be sleeping for eight hours, but if your sleep is fragmented or you don't reach deep sleep stages, you won't wake up refreshed. Factors like screen time before bed, caffeine consumption, and irregular sleep schedules can all disrupt sleep quality.

Dehydration is another surprising cause of fatigue. Even mild dehydration can make you feel sluggish and drain your energy. Make sure you're drinking enough water throughout the day, especially if you exercise or live in a hot climate.

Nutritional deficiencies can also lead to tiredness. Low iron levels cause anemia, which reduces oxygen delivery to your tissues. Vitamin B12 and vitamin D deficiencies are also linked to fatigue. Eating a balanced diet with plenty of fruits, vegetables, and lean proteins can help.

A sedentary lifestyle might seem like it would conserve energy, but inactivity actually makes you more tired. Regular exercise improves circulation, boosts energy, and enhances sleep quality. Even a short daily walk can make a difference.

Stress and mental health issues like anxiety or depression are major contributors to fatigue. Chronic stress keeps your body in fight-or-flight mode, which is exhausting. Practice stress management techniques and consider talking to a therapist if needed.

Medical conditions like thyroid disorders, diabetes, or sleep apnea can cause persistent fatigue. If lifestyle changes don't help, consult a doctor to rule out underlying health issues.

To boost your energy, focus on quality sleep, stay hydrated, eat nutritious foods, exercise regularly, and manage stress. Small changes can lead to big improvements in how you feel.
        `,
        chinese: `
你是否经常感到疲倦，无论睡了多少觉？慢性疲劳是一个常见问题，但了解原因可以帮助你找到解决方案。

持续疲倦最常见的原因之一是睡眠质量差。你可能睡了八个小时，但如果你的睡眠支离破碎或没有达到深度睡眠阶段，你就不会精神焕发地醒来。睡前使用电子设备、摄入咖啡因和不规律的睡眠时间表都会扰乱睡眠质量。

脱水是另一个令人惊讶的疲劳原因。即使是轻度脱水也会让你感到懒散，耗尽你的能量。确保全天喝足够的水，特别是如果你锻炼或生活在炎热的气候中。

营养缺乏也会导致疲倦。低铁水平会导致贫血，这会减少氧气输送到你的组织。维生素 B12 和维生素 D 缺乏也与疲劳有关。吃均衡的饮食，多吃水果、蔬菜和瘦肉蛋白，会有所帮助。

久坐不动的生活方式似乎可以节省能量，但实际上不活动会让你更累。定期锻炼可以改善血液循环、提升能量和提高睡眠质量。即使是每天短距离散步也能带来改变。

压力和焦虑或抑郁等心理健康问题是疲劳的主要原因。慢性压力使你的身体处于战斗或逃跑模式，这是非常消耗精力的。练习压力管理技巧，如果需要的话，考虑咨询治疗师。

甲状腺疾病、糖尿病或睡眠呼吸暂停等医疗状况会导致持续性疲劳。如果生活方式的改变没有帮助，请咨询医生以排除潜在的健康问题。

要提升能量，要专注于高质量睡眠、保持水分、吃营养食品、定期锻炼和管理压力。小的改变会让你感觉有很大的改善。
        `
      },
      englishText: `
Do you often feel tired no matter how much you sleep? Chronic fatigue is a common problem, but understanding the causes can help you find solutions.

One of the most common reasons for constant tiredness is poor sleep quality. You might be sleeping for eight hours, but if your sleep is fragmented or you don't reach deep sleep stages, you won't wake up refreshed. Factors like screen time before bed, caffeine consumption, and irregular sleep schedules can all disrupt sleep quality.

Dehydration is another surprising cause of fatigue. Even mild dehydration can make you feel sluggish and drain your energy. Make sure you're drinking enough water throughout the day, especially if you exercise or live in a hot climate.

Nutritional deficiencies can also lead to tiredness. Low iron levels cause anemia, which reduces oxygen delivery to your tissues. Vitamin B12 and vitamin D deficiencies are also linked to fatigue. Eating a balanced diet with plenty of fruits, vegetables, and lean proteins can help.

A sedentary lifestyle might seem like it would conserve energy, but inactivity actually makes you more tired. Regular exercise improves circulation, boosts energy, and enhances sleep quality. Even a short daily walk can make a difference.

Stress and mental health issues like anxiety or depression are major contributors to fatigue. Chronic stress keeps your body in fight-or-flight mode, which is exhausting. Practice stress management techniques and consider talking to a therapist if needed.

Medical conditions like thyroid disorders, diabetes, or sleep apnea can cause persistent fatigue. If lifestyle changes don't help, consult a doctor to rule out underlying health issues.

To boost your energy, focus on quality sleep, stay hydrated, eat nutritious foods, exercise regularly, and manage stress. Small changes can lead to big improvements in how you feel.
`,
      dictationExercises: [
        { sentence: "Chronic ___ is a common problem.", answer: "fatigue", hint: "疲劳" },
        { sentence: "Poor sleep ___ can make you feel tired.", answer: "quality", hint: "质量" },
        { sentence: "Even mild ___ can drain your energy.", answer: "dehydration", hint: "脱水" },
        { sentence: "Low iron levels cause ___.", answer: "anemia", hint: "贫血" },
        { sentence: "A ___ lifestyle makes you more tired.", answer: "sedentary", hint: "久坐的" },
        { sentence: "Regular exercise improves ___.", answer: "circulation", hint: "循环" },
        { sentence: "Chronic stress keeps your body in ___ mode.", answer: "fight-or-flight", hint: "战斗或逃跑" },
        { sentence: "Small changes can lead to big ___.", answer: "improvements", hint: "改善" }
      ]
    },
    {
      id: "daily-english-why-sick",
      title: "5-为什么你这么容易生病",
      titleEn: "5 - Why You Get Sick So Easily",
      titleChinese: "5-为什么你这么容易生病",
      description: "探索免疫系统的工作原理，学会增强抵抗力",
      icon: "🤒",
      videoFile: "/videos/daily-english/05-why-sick.mp4",
      vocabulary: [
        { word: "immune", phonetic: "/ɪˈmjuːn/", meaning: "adj. 免疫的", example: "Your immune system fights off infections." },
        { word: "system", phonetic: "/ˈsɪstəm/", meaning: "n. 系统", example: "The immune system protects your body." },
        { word: "infection", phonetic: "/ɪnˈfekʃn/", meaning: "n. 感染", example: "Wash your hands to prevent infection." },
        { word: "bacteria", phonetic: "/bækˈtɪəriə/", meaning: "n. 细菌", example: "Not all bacteria are harmful." },
        { word: "virus", phonetic: "/ˈvaɪrəs/", meaning: "n. 病毒", example: "The flu virus spreads easily." },
        { word: "germ", phonetic: "/dʒɜːm/", meaning: "n. 病菌", example: "Cover your mouth when you cough to prevent spreading germs." },
        { word: "antibody", phonetic: "/ˈæntibɒdi/", meaning: "n. 抗体", example: "Antibodies help fight infections." },
        { word: "white blood cell", phonetic: "/waɪt blʌd sel/", meaning: "n. 白细胞", example: "White blood cells are part of your immune system." },
        { word: "resistance", phonetic: "/rɪˈzɪstəns/", meaning: "n. 抵抗力", example: "Exercise can increase your resistance to disease." },
        { word: "deficiency", phonetic: "/dɪˈfɪʃnsi/", meaning: "n. 缺乏，不足", example: "Vitamin deficiency can weaken your immune system." },
        { word: "chronic", phonetic: "/ˈkrɒnɪk/", meaning: "adj. 慢性的", example: "Chronic stress harms your health." },
        { word: "inflammation", phonetic: "/ˌɪnfləˈmeɪʃn/", meaning: "n. 炎症", example: "Chronic inflammation is linked to many diseases." },
        { word: "hygiene", phonetic: "/ˈhaɪdʒiːn/", meaning: "n. 卫生", example: "Good hygiene prevents the spread of disease." },
        { word: "vaccine", phonetic: "/ˈvæksiːn/", meaning: "n. 疫苗", example: "Vaccines help your body build immunity." },
        { word: "recovery", phonetic: "/rɪˈkʌvəri/", meaning: "n. 恢复", example: "Rest is important for recovery from illness." }
      ],
      sentencePatterns: [
        { english: "Your immune system is responsible for...", chinese: "你的免疫系统负责...", usage: "解释功能" },
        { english: "When... attacks your body, ...", chinese: "当...攻击你的身体时，...", usage: "描述过程" },
        { english: "This is why... is important.", chinese: "这就是为什么...很重要。", usage: "强调重要性" },
        { english: "Without enough..., your body can't...", chinese: "没有足够的...，你的身体无法...", usage: "说明必要性" },
        { english: "To strengthen your..., you should...", chinese: "要增强你的...，你应该...", usage: "提供建议" },
        { english: "Research shows that...", chinese: "研究表明...", usage: "引用研究" },
        { english: "One way to... is to...", chinese: "做...的一个方法是...", usage: "提供方法" },
        { english: "Avoid... as much as possible.", chinese: "尽可能避免...", usage: "提出警告" },
        { english: "If you notice..., you should...", chinese: "如果你注意到...，你应该...", usage: "提出建议" },
        { english: "The key to... is...", chinese: "...的关键是...", usage: "强调关键" }
      ],
      bilingualText: {
        english: `
Do you seem to catch every cold that goes around? Some people rarely get sick, while others are always battling bugs. The difference often comes down to the strength of your immune system.

Your immune system is your body's defense against infections, bacteria, viruses, and other harmful invaders. When it's working properly, it identifies and destroys these threats before you even notice them. But when your immune system is weakened, you become more susceptible to illness.

Several factors can weaken your immune response. Chronic stress is a major culprit. When you're stressed, your body produces cortisol, a hormone that suppresses immune function. This is why you might get sick more often during stressful periods.

Lack of sleep is another immune system suppressor. During sleep, your body produces cytokines, proteins that help fight infection. Without adequate sleep, your body can't produce enough of these protective proteins.

Poor nutrition also plays a role. Your immune system needs vitamins and minerals to function properly. Deficiencies in vitamin C, vitamin D, zinc, and other nutrients can impair immune response. Eating a diet rich in fruits, vegetables, and whole grains provides the fuel your immune system needs.

A sedentary lifestyle can make you more prone to illness. Regular moderate exercise improves circulation, which helps immune cells move through your body more effectively. However, excessive intense exercise can temporarily weaken immunity.

Other factors include dehydration, smoking, excessive alcohol consumption, and poor hygiene. All of these can compromise your body's ability to fight off infections.

To strengthen your immune system, focus on managing stress, getting enough sleep, eating nutritious foods, exercising regularly, staying hydrated, and practicing good hygiene. These healthy habits will help your body defend itself against illness.
        `,
        chinese: `
你似乎每次感冒都逃不掉？有些人很少生病，而另一些人总是在与疾病作斗争。区别通常在于免疫系统的强弱。

你的免疫系统是你身体抵御感染、细菌、病毒和其他有害入侵者的防御系统。当它正常工作时，它会在你注意到之前就识别并消灭这些威胁。但当你的免疫系统被削弱时，你就更容易生病。

有几个因素会削弱你的免疫反应。慢性压力是主要原因。当你有压力时，你的身体会产生皮质醇，这是一种抑制免疫功能的激素。这就是为什么在压力大的期间你可能会更经常生病。

睡眠不足是另一个免疫系统抑制剂。在睡眠期间，你的身体会产生细胞因子，这是帮助对抗感染的蛋白质。没有足够的睡眠，你的身体就无法产生足够的这些保护性蛋白质。

营养不良也起着作用。你的免疫系统需要维生素和矿物质才能正常运作。维生素 C、维生素 D、锌和其他营养素的缺乏会损害免疫反应。吃富含水果、蔬菜和全谷物的饮食可以为你的免疫系统提供所需的能量。

久坐不动的生活方式会让你更容易生病。定期的适度运动可以改善血液循环，帮助免疫细胞更有效地在体内移动。然而，过度的剧烈运动可能会暂时削弱免疫力。

其他因素包括脱水、吸烟、过量饮酒和个人卫生差。所有这些都会损害你的身体抵抗感染的能力。

要增强你的免疫系统，要专注于管理压力、获得充足的睡眠、吃营养食品、定期锻炼、保持水分和保持良好的卫生习惯。这些健康的习惯将帮助你的身体抵御疾病。
        `
      },
      englishText: `
Do you seem to catch every cold that goes around? Some people rarely get sick, while others are always battling bugs. The difference often comes down to the strength of your immune system.

Your immune system is your body's defense against infections, bacteria, viruses, and other harmful invaders. When it's working properly, it identifies and destroys these threats before you even notice them. But when your immune system is weakened, you become more susceptible to illness.

Several factors can weaken your immune response. Chronic stress is a major culprit. When you're stressed, your body produces cortisol, a hormone that suppresses immune function. This is why you might get sick more often during stressful periods.

Lack of sleep is another immune system suppressor. During sleep, your body produces cytokines, proteins that help fight infection. Without adequate sleep, your body can't produce enough of these protective proteins.

Poor nutrition also plays a role. Your immune system needs vitamins and minerals to function properly. Deficiencies in vitamin C, vitamin D, zinc, and other nutrients can impair immune response. Eating a diet rich in fruits, vegetables, and whole grains provides the fuel your immune system needs.

A sedentary lifestyle can make you more prone to illness. Regular moderate exercise improves circulation, which helps immune cells move through your body more effectively. However, excessive intense exercise can temporarily weaken immunity.

Other factors include dehydration, smoking, excessive alcohol consumption, and poor hygiene. All of these can compromise your body's ability to fight off infections.

To strengthen your immune system, focus on managing stress, getting enough sleep, eating nutritious foods, exercising regularly, staying hydrated, and practicing good hygiene. These healthy habits will help your body defend itself against illness.
`,
      dictationExercises: [
        { sentence: "Your ___ system is your body's defense against infections.", answer: "immune", hint: "免疫" },
        { sentence: "Chronic ___ is a major culprit that weakens immunity.", answer: "stress", hint: "压力" },
        { sentence: "During sleep, your body produces ___.", answer: "cytokines", hint: "细胞因子" },
        { sentence: "Poor ___ also plays a role in weakening immunity.", answer: "nutrition", hint: "营养" },
        { sentence: "Regular moderate exercise improves ___.", answer: "circulation", hint: "循环" },
        { sentence: "Excessive intense exercise can ___ weaken immunity.", answer: "temporarily", hint: "暂时地" },
        { sentence: "Staying hydrated helps your body fight ___ infections.", answer: "off", hint: "抵抗" },
        { sentence: "These healthy habits help your body ___ itself against illness.", answer: "defend", hint: "防御" }
      ]
    }
  ]
};

// 雅思英语课程
export const ieltsEnglishCourse: CourseCategory = {
  id: "ielts-english",
  title: "雅思英语",
  titleEn: "IELTS English",
  description: "系统化雅思备考，提升听说读写能力",
  icon: "📚",
  color: "#059669",
  subCourses: [
    {
      id: "ielts-speaking-01",
      title: "雅思口语训练 01",
      titleEn: "IELTS Speaking Training 01",
      titleChinese: "雅思口语训练 01",
      description: "8.5 分雅思口语 SHARI - 第一部分",
      icon: "🗣️",
      videoFile: "/videos/ielts-english/01-speaking-training.mp4",
      vocabulary: [
        { word: "IELTS", phonetic: "/ˈaɪelts/", meaning: "n. 雅思考试", example: "I am preparing for the IELTS exam." },
        { word: "speaking", phonetic: "/ˈspiːkɪŋ/", meaning: "n. 口语，说话", example: "The speaking test is one part of IELTS." },
        { word: "fluency", phonetic: "/ˈfluːənsi/", meaning: "n. 流利度", example: "Fluency is an important criterion in IELTS speaking." },
        { word: "pronunciation", phonetic: "/prəˌnʌnsiˈeɪʃn/", meaning: "n. 发音", example: "Good pronunciation helps you score higher." },
        { word: "vocabulary", phonetic: "/vəˈkæbjələri/", meaning: "n. 词汇量", example: "A wide vocabulary is essential for a high score." },
        { word: "grammar", phonetic: "/ˈɡræmə(r)/", meaning: "n. 语法", example: "Grammar accuracy is assessed in the speaking test." },
        { word: "coherence", phonetic: "/kəʊˈhɪərəns/", meaning: "n. 连贯性", example: "Coherence makes your speech easier to follow." },
        { word: "criteria", phonetic: "/kraɪˈtɪəriə/", meaning: "n. 标准（复数）", example: "There are four assessment criteria for IELTS speaking." },
        { word: "examiner", phonetic: "/ɪɡˈzæmɪnə(r)/", meaning: "n. 考官", example: "The examiner will ask you questions." },
        { word: "response", phonetic: "/rɪˈspɒns/", meaning: "n. 回答，回应", example: "Give a detailed response to each question." },
        { word: "elaborate", phonetic: "/ɪˈlæbərət/", meaning: "v. 详细说明", example: "You should elaborate on your answers." },
        { word: "confident", phonetic: "/ˈkɒnfɪdənt/", meaning: "adj. 自信的", example: "Be confident when speaking." },
        { word: "natural", phonetic: "/ˈnætʃrəl/", meaning: "adj. 自然的", example: "Try to speak in a natural way." },
        { word: "idiomatic", phonetic: "/ˌɪdiəˈmætɪk/", meaning: "adj. 地道的", example: "Using idiomatic language can boost your score." },
        { word: "collocation", phonetic: "/ˌkɒləˈkeɪʃn/", meaning: "n. 词语搭配", example: "Learning collocations helps you sound more natural." }
      ],
      sentencePatterns: [
        { english: "I'd like to talk about...", chinese: "我想谈谈...", usage: "引入话题" },
        { english: "In my opinion...", chinese: "在我看来...", usage: "表达观点" },
        { english: "From my perspective...", chinese: "从我的角度来看...", usage: "表达个人观点" },
        { english: "That's an interesting question...", chinese: "这是个有趣的问题...", usage: "争取思考时间" },
        { english: "Let me think about that...", chinese: "让我想想...", usage: "争取思考时间" },
        { english: "To be honest...", chinese: "老实说...", usage: "表达真实想法" },
        { english: "Actually, ...", chinese: "实际上，...", usage: "补充或纠正信息" },
        { english: "On the one hand... on the other hand...", chinese: "一方面...另一方面...", usage: "对比两种情况" },
        { english: "It depends on...", chinese: "这取决于...", usage: "表达条件" },
        { english: "Generally speaking, ...", chinese: "一般来说，...", usage: "概括性陈述" },
        { english: "What I mean is...", chinese: "我的意思是...", usage: "解释说明" },
        { english: "For instance, ...", chinese: "例如，...", usage: "举例说明" }
      ],
      bilingualText: {
        english: `
Welcome to this IELTS speaking training session. I'm SHARI, and I achieved a band score of 8.5 in my IELTS exam. In this video, I will share my tips and strategies for success in the speaking test.

The IELTS speaking test consists of three parts. Part one is an introduction and interview where the examiner asks you general questions about familiar topics such as your home, family, work, studies, and interests. Part two is an individual long turn where you receive a task card and have one minute to prepare your response. You then speak for one to two minutes. Part three is a two-way discussion where the examiner asks more abstract questions related to the topic in part two.

There are four assessment criteria for the speaking test. Fluency and coherence measures your ability to speak at length and organize ideas logically. Lexical resource evaluates your vocabulary range and accuracy. Grammatical range and accuracy assesses your ability to use different sentence structures correctly. Pronunciation examines how clearly you speak and whether you use appropriate stress and intonation.

To improve your fluency, practice speaking English every day. You can talk to yourself in the mirror, record your voice, or find a speaking partner. The key is to build confidence and reduce hesitation. Don't worry about making mistakes; focus on communicating your ideas clearly.

For vocabulary, learn topic-specific words and phrases. Instead of memorizing random words, study vocabulary in context. Read articles, watch videos, and note down useful expressions. Practice using new words in sentences to make them part of your active vocabulary.

Grammar is essential for a high score. Review common grammar points such as tenses, conditionals, and complex sentences. Practice using a variety of sentence structures in your responses. The more diverse your grammar, the higher your score will be.

Pronunciation is not about having a British or American accent. It's about speaking clearly and being understood. Pay attention to word stress, sentence stress, and intonation. Listen to native speakers and try to imitate their rhythm and melody.

Remember, the examiner wants you to succeed. They are not trying to catch you out; they want to hear you speak. Be confident, be natural, and do your best. With consistent practice and the right strategies, you can achieve your target band score. Good luck!
        `,
        chinese: `
欢迎参加这个雅思口语训练课程。我是 SHARI，我在雅思考试中取得了 8.5 分的成绩。在这个视频中，我将分享我在口语考试中的成功技巧和策略。

雅思口语考试由三部分组成。第一部分是介绍和面试，考官会问一些关于熟悉话题的一般性问题，比如你的家庭、工作、学习和兴趣爱好。第二部分是个人的长时间发言，你会收到一张任务卡，有一分钟准备时间，然后发言一到两分钟。第三部分是双向讨论，考官会问一些与第二部分话题相关的更抽象的问题。

口语考试有四个评估标准。流利度和连贯性衡量你长篇发言和逻辑组织思想的能力。词汇资源评估你的词汇范围和准确性。语法范围和准确性评估你正确使用不同句型的能力。发音检查你说话的清晰度以及是否使用适当的重音和语调。

要提高流利度，每天练习说英语。你可以对着镜子自言自语，录下自己的声音，或者找一个口语伙伴。关键是建立自信，减少犹豫。不要担心犯错误，专注于清晰地表达你的想法。

对于词汇，学习特定话题的单词和短语。与其死记硬背随机单词，不如在语境中学习词汇。阅读文章、观看视频，记下有用的表达。在句子中练习使用新单词，让它们成为你的主动词汇。

语法对于高分至关重要。复习常见的语法点，如时态、条件句和复杂句。练习在回答中使用各种句型。语法越多样化，分数就越高。

发音不是要拥有英式或美式口音，而是要说得清楚，让人理解。注意单词重音、句子重音和语调。听母语人士说话，尝试模仿他们的节奏和韵律。

记住，考官希望你成功。他们不是要为难你，他们想听你说话。要自信、自然，尽力而为。通过持续的练习和正确的策略，你可以实现目标分数。祝你好运！
        `
      },
      englishText: `
Welcome to this IELTS speaking training session. I'm SHARI, and I achieved a band score of 8.5 in my IELTS exam. In this video, I will share my tips and strategies for success in the speaking test.

The IELTS speaking test consists of three parts. Part one is an introduction and interview where the examiner asks you general questions about familiar topics such as your home, family, work, studies, and interests. Part two is an individual long turn where you receive a task card and have one minute to prepare your response. You then speak for one to two minutes. Part three is a two-way discussion where the examiner asks more abstract questions related to the topic in part two.

There are four assessment criteria for the speaking test. Fluency and coherence measures your ability to speak at length and organize ideas logically. Lexical resource evaluates your vocabulary range and accuracy. Grammatical range and accuracy assesses your ability to use different sentence structures correctly. Pronunciation examines how clearly you speak and whether you use appropriate stress and intonation.

To improve your fluency, practice speaking English every day. You can talk to yourself in the mirror, record your voice, or find a speaking partner. The key is to build confidence and reduce hesitation. Don't worry about making mistakes; focus on communicating your ideas clearly.

For vocabulary, learn topic-specific words and phrases. Instead of memorizing random words, study vocabulary in context. Read articles, watch videos, and note down useful expressions. Practice using new words in sentences to make them part of your active vocabulary.

Grammar is essential for a high score. Review common grammar points such as tenses, conditionals, and complex sentences. Practice using a variety of sentence structures in your responses. The more diverse your grammar, the higher your score will be.

Pronunciation is not about having a British or American accent. It's about speaking clearly and being understood. Pay attention to word stress, sentence stress, and intonation. Listen to native speakers and try to imitate their rhythm and melody.

Remember, the examiner wants you to succeed. They are not trying to catch you out; they want to hear you speak. Be confident, be natural, and do your best. With consistent practice and the right strategies, you can achieve your target band score. Good luck!
`,
      dictationExercises: [
        { sentence: "The IELTS speaking test ___ of three parts.", answer: "consists", hint: "由...组成" },
        { sentence: "Fluency and ___ measure your ability to speak at length.", answer: "coherence", hint: "连贯性" },
        { sentence: "Lexical resource evaluates your ___ range.", answer: "vocabulary", hint: "词汇" },
        { sentence: "Practice speaking English every ___ to improve fluency.", answer: "day", hint: "天" },
        { sentence: "The key is to build ___ and reduce hesitation.", answer: "confidence", hint: "自信" },
        { sentence: "Grammar is ___ for a high score.", answer: "essential", hint: "必要的" },
        { sentence: "Pronunciation is about speaking ___ and being understood.", answer: "clearly", hint: "清楚地" },
        { sentence: "With consistent ___, you can achieve your target score.", answer: "practice", hint: "练习" }
      ]
    },
    {
      id: "ielts-speaking-02",
      title: "雅思口语训练 02",
      titleEn: "IELTS Speaking Training 02",
      titleChinese: "雅思口语训练 02",
      description: "8.5 分雅思口语 SHARI - 第二部分",
      icon: "🗣️",
      videoFile: "/videos/ielts-english/02-speaking-training.mp4",
      vocabulary: [
        { word: "strategy", phonetic: "/ˈstrætədʒi/", meaning: "n. 策略", example: "Having a good strategy helps you manage your time." },
        { word: "technique", phonetic: "/tekˈniːk/", meaning: "n. 技巧", example: "This technique can improve your speaking score." },
        { word: "framework", phonetic: "/ˈfreɪmwɜːk/", meaning: "n. 框架", example: "Use this framework to structure your answer." },
        { word: "elaborate", phonetic: "/ɪˈlæbərət/", meaning: "v. 详细说明", example: "You need to elaborate on your main points." },
        { word: "relevant", phonetic: "/ˈreləvənt/", meaning: "adj. 相关的", example: "Make sure your examples are relevant to the topic." },
        { word: "structure", phonetic: "/ˈstrʌktʃə(r)/", meaning: "n. 结构 v. 组织", example: "A clear structure makes your answer easier to follow." },
        { word: "introduction", phonetic: "/ˌɪntrəˈdʌkʃn/", meaning: "n. 介绍，引言", example: "Start with a brief introduction." },
        { word: "conclusion", phonetic: "/kənˈkluːʒn/", meaning: "n. 结论", example: "End your answer with a conclusion." },
        { word: "transition", phonetic: "/trænˈzɪʃn/", meaning: "n. 过渡", example: "Use transitions to connect your ideas." },
        { word: "example", phonetic: "/ɪɡˈzɑːmpl/", meaning: "n. 例子", example: "Give specific examples to support your point." },
        { word: "detail", phonetic: "/ˈdiːteɪl/", meaning: "n. 细节", example: "Adding details makes your answer more interesting." },
        { word: "organize", phonetic: "/ˈɔːɡənaɪz/", meaning: "v. 组织", example: "Organize your thoughts before speaking." },
        { word: "priority", phonetic: "/praɪˈɒrəti/", meaning: "n. 优先事项", example: "Your priority should be clear communication." },
        { word: "feedback", phonetic: "/ˈfiːdbæk/", meaning: "n. 反馈", example: "Ask for feedback from your teacher." },
        { word: "improvement", phonetic: "/ɪmˈpruːvmənt/", meaning: "n. 改进", example: "Continuous improvement is the key to success." }
      ],
      sentencePatterns: [
        { english: "First of all, ...", chinese: "首先，...", usage: "开始叙述" },
        { english: "Moving on to...", chinese: "接下来谈谈...", usage: "过渡到新话题" },
        { english: "Another point I'd like to make is...", chinese: "我想说的另一点是...", usage: "补充观点" },
        { english: "To give you an example...", chinese: "举个例子...", usage: "举例说明" },
        { english: "This is because...", chinese: "这是因为...", usage: "解释原因" },
        { english: "As a result, ...", chinese: "因此，...", usage: "表达结果" },
        { english: "In conclusion, ...", chinese: "总之，...", usage: "总结" },
        { english: "Looking back, ...", chinese: "回顾过去，...", usage: "回忆过去" },
        { english: "In the future, I hope...", chinese: "未来，我希望...", usage: "谈论未来" },
        { english: "The reason why... is that...", chinese: "...的原因是...", usage: "解释原因" }
      ],
      bilingualText: {
        english: `
In this second part of our IELTS speaking training, we will focus on Part 2 of the speaking test, also known as the individual long turn. This is where many students feel nervous, but with the right preparation and strategy, you can excel in this section.

When you enter Part 2, the examiner will give you a task card with a topic and several bullet points that you should cover in your response. You will have one minute to prepare and make notes, and then you need to speak for one to two minutes without interruption.

The key to success in Part 2 is to use your preparation time wisely. Don't just sit there thinking; write down key words and ideas for each bullet point. Organize your notes in a logical order that you can follow while speaking. This will help you stay on track and ensure you cover all the required points.

A useful framework for Part 2 is the PPIC method. P stands for Point - state your main point clearly. The second P is Proof - provide evidence or examples to support your point. I is for Impact - explain why this matters or how it affected you. C is for Connection - link back to the topic or transition to your next point.

When you start speaking, begin with a brief introduction that directly addresses the topic. Then, work through each bullet point systematically. Don't rush; speak at a natural pace. If you finish before two minutes, the examiner may ask you to continue, so it's better to have more content than less.

Use the bullet points as a guide, but don't feel constrained by them. You can add additional details and examples to make your response more interesting and personalized. The examiner wants to hear you speak at length, so take this opportunity to showcase your language abilities.

Remember to use a variety of vocabulary and grammar structures. Show off the idiomatic expressions and complex sentences you've practiced. But don't force it; natural communication is more important than showing off difficult words.

Finally, practice is essential. Record yourself answering Part 2 questions and listen to your responses. Identify areas for improvement such as filler words, repetition, or grammar mistakes. With consistent practice, you will become more confident and fluent in your long turn responses.
        `,
        chinese: `
在我们雅思口语训练的第二部分，我们将专注于口语考试的第二部分，也称为个人长时间发言。这是许多学生感到紧张的环节，但有了正确的准备和策略，你可以在这一部分表现出色。

当你进入第二部分时，考官会给你一张任务卡，上面有一个话题和几个要点，你应该在回答中涵盖这些要点。你有一分钟的准备时间做笔记，然后你需要不间断地发言一到两分钟。

第二部分成功的关键是明智地利用准备时间。不要只是坐在那里思考；为每个要点写下关键词和想法。按照逻辑顺序组织你的笔记，这样你在说话时可以遵循。这将帮助你保持方向，确保涵盖所有要求的要点。

第二部分一个有用的框架是 PPIC 方法。P 代表 Point（观点）- 清楚地陈述你的主要观点。第二个 P 是 Proof（证据）- 提供证据或例子来支持你的观点。I 是 Impact（影响）- 解释为什么这很重要或它如何影响了你。C 是 Connection（连接）- 回扣话题或过渡到下一个观点。

当你开始发言时，先简要介绍，直接切题。然后，系统地处理每个要点。不要匆忙；以自然的速度说话。如果你在两分钟前结束，考官可能会要求你继续，所以内容多一点比少一点好。

将要点作为指导，但不要感到受其约束。你可以添加额外的细节和例子，让你的回答更有趣、更个性化。考官想听你长篇发言，所以抓住这个机会展示你的语言能力。

记住要使用各种词汇和语法结构。展示你练习过的地道表达和复杂句型。但不要强求；自然的交流比炫耀难词更重要。

最后，练习至关重要。录下自己回答第二部分问题的声音，然后听你的回答。找出需要改进的地方，如填充词、重复或语法错误。通过持续的练习，你会在长时间发言中变得更加自信和流利。
        `
      },
      englishText: `
In this second part of our IELTS speaking training, we will focus on Part 2 of the speaking test, also known as the individual long turn. This is where many students feel nervous, but with the right preparation and strategy, you can excel in this section.

When you enter Part 2, the examiner will give you a task card with a topic and several bullet points that you should cover in your response. You will have one minute to prepare and make notes, and then you need to speak for one to two minutes without interruption.

The key to success in Part 2 is to use your preparation time wisely. Don't just sit there thinking; write down key words and ideas for each bullet point. Organize your notes in a logical order that you can follow while speaking. This will help you stay on track and ensure you cover all the required points.

A useful framework for Part 2 is the PPIC method. P stands for Point - state your main point clearly. The second P is Proof - provide evidence or examples to support your point. I is for Impact - explain why this matters or how it affected you. C is for Connection - link back to the topic or transition to your next point.

When you start speaking, begin with a brief introduction that directly addresses the topic. Then, work through each bullet point systematically. Don't rush; speak at a natural pace. If you finish before two minutes, the examiner may ask you to continue, so it's better to have more content than less.

Use the bullet points as a guide, but don't feel constrained by them. You can add additional details and examples to make your response more interesting and personalized. The examiner wants to hear you speak at length, so take this opportunity to showcase your language abilities.

Remember to use a variety of vocabulary and grammar structures. Show off the idiomatic expressions and complex sentences you've practiced. But don't force it; natural communication is more important than showing off difficult words.

Finally, practice is essential. Record yourself answering Part 2 questions and listen to your responses. Identify areas for improvement such as filler words, repetition, or grammar mistakes. With consistent practice, you will become more confident and fluent in your long turn responses.
`,
      dictationExercises: [
        { sentence: "Part 2 is known as the individual ___ turn.", answer: "long", hint: "长的" },
        { sentence: "You have one minute to prepare and make ___.", answer: "notes", hint: "笔记" },
        { sentence: "The ___ to success is to use your preparation time wisely.", answer: "key", hint: "关键" },
        { sentence: "Organize your notes in a ___ order.", answer: "logical", hint: "逻辑的" },
        { sentence: "P stands for Point - state your main ___ clearly.", answer: "point", hint: "观点" },
        { sentence: "Speak at a ___ pace.", answer: "natural", hint: "自然的" },
        { sentence: "The examiner wants to hear you speak at ___.", answer: "length", hint: "篇幅" },
        { sentence: "___ is essential for success.", answer: "Practice", hint: "练习" }
      ]
    },
    {
      id: "ielts-speaking-03",
      title: "雅思口语训练 03",
      titleEn: "IELTS Speaking Training 03",
      titleChinese: "雅思口语训练 03",
      description: "8.5 分雅思口语 SHARI - 第三部分",
      icon: "🗣️",
      videoFile: "/videos/ielts-english/03-speaking-training.mp4",
      vocabulary: [
        { word: "discussion", phonetic: "/dɪˈskʌʃn/", meaning: "n. 讨论", example: "Part 3 is a two-way discussion with the examiner." },
        { word: "abstract", phonetic: "/ˈæbstrækt/", meaning: "adj. 抽象的", example: "Part 3 questions are more abstract than Part 1." },
        { word: "analyze", phonetic: "/ˈænəlaɪz/", meaning: "v. 分析", example: "You need to analyze the topic from different angles." },
        { word: "evaluate", phonetic: "/ɪˈvæljueɪt/", meaning: "v. 评估", example: "Evaluate both sides of the argument." },
        { word: "speculate", phonetic: "/ˈspekjuleɪt/", meaning: "v. 推测", example: "You may need to speculate about future trends." },
        { word: "compare", phonetic: "/kəmˈpeə(r)/", meaning: "v. 比较", example: "Compare the past and present situations." },
        { word: "contrast", phonetic: "/ˈkɒntrɑːst/", meaning: "v. 对比 n. 对比", example: "Contrast different cultural perspectives." },
        { word: "opinion", phonetic: "/əˈpɪnjən/", meaning: "n. 观点，意见", example: "Express your opinion clearly and confidently." },
        { word: "argument", phonetic: "/ˈɑːɡjumənt/", meaning: "n. 论点，争论", example: "Support your argument with reasons and examples." },
        { word: "perspective", phonetic: "/pəˈspektɪv/", meaning: "n. 视角，观点", example: "Consider the issue from different perspectives." },
        { word: "societal", phonetic: "/səˈsaɪətl/", meaning: "adj. 社会的", example: "Discuss societal changes and their impact." },
        { word: "global", phonetic: "/ˈɡləʊbl/", meaning: "adj. 全球的", example: "Many Part 3 topics are global issues." },
        { word: "trend", phonetic: "/trend/", meaning: "n. 趋势", example: "What trends do you predict for the future?" },
        { word: "implication", phonetic: "/ˌɪmplɪˈkeɪʃn/", meaning: "n. 含义，影响", example: "Consider the implications of your answer." },
        { word: "justification", phonetic: "/ˌdʒʌstɪfɪˈkeɪʃn/", meaning: "n. 理由，辩护", example: "Provide justification for your viewpoint." }
      ],
      sentencePatterns: [
        { english: "From a societal perspective, ...", chinese: "从社会角度来看，...", usage: "从社会角度分析" },
        { english: "There are two sides to this argument...", chinese: "这个论点有两方面...", usage: "辩证分析" },
        { english: "On the one hand... but on the other hand...", chinese: "一方面...但另一方面...", usage: "对比分析" },
        { english: "It could be argued that...", chinese: "有人可能会认为...", usage: "引出不同观点" },
        { english: "This is particularly true when...", chinese: "当...时尤其如此", usage: "强调特定情况" },
        { english: "Looking at the bigger picture, ...", chinese: "从大局来看，...", usage: "宏观分析" },
        { english: "In today's modern world, ...", chinese: "在当今现代世界，...", usage: "联系现实" },
        { english: "This raises the question of...", chinese: "这引发了关于...的问题", usage: "引出深入讨论" },
        { english: "I tend to think that...", chinese: "我倾向于认为...", usage: "表达倾向性观点" },
        { english: "While it's true that..., we must also consider...", chinese: "虽然...是真的，但我们也必须考虑...", usage: "让步转折" }
      ],
      bilingualText: {
        english: `
Welcome to the third part of our IELTS speaking training series. In this video, we will tackle Part 3 of the speaking test, which is often considered the most challenging section. Part 3 is a two-way discussion with the examiner, where you will be asked more abstract and complex questions related to the topic you discussed in Part 2.

The main difference between Part 3 and the earlier parts is the level of abstraction. While Part 1 focuses on familiar personal topics and Part 2 on a specific subject, Part 3 requires you to think more broadly and analytically. You may be asked to discuss societal trends, compare different cultures, evaluate policies, or speculate about the future.

One effective strategy for Part 3 is to use the AREA method. A stands for Answer - directly respond to the question. R is for Reason - explain why you think this way. E is for Example - provide a relevant example to illustrate your point. A is for Alternative - acknowledge other perspectives or potential exceptions.

When answering Part 3 questions, it's important to expand your responses. Don't give one-sentence answers; instead, develop your ideas fully. The examiner wants to hear how well you can express complex thoughts in English. Aim to speak for at least 3-4 sentences per answer.

Another key skill in Part 3 is showing flexibility in your thinking. If the examiner asks you to compare two things, discuss both similarities and differences. If asked for your opinion, present your view but also acknowledge alternative perspectives. This demonstrates critical thinking and language sophistication.

Vocabulary becomes even more important in Part 3. You should use more formal and academic language compared to Parts 1 and 2. Incorporate topic-specific vocabulary, idiomatic expressions, and complex grammatical structures. However, remember that clarity and natural communication should always be your priority.

Practice is crucial for Part 3 success. Find sample Part 3 questions and practice answering them with a timer. Record your responses and analyze them for areas of improvement. Work on expanding your answers, using varied vocabulary, and speaking fluently without excessive hesitation.

Remember, Part 3 is your opportunity to showcase your highest language abilities. The examiner is looking for evidence that you can handle complex academic discussions in English. With thorough preparation and confident delivery, you can excel in this challenging section and achieve your target band score.
        `,
        chinese: `
欢迎来到我们雅思口语训练系列的第三部分。在这个视频中，我们将攻克口语考试的第三部分，这通常被认为是最具挑战性的环节。第三部分是与考官的双向讨论，你会被问到与第二部分讨论的话题相关的更抽象和复杂的问题。

第三部分与前面部分的主要区别在于抽象程度。第一部分侧重于熟悉的个人话题，第二部分侧重于特定主题，而第三部分要求你更广泛、更分析性地思考。你可能会被要求讨论社会趋势、比较不同文化、评估政策或推测未来。

第三部分的一个有效策略是 AREA 方法。A 代表 Answer（回答）- 直接回答问题。R 是 Reason（理由）- 解释你为什么这样想。E 是 Example（例子）- 提供相关例子来说明你的观点。A 是 Alternative（替代）- 承认其他观点或可能的例外。

回答第三部分问题时，扩展你的回答很重要。不要给出一句话的答案；相反，要充分发展你的想法。考官想听你如何用英语表达复杂的思想。每个答案至少要说 3-4 句话。

第三部分的另一个关键技能是展示思维的灵活性。如果考官要求你比较两件事物，讨论相似点和不同点。如果询问你的观点，提出你的看法但也要承认其他视角。这展示了批判性思维和语言的复杂性。

词汇在第三部分变得更加重要。与第一部分和第二部分相比，你应该使用更正式、更学术的语言。融入特定话题的词汇、地道表达和复杂的语法结构。然而，记住清晰和自然的交流应该始终是你的优先事项。

练习对第三部分的成功至关重要。找到第三部分的样题，用计时器练习回答。录下你的回答并分析需要改进的地方。努力扩展你的答案，使用多样化的词汇，流利地说话而不过度犹豫。

记住，第三部分是你展示最高语言能力的机会。考官在寻找你能用英语处理复杂学术讨论的证据。通过充分的准备和自信的发挥，你可以在这个具有挑战性的部分表现出色，实现你的目标分数。
        `
      },
      englishText: `
Welcome to the third part of our IELTS speaking training series. In this video, we will tackle Part 3 of the speaking test, which is often considered the most challenging section. Part 3 is a two-way discussion with the examiner, where you will be asked more abstract and complex questions related to the topic you discussed in Part 2.

The main difference between Part 3 and the earlier parts is the level of abstraction. While Part 1 focuses on familiar personal topics and Part 2 on a specific subject, Part 3 requires you to think more broadly and analytically. You may be asked to discuss societal trends, compare different cultures, evaluate policies, or speculate about the future.

One effective strategy for Part 3 is to use the AREA method. A stands for Answer - directly respond to the question. R is for Reason - explain why you think this way. E is for Example - provide a relevant example to illustrate your point. A is for Alternative - acknowledge other perspectives or potential exceptions.

When answering Part 3 questions, it's important to expand your responses. Don't give one-sentence answers; instead, develop your ideas fully. The examiner wants to hear how well you can express complex thoughts in English. Aim to speak for at least 3-4 sentences per answer.

Another key skill in Part 3 is showing flexibility in your thinking. If the examiner asks you to compare two things, discuss both similarities and differences. If asked for your opinion, present your view but also acknowledge alternative perspectives. This demonstrates critical thinking and language sophistication.

Vocabulary becomes even more important in Part 3. You should use more formal and academic language compared to Parts 1 and 2. Incorporate topic-specific vocabulary, idiomatic expressions, and complex grammatical structures. However, remember that clarity and natural communication should always be your priority.

Practice is crucial for Part 3 success. Find sample Part 3 questions and practice answering them with a timer. Record your responses and analyze them for areas of improvement. Work on expanding your answers, using varied vocabulary, and speaking fluently without excessive hesitation.

Remember, Part 3 is your opportunity to showcase your highest language abilities. The examiner is looking for evidence that you can handle complex academic discussions in English. With thorough preparation and confident delivery, you can excel in this challenging section and achieve your target band score.
`,
      dictationExercises: [
        { sentence: "Part 3 is a ___ discussion with the examiner.", answer: "two-way", hint: "双向的" },
        { sentence: "Part 3 questions are more ___ than earlier parts.", answer: "abstract", hint: "抽象的" },
        { sentence: "A stands for Answer - directly ___ to the question.", answer: "respond", hint: "回答" },
        { sentence: "Don't give one-___ answers.", answer: "sentence", hint: "句子" },
        { sentence: "Show ___ in your thinking.", answer: "flexibility", hint: "灵活性" },
        { sentence: "Use more formal and ___ language.", answer: "academic", hint: "学术的" },
        { sentence: "Clarity should be your ___.", answer: "priority", hint: "优先事项" },
        { sentence: "Practice is ___ for success.", answer: "crucial", hint: "关键的" }
      ]
    },
    {
      id: "ielts-speaking-04",
      title: "雅思口语训练 04",
      titleEn: "IELTS Speaking Training 04",
      titleChinese: "雅思口语训练 04",
      description: "8.5 分雅思口语 SHARI - 第四部分：高分答案技巧",
      icon: "🗣️",
      videoFile: "/videos/ielts-english/04-speaking-training.mp4",
      vocabulary: [
        { word: "band score", phonetic: "/bænd skɔːr/", meaning: "n. 分数等级", example: "I hope to achieve a band score of 7 or higher." },
        { word: "criterion", phonetic: "/kraɪˈtɪəriən/", meaning: "n. 标准，准则", example: "There are four criteria for assessing IELTS speaking." },
        { word: "assessment", phonetic: "/əˈsesmənt/", meaning: "n. 评估，评定", example: "The assessment is based on your overall performance." },
        { word: "lexical", phonetic: "/ˈleksɪkl/", meaning: "adj. 词汇的", example: "Lexical resource is one of the marking criteria." },
        { word: "grammatical", phonetic: "/ɡrəˈmætɪkl/", meaning: "adj. 语法的", example: "Grammatical accuracy is essential for a high score." },
        { word: "range", phonetic: "/reɪndʒ/", meaning: "n. 范围，幅度", example: "You need to show a wide range of vocabulary." },
        { word: "accuracy", phonetic: "/ˈækjərəsi/", meaning: "n. 准确性", example: "Accuracy is more important than complexity." },
        { word: "intention", phonetic: "/ɪnˈtenʃn/", meaning: "n. 意图，目的", example: "Make your intention clear to the examiner." },
        { word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", meaning: "v. 交流，沟通", example: "The main goal is to communicate effectively." },
        { word: "extend", phonetic: "/ɪkˈstend/", meaning: "v. 扩展，延长", example: "Extend your answers with reasons and examples." },
        { word: "relevant", phonetic: "/ˈreləvənt/", meaning: "adj. 相关的", example: "Keep your answers relevant to the question." },
        { word: "paraphrase", phonetic: "/ˈpærəfreɪz/", meaning: "v./n. 改述，释义", example: "Paraphrase the question in your answer." },
        { word: "hesitation", phonetic: "/ˌhezɪˈteɪʃn/", meaning: "n. 犹豫，迟疑", example: "Some hesitation is natural but try to minimize it." },
        { word: "self-correction", phonetic: "/ˌself kəˈrekʃn/", meaning: "n. 自我纠正", example: "Occasional self-correction is acceptable." },
        { word: "intonation", phonetic: "/ˌɪntəˈneɪʃn/", meaning: "n. 语调，声调", example: "Good intonation makes your speech more natural." }
      ],
      sentencePatterns: [
        { english: "To achieve a higher band score, you should...", chinese: "要获得更高的分数，你应该...", usage: "提供高分建议" },
        { english: "The examiner is looking for...", chinese: "考官在寻找...", usage: "说明评分标准" },
        { english: "It's important to demonstrate...", chinese: "展示...是很重要的", usage: "强调需要展示的能力" },
        { english: "Try to avoid...", chinese: "尽量避免...", usage: "提醒避免的问题" },
        { english: "A good way to... is to...", chinese: "做...的好方法是...", usage: "提供有效方法" },
        { english: "Make sure to...", chinese: "确保...", usage: "提醒注意事项" },
        { english: "This will help you to...", chinese: "这将帮助你...", usage: "说明好处" },
        { english: "One common mistake is...", chinese: "一个常见的错误是...", usage: "指出常见错误" },
        { english: "Instead of..., you can...", chinese: "与其...，你可以...", usage: "提供替代方案" },
        { english: "Remember that the key is...", chinese: "记住关键是...", usage: "强调要点" }
      ],
      bilingualText: {
        english: `
In this fourth part of our IELTS speaking training, we will focus on how to achieve a higher band score. Understanding what the examiner is looking for can help you perform better on test day.

The IELTS speaking test is assessed based on four criteria. Fluency and coherence measures your ability to speak at length without excessive hesitation and organize your ideas logically. To score well, you should extend your answers and use linking words appropriately.

Lexical resource evaluates your vocabulary range and accuracy. Don't try to use difficult words if you're not sure about their meaning. Instead, focus on using vocabulary precisely and naturally. Paraphrasing the examiner's questions shows your vocabulary flexibility.

Grammatical range and accuracy assesses your ability to use different sentence structures correctly. You should demonstrate a mix of simple and complex sentences. However, accuracy is more important than complexity. It's better to use simple sentences correctly than complex sentences with many errors.

Pronunciation examines how clearly you speak and whether you use appropriate stress and intonation. You don't need to have a British or American accent. The key is to be understandable and use natural rhythm and stress patterns.

To improve your score, practice speaking English daily. Record yourself and listen for areas of improvement. Pay attention to your hesitation, grammar mistakes, and pronunciation. Try to speak at a natural pace and use intonation to express meaning.

On test day, stay calm and confident. Listen carefully to each question and take a moment to think before answering. Extend your answers with reasons and examples, but stay relevant to the topic. Remember, the examiner wants you to succeed, so do your best and don't worry about minor mistakes.
        `,
        chinese: `
在我们雅思口语训练的第四部分，我们将专注于如何获得更高的分数。了解考官在寻找什么可以帮助你在考试当天表现得更好。

雅思口语考试基于四个标准进行评估。流利度和连贯性衡量你长篇发言而不过度犹豫的能力，以及逻辑组织思想的能力。要获得高分，你应该扩展你的答案并适当使用连接词。

词汇资源评估你的词汇范围和准确性。如果你不确定难词的含义，不要试图使用它们。相反，专注于准确自然地使用词汇。改述考官的问题可以展示你的词汇灵活性。

语法范围和准确性评估你正确使用不同句型的能力。你应该展示简单句和复杂句的混合。然而，准确性比复杂性更重要。正确使用简单句比错误百出地使用复杂句更好。

发音检查你说话的清晰度以及是否使用适当的重音和语调。你不需要拥有英式或美式口音。关键是让人理解并使用自然的节奏和重音模式。

要提高分数，每天练习说英语。录下自己的声音，听出需要改进的地方。注意你的犹豫、语法错误和发音。努力以自然的速度说话，用语调表达意思。

考试当天，保持冷静和自信。仔细听每个问题，回答前花点时间思考。用理由和例子扩展你的答案，但要与话题保持相关。记住，考官希望你成功，所以尽力而为，不要担心小错误。
        `
      },
      englishText: `
In this fourth part of our IELTS speaking training, we will focus on how to achieve a higher band score. Understanding what the examiner is looking for can help you perform better on test day.

The IELTS speaking test is assessed based on four criteria. Fluency and coherence measures your ability to speak at length without excessive hesitation and organize your ideas logically. To score well, you should extend your answers and use linking words appropriately.

Lexical resource evaluates your vocabulary range and accuracy. Don't try to use difficult words if you're not sure about their meaning. Instead, focus on using vocabulary precisely and naturally. Paraphrasing the examiner's questions shows your vocabulary flexibility.

Grammatical range and accuracy assesses your ability to use different sentence structures correctly. You should demonstrate a mix of simple and complex sentences. However, accuracy is more important than complexity. It's better to use simple sentences correctly than complex sentences with many errors.

Pronunciation examines how clearly you speak and whether you use appropriate stress and intonation. You don't need to have a British or American accent. The key is to be understandable and use natural rhythm and stress patterns.

To improve your score, practice speaking English daily. Record yourself and listen for areas of improvement. Pay attention to your hesitation, grammar mistakes, and pronunciation. Try to speak at a natural pace and use intonation to express meaning.

On test day, stay calm and confident. Listen carefully to each question and take a moment to think before answering. Extend your answers with reasons and examples, but stay relevant to the topic. Remember, the examiner wants you to succeed, so do your best and don't worry about minor mistakes.
`,
      dictationExercises: [
        { sentence: "The IELTS speaking test is ___ based on four criteria.", answer: "assessed", hint: "评估" },
        { sentence: "Fluency and ___ measure your ability to speak at length.", answer: "coherence", hint: "连贯性" },
        { sentence: "Lexical resource evaluates your vocabulary ___ and accuracy.", answer: "range", hint: "范围" },
        { sentence: "___ is more important than complexity.", answer: "Accuracy", hint: "准确性" },
        { sentence: "You don't need to have a British or American ___.", answer: "accent", hint: "口音" },
        { sentence: "Practice speaking English ___.", answer: "daily", hint: "每天" },
        { sentence: "On test day, stay calm and ___.", answer: "confident", hint: "自信" },
        { sentence: "The examiner wants you to ___.", answer: "succeed", hint: "成功" }
      ]
    },
    {
      id: "ielts-speaking-05",
      title: "雅思口语训练 05",
      titleEn: "IELTS Speaking Training 05",
      titleChinese: "雅思口语训练 05",
      description: "8.5 分雅思口语 SHARI - 第五部分：考试当天技巧与总结",
      icon: "🗣️",
      videoFile: "/videos/ielts-english/05-speaking-training.mp4",
      vocabulary: [
        { word: "preparation", phonetic: "/ˌprepəˈreɪʃn/", meaning: "n. 准备", example: "Good preparation is the key to success." },
        { word: "confidence", phonetic: "/ˈkɒnfɪdəns/", meaning: "n. 自信，信心", example: "Confidence can make a big difference in your performance." },
        { word: "nervous", phonetic: "/ˈnɜːvəs/", meaning: "adj. 紧张的", example: "It's normal to feel nervous before the test." },
        { word: "relax", phonetic: "/rɪˈlæks/", meaning: "v. 放松", example: "Take a deep breath to relax before speaking." },
        { word: "greeting", phonetic: "/ˈɡriːtɪŋ/", meaning: "n. 问候，招呼", example: "Start with a friendly greeting and a smile." },
        { word: "eye contact", phonetic: "/aɪ ˈkɒntækt/", meaning: "n. 眼神交流", example: "Maintain good eye contact with the examiner." },
        { word: "body language", phonetic: "/ˈbɒdi ˈlæŋɡwɪdʒ/", meaning: "n. 肢体语言", example: "Positive body language shows confidence." },
        { word: "attitude", phonetic: "/ˈætɪtjuːd/", meaning: "n. 态度", example: "A positive attitude can impress the examiner." },
        { word: "clarify", phonetic: "/ˈklærəfaɪ/", meaning: "v. 澄清，说明", example: "Don't hesitate to ask the examiner to clarify a question." },
        { word: "stall", phonetic: "/stɔːl/", meaning: "v. 拖延，争取时间", example: "Use filler phrases to stall for thinking time." },
        { word: "natural", phonetic: "/ˈnætʃrəl/", meaning: "adj. 自然的", example: "Try to speak in a natural and conversational way." },
        { word: "mistake", phonetic: "/mɪˈsteɪk/", meaning: "n. 错误", example: "Don't panic if you make a small mistake." },
        { word: "recover", phonetic: "/rɪˈkʌvə(r)/", meaning: "v. 恢复，改正", example: "Learn to recover quickly from mistakes." },
        { word: "performance", phonetic: "/pəˈfɔːməns/", meaning: "n. 表现，表演", example: "Your overall performance determines your band score." },
        { word: "achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "n. 成就，达到", example: "Passing IELTS is a great achievement." }
      ],
      sentencePatterns: [
        { english: "On the day of the test, ...", chinese: "考试当天，...", usage: "介绍考试当天事项" },
        { english: "It's a good idea to...", chinese: "做...是个好主意", usage: "提供建议" },
        { english: "Don't forget to...", chinese: "不要忘记...", usage: "提醒注意" },
        { english: "If you don't understand, you can...", chinese: "如果你不理解，你可以...", usage: "说明应对方法" },
        { english: "Try to...", chinese: "尝试...", usage: "给出建议" },
        { english: "Avoid...", chinese: "避免...", usage: "提出警告" },
        { english: "The most important thing is...", chinese: "最重要的是...", usage: "强调重点" },
        { english: "In summary, ...", chinese: "总之，...", usage: "总结" },
        { english: "With proper preparation, ...", chinese: "通过适当的准备，...", usage: "表达期望" },
        { english: "Good luck with your...", chinese: "祝你好运...", usage: "表达祝福" }
      ],
      bilingualText: {
        english: `
In this final part of our IELTS speaking training series, we will discuss what to do on test day and summarize the key strategies for success.

On the day of the test, arrive at the test center early. Give yourself plenty of time to find the location and check in. Being late can increase your stress and negatively affect your performance. Dress comfortably and bring all required documents, including your ID and confirmation letter.

Before entering the test room, take a few deep breaths to calm your nerves. It's normal to feel nervous, but try to channel that nervous energy into positive enthusiasm. Remember, the examiner is not there to catch you out; they want to hear you speak and help you perform your best.

When you meet the examiner, greet them with a smile and good eye contact. A friendly attitude can create a positive first impression. During the test, listen carefully to each question. If you don't understand, don't be afraid to ask the examiner to repeat or clarify the question. This won't affect your score.

Speak clearly and at a natural pace. Don't rush your answers, but also avoid long pauses. If you need thinking time, use natural filler phrases like "That's an interesting question" or "Let me think about that for a moment."

If you make a mistake, don't panic. Simply correct yourself and continue. The examiner understands that everyone makes occasional errors. What matters is your overall ability to communicate effectively in English.

In summary, success in IELTS speaking requires good preparation, confidence, and effective communication skills. Practice regularly, familiarize yourself with the test format, and stay positive. With dedication and the right strategies, you can achieve your target band score.

Thank you for following this training series. Good luck with your IELTS exam, and I wish you all the best in your English learning journey!
        `,
        chinese: `
在我们雅思口语训练系列的最后一部分，我们将讨论考试当天该做什么，并总结成功的关键策略。

考试当天，提前到达考点。给自己充足的时间找到地点并办理签到。迟到会增加你的压力，并对你的表现产生负面影响。穿着舒适，带上所有需要的文件，包括身份证和确认信。

进入考场前，做几次深呼吸来平静紧张情绪。感到紧张是正常的，但 try 将这种紧张能量转化为积极的熱情。记住，考官不是要为难你；他们想听你说话并帮助你发挥最佳水平。

见到考官时，带着微笑和良好的眼神交流问候他们。友好的态度可以创造良好的第一印象。考试期间，仔细听每个问题。如果你不理解，不要害怕请考官重复或澄清问题。这不会影响你的分数。

说话清晰，速度自然。不要匆忙回答，但也要避免长时间停顿。如果你需要思考时间，使用自然的填充短语，如"这是个有趣的问题"或"让我想一想"。

如果你犯了错误，不要惊慌。简单地纠正自己并继续。考官理解每个人都会偶尔犯错。重要的是你用英语有效交流的整体能力。

总之，雅思口语的成功需要充分的准备、自信和有效的沟通技巧。定期练习，熟悉考试格式，保持积极态度。通过投入和正确的策略，你可以实现目标分数。

感谢你跟随这个训练系列。祝你雅思考试顺利，祝你英语学习之旅一切顺利！
        `
      },
      englishText: `
In this final part of our IELTS speaking training series, we will discuss what to do on test day and summarize the key strategies for success.

On the day of the test, arrive at the test center early. Give yourself plenty of time to find the location and check in. Being late can increase your stress and negatively affect your performance. Dress comfortably and bring all required documents, including your ID and confirmation letter.

Before entering the test room, take a few deep breaths to calm your nerves. It's normal to feel nervous, but try to channel that nervous energy into positive enthusiasm. Remember, the examiner is not there to catch you out; they want to hear you speak and help you perform your best.

When you meet the examiner, greet them with a smile and good eye contact. A friendly attitude can create a positive first impression. During the test, listen carefully to each question. If you don't understand, don't be afraid to ask the examiner to repeat or clarify the question. This won't affect your score.

Speak clearly and at a natural pace. Don't rush your answers, but also avoid long pauses. If you need thinking time, use natural filler phrases like "That's an interesting question" or "Let me think about that for a moment."

If you make a mistake, don't panic. Simply correct yourself and continue. The examiner understands that everyone makes occasional errors. What matters is your overall ability to communicate effectively in English.

In summary, success in IELTS speaking requires good preparation, confidence, and effective communication skills. Practice regularly, familiarize yourself with the test format, and stay positive. With dedication and the right strategies, you can achieve your target band score.

Thank you for following this training series. Good luck with your IELTS exam, and I wish you all the best in your English learning journey!
`,
      dictationExercises: [
        { sentence: "On the day of the test, arrive at the test center ___.", answer: "early", hint: "早" },
        { sentence: "Being late can increase your ___.", answer: "stress", hint: "压力" },
        { sentence: "Take a few deep breaths to calm your ___.", answer: "nerves", hint: "神经，紧张" },
        { sentence: "Greet the examiner with a smile and good ___ contact.", answer: "eye", hint: "眼睛" },
        { sentence: "If you don't understand, ask the examiner to ___.", answer: "clarify", hint: "澄清" },
        { sentence: "Speak clearly and at a ___ pace.", answer: "natural", hint: "自然的" },
        { sentence: "If you make a mistake, don't ___.", answer: "panic", hint: "惊慌" },
        { sentence: "Success requires good ___, confidence, and communication skills.", answer: "preparation", hint: "准备" }
      ]
    }
  ]
};

// 导出所有课程
// 雅思学习顺序：Part 1 → Part 2（人物）→ Part 2（地点）→ Part 3 → 完整模拟
const ieltsLearningOrder = ['ielts-speaking-02', 'ielts-speaking-01', 'ielts-speaking-03', 'ielts-speaking-04', 'ielts-speaking-05'];
ieltsEnglishCourse.subCourses.sort((a, b) => ieltsLearningOrder.indexOf(a.id) - ieltsLearningOrder.indexOf(b.id));

// Long-term IELTS path: keep the original five lessons as the foundation, then add
// progressively harder modules so the course can grow without changing the player.
const ieltsExpansion = [
  ['ielts-speaking-06', 'Part 1: Sound Natural and Personal', 'Part 1 自然回答与个人细节', '把答案从模板句变成真实、连贯的个人表达。'],
  ['ielts-speaking-07', 'Part 1: Past, Present and Future', 'Part 1 时态切换', '练习过去经历、当前习惯和未来计划的自然切换。'],
  ['ielts-speaking-08', 'Part 2: Describe an Object', 'Part 2 物品描述', '用来源、外观、使用场景和情感价值组织物品题。'],
  ['ielts-speaking-09', 'Part 2: Describe an Experience', 'Part 2 经历叙事', '用时间线、转折和结果讲清一段真实经历。'],
  ['ielts-speaking-10', 'Part 2: Describe a Change', 'Part 2 变化类话题', '练习过去与现在对比，并解释变化带来的影响。'],
  ['ielts-speaking-11', 'Part 3: Compare and Evaluate', 'Part 3 比较与评价', '从个人例子上升到群体、社会和长期影响。'],
  ['ielts-speaking-12', 'Part 3: Causes and Consequences', 'Part 3 原因与影响', '建立原因、结果、例证和限制条件的逻辑链。'],
  ['ielts-speaking-13', 'Part 3: Problems and Solutions', 'Part 3 问题与方案', '针对社会问题提出可执行、有限度的解决方案。'],
  ['ielts-speaking-14', 'Mock Test 02: Timing and Recovery', '模考二：节奏与修复', '在限时状态下练习停顿、改述和保持流利度。'],
  ['ielts-speaking-15', 'Band 7 Review: Personal Error Bank', 'Band 7 复盘：个人错误库', '根据词汇、语法、流利度和发音问题制定下一轮训练。']
] as const;

const expansionSource = ieltsEnglishCourse.subCourses.find(lesson => lesson.id === 'ielts-speaking-05')!;
for (const [id, titleEn, titleChinese, description] of ieltsExpansion) {
  ieltsEnglishCourse.subCourses.push({
    ...expansionSource,
    id,
    title: titleChinese,
    titleEn,
    titleChinese,
    description,
    englishText: `${titleEn}\n\n${description}\n\nUse the TS+SD method: answer directly, explain the reason, add a specific example, and finish with a clear result or reflection. Record yourself for 60 to 120 seconds and review one improvement point.`,
  });
}
ieltsEnglishCourse.subCourses.forEach((lesson) => {
  if (lesson.id.startsWith('ielts-speaking-') && !ieltsLearningOrder.includes(lesson.id)) {
    ieltsLearningOrder.push(lesson.id);
  }
});
ieltsEnglishCourse.subCourses.sort((a, b) => ieltsLearningOrder.indexOf(a.id) - ieltsLearningOrder.indexOf(b.id));

export const allCourses: CourseCategory[] = [dailyEnglishCourse, ieltsEnglishCourse];
