"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../lib/scroll-utils";

interface MobileNavProps {
  onLinkClick?: () => void;
}

export function MobileNav({ onLinkClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // ボタンクリック処理
  const handleToggle = () => {
    console.log("ボタンがクリックされました!", !isOpen);
    setIsOpen(!isOpen);
  };

  // リンククリック処理
  const handleLinkClick = (sectionId: string) => {
    console.log("リンクがクリックされました:", sectionId);
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
    onLinkClick?.();
  };

  // メニューが開いているときのスクロール防止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ナビゲーション項目
  const navItems = [
    { href: "about", label: "私について", emoji: "👨‍💻" },
    { href: "projects", label: "プロジェクト", emoji: "🚀" },
    { href: "skills", label: "スキル", emoji: "⚡" },
    { href: "contact", label: "お問い合わせ", emoji: "📧" },
  ];

  return (
    <div className="md:hidden">
      {/* ハンバーガーボタン */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggle}
        className="relative z-[60] h-12 w-12 p-0 hover:bg-accent focus-visible:bg-accent touch-manipulation"
        style={{ pointerEvents: "auto" }}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.div>
      </Button>

      {/* 全画面オーバーレイ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-black/80"
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
            }}
          />
        )}
      </AnimatePresence>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-0 right-0 z-[56] h-screen w-[320px] shadow-2xl"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "320px",
              backgroundColor: "white",
              zIndex: 56,
            }}
          >
            {/* 完全不透明背景 */}
            <div
              className="absolute inset-0 bg-white dark:bg-gray-900"
              style={{
                backgroundColor: "white",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
            />

            {/* メニューコンテンツ */}
            <div className="relative z-10 h-full flex flex-col">
              {/* ヘッダー */}
              <div
                className="flex items-center justify-center p-6 border-b border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  メニュー
                </h2>
              </div>

              {/* ナビゲーション */}
              <div className="flex-1 p-6" style={{ backgroundColor: "white" }}>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      onClick={() => handleLinkClick(item.href)}
                      className="group flex items-center w-full text-left px-5 py-4 text-lg font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl border border-transparent hover:border-blue-200 active:bg-blue-100"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                        {item.emoji}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* フッター */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto pt-6 border-t border-gray-200"
                  style={{ marginTop: "auto" }}
                >
                  <p className="text-sm text-gray-500 text-center">
                    © 2025 パク・ジュヒョン
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
