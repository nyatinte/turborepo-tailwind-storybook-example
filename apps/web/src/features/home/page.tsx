import { Button } from "@repo/ui/src/ui/button/index.tsx";

export const HomePage = () => {
  return (
    <main className="flex justify-center flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">
        Turborepo + TailwindCSS + Storybook Example
      </h1>
      <Button asChild>
        <a href="https://github.com/nyatinte/turborepo-tailwind-storybook-example">
          View on GitHub
        </a>
      </Button>
    </main>
  );
};
