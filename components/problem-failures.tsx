"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { motion } from "motion/react";

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const ProblemFailures = () => {
  return (
    <Container className="border-divide border-x">
      <div className="px-4 py-20 md:px-8 md:py-20">
        <div className="text-center mb-16">
          <Badge text="The Problem" />
          <SectionHeading className="mt-4">
            Where Your Prospects Drop Off
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl">
            Understanding every point of failure in the LLM-driven customer journey
          </SubHeading>
        </div>

        {/* Three Column Layout on Desktop, Stacked on Mobile */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Column 1: User Failures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-bg-dark bg-transparent shadow-lg transition-shadow hover:shadow-xl dark:border-brand"
          >
            <div className="border-b border-bg-dark p-5 dark:border-brand">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200 dark:bg-neutral-700">
                  <svg className="h-6 w-6 text-bg-dark dark:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-bg-dark dark:text-white">
                    User Actions
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    What prospects do next
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <UserFailures />
            </div>
          </motion.div>

          {/* Column 2: ChatGPT Response Example - Same style as Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-[#212121]"
          >
            {/* Chat Header - ChatGPT Style exact comme Hero */}
            <div className="border-b border-gray-200 bg-white px-4 py-3 dark:border-[#424242] dark:bg-[#212121]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center">
                    <svg className="h-5 w-5 text-black dark:text-white" viewBox="0 0 41 41" fill="currentColor">
                      <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.8486 37.4832 24.2632C37.3617 25.6778 36.8382 27.0296 35.9743 28.1506C35.1103 29.2715 33.9415 30.1133 32.6047 30.5789C32.6047 30.5103 32.6047 30.3889 32.6047 30.3046V21.1033C32.6066 20.8741 32.5474 20.6482 32.4332 20.4492C32.319 20.2502 32.1538 20.0853 31.955 19.9717V20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">
                    ChatGPT Response
                  </span>
                </div>
                <div className="rounded-full bg-brand/10 px-2 py-1 text-xs font-medium text-brand">
                  Example
                </div>
              </div>
            </div>

            {/* Chat Message - Assistant Style comme Hero */}
            <div className="bg-gray-50 dark:bg-[#2f2f2f]">
              <div className="flex gap-4 px-4 py-6 md:px-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white">
                  <svg className="h-5 w-5 text-white dark:text-black" viewBox="0 0 41 41" fill="currentColor">
                    <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.8486 37.4832 24.2632C37.3617 25.6778 36.8382 27.0296 35.9743 28.1506C35.1103 29.2715 33.9415 30.1133 32.6047 30.5789C32.6047 30.5103 32.6047 30.3889 32.6047 30.3046V21.1033C32.6066 20.8741 32.5474 20.6482 32.4332 20.4492C32.319 20.2502 32.1538 20.0853 31.955 19.9717V20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"/>
                  </svg>
                </div>
                <div className="flex-1 space-y-4 pt-1">
                  <div className="text-base text-gray-900 dark:text-gray-100">
                    Congrats on creating an AI distribution business for insurtech! The Silicon Valley dream!
                  </div>
                  <div className="space-y-2 text-base">
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold">Providers:</span> COMPETITOR A, COMPETITOR B
                    </div>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold">Sources:</span>
                    </div>
                    <ul className="ml-4 space-y-1.5 text-gray-900 dark:text-gray-100">
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <span>Comparator sites</span>
                      </li>
                      <li className="flex items-center gap-2 font-semibold text-brand">
                        <span>•</span>
                        <span>YOUR BUSINESS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <span>Reddit (negative mention)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <span>COMPETITOR C</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <span>Broker website</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 p-3 dark:border-yellow-900/50 dark:bg-yellow-900/20">
                    <svg className="h-5 w-5 shrink-0 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                      Multiple failure points in this single response
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: LLM Failures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-bg-dark bg-transparent shadow-lg transition-shadow hover:shadow-xl dark:border-brand"
          >
            <div className="border-b border-bg-dark p-5 dark:border-brand">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200 dark:bg-neutral-700">
                  <svg className="h-6 w-6 text-bg-dark dark:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-bg-dark dark:text-white">
                    LLM Inner Workings
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Behind-the-scenes process
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <LLMFailures />
            </div>
          </motion.div>
        </div>

        {/* Loop Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6">
            <div className="flex items-center gap-3">
              <svg className="size-8 animate-spin text-brand" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg font-bold text-brand">
                Continuous Research Loop
              </span>
            </div>
            <p className="max-w-md text-sm text-gray-700 dark:text-gray-300">
              Prospects keep searching until satisfied or give up
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300">
                50% quit after 1st try
              </span>
              <span>→</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300">
                70% after 2nd
              </span>
              <span>→</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300">
                90% after 3rd
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

// User Failures Accordion
const UserFailures = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const failures = [
    {
      title: "Continues conversation",
      description: "Alex asks follow-up questions, gathering more information before taking action.",
      example: "Most common path (60% of users)",
    },
    {
      title: "Clicks competitor website",
      description: "Visits a competitor's site and completes purchase directly.",
      example: "Lost opportunity - competitor wins",
      danger: true,
    },
    {
      title: "Visits comparator site",
      description: "YOUR BUSINESS appears but doesn't stand out among alternatives.",
      example: "Diluted positioning - weakened value proposition",
      danger: true,
    },
    {
      title: "Checks broker website",
      description: "Broker doesn't serve your offer or recommends a competitor.",
      example: "Channel conflict - lost referral",
      danger: true,
    },
  ];

  return (
    <div className="space-y-2">
      {failures.map((failure, index) => (
        <AccordionItem
          key={index}
          title={failure.title}
          description={failure.description}
          example={failure.example}
          danger={failure.danger}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

// LLM Failures Accordion
const LLMFailures = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const phases = [
    {
      title: "1. Thinking & Reasoning",
      items: [
        {
          subtitle: "Memory Processing",
          description: "LLM analyzes: 'Young cofounder, insurtech, AI distribution, 5 clients, facing legal risks...'",
          isFailure: false,
        },
      ],
    },
    {
      title: "2. Search Phase",
      items: [
        {
          subtitle: "Website not found",
          description: "Your site doesn't appear in search results for key terms like 'best insurance for startups', 'SF business insurance'",
          isFailure: true,
        },
        {
          subtitle: "Content unreadable",
          description: "Crawlers cannot parse your website content correctly",
          isFailure: true,
        },
        {
          subtitle: "Content not prioritized",
          description: "Low reputation, no bidding, insufficient informativeness, or perceived bias",
          isFailure: true,
        },
      ],
    },
    {
      title: "3. Answer Formatting",
      items: [
        {
          subtitle: "Links not selected",
          description: "Your content is used to support facts but your links aren't included",
          isFailure: true,
        },
        {
          subtitle: "Competitors benefit",
          description: "Your content helps the response but competitors get the attribution",
          isFailure: true,
        },
        {
          subtitle: "Wrong link selected",
          description: "Your link is mentioned but not optimized for conversion (wrong landing page)",
          isFailure: true,
        },
        {
          subtitle: "Competitor links prioritized",
          description: "Competitor links appear more prominently in the response",
          isFailure: true,
        },
      ],
    },
  ];

  return (
    <div className="space-y-3">
      {phases.map((phase, phaseIndex) => (
        <motion.div
          key={phaseIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50/50 shadow-sm transition-all hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/30"
        >
          <button
            onClick={() => setOpenIndex(openIndex === phaseIndex ? null : phaseIndex)}
            className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-200 dark:bg-neutral-700">
                <span className="text-sm font-bold text-bg-dark dark:text-brand">
                  {phaseIndex + 1}
                </span>
              </div>
              <span className="text-sm font-semibold text-bg-dark dark:text-white">
                {phase.title}
              </span>
            </div>
            <ChevronDownIcon
              className={`size-5 shrink-0 text-gray-600 transition-transform dark:text-gray-400 ${
                openIndex === phaseIndex ? "rotate-180" : ""
              }`}
            />
          </button>
          <motion.div
            initial={false}
            animate={{ height: openIndex === phaseIndex ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 border-t border-gray-200 px-4 pb-4 pt-3 dark:border-neutral-700">
              {phase.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: itemIndex * 0.05 }}
                  className={`rounded-lg border p-3 ${
                    item.isFailure
                      ? "border-red-200 bg-red-50 dark:border-red-900/30 dark:bg-red-900/10"
                      : "border-gray-200 bg-gray-50 dark:border-neutral-700 dark:bg-neutral-800"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {item.isFailure ? (
                      <svg className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <div className="flex-1">
                      <p className={`text-xs font-semibold ${
                        item.isFailure
                          ? "text-red-800 dark:text-red-400"
                          : "text-bg-dark dark:text-white"
                      }`}>
                        {item.subtitle}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Reusable Accordion Item
const AccordionItem = ({
  title,
  description,
  example,
  danger = false,
  isOpen,
  onClick,
}: {
  title: string;
  description: string;
  example: string;
  danger?: boolean;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`overflow-hidden rounded-lg border transition-all ${
        danger
          ? "border-red-200 bg-red-50/30 dark:border-red-900/30 dark:bg-red-900/5"
          : "border-gray-200 bg-gray-50/30 dark:border-neutral-700 dark:bg-neutral-800/30"
      } ${isOpen ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
    >
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between p-3 text-left transition-all ${
          danger
            ? "hover:bg-red-50 dark:hover:bg-red-900/10"
            : "hover:bg-gray-50 dark:hover:bg-neutral-800"
        }`}
      >
        <div className="flex items-center gap-2 flex-1">
          {danger ? (
            <svg className="h-4 w-4 shrink-0 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <span className={`text-sm font-medium ${
            danger
              ? "text-red-800 dark:text-red-300"
              : "text-bg-dark dark:text-white"
          }`}>
            {title}
          </span>
        </div>
        <ChevronDownIcon
          className={`size-4 shrink-0 transition-transform text-gray-600 dark:text-gray-400 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className={`border-t px-3 pb-3 pt-2 ${
          danger
            ? "border-red-200 bg-red-50 dark:border-red-900/30 dark:bg-red-900/10"
            : "border-gray-200 bg-gray-50 dark:border-neutral-700 dark:bg-neutral-800"
        }`}>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
          <div className={`mt-2 rounded px-2 py-1 text-xs font-medium italic ${
            danger
              ? "text-red-700 dark:text-red-400"
              : "text-gray-600 dark:text-gray-400"
          }`}>
            {example}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
