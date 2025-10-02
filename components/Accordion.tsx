 "use client";

 import React, { useState, isValidElement } from "react";

export type AccordionItemProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  // Controlled mode (injected by Accordion when type="single")
  open?: boolean;
  onToggle?: () => void;
};

export function AccordionItem({ title, children, defaultOpen = false, open: controlledOpen, onToggle }: AccordionItemProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = (v: boolean) => (controlledOpen === undefined ? setUncontrolledOpen(v) : onToggle?.());
  const panelId = typeof title === 'string' ? `acc-panel-${title.replace(/\s+/g, "-").toLowerCase()}` : undefined;
  return (
    <div className="rounded-2xl bg-surface ring-1 ring-black/5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 hover:bg-black/5 transition"
      >
        <span className="font-semibold text-foreground inline-flex items-center gap-2">{title}</span>
        <svg
          className={`h-5 w-5 text-foreground/70 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
        </svg>
      </button>
      <div id={panelId} className={"grid transition-[grid-template-rows] duration-250 ease-in-out " + (open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}> 
        <div className={`overflow-hidden`}> 
          <div className={`px-5 pb-5 pt-0 text-[15px] leading-7 text-foreground/75 transition-all duration-200 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ children, type = "multiple" }: { children: React.ReactNode; type?: "single" | "multiple" }) {
  if (type === "single") {
    const items = React.Children.toArray(children);
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
      <div className="space-y-3">
        {items.map((child: React.ReactNode, idx: number) => {
          if (!isValidElement<{ title: React.ReactNode; children: React.ReactNode }>(child)) return null;
          const isOpen = openIndex === idx;
          return (
            <AccordionItem
              key={idx}
              title={child.props.title}
              open={isOpen}
              onToggle={() => setOpenIndex(isOpen ? null : idx)}
            >
              {child.props.children}
            </AccordionItem>
          );
        })}
      </div>
    );
  }
  return <div className="space-y-3">{children}</div>;
}

