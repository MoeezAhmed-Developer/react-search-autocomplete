import { Link } from "react-router";
import style from "../css/auto-suggestion.module.css";

export default function AutoSuggestion({ inputVal }) {
  const searchResults = [
    { title: "Home", link: "/" },
    { title: "Services", link: "/services" },
    { title: "Web Development", link: "/services/web-development" },
    { title: "Frontend Development", link: "/services/frontend-development" },
    { title: "Backend Development", link: "/services/backend-development" },
    {
      title: "Full Stack Development",
      link: "/services/full-stack-development",
    },
    { title: "UI/UX Design", link: "/services/ui-ux-design" },
    { title: "Graphic Design", link: "/services/graphic-design" },
    { title: "SEO Optimization", link: "/services/seo" },
    { title: "Digital Marketing", link: "/services/digital-marketing" },
    { title: "Social Media Management", link: "/services/social-media" },
    { title: "Content Writing", link: "/services/content-writing" },
    { title: "Email Marketing", link: "/services/email-marketing" },
    { title: "Website Maintenance", link: "/services/website-maintenance" },
    { title: "WordPress Development", link: "/services/wordpress" },
    { title: "React Development", link: "/services/react-development" },
    { title: "Node.js Development", link: "/services/node-development" },
    { title: "MongoDB Database", link: "/services/mongodb" },
    { title: "Login & Authentication", link: "/services/authentication" },
    { title: "API Development", link: "/services/api-development" },
    { title: "Payment Gateway Integration", link: "/services/payment-gateway" },
    { title: "Website Error Fixing", link: "/services/error-fixing" },
    { title: "E-Commerce Development", link: "/services/ecommerce" },
    {
      title: "Mobile App Development",
      link: "/services/mobile-app-development",
    },
    { title: "Custom Website Development", link: "/services/custom-website" },
  ];

  const filteredResults = searchResults.filter((item) =>
    item.title.toLowerCase().includes(inputVal.toLowerCase()),
  );

  if (!inputVal) {
    return null;
  }

  return (
    inputVal && (
      <div className={style.autoSuggestion}>
        <ul>
          {filteredResults.length > 0 ? (
            filteredResults.splice(0, 5).map((result, idx) => (
              <li key={idx}>
                <Link to={result.link}>{result.title}</Link>
                <i className="uil uil-arrow-up-right"></i>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    )
  );
}
