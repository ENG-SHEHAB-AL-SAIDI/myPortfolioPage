import { Globe, Smartphone, Users, Wallet } from "lucide-react";

export const projects = [
  {
    id: "rentersManagement",
    image: "project-1.svg",
    icon: Globe,

    title: {
      en: "Renter Management System",
      ar: "نظام إدارة المستأجرين",
    },

    type: {
      en: "Full-Stack + Mobile",
      ar: "فل ستاك + جوال",
    },

    description: {
      en: "Property management platform for tenant records, rent tracking, lease management, and financial reporting. Developed web and mobile applications with Laravel, Flutter, and MySQL. Built secure REST APIs for tenant, lease, and payment management.",
      ar: "منصة لإدارة العقارات تشمل سجلات المستأجرين وتتبع الإيجارات وإدارة العقود والتقارير المالية. طُورت كتطبيق ويب وجوال باستخدام Laravel وFlutter وMySQL مع واجهات REST API آمنة.",
    },

    platforms: {
      en: ["Web", "Android"],
      ar: ["ويب", "أندرويد"],
    },

    tags: [
      "Flutter",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
    ],

    typeColor: "text-emerald-400",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  },

  {
    id: "studentServices",
    image: "project-2.svg",
    icon: Users,

    title: {
      en: "Student Services System",
      ar: "نظام الخدمات الطلابية",
    },

    type: {
      en: "Graduation Project · Team of 5",
      ar: "مشروع التخرج · فريق من 5 أعضاء",
    },

    description: {
      en: "University platform developed by a team of five to centralize student services. Built Flutter mobile and Flutter Web applications with a Node.js and MySQL backend. Features include schedules, grades, notifications, assignments, and an e-library.",
      ar: "منصة جامعية طُورت بواسطة فريق مكون من خمسة أعضاء لتوحيد الخدمات الطلابية. تضم تطبيق Flutter للجوال وFlutter Web مع Node.js وMySQL، وتشمل الجداول والدرجات والإشعارات والواجبات والمكتبة الإلكترونية.",
    },

    platforms: {
      en: ["Mobile", "Web"],
      ar: ["جوال", "ويب"],
    },

    tags: [
      "Flutter",
      "Flutter Web",
      "Node.js",
      "MySQL",
      "REST API",
    ],

    typeColor: "text-pink-400",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    borderGlow: "hover:border-pink-500/40 hover:shadow-pink-500/10",
  },

  {
    id: "debtBook",
    image: "project-3.png",
    icon: Wallet,

    title: {
      en: "Debt Book",
      ar: "دفتر الديون",
    },

    type: {
      en: "Offline-First Mobile App",
      ar: "تطبيق جوال يعمل دون اتصال",
    },

    description: {
      en: "Personal finance application for tracking debts, payments, and customer balances. Built an offline-first Flutter application using SQLite and GetX with local backups, debt analytics, and clean architecture.",
      ar: "تطبيق لإدارة الديون والمدفوعات وأرصدة العملاء. يعتمد على Flutter وSQLite وGetX مع نسخ احتياطية محلية وتحليلات للديون وبنية Clean Architecture.",
    },

    platforms: {
      en: ["Android"],
      ar: ["أندرويد"],
    },

    tags: [
      "Flutter",
      "SQLite",
      "GetX",
      "Hive",
      "Offline First",
    ],

    typeColor: "text-cyan-400",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
  },

  {
    id: "glassLanding",
    image: "project-4.svg",
    icon: Globe,

    title: {
      en: "Glass Services Landing Page",
      ar: "الصفحة التعريفية لخدمات الزجاج",
    },

    type: {
      en: "Frontend Web",
      ar: "واجهة ويب",
    },

    description: {
      en: "Modern landing page showcasing glass services. Developed a responsive React application using Vite and Tailwind CSS with reusable UI components and smooth animations.",
      ar: "صفحة هبوط حديثة لعرض خدمات الزجاج. طُورت باستخدام React وVite وTailwind CSS مع مكونات قابلة لإعادة الاستخدام ورسوم متحركة سلسة.",
    },

    platforms: {
      en: ["Web"],
      ar: ["ويب"],
    },

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],

    typeColor: "text-amber-400",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "hover:border-amber-500/40 hover:shadow-amber-500/10",
  },
];