export type SessionUser = {
  id?: number;
  name: string;
  email: string;
};

let currentUser: SessionUser | null = null;

export function setCurrentUser(user: SessionUser) {
  currentUser = user;
}

export function clearCurrentUser() {
  currentUser = null;
}

export function getCurrentUser(): SessionUser | null {
  return currentUser;
}

