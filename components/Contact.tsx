"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Download, CheckCircle, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : null;

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_URL) {
      setErrorMessage("Formspree no configurado. Añade NEXT_PUBLIC_FORMSPREE_ID en .env.local");
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage((await res.json()).error || "Error al enviar");
      }
    } catch {
      setStatus("error");
      setErrorMessage(t("contact.error"));
    }
  }
  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email2"),
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    /*{
      icon: Phone,
      label: t("contact.phone"),
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
    },*/
    /*{
      icon: MapPin,
      label: t("contact.location"),
      value: SITE_CONFIG.location,
      href: "#",
    },*/
  ];

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-2xl font-semibold">{t("contact.sendMessage")}</h3>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder={t("contact.namePlaceholder")}
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder={t("contact.emailPlaceholder")}
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder={t("contact.messagePlaceholder")}
                      disabled={status === "sending"}
                    />
                  </div>
                  {status === "success" && (
                    <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      {t("contact.success")}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="flex items-center gap-2 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMessage || t("contact.error")}{" "}
                      <a href={`mailto:${SITE_CONFIG.email}`} className="underline">
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full group"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      t("contact.sending")
                    ) : (
                      <>
                        {t("contact.send")}
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-purple-400/10 rounded-full"
                      >
                        <info.icon className="h-6 w-6 text-purple-700" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="bg-gradient-to-br from-primary/10 to-purple-600/10 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-2">
                  {t("contact.ready")}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {t("contact.available")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1" asChild>
                    <a href={SITE_CONFIG.cvEs} download target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      {t("contact.cvSpanish")}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <a href={SITE_CONFIG.cvEn} download target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      {t("contact.cvEnglish")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

