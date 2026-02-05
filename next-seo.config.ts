const metaDescription =
  "SyaPratama is a Full-Stack Developer specializing in building efficient, scalable websites and web apps with a focus on user convenience. Let’s turn your business vision into reality!";

const getDefaultSeoConfig = () => ({
  title: "SyaPratama - Personal Website",
  defaultTitle: "SyaPratama - Personal Website",
  description: metaDescription,
  openGraph: {
    title: "SyaPratama - Personal Website",
    description: metaDescription,
    type: "profile",
    siteName: "Sya Pratama",
    profile: {
      first_name: "Rasya",
      middle_name: "Putra",
      last_name: "Pratama",
      username: "syapratama",
    },
  },
  additionalMetaTags: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "keywords",
      content:
        "programer, portfolio, web, developer, personal, design, rasya, syapratama, rasya pratama, sya pratama, sya, developer, backend, fullstack, frontend, ui ux, laravel, next js, freelance",
    },
    {
      name: "author",
      content: "SyaPratama",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "application-name",
      content: "SyaPratama",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "SyaPratama",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },

    // ✅ Google AdSense verification
    {
      name: "google-adsense-account",
      content: "ca-pub-6200304491212280",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "android-chrome-icon",
      sizes: "192x192",
      href: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome-icon",
      sizes: "512x512",
      href: "/favicon/android-chrome-512x512.png", // 👈 fix ekstensi
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
});

export default getDefaultSeoConfig;
