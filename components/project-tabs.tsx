"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, ExternalLink, Github, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, type ProjectType } from "../lib/projects";
import {
  getProjectTypeIcon,
  getProjectTypeColor,
  getProjectTypeName,
} from "../lib/project-utils";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  scaleOnHover,
} from "../lib/animations";

// プロジェクトタイプ定義
const projectTypes: {
  type: ProjectType | "all";
  label: string;
  emoji: string;
}[] = [
  { type: "all", label: "全て", emoji: "🌟" },
  { type: "game", label: "ゲーム", emoji: "🎮" },
  { type: "frontend", label: "フロントエンド", emoji: "🎨" },
  { type: "backend", label: "バックエンド", emoji: "⚙️" },
  { type: "app", label: "アプリ", emoji: "📱" },
];

export function ProjectTabs() {
  const [activeTab, setActiveTab] = useState<ProjectType | "all">("all");

  // フィルタリングされたプロジェクト
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <div className="space-y-8">
      {/* タブナビゲーション */}
      <div className="flex flex-wrap justify-center gap-2">
        {projectTypes.map((tab) => (
          <motion.div
            key={tab.type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeTab === tab.type ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.type)}
              className="text-sm font-medium"
            >
              <span className="mr-2">{tab.emoji}</span>
              {tab.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {tab.type === "all"
                  ? projects.length
                  : projects.filter((p) => p.type === tab.type).length}
              </Badge>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* プロジェクトグリッド */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0, y: 20 }}
          variants={staggerContainer}
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInUp} {...cardHover}>
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${getProjectTypeColor(
                        project.type
                      )} flex items-center gap-1`}
                    >
                      {getProjectTypeIcon(project.type)}
                      {getProjectTypeName(project.type)}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2 h-12">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{project.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.div {...scaleOnHover} className="flex-1">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/project/${project.id}`}>詳細を見る</Link>
                      </Button>
                    </motion.div>
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.div {...scaleOnHover}>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.github} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                      {project.demo && (
                        <motion.div {...scaleOnHover}>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.demo} target="_blank">
                              {project.type == "game" ? (
                                <Play className="h-4 w-4" />
                              ) : (
                                <ExternalLink className="h-4 w-4" />
                              )}
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* プロジェクトが見つからない場合 */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-muted-foreground"
        >
          <p className="text-lg">
            該当するカテゴリのプロジェクトがありません。
          </p>
        </motion.div>
      )}
    </div>
  );
}
