import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageLoader from "@/components/ui/PageLoader";

// ─── Lazy-loaded pages (code splitting) ───────────────────────────────────────
const Home     = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const About    = lazy(() => import("@/pages/About"));
const Request  = lazy(() => import("@/pages/Request"));
const Login    = lazy(() => import("@/pages/admin/Login"));
const Dashboard= lazy(() => import("@/pages/admin/Dashboard"));

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>

          {/* ── Public routes (with shared Layout) ── */}
          <Route element={<Layout />}>
            <Route path="/"         element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about"    element={<About />} />
            <Route path="/request"  element={<Request />} />
          </Route>

          {/* ── Admin routes (no shared layout) ── */}
          <Route path="/admin"       element={<Dashboard />} />
          <Route path="/admin/login" element={<Login />} />

        </Routes>
      </Suspense>
    </Router>
  );
}