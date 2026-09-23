export type Role = "MEMBER" | "BETA_TESTER" | "MODERATOR" | "ADMIN" | "DEVELOPER";

export const roleDisplayName: Record<Role, string> = {
  MEMBER: "Member",
  BETA_TESTER: "Beta Tester",
  MODERATOR: "Moderator",
  ADMIN: "Admin",
  DEVELOPER: "Developer",
};

export const badgeColors: Record<Role, string> = {
  MEMBER: "#3b82f6",
  BETA_TESTER: "#facc15",
  MODERATOR: "#a855f7",
  ADMIN: "#ef4444",
  DEVELOPER: "#22c55e",
};

export function canManageAnime(role: Role) {
  return role === "ADMIN" || role === "DEVELOPER";
}

export function canBanUsers(role: Role) {
  return role === "ADMIN" || role === "DEVELOPER";
}

export function canGrantRole(role: Role) {
  return role === "DEVELOPER";
}
