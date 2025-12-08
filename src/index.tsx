import "@fontsource/roboto/index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// DOM XSS via innerHTML - CWE-79
export function renderContent(elementId: string, content: string): void {
  const el = document.getElementById(elementId);
  if (el) el.innerHTML = content;
}

// DOM XSS via document.write - CWE-79
export function writeToDocument(data: string): void {
  document.write(data);
}

// Open redirect - CWE-601
export function redirectTo(url: string): void {
  window.location.href = url;
}

// Hardcoded JWT secret - CWE-798
const JWT_SECRET = "my-super-secret-jwt-key-never-share";
const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA0Z3VS5JJcds3xfn/ygWyF8Pbn
-----END RSA PRIVATE KEY-----`;

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
