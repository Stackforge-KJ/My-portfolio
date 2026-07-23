import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";

// Sprint 9: wrapped in a real <main> landmark and given a real heading,
// matching the structure every other page already has (Sprint 7). Real
// recovery behavior (a styled path back to Home/Contact, per the Product
// Blueprint's Product Map) is still a later sprint's content/UI work —
// this is a semantic/landmark fix, not new functionality.
export default function NotFound() {
  return (
    <main className="flex flex-col gap-4 px-6 py-16">
      <Heading level={1}>Page not found</Heading>
      <Text size="body" muted>
        Not found — Sprint 0 placeholder.
      </Text>
    </main>
  );
}
