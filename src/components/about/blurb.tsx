import Paragraph from "@/ui/paragraph";

export function Blurb() {
  return (
    <div className="px-4">
      <div className="space-y-4">
        <Paragraph>
          I&apos;m a full stack developer studying Information systems at the
          Carnegie Mellon University.
        </Paragraph>
        <Paragraph>
          Currently, I&apos;m in Pittsburgh/San Francisco. So if you are in the area,
          feel free to reach out to chat!
        </Paragraph>
        <Paragraph>Otherwise, here are my experiences laid out.</Paragraph>
      </div>
    </div>
  );
}
