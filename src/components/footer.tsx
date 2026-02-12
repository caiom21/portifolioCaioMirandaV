import { FooterProps } from "./tipos";

export default function Footer({ theme = "dark", t }: FooterProps) {
  return (
    <footer
      className={`border-t ${theme === "dark" ? "border-gray-800 bg-[#121212]/50" : "border-gray-200 bg-[#F5F7FA]/50"} backdrop-blur-sm py-8`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            {t.footerText}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className={`transition-colors ${theme === "dark" ? "hover:text-[#DC0428]" : "hover:text-[#18DE02]"}`}
            >
              GitHub
            </a>
            <a
              href="#"
              className={`transition-colors ${theme === "dark" ? "hover:text-[#DC0428]" : "hover:text-[#18DE02]"}`}
            >
              LinkedIn
            </a>
            <a
              href="#"
              className={`transition-colors ${theme === "dark" ? "hover:text-[#DC0428]" : "hover:text-[#18DE02]"}`}
            >
              Twitter
            </a>
            <a
              href="#"
              className={`transition-colors ${theme === "dark" ? "hover:text-[#DC0428]" : "hover:text-[#18DE02]"}`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
