// User management utilities

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface CurrentUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ResetToken {
  token: string;
  expiry: string;
  userId: string;
}

// Get all users from localStorage
export const getUsers = (): User[] => {
  try {
    return JSON.parse(localStorage.getItem("users") || "[]");
  } catch (error) {
    console.error("Error parsing users from localStorage:", error);
    return [];
  }
};

// Save users to localStorage
export const saveUsers = (users: User[]): void => {
  try {
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.error("Error saving users to localStorage:", error);
  }
};

// Add a new user
export const addUser = (user: Omit<User, "createdAt">): boolean => {
  try {
    const users = getUsers();
    
    // Check if user already exists
    const userExists = users.find(u => u.email === user.email);
    if (userExists) {
      return false;
    }

    const newUser: User = {
      ...user,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    return true;
  } catch (error) {
    console.error("Error adding user:", error);
    return false;
  }
};

// Update user password
export const updateUserPassword = (email: string, newPassword: string): boolean => {
  try {
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === email);
    
    if (userIndex === -1) {
      return false;
    }

    users[userIndex].password = newPassword;
    saveUsers(users);
    return true;
  } catch (error) {
    console.error("Error updating user password:", error);
    return false;
  }
};

// Authenticate user
export const authenticateUser = (email: string, password: string): User | null => {
  try {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
  } catch (error) {
    console.error("Error authenticating user:", error);
    return null;
  }
};

// Get current logged in user
export const getCurrentUser = (): CurrentUser | null => {
  try {
    const currentUser = localStorage.getItem("currentUser");
    return currentUser ? JSON.parse(currentUser) : null;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};

// Set current logged in user
export const setCurrentUser = (user: CurrentUser): void => {
  try {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } catch (error) {
    console.error("Error setting current user:", error);
  }
};

// Logout user
export const logoutUser = (): void => {
  try {
    localStorage.removeItem("currentUser");
  } catch (error) {
    console.error("Error logging out user:", error);
  }
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return getCurrentUser() !== null;
};

// Reset token management
export const getResetTokens = (): Record<string, ResetToken> => {
  try {
    return JSON.parse(localStorage.getItem("resetTokens") || "{}");
  } catch (error) {
    console.error("Error parsing reset tokens from localStorage:", error);
    return {};
  }
};

export const saveResetTokens = (tokens: Record<string, ResetToken>): void => {
  try {
    localStorage.setItem("resetTokens", JSON.stringify(tokens));
  } catch (error) {
    console.error("Error saving reset tokens to localStorage:", error);
  }
};

export const addResetToken = (email: string, token: string, expiry: string): void => {
  try {
    const tokens = getResetTokens();
    tokens[email] = {
      token,
      expiry,
      userId: email
    };
    saveResetTokens(tokens);
  } catch (error) {
    console.error("Error adding reset token:", error);
  }
};

export const validateResetToken = (email: string, token: string): boolean => {
  try {
    const tokens = getResetTokens();
    const resetData = tokens[email];
    
    if (!resetData || resetData.token !== token) {
      return false;
    }

    // Check if token is expired
    if (new Date() > new Date(resetData.expiry)) {
      // Clean up expired token
      delete tokens[email];
      saveResetTokens(tokens);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error validating reset token:", error);
    return false;
  }
};

export const removeResetToken = (email: string): void => {
  try {
    const tokens = getResetTokens();
    delete tokens[email];
    saveResetTokens(tokens);
  } catch (error) {
    console.error("Error removing reset token:", error);
  }
}; 