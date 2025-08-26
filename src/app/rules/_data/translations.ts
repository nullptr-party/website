// app/rules/_data/translations.ts
export interface RuleTranslations {
  title: string;
  intro: string;
  rules: string[];
  prohibited: {
    title: string;
    items: string[];
  };
  conclusion: string;
}

export const translations: Record<string, RuleTranslations> = {
  en: {
    title: "Community Rules",
    intro: "To make communication pleasant and respectful, certain rules must be followed in chats",
    rules: [
      "Do not use offensive expressions or swear words towards other users.",
      "Avoid caps and abuse of punctuation marks, otherwise this can be perceived as shouting or aggression. OR DO YOU DISAGREE?!?",
      "Remember that there are real people behind the screen, so be mindful of other users' feelings. Hurting others is bad, clear?",
      "Do not use too many emojis, this can make messages hard to understand and lead to misunderstandings. 💅💅🥀👯‍♂️🧌😼😼😼😼",
      "If you disagree with another user's opinion, try to speak constructively and with respect for their point of view. No 'sybau', please.",
      "Do not spread unverified information or rumors, this can lead to misunderstandings and conflicts. Frequently forwarded reposts from WhatsApp are especially bad.",
      "Remember that there are moderators in the chat who monitor compliance with communication rules. If you notice a violation of the rules, report it to a moderator. Some mods live in the chat and are touchy :()",
      "Emojis can hurt too, use them thoughtfully 🤡",
      "Voice messages in the chat are prohibited; if you want to quickly record something, don't rush — there will be time, write. Cyril and Methodius worked hard, after all.",
      "There is an automatic anti-spam in the chat that sometimes goes berserk; if you notice a real person has been blocked, tag @ilyagulya, they'll pull the victim out of the ban.",
      "If you follow the above rules, you can discuss any topics, from politics to the air quality in Almaty. The community is for devs, but definitely not only about development"
    ],
    prohibited: {
      title: "Prohibited",
      items: [
        "Religious, racial, ethnic, gender, and other forms of discrimination — redheads can be insulted, they have no soul",
        "Distribution of illegal or unethical materials without approval from the administration",
        "Any unapproved advertising",
        "Distribution of job vacancies without administration approval",
        "Using group members' data for advertising distribution or for recruitment purposes"
      ]
    },
    conclusion: "Following these simple rules will help create a friendly and polite atmosphere in the chat and make communication more pleasant for all participants."
  },
  ru: {
    title: "Правила сообщества",
    intro: "Чтобы сделать общение приятным и уважительным надо соблюдать некоторые правила в чатах",
    rules: [
      "Не используйте оскорбительные выражения или ругательства в отношении других пользователей.",
      "Избегайте капса и злоупотребления знаками препинания, иначе это может восприниматься как крик или агрессия. ИЛИ ВЫ НЕ СОГЛАСНЫ?!?",
      "Помните, что за экраном находятся реальные люди, так что будьте внимательны к чувствам других пользователей. Обижать это плохо п'нятненько?",
      "Не используйте слишком много эмодзи, это может затруднить понимание сообщения и привести к недоразумениям. 💅💅🥀👯‍♂️🧌😼😼😼😼",
      "Если вы не согласны с мнением другого пользователя, попробуйте высказаться конструктивно и с уважением к его точке зрения. Без sybau плез",
      "Не распространяйте непроверенную информацию или слухи, это может привести к недопониманию и конфликтам. Часто пересылаемые репосты из whatsapp особенно плохи",
      "Помните, что в чате есть модераторы, которые следят за соблюдением правил общения. Если вы заметили нарушение правил, сообщите об этом модератору. Некоторые модеры живут в чате и обидчивые :()",
      "Эмоджи тоже могут ранить, используйте их обдуманно 🤡",
      "Голосовые сообщения в чате запрещены, если что-то хотите быстро записать, то не торопитесь, будет время — напишите, Кирилл и Мефодий очень старались вообще-то",
      "В чате есть автоматический антиспам, который иногда звереет, если заметили блок живого человека, то тегайте @ilyagulya, вытащит жертву из бани",
      "При соблюдении вышеуказанных правил можно общаться на любые темы, от политики, до качества воздуха в Алматы. Сообщество для разрабов, но однозначно не только про разработку"
    ],
    prohibited: {
      title: "Запрещено",
      items: [
        "Религиозные, расовые, этнические, гендерные и другие формы дискриминации, рыжих можно оскорблять, они же без души",
        "Распространение незаконных или неэтичных материалов без аппрува от администрации",
        "Любая несогласованная реклама",
        "Распространение вакансий без согласования с администрацией",
        "Использование данных участников группы для рассылки рекламы или с целью найма"
      ]
    },
    conclusion: "Соблюдение этих простых правил поможет создать дружелюбную и вежливую атмосферу в чате и сделает общение более приятным для всех участников."
  }
};
