import Image from "next/image";

type CrestProps = {
  className?: string;
  title?: string;
  priority?: boolean;
};

/** Official KEMET FC crest artwork. */
export function Crest({
  className,
  title = "KEMET FC crest",
  priority = false,
}: CrestProps) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <Image
        src="/brand/kemet-fc-crest.png"
        alt={title}
        fill
        sizes="176px"
        className="object-contain"
        priority={priority}
      />
    </span>
  );
}
