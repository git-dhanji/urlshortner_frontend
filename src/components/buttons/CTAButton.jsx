import { Link } from "@tanstack/react-router";

export default function CTAButton({
  text = "Get Started",
  href = "/",
  variant = "primary", // primary, secondary, outline
  size = "md", // sm, md, lg
  icon = null,
  className = "",
  onClick = null,
  disabled = false,
  loading = false,
  fullWidth = false
}) {
  const baseClasses = "inline-flex items-center justify-center font-semibold  transition-all duration-300 transform hover:scale-105 focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-light-primary hover:bg-light-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white focus:ring-light-primary dark:focus:ring-dark-primary shadow-lg hover:shadow-xl",
    secondary: "bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 text-white focus:ring-light-accent dark:focus:ring-dark-accent shadow-lg hover:shadow-xl",
    outline: "bg-transparent border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-white focus:ring-light-primary dark:focus:ring-dark-primary"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  const content = (
    <>
      {loading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {text}
    </>
  );
  
  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={buttonClasses}
      >
        {content}
      </button>
    );
  }
  
  return (
    <Link
      to={href}
      className={buttonClasses}
    >
      {content}
    </Link>
  );
}

// Pre-configured CTA button variants
export const PrimaryCTA = (props) => <CTAButton variant="primary" {...props} />;
export const SecondaryCTA = (props) => <CTAButton variant="secondary" {...props} />;
export const OutlineCTA = (props) => <CTAButton variant="outline" {...props} />;

// Common CTA configurations
export const GetStartedCTA = (props) => (
  <CTAButton
    text="Get Started Free"
    href="/signup"
    variant="primary"
    icon={
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    }
    {...props}
  />
);

export const LearnMoreCTA = (props) => (
  <CTAButton
    text="Learn More"
    href="/about"
    variant="outline"
    icon={
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    }
    {...props}
  />
);

export const DashboardCTA = (props) => (
  <CTAButton
    text="Go to Dashboard"
    href="/dashboard"
    variant="primary"
    icon={
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    }
    {...props}
  />
);
