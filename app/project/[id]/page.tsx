"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Play,
  Gamepad2,
  Trophy,
  Zap,
  X,
  ZoomIn,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  getProjectById,
  getProjectTypes,
  hasProjectType,
} from "../../../lib/projects";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardHover,
  scaleOnHover,
} from "../../../lib/animations";
import {
  getProjectTypeIcon,
  getProjectTypeColor,
  getProjectTypeName,
} from "../../../lib/project-utils";
import { scrollToTop } from "../../../lib/scroll-utils";
import { PDFViewer } from "@/components/pdf-viewer";

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

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const project = getProjectById(params.id as string);

  // コンポーネント内に以下のstateを追加
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 페이지 로드 시 스크롤을 맨 위로 이동
  useEffect(() => {
    scrollToTop();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold mb-4">
            プロジェクトが見つかりません
          </h1>
          <motion.div {...scaleOnHover}>
            <Button onClick={() => router.back()}>戻る</Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const isGameProject = hasProjectType(project, "game");
  const projectTypes = getProjectTypes(project);
  return (
    <div
      className={`min-h-screen ${
        isGameProject
          ? "bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20"
          : "bg-background"
      }`}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 w-full border-b ${
          isGameProject
            ? "bg-purple-100/80 dark:bg-purple-950/80"
            : "bg-background/95"
        } backdrop-blur supports-[backdrop-filter]:bg-background/60`}
      >
        <div className="container flex h-14 items-center">
          <motion.div {...scaleOnHover}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">戻る</span>
            </Button>
          </motion.div>
          <div className="flex items-center space-x-3">
            <div className="flex gap-1">
              {projectTypes.map((type, index) => (
                <Badge
                  key={index}
                  className={`${getProjectTypeColor(
                    type
                  )} flex items-center gap-1`}
                >
                  {getProjectTypeIcon(type)}
                  {getProjectTypeName(type)}
                </Badge>
              ))}
            </div>
            <span className="font-bold text-sm sm:text-base truncate">
              {project.title}
            </span>
          </div>
        </div>
      </motion.header>

      <div className="container py-6 md:py-8">
        {/* Project Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <motion.div variants={fadeInLeft} className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-2xl md:text-4xl font-bold">
                  {project.title}
                </h1>
                {isGameProject && (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  >
                    <Gamepad2 className="h-8 w-8 text-purple-600" />
                  </motion.div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {projectTypes.map((type, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {getProjectTypeIcon(type)}
                    <span className="ml-1">{getProjectTypeName(type)}</span>
                  </Badge>
                ))}
              </div>

              {isGameProject && project.gameGenre && (
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-muted-foreground">
                    ジャンル: {project.gameGenre}
                  </span>
                </div>
              )}

              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {project.period}
                </div>
                {project.teamSize ? (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    チーム規模: {project.teamSize}名
                  </div>
                ) : null}

                <div className="flex flex-col sm:flex-row gap-2">
                  {project.demo && (
                    <motion.div {...scaleOnHover}>
                      <Button
                        asChild
                        className={`w-full sm:w-auto ${
                          isGameProject
                            ? "bg-purple-600 hover:bg-purple-700"
                            : ""
                        }`}
                      >
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="flex items-center justify-center space-x-2"
                        >
                          {isGameProject ? (
                            <Play className="h-4 w-4" />
                          ) : (
                            <ExternalLink className="h-4 w-4" />
                          )}
                          <span>
                            {project.type === "app"
                              ? "プレイストア"
                              : isGameProject
                              ? "ゲームプレイ"
                              : "ライブデモ"}
                          </span>
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                  {project.github ? (
                    <motion.div {...scaleOnHover}>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full sm:w-auto"
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </Link>
                      </Button>
                    </motion.div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant={isGameProject ? "default" : "secondary"}
                      className={`text-sm ${
                        isGameProject ? "bg-purple-600" : ""
                      }`}
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="lg:w-1/3 h-full">
              <div
                className="aspect-video lg:aspect-square relative group cursor-pointer h-full"
                onClick={() =>
                  setSelectedImage(project.image || "/placeholder.svg")
                }
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`rounded-lg object-cover transition-transform group-hover:scale-105 ${
                    isGameProject
                      ? "ring-2 ring-purple-200 dark:ring-purple-800"
                      : ""
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {isGameProject && (
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg" />
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="mb-8 md:mb-12" />

        {/* Game Controls (게임 프로젝트만) */}
        {isGameProject && project.gameControls && (
          <AnimatedSection className="mb-8 md:mb-12">
            <motion.div {...cardHover}>
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                    <Gamepad2 className="h-5 w-5" />
                    ゲーム操作方法
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.gameControls.map((control, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg"
                      >
                        <Zap className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm font-medium">{control}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        )}

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="拡大画像"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Project Images Gallery */}
        {project.images && (
          <AnimatedSection className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              {isGameProject
                ? "ゲームスクリーンショット"
                : "プロジェクトスクリーンショット"}
            </h2>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  {...cardHover}
                  className="aspect-video relative group cursor-pointer"
                  onClick={() => setSelectedImage(image || "/placeholder.svg")}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} スクリーンショット ${index + 1}`}
                    fill
                    className={`border-2 rounded-lg object-cover transition-transform group-hover:scale-105 ${
                      isGameProject
                        ? "ring-1 ring-purple-200 dark:ring-purple-800"
                        : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {isGameProject && (
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent rounded-lg" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        )}

        {project.pdf && <PDFViewer file={project.pdf} title={project.title} />}
        {/* Project Details */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 md:gap-8 lg:grid-cols-2"
        >
          {/* Description */}
          <motion.div variants={fadeInUp} {...cardHover}>
            <Card
              className={`h-full ${
                isGameProject ? "border-purple-200 dark:border-purple-800" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {isGameProject ? "ゲーム紹介" : "プロジェクト紹介"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {project.longDescription.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Game Features or Regular Features */}
          <motion.div variants={fadeInUp} {...cardHover}>
            <Card
              className={`h-full ${
                isGameProject ? "border-purple-200 dark:border-purple-800" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {isGameProject && project.gameFeatures
                    ? "ゲーム特徴"
                    : "主要機能"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(isGameProject && project.gameFeatures
                    ? project.gameFeatures
                    : project.features
                  ).map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span
                        className={`mt-1 flex-shrink-0 ${
                          isGameProject ? "text-purple-600" : "text-primary"
                        }`}
                      >
                        •
                      </span>
                      <span className="text-gray-600 text-sm md:text-base">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Challenges */}
          {project.challenges && (
            <motion.div variants={fadeInUp} {...cardHover}>
              <Card
                className={`h-full ${
                  isGameProject
                    ? "border-orange-200 dark:border-orange-800"
                    : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">
                    技術的挑戦
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-orange-500 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-gray-600 text-sm md:text-base">
                          {challenge}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Learnings */}
          {project.learnings && (
            <motion.div variants={fadeInUp} {...cardHover}>
              <Card
                className={`h-full ${
                  isGameProject ? "border-green-200 dark:border-green-800" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">
                    学んだこと
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="font-bold text-green-500 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-gray-600  text-sm md:text-base">
                          {learning}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Back to Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:mt-12 text-center"
        >
          <motion.div {...scaleOnHover}>
            <Button
              onClick={() => router.back()}
              size="lg"
              className={`w-full sm:w-auto ${
                isGameProject ? "bg-purple-600 hover:bg-purple-700" : ""
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              ポートフォリオに戻る
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
