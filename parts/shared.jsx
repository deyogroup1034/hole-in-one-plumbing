const { useState, useEffect, useRef } = React;

/* ---------- Business data ---------- */
const BIZ = {
  name: "Hole in One Plumbing",
  phones: ["(972) 429-2223", "(972) 475-5458"],
  email: "info@holeinoneplumbing.com",
  license: "Master Plumber #M37741",
  years: "20+",
  hours: "Mon–Fri 8a–5p",
};

const SERVICES = [
  {
    key: "leak",
    title: "Leak Location",
    blurb: "We pinpoint the exact source of hidden leaks fast — before a small drip becomes costly water damage.",
    icon: "drop",
  },
  {
    key: "gas",
    title: "Gas Line Repair & Replacement",
    blurb: "Keep your family safe. We inspect, repair, and replace damaged gas lines to code.",
    icon: "flame",
  },
  {
    key: "drain",
    title: "Drain Cleaning",
    blurb: "Everyone's drain stops up now and then. We clear even the most stubborn clogs.",
    icon: "swirl",
  },
  {
    key: "camera",
    title: "Camera Line Inspection",
    blurb: "A miniature camera lets us see inside your pipes and diagnose the real problem — no guessing.",
    icon: "camera",
  },
  {
    key: "sewer",
    title: "Sewer Lines & Slab Leaks",
    blurb: "We locate underground issues and use modern methods to repair them on solid ground.",
    icon: "layers",
  },
  {
    key: "misc",
    title: "Faucets, Sinks & Toilets",
    blurb: "From faucets and sinks to toilets — we fix it right the first time, and we fix it fast.",
    icon: "wrench",
  },
];

const TESTIMONIALS = [
  { quote: "Replacing the gas line went extremely smooth. He was extremely clean and time efficient. His honesty was appreciated — the final price was actually less than quoted. I would recommend him for all future services. Excellent!", name: "Mr. Haddock", city: "McKinney, TX" },
  { quote: "He saved me about $6,000 by properly diagnosing a sink drain as a clog rather than a broken pipe like another company claimed. He cleared the nasty clog in about half an hour. As far as I'm concerned, Oscar is my plumber for life.", name: "Mr. Hoskins", city: "Dallas, TX" },
  { quote: "The initial customer service was by far the best I have experienced. Genuine interest and concern with problems other plumbers failed to fix. His price was very reasonable. I would not hesitate to call again.", name: "Ms. West", city: "Mesquite, TX" },
  { quote: "Came out on zero notice Sunday afternoon to finish a job I started. (I fought the faucet, the faucet won.) Quickly assessed the situation, gave a fair quote, and the job was done quickly and very well.", name: "Ms. Romero", city: "Dallas, TX" },
  { quote: "It's comforting to know I have a plumbing service I can use that has a high level of integrity — that's difficult to find these days. I will recommend you to anyone that asks.", name: "Mr. Durham", city: "Allen, TX" },
];

const AREAS = ["Wylie","Sachse","Murphy","Plano","McKinney","Allen","Frisco","Rockwall","Carrollton","Mesquite","Dallas","Garland","Richardson","Anna"];

/* ---------- Icons (simple line icons) ---------- */
function Icon({ name, className }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", className };
  const paths = {
    drop: <path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3z" />,
    flame: <path d="M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c2 1.5 3 3.4 3 5.5a5 5 0 0 1-10 0C7 11 12 9 12 3z" />,
    swirl: <><path d="M4 7h13a3 3 0 1 1-3 3" /><path d="M4 12h9a3 3 0 1 1-3 3" /><path d="M4 17h6" /></>,
    camera: <><rect x="3" y="7" width="13" height="11" rx="2" /><path d="M16 11l5-3v8l-5-3z" /><circle cx="9" cy="12.5" r="2.2" /></>,
    layers: <><path d="M12 3 3 8l9 5 9-5-9-5z" /><path d="m3 13 9 5 9-5" /></>,
    wrench: <path d="M21 6.5a4 4 0 0 1-5.2 3.8L7 19a2.1 2.1 0 0 1-3-3l8.7-8.8A4 4 0 0 1 16.5 2l-2.6 2.6 1.5 3.5 3.5 1.5L21 6.5z" />,
    phone: <path d="M5 4h3l1.6 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.6V18a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    shield: <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />,
    star: <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />,
    check: <path d="M5 12.5 10 17l9-10" />,
    award: <><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" /></>,
    truck: <><path d="M3 6h11v9H3z" /><path d="M14 9h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.6" /><circle cx="17" cy="17.5" r="1.6" /></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const el of els) {
        if (el.classList.contains("in")) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add("in");
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    const t = setTimeout(check, 300);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(t);
    };
  }, []);
}

function Placeholder({ label, style, className }) {
  return (
    <div className={"ph " + (className||"")} style={style}><span>{label}</span></div>
  );
}

Object.assign(window, { React, useState, useEffect, useRef, BIZ, SERVICES, TESTIMONIALS, AREAS, Icon, useReveal, Placeholder });
