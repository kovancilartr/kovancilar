import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button variant="default">Primary</Button>
      <ModeToggle />
    </div>
  );
}
