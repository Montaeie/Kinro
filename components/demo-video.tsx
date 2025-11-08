"use client";
import React, { useRef, useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { motion } from "motion/react";

export const DemoVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Container className="border-divide border-x px-4 py-20 md:px-8">
      <div className="flex flex-col items-center">
        <Badge text="See It In Action" />
        <SectionHeading className="mt-4">
          Real insights from real conversations
        </SectionHeading>
        <SubHeading className="mx-auto mt-6 max-w-2xl">
          Watch how we analyze ChatGPT conversations to understand exactly where
          and why prospects choose your competitors
        </SubHeading>
      </div>

      {/* Video Player */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-12 max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-black shadow-2xl dark:border-neutral-700">
          <video
            ref={videoRef}
            className="w-full"
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/demo.mp4.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button Overlay (visible when not playing) */}
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex cursor-pointer items-center justify-center bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-[2px] transition hover:bg-black/50"
              onClick={handlePlay}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand flex size-20 items-center justify-center rounded-full shadow-2xl transition"
              >
                <svg
                  className="ml-1 size-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Caption below video */}
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Example: User data analysis for a B2B insurance client
        </p>
      </motion.div>

      {/* Key takeaways */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-gray-300 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900"
          >
            <h4 className="text-brand text-sm font-semibold">
              What we analyze
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• User conversation patterns</li>
              <li>• Competitor mention frequency</li>
              <li>• Source selection behavior</li>
              <li>• Recommendation drivers</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border border-gray-300 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900"
          >
            <h4 className="text-brand text-sm font-semibold">
              What you get
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• Actionable insights report</li>
              <li>• Content optimization plan</li>
              <li>• Competitor benchmarking</li>
              <li>• Implementation roadmap</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
