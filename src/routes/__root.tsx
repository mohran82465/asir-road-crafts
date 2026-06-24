import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">٤٠٤</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          حدث خطأ غير متوقع
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          الرجاء إعادة المحاولة أو العودة للصفحة الرئيسية.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            إعادة المحاولة
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "مقاول أسفلت بيشة",
  image: "/og.jpg",
  description:
    "مقاول أسفلت بيشة لتنفيذ مداخل الفلل والمزارع والمنازل باحترافية، من أعمال التأسيس حتى السفلتة النهائية، بجودة عالية وأسعار تنافسية وضمان على التنفيذ.",
  areaServed: [
    "بيشة", "أبها", "خميس مشيط", "أحد رفيدة", "محايل عسير", "سراة عبيدة",
    "النماص", "بلقرن", "رجال ألمع", "تثليث", "المجاردة", "سبت العلاية",
    "وادي الدواسر نجد", "نجران", "تندحه", "تنومه", "بللسمر", "بللحمر", "جازان",
    "العديد", "النقيع", "الجوف", "الجنوب", "ظهران", "الباحة", "طريب",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "بيشة",
    addressRegion: "عسير",
    addressCountry: "SA",
  },
  telephone: "+966549473772",
  priceRange: "$$",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "مقاول أسفلت بيشة | مداخل فلل ومزارع ومنازل" },
      {
        name: "description",
        content:
          "مقاول أسفلت بيشة لتنفيذ مداخل الفلل والمزارع والمنازل باحترافية، من أعمال التأسيس حتى السفلتة النهائية، بجودة عالية وأسعار تنافسية وضمان على التنفيذ.",
      },
      { name: "author", content: "مقاول أسفلت بيشة" },
      { name: "theme-color", content: "#0B1E3F" },
      { property: "og:title", content: "مقاول أسفلت بيشة | مداخل فلل ومزارع ومنازل" },
      {
        property: "og:description",
        content: "مقاول أسفلت بيشة لتنفيذ مداخل الفلل والمزارع والمنازل باحترافية، من أعمال التأسيس حتى السفلتة النهائية، بجودة عالية وأسعار تنافسية وضمان على التنفيذ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_SA" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
