"use client";
import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";

export const ProblemChat = () => {
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

        {/* ChatGPT Conversation */}
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-bg-dark bg-white shadow-lg dark:border-brand dark:bg-neutral-900">
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
            <div className="space-y-4 p-6">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl bg-brand px-4 py-2.5 text-white">
                  <p className="text-sm">What's the best insurance for my startup?</p>
                </div>
              </div>

              {/* Assistant Message */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl bg-gray-100 px-4 py-3 dark:bg-neutral-800">
                  <p className="mb-3 text-sm text-bg-dark dark:text-white">
                    Congrats on creating an AI distribution business for insurtech! The Silicon Valley dream!
                  </p>

                  <p className="mb-2 text-sm text-bg-dark dark:text-white">
                    That means key coverages you need are:
                  </p>

                  <div className="mb-3 space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-bg-dark dark:text-white">
                        General Liability:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        for bodily injuries... <LinkBadge>link1</LinkBadge>, <LinkBadge>link2</LinkBadge>
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-bg-dark dark:text-white">
                        Errors and omissions (E&O):
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Important because you're providing a software solution...
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="mb-1 text-sm font-semibold text-bg-dark dark:text-white">
                      Providers can be:
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      COMPETITOR A, COMPETITOR B <LinkBadge>link3</LinkBadge>, <LinkBadge>link4</LinkBadge>
                    </p>
                  </div>

                  <div className="mb-3">
                    <p className="mb-1 text-sm font-semibold text-bg-dark dark:text-white">
                      Top providers for what you look for:
                    </p>
                    <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                      <li>
                        COMPARATOR WEBSITES* <LinkBadge>link5</LinkBadge>, <LinkBadge>link6</LinkBadge>
                      </li>
                      <li>
                        YOUR BUSINESS offers a... <LinkBadge>link7</LinkBadge>. Reddit mentions a user hasn't been reimbursed for being sued for hallucinations <LinkBadge danger>reddit link8</LinkBadge>
                      </li>
                      <li>
                        COMPETITOR C <LinkBadge>link8</LinkBadge> offers a cheaper alternative to [YOUR BUSINESS]
                      </li>
                      <li>
                        BROKER WEBSITE <LinkBadge>link9</LinkBadge>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Link Badge Component
const LinkBadge = ({
  children,
  danger = false
}: {
  children: React.ReactNode;
  danger?: boolean;
}) => {
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium ${
      danger
        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
    }`}>
      {children}
    </span>
  );
};
