import PrivacyContent from "@/components/legal-pages/PrivacyContent";
import React from "react";
export const metadata = {
  title: "PDS || Privacy Policy",
  description: `Transforming businesses with cutting-edge technology and
strategic innovation. Elevate your brand with our comprehensive
digital services.`,
};
const page = () => {
  return (
    <div>
      <PrivacyContent />
    </div>
  );
};

export default page;
