/**
 * Renders `**metric**` segments from cv.ts with emphasis; everything else as plain text.
 * Short metrics (e.g. "4-person team") never wrap, so they cannot split at a hyphen.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className={`font-semibold text-ink ${part.length <= 28 ? 'whitespace-nowrap' : ''}`}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}
