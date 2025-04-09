export default function ToolsSection() {
  return (
    <section>
      <header className="pb-8">
        <h2 className="text-2xl font-semibold">What clients say</h2>
      </header>
      <div className="grid grid-cols-2 gap-2 *:bg-muted *:p-4">
        <div>Figma</div>
        <div>Next.js</div>
        <div>Webflow</div>
        <div>Slack</div>
        <div>ChatGPT</div>
        <div>Visual Studio Code</div>
      </div>
    </section>
  );
}
