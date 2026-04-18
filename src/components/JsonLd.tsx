type Props = {
  data: object | object[];
  id?: string;
};

/**
 * Renders one or more JSON-LD scripts. Use Next.js convention of placing
 * structured data in the page body — it's still indexed.
 */
export function JsonLd({ data, id }: Props) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={`${id ?? "jsonld"}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
