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
      "Avoid caps and abuse of punctuation marks, as this can be perceived as shouting or aggression.",
      "Remember that there are real people behind the screen, so be mindful of other users' feelings.",
      "Don't use too many emojis as this can make messages hard to understand and lead to misunderstandings.",
      "If you disagree with another user's opinion, try to express yourself constructively and with respect for their point of view.",
      "Do not spread unverified information or rumors, as this can lead to misunderstandings and conflicts.",
      "Remember that there are moderators in the chat who monitor compliance with communication rules. If you notice a violation of the rules, report it to a moderator.",
      "Emojis can hurt too, use them thoughtfully"
    ],
    prohibited: {
      title: "Prohibited",
      items: [
        "Discussion of politics, religion, racial, ethnic, gender, and other forms of discrimination",
        "Distribution of illegal or unethical materials",
        "Any advertising",
        "Distribution of job vacancies",
        "Using group members' data for advertising distribution or recruitment purposes"
      ]
    },
    conclusion: "Following these simple rules will help create a friendly and polite atmosphere in the chat and make communication more pleasant for all participants."
  },
  ru: {
    title: "Правила сообщества",
    intro: "Чтобы сделать общение приятным и уважительным надо соблюдать некоторые правила в чатах",
    rules: [
      "Не используйте оскорбительные выражения или ругательства в отношении других пользователей.",
      "Избегайте капса и злоупотребления знаками препинания, иначе это может восприниматься как крик или агрессия.",
      "Помните, что за экраном находятся реальные люди, так что будьте внимательны к чувствам других пользователей.",
      "Не используйте слишком много эмодзи, это может затруднить понимание сообщения и привести к недоразумениям.",
      "Если вы не согласны с мнением другого пользователя, попробуйте высказаться конструктивно и с уважением к его точке зрения.",
      "Не распространяйте непроверенную информацию или слухи, это может привести к недопониманию и конфликтам.",
      "Помните, что в чате есть модераторы, которые следят за соблюдением правил общения. Если вы заметили нарушение правил, сообщите об этом модератору.",
      "Эмоджи тоже могут ранить, используйте их обдуманно"
    ],
    prohibited: {
      title: "Запрещено",
      items: [
        "Обсуждение политики, религия, расовые, этнические, гендерные и другие формы дискриминации",
        "Распространение незаконных или неэтичных материалов",
        "Любая реклама",
        "Распространение вакансий",
        "Использование данных участников группы для рассылки рекламы или с целью найма"
      ]
    },
    conclusion: "Соблюдение этих простых правил поможет создать дружелюбную и вежливую атмосферу в чате и сделает общение более приятным для всех участников."
  }
};
