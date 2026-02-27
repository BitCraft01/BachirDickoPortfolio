import { useEffect, useRef, useState } from "react";

const API_URL =
  import.meta.env.VITE_AI_API_URL || "https://YOUR-VERCEL-APP.vercel.app/api/ask";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Ask me anything about Bachir — skills, projects, experience, or the CV." }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      // send a small window of history
      const history = nextMessages.slice(-10);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry — the assistant is having trouble right now. Try again in a moment." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 rounded-full px-4 py-3 shadow-lg bg-black text-white hover:opacity-90"
        aria-label="Open AI assistant"
      >
        {open ? "Close" : "AI Assistant"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[340px] max-w-[92vw] rounded-2xl border border-white/10 bg-zinc-950 text-white shadow-2xl">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div>
              <div className="font-semibold">Ask about Bachir</div>
              <div className="text-xs text-white/70">Projects • Skills • Resume</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">✕</button>
          </div>

          <div className="h-80 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-white text-black px-3 py-2 text-sm"
                    : "mr-auto max-w-[85%] rounded-2xl bg-white/10 px-3 py-2 text-sm"
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto max-w-[85%] rounded-2xl bg-white/10 px-3 py-2 text-sm text-white/70">
                Thinking…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask a question…"
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
            />
            <button
              onClick={send}
              disabled={loading}
              className="rounded-xl px-3 py-2 text-sm bg-white text-black disabled:opacity-60"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}