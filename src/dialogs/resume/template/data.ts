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
  roseau: {
    name: "Roseau",
    description: msg`Two-column with a bold colored sidebar and skill bars; great for creative or tech roles where visual flair is welcome.`,
    imageUrl: "/templates/jpg/roseau.jpg",
    tags: ["Two-column", "Creative", "Tech", "Visual flair"],
    sidebarPosition: "left",
  },
  bridgetown: {
    name: "Bridgetown",
    description: msg`Two-column, clean and professional with subtle section dividers; suits corporate, finance, or consulting positions.`,
    imageUrl: "/templates/jpg/bridgetown.jpg",
    tags: ["Two-column", "Clean", "Professional", "Corporate", "Finance", "Consulting"],
    sidebarPosition: "none",
  },
  castries: {
    name: "Castries",
    description: msg`Two-column with a soft header accent and circular profile photo; ideal for marketing, HR, or client-facing roles.`,
    imageUrl: "/templates/jpg/castries.jpg",
    tags: ["Two-column", "Soft accent", "Marketing", "HR", "Client-facing"],
    sidebarPosition: "right",
  },
  "port-of-spain": {
    name: "Port of Spain",
    description: msg`Two-column with a dark teal sidebar and skills grid; modern feel for developers, data scientists, or technical PMs.`,
    imageUrl: "/templates/jpg/port-of-spain.jpg",
    tags: ["Two-column", "Modern", "Developer", "Data science", "Technical PM", "Dark sidebar"],
    sidebarPosition: "left",
  },
  nassau: {
    name: "Nassau",
    description: msg`Two-column, minimal and text-dense with no decorative elements; perfect for traditional industries or ATS-heavy applications.`,
    imageUrl: "/templates/jpg/nassau.jpg",
    tags: ["Two-column", "ATS friendly", "Minimal", "Text-dense", "Traditional", "No decoration"],
    sidebarPosition: "left",
  },
  kingston: {
    name: "Kingston",
    description: msg`Two-column with accent colors and clean typography; balanced choice for business analysts or operations roles.`,
    imageUrl: "/templates/jpg/kingston.jpg",
    tags: ["Two-column", "Accent colors", "Clean typography", "Business analyst", "Operations"],
    sidebarPosition: "left",
  },
  basseterre: {
    name: "Basseterre",
    description: msg`Two-column, minimal with light gray sidebar and subtle icons; professional and understated for legal, finance, or executive roles.`,
    imageUrl: "/templates/jpg/basseterre.jpg",
    tags: ["Two-column", "Minimal", "Professional", "Legal", "Finance", "Executive", "Understated"],
    sidebarPosition: "left",
  },
  "st-georges": {
    name: "St George's",
    description: msg`Single-column with a magenta left border accent; compact and efficient for entry-level or internship applications.`,
    imageUrl: "/templates/jpg/st-georges.jpg",
    tags: ["Single-column", "ATS friendly", "Compact", "Efficient", "Entry level", "Internship", "Magenta accent"],
    sidebarPosition: "none",
  },
  kingstown: {
    name: "Kingstown",
    description: msg`Single-column; polished and serious for senior or enterprise-level positions.`,
    imageUrl: "/templates/jpg/kingstown.jpg",
    tags: ["Single-column", "ATS friendly", "Polished", "Senior", "Enterprise"],
    sidebarPosition: "none",
  },
  "st-johns": {
    name: "St John's",
    description: msg`Two-column with a muted color sidebar; earthy and calm, suits sustainability, healthcare, or nonprofit sectors.`,
    imageUrl: "/templates/jpg/st-johns.jpg",
    tags: ["Two-column", "Muted sidebar", "Earthy", "Calm", "Sustainability", "Healthcare", "Nonprofit"],
    sidebarPosition: "right",
  },
  havana: {
    name: "Havana",
    description: msg`Single-column with a sidebar and clean grid layout; versatile for any professional or technical role.`,
    imageUrl: "/templates/jpg/havana.jpg",
    tags: ["Single-column", "ATS friendly", "Sidebar", "Grid layout", "Versatile", "Professional", "Technical"],
    sidebarPosition: "none",
  },
  plymouth: {
    name: "Plymouth",
    description: msg`Two-column with a left margin color; simple and approachable for creative, editorial, or junior roles.`,
    imageUrl: "/templates/jpg/plymouth.jpg",
    tags: ["Two-column", "Simple", "Creative", "Editorial", "Junior", "Accent colors"],
    sidebarPosition: "left",
  },
  oranjestad: {
    name: "Oranjestad",
    description: msg`Single-column with a minimal top header and lots of whitespace; clean and modern for designers or content creators.`,
    imageUrl: "/templates/jpg/oranjestad.jpg",
    tags: ["Single-column", "ATS friendly", "Minimal", "Clean", "Modern", "Designer", "Content creator", "Whitespace"],
    sidebarPosition: "none",
  },
} as const satisfies Record<Template, TemplateMetadata>;
