import React from 'react';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';
import Breadcrumbs, { BreadcrumbItem } from '../components/Breadcrumbs';
import CTABanner from '../components/CTABanner';

const GrpApplicationsPage: React.FC = () => {
    const content = {
        title: "Comprehensive List of Products Made from GRP",
        subtitle: "(Glass Reinforced Polymer)",
        intro: "GRP's exceptional properties – including its high strength-to-weight ratio, corrosion resistance, electrical insulation, weather durability, and design flexibility – make it an incredibly versatile material. It is used to manufacture a vast array of products across almost every industry, often outperforming traditional materials like steel, concrete, and timber.",
        categories: [
            {
                name: "1. Construction & Infrastructure",
                subcategories: [
                    { name: "Structural Elements", items: ["Beams, channels, angles, rods, and other structural profiles", "GRP rebar for concrete reinforcement (non-corrosive alternative to steel)", "Bridge decks and bridge rehabilitation components", "Modular bridge sections", "Walkways, platforms, and staircases (especially in corrosive environments)"] },
                    { name: "Building Envelopes & Cladding", items: ["Roofing sheets (corrugated, flat, opaque, translucent)", "Wall cladding panels and facades", "Decorative panels for interiors and exteriors", "Skylights and translucent roofing"] },
                    { name: "Water Management & Utilities", items: ["Water storage tanks (sectional, cylindrical, underground)", "Effluent treatment plant components (tanks, covers, pipes)", "Sewerage pipes and linings", "Gully pots and drainage channels", "Reservoir covers", "Manhole covers and frames (lightweight, non-corrosive, theft-resistant)", "Pump houses and kiosks"] },
                    { name: "Modular & Prefabricated Structures", items: ["Modular public toilets and shower units", "Bus shelters and tram stops", "Security guard rooms and check-posts", "Site offices and temporary accommodation units", "Cold storage panels"] },
                    { name: "Other Infrastructure", items: ["Sound barriers and acoustic panels", "Cable ducts and trenches", "Street light poles and utility poles (lighter, non-conductive)", "Signage boards and advertising hoardings", "Fencing and gates", "Road furniture (median barriers, crash barriers)"] },
                ]
            },
            {
                name: "2. Automotive & Transportation",
                subcategories: [
                    { name: "Vehicle Body Components", items: ["Lightweight body panels for buses, trucks, and commercial vehicles", "Auto-rickshaw and tractor components (e.g., cabins, hoods, fenders)", "Caravan and RV body parts", "Specialty vehicle enclosures (ambulances, fire tenders)", "Interior panels and seating for trains and buses"] },
                    { name: "Custom Enclosures", items: ["Genset (generator set) canopies and enclosures", "Battery boxes and covers"] },
                    { name: "Marine Transportation", items: ["Hulls and decks for boats, yachts, and fishing vessels", "Marine components (fenders, navigation aids)", "Lifeboats and rescue craft"] },
                ]
            },
            {
                name: "3. Water, Agriculture & Chemical Industries",
                subcategories: [
                    { name: "Water & Irrigation", items: ["Agricultural water channels and linings (prevents seepage)", "Irrigation pipes and fittings", "Silos and storage tanks for grains, feeds, and fertilizers", "Aquaculture tanks and fish farming equipment"] },
                    { name: "Chemical Storage & Processing", items: ["Tanks for agri-chemicals, fertilizers, and corrosive liquids", "Chemical processing equipment (vessels, scrubbers, ducting)", "Industrial pipes and fittings for chemical transfer", "Secondary containment systems"] },
                ]
            },
            {
                name: "4. Renewable Energy & Electrical",
                subcategories: [
                    { name: "Renewable Energy", items: ["Solar panel mounting structures (especially in corrosive environments)", "Wind turbine blades and nacelle covers", "Biogas plant components (digester covers, gas holders)"] },
                    { name: "Electrical & Electronics", items: ["Electrical enclosures, junction boxes, and cabinets (IP rated)", "Cable trays and ladders", "Electrical insulators and busbar supports", "Meter boxes and consumer units", "Distribution boards and feeder pillars", "Control panel housings", "Telecommunication cabinets and shelters", "Battery enclosures"] },
                ]
            },
            {
                name: "5. Marine, Offshore & Oil & Gas",
                subcategories: [
                    { name: "Marine Structures", items: ["Boat and ship hulls, decks, superstructures", "Gangways and access platforms for marine environments", "Buoys, pontoons, and floating structures"] },
                    { name: "Offshore & Industrial", items: ["Offshore platform components (walkways, handrails, stair treads)", "Blast-resistant modules and buildings", "Piping systems for oil & gas (reduced weight, corrosion resistance)", "Cooling tower components", "Ventilation systems (hoods, ducts)"] },
                ]
            },
            {
                name: "6. Consumer & Specialty Goods",
                subcategories: [
                    { name: "Outdoor & Urban Furniture", items: ["Street furniture (benches, litter bins, planters)", "Outdoor and garden furniture", "Playground equipment", "Decorative elements and sculptures"] },
                    { name: "Home & Lifestyle", items: ["Bathroom fixtures (bathtubs, shower trays, washbasins)", "Septic tanks and water filters", "Decorative planters and garden features"] },
                    { name: "Sports & Recreation", items: ["Kayaks, canoes, surfboards, paddleboards", "Swimming pool slides and structures", "Sports equipment components (e.g., helmets, fairings)"] },
                    { name: "Miscellaneous", items: ["DIY kits and scale models", "Custom housings for machinery and equipment", "Theme park props and architectural features"] },
                ]
            }
        ]
    };
    
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Home', path: '/' },
        { label: 'Knowledge Hub', path: '/knowledge' },
        { label: 'Comprehensive Guide to GRP Applications' },
    ];
    
    return (
        <>
            <MetaTags title={SEO_DATA.grpApplications.title} description={SEO_DATA.grpApplications.description} />
            
            <div className="bg-[var(--color-background)]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
                    <Breadcrumbs items={breadcrumbItems} className="mb-8" />
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-3">{content.title}</h1>
                        <p className="text-2xl text-[var(--color-secondary)]">{content.subtitle}</p>
                        <p className="text-lg text-[var(--color-secondary)] mt-6 leading-relaxed">{content.intro}</p>
                    </header>
                    
                    <main className="max-w-4xl mx-auto">
                        <div className="space-y-16">
                            {content.categories.map(category => (
                                <section key={category.name} className="p-8 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
                                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-[var(--color-brand)] pb-3">{category.name}</h2>
                                    <div className="space-y-8">
                                        {category.subcategories.map(subcategory => (
                                            <div key={subcategory.name}>
                                                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">{subcategory.name}</h3>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-[var(--color-secondary)]">
                                                    {subcategory.items.map((item, i) => <li key={i}>{item}</li>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
            
            <CTABanner />
        </>
    );
};

export default GrpApplicationsPage;