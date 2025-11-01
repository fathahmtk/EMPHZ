import React from 'react';
import { DIGITAL_BUSINESS_CARD_DATA, SOCIAL_LINKS } from '../constants';
import MetaTags from '../components/MetaTags';

const DigitalBusinessCardPage: React.FC = () => {
  const data = DIGITAL_BUSINESS_CARD_DATA;

  const seoTitle = `${data.name} - ${data.title} | ${data.companyName}`;
  const seoDescription = `Digital business card for ${data.name}. Access all contact details, social profiles, downloads, and location for ${data.companyName}.`;
  
  const iconClasses = "w-6 h-6";

  return (
    <>
      <MetaTags title={seoTitle} description={seoDescription} />
      <div className="bg-[var(--color-background)] min-h-screen p-4 sm:p-6 md:p-8 font-sans">
        <main className="max-w-md mx-auto bg-[var(--color-surface-primary)] rounded-2xl shadow-lg overflow-hidden">
          <header className="bg-gray-800 p-8 text-center text-white relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: `url('https://images.unsplash.com/photo-1581093582415-998f8287894a?q=80&w=1974&auto=format&fit=crop')`}}></div>
            <div className="relative z-10">
                <img src={data.logoUrl} alt={`${data.companyName} Logo`} className="w-24 h-24 mx-auto rounded-full border-4 border-white/20 object-contain bg-white mb-4" />
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-md font-light text-white/80">{data.title}</p>
                <p className="text-lg font-semibold text-white/90 mt-1">{data.companyName}</p>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Quick Actions */}
            <section>
              <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                  <a href={`tel:${data.contact.phone}`} className="flex items-center justify-center gap-3 p-3 bg-blue-500/10 text-blue-700 font-semibold rounded-lg hover:bg-blue-500/20 transition-colors">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>Call</span>
                  </a>
                  <a href={`mailto:${data.contact.email}`} className="flex items-center justify-center gap-3 p-3 bg-red-500/10 text-red-700 font-semibold rounded-lg hover:bg-red-500/20 transition-colors">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>Email</span>
                  </a>
                  <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 flex items-center justify-center gap-3 p-3 bg-gray-500/10 text-gray-700 font-semibold rounded-lg hover:bg-gray-500/20 transition-colors">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    <span>Visit Website</span>
                  </a>
              </div>
            </section>
            
            {/* Social Profiles */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Connect With Us</h2>
                <div className="flex justify-around items-center p-3 bg-gray-100 rounded-lg">
                    <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors" aria-label="LinkedIn Profile"><svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors" aria-label="Twitter Profile"><svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.119 0-5.515 2.57-5.515 5.734 0 .442.05.874.146 1.284-4.576-.229-8.632-2.424-11.353-5.762-.474.813-.746 1.748-.746 2.734 0 1.983 1.01 3.733 2.538 4.752-.947-.03-1.838-.289-2.618-.724v.072c0 2.774 1.973 5.086 4.591 5.612-.48.131-.986.202-1.503.202-.37 0-.728-.036-1.076-.104.729 2.27 2.844 3.933 5.353 3.979-1.959 1.527-4.425 2.437-7.11 2.437-.462 0-.919-.027-1.368-.08.572.368 1.246.583 1.964.583 2.35 0 4.538-.773 6.388-2.189 1.85-1.417 2.924-3.383 2.924-5.617v-.272c.99-.714 1.848-1.606 2.538-2.634z" /></svg></a>
                    <a href={SOCIAL_LINKS.googleBusiness} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Google Business Profile"><svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.67C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C15.22,5.73 17.45,7.92 17.45,7.92L19.07,6.31C19.07,6.31 16.59,4 12.19,4C7.03,4 3,7.55 3,12.5C3,17.45 7.03,21 12.19,21C17.83,21 21.64,17.25 21.64,11.39C21.64,11.19 21.35,11.1 21.35,11.1Z" /></svg></a>
                    <a href={data.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors" aria-label="WhatsApp"><svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg></a>
                </div>
            </section>

            {/* Downloads */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Downloads</h2>
                <div className="space-y-3">
                    <a href={data.downloads.profile} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="font-medium text-gray-700">Company Profile</span>
                    </a>
                    <a href={data.downloads.catalog} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span className="font-medium text-gray-700">Product Catalog</span>
                    </a>
                    <a href={data.downloads.brochure} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                         <svg className="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        <span className="font-medium text-gray-700">Corporate Brochure</span>
                    </a>
                </div>
            </section>

            {/* Location */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9 border border-gray-200 rounded-lg overflow-hidden">
                    <iframe
                        src={data.location.googleMapsEmbedUrl}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EMPHZ Office Location"
                    ></iframe>
                </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default DigitalBusinessCardPage;