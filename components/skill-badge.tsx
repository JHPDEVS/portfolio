"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Skill } from "../lib/skills"

interface SkillBadgeProps {
  skill: Skill
  index: number
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <Image
        src={skill.badgeUrl || "/placeholder.svg"}
        alt={skill.name}
        width={120}
        height={28}
        className="h-7 w-auto object-contain"
        unoptimized // shields.io 이미지는 외부 URL이므로 최적화 비활성화
      />
    </motion.div>
  )
}
