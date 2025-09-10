import cloudfuzeLogo from "@/assects/cloudfuze.png";
import neutaraLogo from "@/assects/Neutara.png";
import exinentLogo from "@/assects/Exinent.png";

const TrustIndicatorsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8">
            Trusted by 2,000+ content teams, marketers & agencies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-16 sm:gap-20 lg:gap-24 items-center">
            <img 
              src={cloudfuzeLogo} 
              alt="Cloudfuze" 
              className="h-20 sm:h-24 lg:h-28 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src={neutaraLogo} 
              alt="Neutara" 
              className="h-20 sm:h-24 lg:h-28 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src={exinentLogo} 
              alt="Exinent" 
              className="h-20 sm:h-24 lg:h-28 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;

