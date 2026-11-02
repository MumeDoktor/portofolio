"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type Entry = { input: string; output: string };

const HELP = "projects  open <name>  cv  contact  github  whoami  clear";

/** A small working shell. Everything it can do is also a normal link on the page. */
export function Prompt({
  projects,
  email,
  cvUrl,
  github,
  whoami,
}: {
  projects: { slug: string; title: string }[];
  email: string;
  cvUrl: string;
  github: string;
  whoami: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<Entry[]>([]);

  function run(raw: string): string | null {
    const [cmd, ...rest] = raw.trim().toLowerCase().split(/\s+/);
    const arg = rest.join(" ");
    switch (cmd) {
      case "":
        return "";
      case "help":
        return HELP;
      case "ls":
      case "projects":
        return projects.map((p) => p.slug).join("\n");
      case "open":
      case "cd": {
        const match = arg && projects.find((p) => p.slug.includes(arg) || p.title.toLowerCase().includes(arg));
        if (!match) return `no such project: ${arg || "(none)"}. try: projects`;
        router.push(`/projects/${match.slug}`);
        return `opening ${match.slug}...`;
      }
      case "cv":
        window.open(cvUrl, "_blank", "noopener");
        return `opening ${cvUrl}`;
      case "contact":
        return email;
      case "github":
        window.open(github, "_blank", "noopener");
        return github;
      case "whoami":
        return whoami;
      case "sudo":
        return "nice try.";
      case "clear":
        return null;
      default:
        return `command not found: ${cmd}. try: help`;
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const output = run(value);
    setHistory((h) => (output === null ? [] : [...h, { input: value, output }]));
    setValue("");
  }

  return (
    <div className="mt-6">
      {history.map((entry, i) => (
        <div key={i} className="mb-2">
          <p>
            <span className="text-accent">$</span> {entry.input}
          </p>
          <p aria-live="polite" className="whitespace-pre-wrap text-muted">
            {entry.output}
          </p>
        </div>
      ))}
      <form onSubmit={submit} className="flex items-center gap-2">
        <label htmlFor="shell" className="text-accent">
          $
        </label>
        <input
          id="shell"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type help"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal command"
          className="min-w-0 flex-1 bg-transparent text-fg caret-accent outline-none placeholder:text-muted"
        />
      </form>
    </div>
  );
}
