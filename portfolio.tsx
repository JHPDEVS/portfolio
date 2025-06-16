"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Github,
  Mail,
  MapPin,
  Phone,
  Heart,
  Coffee,
  Camera,
  Music,
  Languages,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./components/mobile-nav";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleOnHover,
} from "./lib/animations";
import { getAllCategories, getSkillsByCategory } from "./lib/skills";
import { SkillBadge } from "./components/skill-badge";
import { ProjectTabs } from "./components/project-tabs";
import { scrollToSection } from "./lib/scroll-utils";

// アニメーション付きセクションコンポーネント
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  // 趣味データ
  const hobbies = [
    {
      name: "囲碁",
      icon: "🎯",
      description: "戦略的思考を楽しむ伝統ゲーム",
    },
    {
      name: "登山",
      icon: "🏔️",
      description: "自然の中でリフレッシュしています",
    },
    {
      name: "PC組み立て",
      icon: "💻",
      description: "最新パーツでカスタムPCを構築",
    },
    {
      name: "IT ニュース",
      icon: "📰",
      description: "最新技術トレンドをチェック",
    },
  ];

  // セクションスクロール処理
  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ヘッダー */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 items-center justify-between px-4">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="#" className="flex items-center space-x-2">
              <span className="font-bold text-lg">ポートフォリオ</span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => handleScrollToSection("about")}
              className="transition-colors hover:text-foreground/80 cursor-pointer"
            >
              私について
            </button>
            <button
              onClick={() => handleScrollToSection("projects")}
              className="transition-colors hover:text-foreground/80 cursor-pointer"
            >
              プロジェクト
            </button>
            <button
              onClick={() => handleScrollToSection("skills")}
              className="transition-colors hover:text-foreground/80 cursor-pointer"
            >
              スキル
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="transition-colors hover:text-foreground/80 cursor-pointer"
            >
              お問い合わせ
            </button>
          </nav>

          {/* モバイルナビゲーション */}
          <div className="md:hidden relative z-50">
            <MobileNav />
          </div>
        </div>
      </motion.header>

      {/* ヒーローセクション */}
      <section className="container py-16 md:py-24 lg:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col items-center text-center space-y-6"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              こんにちは、<span className="text-primary">パク・ジュヒョン</span>
              です
            </h1>
            <p className="mx-auto max-w-[700px] p-6 text-muted-foreground text-base md:text-xl px-4">
              UXを重視するフロントエンド開発者です。
              <br />
              ゲームからWebアプリケーション、モバイルアプリまで
              <br />
              様々なプロジェクトを開発し、新しい技術に挑戦しています。
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div {...scaleOnHover}>
              <Button
                size="lg"
                onClick={() => handleScrollToSection("projects")}
              >
                プロジェクトを見る
              </Button>
            </motion.div>
            <motion.div {...scaleOnHover}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollToSection("contact")}
              >
                お問い合わせ
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 私についてセクション */}
      <section id="about" className="container py-16 md:py-24">
        <AnimatedSection className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
            私について
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/30117732?v=4?height=300&width=300"
                alt="プロフィール写真"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-6 px-4 lg:px-0"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">開発者として</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  UXを重視するフロントエンド開発者です。ゲームからWebアプリケーション、モバイルアプリまで、さまざまなプロジェクトを手掛け、新しい技術に挑戦しています。直感的に操作できるインターフェースを提供することに情熱を注ぎ、デザインと機能性の両立を常に目指しています。また、フロントエンドだけでなく、クライアントプロジェクトにおいてバックエンドの経験も積みながら、将来的にはフルスタック開発者として成長していくことを目指しています。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>東京、日本 (韓国出身)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>2023.04 ~ </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Languages className="h-4 w-4" />
                  <span>日本語能力試験 N2</span>
                </div>
              </div>

              {/* 趣味セクション */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">趣味・関心事</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                    >
                      <div className="text-primary mt-0.5">{hobby.icon}</div>
                      <div>
                        <h4 className="font-medium text-sm">{hobby.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {hobby.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <AnimatedSection className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
              プロジェクト
            </h2>
            <ProjectTabs />
          </AnimatedSection>
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="container py-16 md:py-24">
        <AnimatedSection className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
            スキル
          </h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {getAllCategories().map((category, categoryIndex) => {
              const categorySkills = getSkillsByCategory(category);
              return (
                <motion.div key={category} variants={fadeInUp}>
                  <Card className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl md:text-2xl flex items-center gap-3">
                        <span className="text-2xl">
                          {category === "Language" && "📜"}
                          {category === "Frontend" && "🎨"}
                          {category === "Backend" && "⚙️"}
                          {category === "Cloud" && "☁️"}
                          {category === "Database" && "🗄️"}
                          {category === "Mobile" && "📱"}
                          {category === "Tools" && "🛠️"}
                          {category === "Game" && "🎮"}
                          {category === "OS" && "💻"}
                          {category === "CMS" && "📝"}
                          {category === "ETC" && "🔧"}
                        </span>
                        {category === "Frontend" && "フロントエンド"}
                        {category === "Language" && "言語"}
                        {category === "Backend" && "バックエンド"}
                        {category === "Cloud" && "インフラ"}
                        {category === "Database" && "データベース"}
                        {category === "Mobile" && "モバイル"}
                        {category === "Tools" && "ツール"}
                        {category === "Game" && "ゲーム"}
                        {category === "OS" && "OS"}
                        {category === "CMS" && "CMS"}
                        {category === "ETC" && "その他"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                        {categorySkills.map((skill, skillIndex) => (
                          <SkillBadge
                            key={skill.name}
                            skill={skill}
                            index={skillIndex}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">
              お問い合わせ
            </h2>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <motion.div variants={fadeInUp} {...scaleOnHover}>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link
                    href="mailto:jhpdevs@gmail.com"
                    className="flex items-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>jhpdevs@gmail.com</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <Separator className="my-8" />
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex justify-center"
            >
              <motion.div {...scaleOnHover}>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/jhpdevs" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* フッター */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t py-6"
      >
        <div className="container text-center text-sm text-muted-foreground">
          © 2025 パク・ジュヒョン. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}
