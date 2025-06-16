import { Code, Database, Gamepad2, Smartphone } from "lucide-react";
import type { ProjectType, Project } from "./projects";

// プロジェクトタイプアイコン取得
export function getProjectTypeIcon(type: ProjectType) {
  switch (type) {
    case "game":
      return <Gamepad2 className="h-4 w-4" />;
    case "frontend":
      return <Code className="h-4 w-4" />;
    case "backend":
      return <Database className="h-4 w-4" />;
    case "app":
      return <Smartphone className="h-4 w-4" />;
    default:
      return <Code className="h-4 w-4" />;
  }
}

// プロジェクトタイプ色取得
export function getProjectTypeColor(type: ProjectType) {
  switch (type) {
    case "game":
      return "bg-white text-purple-700 border-purple-200 dark:text-purple-300 dark:border-purple-800 hover:bg-white";
    case "frontend":
      return "bg-white text-blue-700 border-blue-200 dark:text-blue-300 dark:border-blue-800 hover:bg-white";
    case "backend":
      return "bg-white text-green-700 border-green-200 dark:text-green-300 dark:border-green-800 hover:bg-white";
    case "app":
      return "bg-white text-orange-700 border-orange-200 dark:text-orange-300 dark:border-orange-800 hover:bg-white";
    default:
      return "bg-white text-gray-700 border-gray-200 dark:text-gray-300 dark:border-gray-800 hover:bg-white";
  }
}

// プロジェクトタイプ名取得
export function getProjectTypeName(type: ProjectType) {
  switch (type) {
    case "game":
      return "ゲーム";
    case "frontend":
      return "フロントエンド";
    case "backend":
      return "バックエンド";
    case "app":
      return "アプリ";
    default:
      return "その他";
  }
}

export function getProjectTypeIcons(project: Project) {
  const types = Array.isArray(project.type) ? project.type : [project.type];
  return types.map((type) => getProjectTypeIcon(type));
}

export function getProjectTypeNames(project: Project) {
  const types = Array.isArray(project.type) ? project.type : [project.type];
  return types.map((type) => getProjectTypeName(type));
}

export function getProjectTypeColors(project: Project) {
  const types = Array.isArray(project.type) ? project.type : [project.type];
  return types.map((type) => getProjectTypeColor(type));
}

export function getPrimaryProjectType(project: Project): ProjectType {
  return Array.isArray(project.type) ? project.type[0] : project.type;
}
