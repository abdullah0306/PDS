import TermsOfServicesContent from "@/components/legal-pages/TermsOfServicesContent";
import React from "react";
export const metadata = {
  title: "PDS || Terms of Services",
  description: `Transforming businesses with cutting-edge technology and
strategic innovation. Elevate your brand with our comprehensive
digital services.`,
};
const page = () => {
  return (
    <div>
      <TermsOfServicesContent />
    </div>
  );
};

export default page;
