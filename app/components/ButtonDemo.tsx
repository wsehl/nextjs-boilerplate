"use client";

import Button from "./Button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="text-2xl font-bold mb-4">Button Component Demo</h2>

      <div className="flex gap-4 flex-wrap">
        <Button variant="primary" size="sm">
          Small Primary
        </Button>
        <Button variant="primary" size="md">
          Medium Primary
        </Button>
        <Button variant="primary" size="lg">
          Large Primary
        </Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        <Button disabled>Disabled Button</Button>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </div>
    </div>
  );
}
