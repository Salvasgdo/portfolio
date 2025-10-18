"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
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
            © {currentYear} Portfolio. Hecho con{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> y Next.js
          </p>
          <div className="flex gap-6">
            <a
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

