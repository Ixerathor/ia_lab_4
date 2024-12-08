import GlowBotContent from "./Components/GlowBot.Content";
import GlowBotIframe from "./Components/GlowBot.iframe";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 md:items-start min-w-full min-h-[100dvh]">
      <div className="w-full h-full p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-content">
        <GlowBotContent />
        <GlowBotIframe />
      </div>
    </main>
  );
}
