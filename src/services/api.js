const API_BASE_URL = "https://apitest.softvencefsd.xyz/api";

class ApiService {
  constructor() {
    this.token = this.getStoredToken();
  }

  getStoredToken() {
    return (
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
    );
  }

  setAuthToken(token, remember = false) {
    this.token = token;
    if (remember) {
      localStorage.setItem("authToken", token);
      sessionStorage.removeItem("authToken");
    } else {
      sessionStorage.setItem("authToken", token);
      localStorage.removeItem("authToken");
    }
  }

  clearAuthToken() {
    this.token = null;
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultHeaders = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      defaultHeaders["Authorization"] = `Bearer ${this.token}`;
    }

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    // Convert body to FormData if it's form data
    if (
      options.body &&
      typeof options.body === "object" &&
      !(options.body instanceof FormData)
    ) {
      if (options.isFormData) {
        const formData = new FormData();
        Object.keys(options.body).forEach((key) => {
          formData.append(key, options.body[key]);
        });
        config.body = formData;
        delete config.headers["Content-Type"]; // Let browser set it for FormData
      } else {
        config.body = JSON.stringify(options.body);
      }
    }

    try {
      const response = await fetch(url, config);

      // Handle different response types
      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        throw new Error(
          data.message || data || `HTTP error! status: ${response.status}`
        );
      }

      return data;
    } catch (error) {
      console.error("API Request failed:", error);
      throw error;
    }
  }

  // Authentication endpoints
  async register(userData) {
    return this.makeRequest("/register", {
      method: "POST",
      body: {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.confirmPassword,
        terms: userData.terms,
      },
      isFormData: true,
    });
  }

  async login(credentials) {
    return this.makeRequest("/login", {
      method: "POST",
      body: {
        email: credentials.email,
        password: credentials.password,
        remember_me: credentials.rememberMe,
      },
      isFormData: true,
    });
  }

  async logout() {
    const result = await this.makeRequest("/logout", {
      method: "POST",
    });
    this.clearAuthToken();
    return result;
  }

  async verifyOtp(data) {
    return this.makeRequest("/verify_otp", {
      method: "POST",
      body: {
        email: data.email,
        otp: data.otp,
      },
      isFormData: true,
    });
  }

  async resendOtp(email) {
    return this.makeRequest("/resend_otp", {
      method: "POST",
      body: {
        email: email,
      },
      isFormData: true,
    });
  }

  async forgotPassword(email) {
    return this.makeRequest("/forgot-password", {
      method: "POST",
      body: {
        email: email,
      },
      isFormData: true,
    });
  }

  async forgotVerifyOtp(data) {
    return this.makeRequest("/forgot-verify-otp", {
      method: "POST",
      body: {
        email: data.email,
        otp: data.otp,
      },
      isFormData: true,
    });
  }

  async resetPassword(data) {
    return this.makeRequest("/reset-password", {
      method: "POST",
      body: {
        password: data.password,
        password_confirmation: data.password_confirmation,
        token: data.token,
      },
      isFormData: true,
    });
  }

  async getUserDetail() {
    return this.makeRequest("/user-detail", {
      method: "GET",
    });
  }
}

export default new ApiService();
