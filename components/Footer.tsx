"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <Separator className="mb-8" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Portfolio. {t("footer.madeWith")}{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> {t("footer.and")} Next.js
          </p>
          <div className="flex gap-6">
            <a
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.home")}
            </a>
            <a
              href="#proyectos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.projects")}
            </a>
            <a
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.contact")}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

