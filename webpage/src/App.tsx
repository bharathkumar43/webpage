import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
import PricingPage from './pages/PricingPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';
// import ResetPasswordPage from './pages/ResetPasswordPage';
import DocumentationPage from './pages/DocumentationPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import HelpCenterPage from './pages/HelpCenterPage';
import CommunityPage from './pages/CommunityPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/pricing" element={<PricingPage />} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
        {/* <Route path="/reset-password" element={<ResetPasswordPage />} /> */}
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
