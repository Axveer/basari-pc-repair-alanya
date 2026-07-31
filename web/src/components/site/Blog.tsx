import { Lightbulb } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="section-pad bg-ash-light">
      <div className="container">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">{t.blog.eyebrow}</span>
          <h2 className="h2-title mt-3">{t.blog.title}</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{t.blog.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.blog.posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 90}>
              <article className="card-base card-hover group h-full p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-ink">
                    <Lightbulb className="h-3 w-3" />
                    {post.tag}
                  </span>
                  <span className="font-display text-[26px] font-extrabold leading-none text-ash-light transition-colors group-hover:text-brand/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-navy">{post.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ash">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
