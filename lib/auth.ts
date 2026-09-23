import type { Session } from "next-auth";

export function getAccountIdLabel(id: number) {
  return `#${id}`;
}

export function formatRelativeDate(date: Date | string | null) {
  if (!date) return "Belum ada";
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getSessionUser(session: Session | null) {
  return session?.user ?? null;
}
