import supabase from "./supabase";

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data);
  return { data, error };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  return data?.user;
}

export async function updateCurrentUser({ password }) {
  if (!password) return { error: { message: "Invalid password" } };

  const { data, error } = await supabase.auth.updateUser({ password });

  return { data, error };
}

export async function recovery({ email }) {
  if (!email) return { error: { message: "Invalid email" } };

  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  return { data, error };
}
