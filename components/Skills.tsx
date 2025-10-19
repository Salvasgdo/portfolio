"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiRedux,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiGit,
  SiDocker,
  SiVercel,
  SiLinux,
  SiNginx,
  SiJest,
  SiCypress,
  SiFigma,
  SiSwift,
  SiKotlin,
  SiXcode,
  SiAndroidstudio,
} from "react-icons/si";
import { TbBrandReactNative, TbApi, TbRocket, TbUsers, TbAccessible, TbBrandAws } from "react-icons/tb";
import { MdDesignServices, MdSpeed } from "react-icons/md";
import { AiOutlineDeploymentUnit, AiOutlineCloudServer } from "react-icons/ai";

export default function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      category: t("skills.frontend"),
      skills: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
        { name: "SwiftUI", icon: SiSwift, color: "#FA7343" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" }
      ],
    },
    {
      category: t("skills.backend"),
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      ],
    },
    {
      category: t("skills.devops"),
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "CI/CD", icon: AiOutlineDeploymentUnit, color: "#2088FF" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "Nginx", icon: SiNginx, color: "#009639" },
        { name: "Jest", icon: SiJest, color: "#C21325" },
        { name: "XCode", icon: SiXcode, color: "#147EFB" },
        { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
      ],
    },
    {
      category: t("skills.design"),
      skills: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "UI/UX", icon: MdDesignServices, color: "#FF6B6B" },
        { name: "Responsive Design", icon: TbBrandReactNative, color: "#61DAFB" },
        { name: "Agile/Scrum", icon: TbUsers, color: "#FF9800" },
        { name: "REST APIs", icon: TbApi, color: "#9C27B0" }
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-semibold">{category.category}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group relative"
                      >
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background hover:bg-accent transition-colors duration-200 w-20 min-h-20 md:w-24 md:min-h-24">
                          <skill.icon
                            className="w-8 h-8 md:w-10 md:h-10 transition-all duration-200 flex-shrink-0"
                            style={{ color: skill.color }}
                          />
                          <span className="text-[10px] md:text-xs font-medium text-center leading-tight w-full break-words">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
