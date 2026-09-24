export const decks = {
  'mikhalchenkov-code-review': {
    title: 'Код-ревью: как перестать мучить команду',
    event: 2,
    speaker: 'Дмитрий Михальченков',
    pages: 42,
  },
  'orekhov-enterprise-to-ai': {
    title: 'Почему в 2026 нужно уходить из энтерпрайза и нырять в ИИ',
    event: 2,
    speaker: 'Алексей Орехов',
    pages: 37,
  },
  'kassen-compose-multiplatform': {
    title: 'Compose Multiplatform — пет-проект который приносит денюжки',
    event: 2,
    speaker: 'Даурен Кассен',
    pages: 18,
  },
  'gordienko-agent-orchestration-ios': {
    title: 'Агентные процессы и оркестрация в iOS-разработке',
    event: 3,
    speaker: 'Виктор Гордиенко',
    pages: 28,
  },
} as const;

export type DeckId = keyof typeof decks;

export function slideImage(id: DeckId, page: number) {
  return `/events/slides/previews/${id}/page-${String(page - 1).padStart(3, '0')}.webp`;
}
