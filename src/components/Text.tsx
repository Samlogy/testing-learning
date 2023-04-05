import React from "react";

export default function Text({ text }: { text: string }) {
  return (
    <div data-testid="text">
      <h3>{text}</h3>
    </div>
  );
}
