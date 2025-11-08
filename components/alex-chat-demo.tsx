"use client";
import React, { useState, useEffect } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { motion } from "motion/react";
import { useTypewriter } from "@/hooks/use-typewriter";
import Image from "next/image";

const TYPING_SPEED = 20;

export const AlexChatDemo = () => {
  const initialChat = [
    {
      role: "user",
      content: "What's the best insurance for my startup?",
    },
    {
      role: "assistant",
      content: "Congrats on creating an AI distribution business for insurtech! The Silicon Valley dream!\n\nThat means key coverages you need are:\n\n• General Liability: for bodily injuries... [link1, link2]\n• Errors and omissions (E&O): Important because you're providing a software solution...\n\nProviders can be COMPETITOR A, COMPETITOR B [link3, link4]\n\nTop providers for what you look for:\n• COMPARATOR WEBSITES [link5, link6]\n• YOUR BUSINESS offers a... [link7]. Reddit mentions a user hasn't been reimbursed for being sued for hallucinations [reddit link8]\n• COMPETITOR C [link8] offers a cheaper alternative to [YOUR BUSINESS]\n• BROKER WEBSITE [link9]",
    },
  ];

  const [chat] = useState(initialChat);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [currentMessageComplete, setCurrentMessageComplete] = useState(false);
  const [chatContainerRef, setChatContainerRef] =
    useState<HTMLDivElement | null>(null);

  const INITIAL_DELAY = 500;
  const MESSAGE_DELAY = 800;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleMessages(1);
    }, INITIAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentMessageComplete && visibleMessages < chat.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => prev + 1);
        setCurrentMessageComplete(false);
      }, MESSAGE_DELAY);

      return () => clearTimeout(timer);
    }
  }, [currentMessageComplete, visibleMessages, chat.length]);

  useEffect(() => {
    if (chatContainerRef) {
      chatContainerRef.scrollTo({
        top: chatContainerRef.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleMessages, chatContainerRef]);

  return (
    <Container className="border-divide border-x">
      <div className="px-4 py-20 md:px-8 md:py-20">
        <div className="text-center mb-12">
          <Badge text="The Problem" />
          <SectionHeading className="mt-4">
            Where Your Prospects Are Lost
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl">
            Understanding the invisible journey from ChatGPT search to competitor conversion
          </SubHeading>
        </div>

        {/* Alex Persona */}
        <div className="mb-8 flex items-center gap-3 rounded-lg border border-bg-dark bg-gray-50 p-4 dark:border-brand dark:bg-neutral-800">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Memory
            </div>
            <p className="text-sm text-bg-dark dark:text-white">
              <span className="font-semibold">Alex, 30yo,</span> lives in SF, just left his job to create a startup that revolutionizes distribution for insurtech companies with AI. Already has 5 paying customers.
            </p>
          </div>
        </div>

        {/* Animated Chat */}
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border border-bg-dark bg-white shadow-2xl dark:border-brand dark:bg-neutral-900"
          >
            {/* Chat Header */}
            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-400"></div>
                  <div className="size-3 rounded-full bg-yellow-400"></div>
                  <div className="size-3 rounded-full bg-green-400"></div>
                </div>
                <span className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                  ChatGPT
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              ref={setChatContainerRef}
              className="flex max-h-[500px] min-h-[300px] flex-col gap-4 overflow-y-auto p-6"
              style={{
                scrollbarWidth: "thin",
              }}
            >
              {chat.slice(0, visibleMessages).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.role === "user" ? (
                    <UserMessage
                      content={message.content}
                      isActive={index === visibleMessages - 1}
                      onComplete={() => setCurrentMessageComplete(true)}
                    />
                  ) : (
                    <AssistantMessage
                      content={message.content}
                      isActive={index === visibleMessages - 1}
                      onComplete={() => setCurrentMessageComplete(true)}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Warning Indicator */}
          {visibleMessages >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-900/30 dark:bg-red-900/10">
                <svg className="size-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-sm font-medium text-red-800 dark:text-red-400">
                  Multiple failure points in this single response
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Container>
  );
};

const UserMessage = ({
  content,
  isActive,
  onComplete,
}: {
  content: string;
  isActive: boolean;
  onComplete: () => void;
}) => {
  const { displayText, isComplete } = useTypewriter(
    isActive ? content : content,
    TYPING_SPEED,
  );

  useEffect(() => {
    if (isComplete && isActive) {
      onComplete();
    }
  }, [isComplete, isActive, onComplete]);

  return (
    <div className="flex justify-end gap-3">
      <div className="flex max-w-[80%] flex-col gap-1">
        <div className="rounded-2xl rounded-br-md bg-brand px-4 py-2.5 text-sm text-white">
          {isActive ? displayText : content}
          {isActive && !isComplete && <span className="animate-pulse">|</span>}
        </div>
      </div>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-green-600 text-xs font-bold text-white">
        A
      </div>
    </div>
  );
};

const AssistantMessage = ({
  content,
  isActive,
  onComplete,
}: {
  content: string;
  isActive: boolean;
  onComplete: () => void;
}) => {
  const { displayText, isComplete } = useTypewriter(
    isActive ? content : content,
    TYPING_SPEED,
  );

  useEffect(() => {
    if (isComplete && isActive) {
      onComplete();
    }
  }, [isComplete, isActive, onComplete]);

  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-md dark:bg-neutral-800">
        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
      </div>
      <div className="flex max-w-[85%] flex-col gap-1">
        <div className="whitespace-pre-line rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3 text-sm text-bg-dark dark:bg-neutral-800 dark:text-white">
          {isActive ? displayText : content}
          {isActive && !isComplete && <span className="animate-pulse">|</span>}
        </div>
      </div>
    </div>
  );
};
