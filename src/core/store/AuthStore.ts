import { Exome } from "exome";
import { supabase } from "../service/AuthClient";

// const = [token, setToken] = useState<string>("");

class AuthStore extends Exome {
  public token: string = "";
  public loggedIn: boolean = true;
  public modalOpen: boolean = false;
  private redirectToHome: (() => void) | null = null;

  public setRedirectCallback(callback: () => void) {
    this.redirectToHome = callback;
  }

  public setToken(token: string) {
    this.token = token;
  }

  public async checkToken() {
    const { data } = await supabase.auth.getSession();
    this.setToken(data.session?.access_token || "");
    if (this.token === "") {
      console.log("No token");
      this.setLoggedIn(false);
    } else {
      console.log("Token");
      this.setLoggedIn(true);
    }
  }
  public setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

  public setModalOpen(modalOpen: boolean) {
    this.modalOpen = modalOpen;
    console.log(this.modalOpen);
  }

  public async login(email: string, password: string) {
    console.log(import.meta.env.VITE_SUPABASE_URL);
    console.log(import.meta.env.VITE_SUPABASE_KEY);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    } else {
      this.setToken(data.session?.access_token || "");
      this.setLoggedIn(true);
      console.log(this.token);
    }
  }

  public async loginWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log(error.message);
    } else {
      const { data } = await supabase.auth.getSession();
      this.setToken(data.session?.access_token || "");
      this.setLoggedIn(true);
      console.log(this.token);
    }
  }

  public async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    } else {
      this.setToken("");
      this.setLoggedIn(false);
      if (this.redirectToHome) this.redirectToHome();
    }
  }

  public async signUp(email: string, password: string, username: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });
    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  }

  public async singUpWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log(error.message);
    } else {
      const { data } = await supabase.auth.getSession();
      this.setToken(data.session?.access_token || "");
      this.setLoggedIn(true);
      console.log(this.token);
    }
  }
}

export const authStore = new AuthStore();
