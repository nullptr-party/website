#!/usr/bin/env bash
set -euo pipefail

slug="${1:?Usage: tools/render-event-slides.sh <pdf-name-without-extension>}"
case "$slug" in
  mikhalchenkov-code-review|orekhov-enterprise-to-ai|kassen-compose-multiplatform|gordienko-agent-orchestration-ios) ;;
  *) printf 'Unknown presentation: %s\n' "$slug" >&2; exit 2 ;;
esac

root="$(cd "$(dirname "$0")/.." && pwd)"
source="$root/public/events/slides/$slug.pdf"
target="$root/public/events/slides/previews/$slug"
mkdir -p "$target"
magick -density 120 "$source" -resize '1600x>' -quality 78 "$target/page-%03d.webp"

printf 'Rendered %s. Update its page count in src/app/events/slides/_decks.ts if the PDF changed.\n' "$slug"
