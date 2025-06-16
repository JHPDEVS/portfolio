"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { skills, getAllCategories, getSkillsByCategory } from "../lib/skills"
import { SkillBadge } from "./skill-badge"
import { fadeInUp, staggerContainer } from "../lib/animations"

export function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const categories = ["All", ...getAllCategories()]

  const filteredSkills = selectedCategory === "All" ? skills : getSkillsByCategory(selectedCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              <span className="mr-2">
                {category === "All" && "🌟"}
                {category === "Frontend" && "🎨"}
                {category === "Backend" && "⚙️"}
                {category === "Database" && "🗄️"}
                {category === "Tools" && "🛠️"}
                {category === "Game" && "🎮"}
              </span>
              {category}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category === "All" ? skills.length : getSkillsByCategory(category).length}
              </Badge>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0, y: 20 }}
          variants={staggerContainer}
          className="grid gap-6 md:gap-8"
        >
          {selectedCategory === "All" ? (
            // Show by categories when "All" is selected
            getAllCategories().map((category) => {
              const categorySkills = getSkillsByCategory(category)
              return (
                <motion.div key={category} variants={fadeInUp}>
                  <Card>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span>
                          {category === "Frontend" && "🎨"}
                          {category === "Backend" && "⚙️"}
                          {category === "Database" && "🗄️"}
                          {category === "Tools" && "🛠️"}
                          {category === "Game" && "🎮"}
                        </span>
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                        {categorySkills.map((skill, index) => (
                          <SkillBadge key={skill.name} skill={skill} index={index} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })
          ) : (
            // Show filtered skills
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span>
                      {selectedCategory === "Frontend" && "🎨"}
                      {selectedCategory === "Backend" && "⚙️"}
                      {selectedCategory === "Database" && "🗄️"}
                      {selectedCategory === "Tools" && "🛠️"}
                      {selectedCategory === "Game" && "🎮"}
                    </span>
                    {selectedCategory}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {filteredSkills.map((skill, index) => (
                      <SkillBadge key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
