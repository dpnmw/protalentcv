import type { MessageDescriptor } from "@lingui/core";

import { msg } from "@lingui/core/macro";

import type { Template } from "@/schema/templates";

export type TemplateMetadata = {
  name: string;
  description: MessageDescriptor;
  imageUrl: string;
  tags: string[];
  sidebarPosition: "left" | "right" | "none";
};

export const templates = {
  monet: {
    name: "Monet",
    description: msg`Two-column with a bold colored sidebar and skill bars; great for creative or tech roles where visual flair is welcome.`,
    imageUrl: "/templates/jpg/monet.jpg",
    tags: ["Two-column", "Creative", "Tech", "Visual flair"],
    sidebarPosition: "left",
  },
  renoir: {
    name: "Renoir",
    description: msg`Two-column, clean and professional with subtle section dividers; suits corporate, finance, or consulting positions.`,
    imageUrl: "/templates/jpg/renoir.jpg",
    tags: ["Two-column", "Clean", "Professional", "Corporate", "Finance", "Consulting"],
    sidebarPosition: "none",
  },
  degas: {
    name: "Degas",
    description: msg`Two-column with a soft header accent and circular profile photo; ideal for marketing, HR, or client-facing roles.`,
    imageUrl: "/templates/jpg/degas.jpg",
    tags: ["Two-column", "Soft accent", "Marketing", "HR", "Client-facing"],
    sidebarPosition: "right",
  },
  pissarro: {
    name: "Pissarro",
    description: msg`Two-column with a dark teal sidebar and skills grid; modern feel for developers, data scientists, or technical PMs.`,
    imageUrl: "/templates/jpg/pissarro.jpg",
    tags: ["Two-column", "Modern", "Developer", "Data science", "Technical PM", "Dark sidebar"],
    sidebarPosition: "left",
  },
  sisley: {
    name: "Sisley",
    description: msg`Two-column, minimal and text-dense with no decorative elements; perfect for traditional industries or ATS-heavy applications.`,
    imageUrl: "/templates/jpg/sisley.jpg",
    tags: ["Two-column", "ATS friendly", "Minimal", "Text-dense", "Traditional", "No decoration"],
    sidebarPosition: "left",
  },
  cassatt: {
    name: "Cassatt",
    description: msg`Two-column with accent colors and clean typography; balanced choice for business analysts or operations roles.`,
    imageUrl: "/templates/jpg/cassatt.jpg",
    tags: ["Two-column", "Accent colors", "Clean typography", "Business analyst", "Operations"],
    sidebarPosition: "left",
  },
  morisot: {
    name: "Morisot",
    description: msg`Two-column, minimal with light gray sidebar and subtle icons; professional and understated for legal, finance, or executive roles.`,
    imageUrl: "/templates/jpg/morisot.jpg",
    tags: ["Two-column", "Minimal", "Professional", "Legal", "Finance", "Executive", "Understated"],
    sidebarPosition: "left",
  },
  cezanne: {
    name: "Cézanne",
    description: msg`Single-column with a magenta left border accent; compact and efficient for entry-level or internship applications.`,
    imageUrl: "/templates/jpg/cezanne.jpg",
    tags: ["Single-column", "ATS friendly", "Compact", "Efficient", "Entry level", "Internship", "Magenta accent"],
    sidebarPosition: "none",
  },
  seurat: {
    name: "Seurat",
    description: msg`Single-column; polished and serious for senior or enterprise-level positions.`,
    imageUrl: "/templates/jpg/seurat.jpg",
    tags: ["Single-column", "ATS friendly", "Polished", "Senior", "Enterprise"],
    sidebarPosition: "none",
  },
  guillaumin: {
    name: "Guillaumin",
    description: msg`Two-column with a muted color sidebar; earthy and calm, suits sustainability, healthcare, or nonprofit sectors.`,
    imageUrl: "/templates/jpg/guillaumin.jpg",
    tags: ["Two-column", "Muted sidebar", "Earthy", "Calm", "Sustainability", "Healthcare", "Nonprofit"],
    sidebarPosition: "right",
  },
  bazille: {
    name: "Bazille",
    description: msg`Single-column with a sidebar and clean grid layout; versatile for any professional or technical role.`,
    imageUrl: "/templates/jpg/bazille.jpg",
    tags: ["Single-column", "ATS friendly", "Sidebar", "Grid layout", "Versatile", "Professional", "Technical"],
    sidebarPosition: "none",
  },
  fantin: {
    name: "Fantin",
    description: msg`Two-column with a left margin color; simple and approachable for creative, editorial, or junior roles.`,
    imageUrl: "/templates/jpg/fantin.jpg",
    tags: ["Two-column", "Simple", "Creative", "Editorial", "Junior", "Accent colors"],
    sidebarPosition: "left",
  },
  signac: {
    name: "Signac",
    description: msg`Single-column with a minimal top header and lots of whitespace; clean and modern for designers or content creators.`,
    imageUrl: "/templates/jpg/signac.jpg",
    tags: ["Single-column", "ATS friendly", "Minimal", "Clean", "Modern", "Designer", "Content creator", "Whitespace"],
    sidebarPosition: "none",
  },
} as const satisfies Record<Template, TemplateMetadata>;
