import NavCard from '@/components/NavCard';
import CodeBlock from '@/components/CodeBlock';
import BrandImage from '@/components/BrandImage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:p-24">
      <BrandImage />

      <div className="z-10 mb-16 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <CodeBlock>
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
        </CodeBlock>
      </div>

      <div className="grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <NavCard
          title="Docs"
          description="Find in-depth information about Next.js features and API."
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        />
        <NavCard
          title="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        />
        <NavCard
          title="Templates"
          description="Discover and deploy boilerplate example Next.js projects."
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        />
        <NavCard
          title="Deploy"
          description="Instantly deploy your Next.js site to a shareable URL with Vercel."
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        />
      </div>
    </main>
  );
}
