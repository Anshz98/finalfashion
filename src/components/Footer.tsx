import SocialMediaFooter from "./SocialMediaFooter";

const Footer = () => {
  return (
    <>
      <SocialMediaFooter />
      <footer className="bg-gray-100 border-t border-secondaryBrown py-6">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col gap-10">
          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-gray-800">Client Service</h3>
              <ul className="text-sm text-gray-600 space-y-1"></ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-gray-800">Our Brand</h3>
              <ul className="text-sm text-gray-600 space-y-1"></ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-gray-800">Luxury Clothing</h3>
              <ul className="text-sm text-gray-600 space-y-1"></ul>
            </div>
          </div>

          {/* Global Settings, Logo, and Policies */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600 flex items-center gap-1">
              Worldwide / English / French
            </p>
            <h4 className="text-2xl font-light text-gray-800 tracking-wide">PINFASHION</h4>
            <p className="text-xs text-gray-500">All rights reserved ©2024</p>
            <ul className="flex gap-3 text-sm text-gray-600">
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
