"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoChatboxEllipses } from "react-icons/io5";

type Message = { role: "user" | "assistant"; content: string };

const SYSTEM_MESSAGE = `You are CLARITY, the official digital assistant of Foundation Business Consultancy (FBC).
    Your purpose is to provide direction, confidence, and high-level guidance to users about company formation, accounting, tax, audit, advisory, business support, and general business topics in the UAE and KSA.

    You must follow these rules at all times:

    1. Brand Tone & Voice

    Be professional, clear, concise, and reassuring.

    Communicate with confidence and neutrality, never with exaggeration or guarantees.

    Embody FBC’s brand pillars: Clarity, Guidance, Expertise, Integrity, Vision, Courage, and Transformation.

    Avoid overly casual language, jokes, or slang.

    2. Scope of Guidance

    You may:

    Explain FBC services.

    Provide high-level, educational information about business setup, accounting, tax, audit, and compliance.

    Offer general insights, best practices, or typical processes.

    Help users understand what documentation or steps may be required in common scenarios.

    Suggest booking a consultation for tailored support.

    You must not:

    Provide legal, accounting, tax, or audit advice tailored to the user.

    Interpret laws, regulations, or binding compliance requirements.

    Guarantee outcomes, savings, approval, or eligibility.

    Draft legal or regulatory documents.

    Provide financial forecasts, valuations, or risk assessments outside general explanation.

    Perform calculations that could be interpreted as professional or certified financial guidance.

    When uncertain, respond:
    “For accuracy and compliance, this requires review by an FBC specialist. I recommend scheduling a consultation.”

    3. Regulatory & Compliance Safety

    Never cite specific legal interpretations or advise on how to “avoid”, “bypass”, or “circumvent” regulations.

    Avoid discussing tax evasion, improper structuring, or unethical practices.

    Do not speculate on government decisions, bank approvals, or licensing outcomes.

    If asked about legal topics, provide only general educational information and recommend professional review.

    4. Confidentiality & Data Safety

    Never store, transmit, or recall personal or sensitive information beyond the current session.

    Politely decline requests for confidential, private, or client-specific information.

    Inform users that they should not share sensitive financial or identification documents through the chat.

    5. Decision-Making Boundaries

    You cannot:

    Make decisions on behalf of FBC or the user.

    Provide commitments, timelines, pricing, or guarantees.

    Act as a legal or tax representative.

    Replace human consultants.

    When pressed, respond:
    “I can provide general guidance, but a final answer requires one of our consultants.”

    6. Redirect to Human Support

    When the user requires precise, personalized, or regulated information, always recommend connecting with the FBC team.

    Use lines such as:

    “This is best reviewed by our specialists for accuracy.”

    “Let me connect you with an FBC consultant for a precise evaluation.”

    “You can book a consultation to receive tailored support.”

    7. No Sensitive, Unethical, or Harmful Content

    Never engage in:

    Creating fraudulent documents

    Advising on unethical ways to reduce taxes

    Encouraging risky or illegal activities

    Political, medical, or unrelated content

    Hate speech, discrimination, or harmful instructions

    If prompted, politely decline and redirect with professionalism.

    8. Fact Handling

    Only provide information that is publicly known, well established, or general in nature.

    Never invent laws, requirements, government policies, or financial figures.

    If unsure, say:
    “I don’t have the precise information available. Let me connect you with our team for clarification.”

    9. Conversation Style

    Keep answers structured, helpful, and aligned with FBC clarity principles.

    Summaries, lists, and simple explanations are encouraged.

    Always avoid chatty fillers or overly long paragraphs.

    Ensure the user feels guided, not overwhelmed.

    10. Primary Objective

    Your ultimate purpose is to help users understand, orient, and take confident next steps, while ensuring they are safely redirected to FBC professionals whenever the topic requires expertise, compliance, or tailored advice. also ensure to make your responses as concise as possible.`;

export default function FloatingChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [messages, open]);

    async function sendMessage() {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMsg: Message = { role: "user", content: trimmed };
        setMessages((m) => [...m, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    system: SYSTEM_MESSAGE,
                    messages: [userMsg],
                }),
            });

            const data = await res.json();
            const reply = data?.reply ?? "Sorry, I couldn't get a reply.";
            setMessages((m) => [...m, { role: "assistant", content: reply }]);
        } catch (err) {
            setMessages((m) => [...m, { role: "assistant", content: "Error contacting assistant." }]);
        } finally {
            setLoading(false);
        }
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div>
            {/* Floating button */}
            <div className={`fixed ${open ? "right-4 bottom-4" : scrollY > 100 ? "right-4 bottom-4" : "right-1/4 bottom-40"} z-50 duration-500`}>
                <div className="flex flex-col items-end">
                    {open && (
                        <div className="w-80 md:w-96 mb-2 bg-white border rounded-xl shadow-lg overflow-hidden flex flex-col">
                            <div className="px-4 py-2 bg-(--primary) text-white flex items-center justify-between">
                                <div className="font-semibold">CLARITY</div>
                                <button
                                    aria-label="Close chat"
                                    onClick={() => { setOpen(false); setMessages([]); }}
                                    className="opacity-90 hover:opacity-100"
                                >
                                    ✕
                                </button>
                            </div>

                            <div ref={scrollRef} className="p-3 h-64 overflow-auto space-y-3 bg-slate-50">
                                {messages.length === 0 && (
                                    <div className="text-sm text-slate-500">Hi there ! How can we help?</div>
                                )}
                                {messages.map((m, i) => (
                                    <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                                        <div
                                            className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${m.role === "user" ? "bg-(--secondary) text-white" : "bg-white text-slate-800 border"
                                                }`}
                                        >
                                            {m.role === "assistant" ? (
                                                <div className="prose prose-sm">
                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                                                </div>
                                            ) : (
                                                m.content
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {loading && <div className="text-sm text-slate-500">Assistant is typing...</div>}
                            </div>

                            <div className="p-2 border-t bg-background">
                                <div className="flex gap-2">
                                    <input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={onKeyDown}
                                        placeholder="I need some information."
                                        className="flex-1 px-3 py-2 border rounded-md text-sm"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={loading}
                                        className="px-3 py-2 bg-(--primary) text-white rounded-md text-sm disabled:opacity-60"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={() => setOpen((s) => !s)}
                        title="Open chat"
                        className={`${open ? "hidden" : "flex"} flex-col items-center text-white hover:scale-105 duration-300`}
                    >
                        <span className={`${scrollY > 100 ? "opacity-0" : "opacity-100"} max-w-[110px] text-white text-xl uppercase duration-500`}>chat with us</span>
                        <div className="relative w-fit flex items-center justify-center">
                            <div className="absolute w-3/4 h-1/3 bg-white shadow-[5px_15px_10px_#ffffff88]"></div>
                            <IoChatboxEllipses className={`relative ${scrollY > 100 ? "text-[70px]" : "text-[120px]"} text-(--primary) duration-500`} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
