/**
 * Portfolio Blog — post catalog
 * --------------------------------
 * HOW TO ADD A NEW WRITE-UP:
 * 1. Copy blog/writeup-template.html → blog/<category>/<slug>.html
 * 2. Fill in the placeholders in that HTML file
 * 3. Add one object below (id must be unique)
 * 4. Cards on index + blog/index auto-update via script.js
 *
 * Categories: soc | htb | tryhackme | ad | footprinting
 * difficulty: Easy | Medium | Hard | Insane | Notes
 */
window.PORTFOLIO_POSTS = [
  {
    id: "htb-sample-linux",
    title: "HTB — Sample Linux Machine (Template)",
    category: "htb",
    categoryLabel: "HTB",
    date: "2026-03-15",
    difficulty: "Easy",
    excerpt:
      "Template write-up: recon with Nmap, web foothold, and Linux privilege escalation. Replace with your own notes.",
    tags: ["Linux", "Nmap", "PrivEsc"],
    slug: "htb/sample-linux-machine.html",
    icon: "🎯",
  },
  {
    id: "htb-footprinting-easy",
    title: "HTB Academy — Footprinting Lab (Easy)",
    category: "htb",
    categoryLabel: "HTB",
    date: "2026-02-20",
    difficulty: "Easy",
    excerpt:
      "Placeholder for HTB Academy footprinting lab notes: DNS, SMB, SNMP, and service enumeration checklist.",
    tags: ["Footprinting", "Recon", "Academy"],
    slug: "htb/footprinting-lab-easy.html",
    icon: "📡",
  },
  {
    id: "soc-windows-event-logs",
    title: "SOC — Windows Event Logs & Finding Evil",
    category: "soc",
    categoryLabel: "SOC",
    date: "2026-03-01",
    difficulty: "Notes",
    excerpt:
      "Template notes for Windows Event Log sources, useful Event IDs, and investigation workflow for SOC analysts.",
    tags: ["Windows", "Event Logs", "Blue Team"],
    slug: "soc/windows-event-logs.html",
    icon: "🛡️",
  },
  {
    id: "soc-splunk-intro",
    title: "SOC — Log Investigation with Splunk (Intro)",
    category: "soc",
    categoryLabel: "SOC",
    date: "2026-02-10",
    difficulty: "Notes",
    excerpt:
      "Placeholder SPL cheatsheet and investigation steps. Swap in your own lab screenshots and queries.",
    tags: ["Splunk", "SPL", "SIEM"],
    slug: "soc/splunk-investigation-intro.html",
    icon: "📊",
  },
  {
    id: "thm-sample-room",
    title: "TryHackMe — Sample Room Write-up",
    category: "tryhackme",
    categoryLabel: "TryHackMe",
    date: "2026-02-28",
    difficulty: "Easy",
    excerpt:
      "Room template: objectives, enumeration, foothold, and post-exploitation. Fill with your own walkthrough.",
    tags: ["THM", "Web", "Beginner"],
    slug: "tryhackme/sample-room.html",
    icon: "🧩",
  },
  {
    id: "ad-kerberoasting",
    title: "Active Directory — Kerberoasting Notes",
    category: "ad",
    categoryLabel: "AD",
    date: "2026-01-10",
    difficulty: "Medium",
    excerpt:
      "Home-lab style notes: request TGS, crack with hashcat/john, detection ideas. Template for your AD path.",
    tags: ["Kerberos", "Impacket", "Detection"],
    slug: "ad/kerberoasting-notes.html",
    icon: "🔑",
  },
  {
    id: "footprinting-methodology",
    title: "Footprinting — Methodology Overview",
    category: "footprinting",
    categoryLabel: "Footprinting",
    date: "2026-01-05",
    difficulty: "Notes",
    excerpt:
      "Structured recon checklist (passive → active). Use as a living document while studying Academy modules.",
    tags: ["Recon", "OSINT", "Checklist"],
    slug: "footprinting/methodology-overview.html",
    icon: "🗺️",
  },
];

/** Category metadata for filters / nav */
window.PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All", description: "Every write-up" },
  { id: "soc", label: "SOC", description: "Blue team, SIEM, log analysis" },
  { id: "htb", label: "HTB", description: "Hack The Box machines & Academy" },
  { id: "tryhackme", label: "TryHackMe", description: "THM rooms & paths" },
  { id: "ad", label: "AD", description: "Active Directory labs" },
  {
    id: "footprinting",
    label: "Footprinting",
    description: "Recon methodology & notes",
  },
];
