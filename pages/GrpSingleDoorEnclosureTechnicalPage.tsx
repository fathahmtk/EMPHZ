import React from 'react';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';
import Breadcrumbs, { BreadcrumbItem } from '../components/Breadcrumbs';
import CTABanner from '../components/CTABanner';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import Icon from '../components/Icon';
import { IconName } from '../types';

// Data structured from the provided markdown
const technicalData = {
    title: "Technical Deep-Dive: GRP Single Door Enclosures",
    dimensionGuide: {
      title: "Dimension Reference Guide",
      codes: [
          { code: 'H', desc: 'Internal Height (vertical inside measurement)' },
          { code: 'W', desc: 'Internal Width (horizontal inside measurement)' },
          { code: 'D', desc: 'Internal Depth (front to back inside measurement)' },
          { code: 'A', desc: 'Clear Opening Height (usable access height)' },
          { code: 'B', desc: 'Clear Opening Width (usable access width)' },
          { code: 'C', desc: 'Canopy projection (when applicable)' },
          { code: 'E', desc: 'Mounting plate width' },
          { code: 'F', desc: 'Mounting plate height' },
          { code: 'X', desc: 'Stud spacing (horizontal center-to-center)' },
          { code: 'Y', desc: 'Stud spacing (vertical center-to-center)' },
          { code: 'N', desc: 'Gland plate cutout width' },
          { code: 'M', desc: 'Gland plate cutout depth' },
          { code: 'U', desc: 'Gland plate total width' },
          { code: 'V', desc: 'Gland plate total depth' },
          { code: 'O', desc: 'Wall bracket spacing (vertical)' },
          { code: 'P', desc: 'Overall external height' },
          { code: 'Q', desc: 'Overall external width' },
          { code: 'K', desc: 'Foundation bolt spacing width' },
          { code: 'J', desc: 'Foundation bolt spacing depth' },
      ],
      draftAngles: [
          'Body walls: 1-2 degrees (allows mold release)',
          'Door: 0 degrees (flat for proper sealing)'
      ]
    },
    materialSpecs: {
      title: "Material Specifications",
      sections: [
          {
              title: "Physical Properties Analysis",
              items: [
                  { prop: "Water Absorption", value: "31 mg (7 days)", analysis: ["Extremely low absorption rate", "Maintains structural integrity in constant moisture", "No degradation from water exposure"] },
                  { prop: "Gel Coat", value: "350-450 microns", analysis: ["Protective outer layer", "UV resistance barrier", "Smooth, cleanable surface", "Color stability layer"] },
                  { prop: "Glass Content", value: "35±5% by weight", analysis: ["Provides structural strength", "Impact resistance", "Dimensional stability"] },
                  { prop: "Resin Content", value: "65±5% by weight (Loss on Ignition)", analysis: ["Fire retardant properties", "Chemical resistance", "Weatherproofing"] },
              ]
          },
          {
            title: "Mechanical Properties Analysis",
            items: [
                { prop: "Tensile Strength", value: "110±25 MPa", analysis: ["Comparable to some aluminum alloys", "Resists pulling forces", "Maintains integrity under load"] },
                { prop: "Flexural Strength", value: "170±25 MPa", analysis: ["Excellent bending resistance", "Won’t sag under weight", "Maintains shape over time"] },
                { prop: "Impact Strength", value: "IK8 = 5 joules", analysis: ["Withstands 5 joules of impact energy", "Equivalent to 1.7 kg mass dropped from 30 cm", "IK10 option: 20 joules (6.8 kg from 30 cm)"] },
                { prop: "Tensile Modulus", value: "8000 MPa", analysis: ["Stiffness measurement", "Resists deformation", "Maintains dimensional accuracy"] },
                { prop: "Flexural Modulus", value: "7000 MPa", analysis: ["Bending stiffness", "Prevents warping", "Long-term shape retention"] },
                { prop: "Hardness", value: "40-45 Barcol", analysis: ["Surface hardness measurement", "Scratch resistance", "Durable surface finish"] },
                { prop: "Tensile Elongation", value: "1.8%", analysis: ["Material stretches 1.8% before failure", "Some flexibility prevents cracking", "Absorbs stress without breaking"] },
            ]
          },
          {
            title: "Thermal Properties Analysis",
            items: [
                { prop: "Thermal Expansion", value: "26×10⁻⁶ m/°C", analysis: ["Relatively low expansion", "Dimensional stability across temperatures", "Minimal stress from temperature cycling"] },
                { prop: "Thermal Conductivity", value: "0.2 W/mK", analysis: ["Low heat transfer", "Natural insulation properties", "Reduces internal temperature fluctuations"] },
                { prop: "R-Value", value: "0.19 m²K/W (for standard 4mm thickness)", analysis: ["Thermal resistance measurement", "Insulation effectiveness indicator"] },
                { prop: "U-Value", value: "5.26 W/m²K", analysis: ["Heat transmission rate", "Lower than metal enclosures", "Energy efficiency benefit"] },
            ]
          }
      ]
    },
    certifications: {
      title: "Certifications Analysis",
      sections: [
          {
              title: "IP Rating Breakdown",
              items: [
                  { rating: "IP55", details: ["First digit (5): Dust protected - limited ingress permitted", "Second digit (5): Water jets from any direction", "Application: Outdoor use with moderate exposure"] },
                  { rating: "IP65", details: ["First digit (6): Dust tight - no dust ingress", "Second digit (5): Water jets from any direction", "Application: Harsh outdoor environments"] },
                  { rating: "IP66", details: ["First digit (6): Dust tight", "Second digit (6): Powerful water jets, heavy seas", "Application: Marine, coastal, wash-down areas"] },
              ]
          },
          { title: "NEMA 4X", description: "Provides corrosion resistance, protection against windblown dust, rain, and hose-directed water, and is resistant to ice formation." },
          { title: "Impact Resistance", description: "Standard IK8 (5 joules) certified to BS EN 62262:2002. Optional IK10 (20 joules) for anti-vandal applications with plywood reinforcement." },
          { title: "Fire Performance", description: "Self-extinguishing material compliant with UL 94. Certified to BS 476: Part 7:1997 Class 2 for surface spread of flame, with a Class 0 option available." },
          { title: "Anti-Static Certification", description: "Compliant with IEC-60079-0, preventing static electricity buildup, making it safe for explosive atmospheres and protecting electronic equipment." },
      ]
    },
    sizeGuide: {
      title: "Size Selection Guide",
      categories: [
          { title: "Small Enclosures (400-650mm height)", bestFor: ["Individual meters", "Small control panels", "Junction boxes", "Local control stations", "Single device housing"], popularModels: ["050050020 (500×500×200mm) - 10.5kg", "060060045 (600×600×450mm) - 18kg"] },
          { title: "Medium Enclosures (700-1000mm height)", bestFor: ["Distribution panels", "Multi-meter installations", "Control systems", "Instrumentation clusters", "PLC cabinets"], popularModels: ["080060030 (800×600×300mm) - 21kg", "100080030 (1000×800×300mm) - 30kg"] },
          { title: "Large Enclosures (1150-2000mm height)", bestFor: ["Main distribution boards", "Switchgear", "Large control systems", "Multi-compartment applications", "Equipment requiring standing access"], popularModels: ["120100040 (1200×1000×400mm) - 49kg", "160100040 (1600×1000×400mm) - 59kg"] },
      ]
    },
    accessoriesIndex: {
      title: "Accessories Material Index",
      materials: [ "GRP", "SS316L", "SS316", "Coated SS316", "SS304", "Nickel Plated Zinc", "Powder Coated Zinc", "Zinc", "Galvanized Iron Epoxy", "Galvanized Iron Powder Coated", "Galvanized Iron", "Brass", "Aluminum", "Polyamide", "Polycarbonate", "Polycarbonate Glass", "Toughened Glass", "ABS", "WBP Plywood", "Marine Plywood" ]
    },
    weightComparison: {
      title: "Weight Comparison",
      example: "1000×800×300mm enclosure",
      weights: [ { type: "GRP weight", value: "30 kg" }, { type: "Equivalent steel enclosure", value: "~120 kg" } ],
      savings: "75%",
      benefits: ["Easier handling", "lower shipping costs", "simpler installation"]
    },
    technicalAdvantages: {
      title: "Technical Advantages Explained",
      advantages: [
          { icon: 'safety', title: "Non-Conductive", points: ["No electrical conductivity", "Safer for electrical work", "No grounding requirements for enclosure body"] },
          { icon: 'customization', title: "Wireless Transparency", points: ["RF signals pass through without shielding", "Remote monitoring and cellular/WiFi devices function normally inside"] },
          { icon: 'durability', title: "Corrosion Resistance", points: ["No rust or oxidation", "Resistant to chemicals and salt spray", "20-25 year service life"] },
          { icon: 'sustainability', title: "UV Resistance", points: ["ASTM G154 certified", "No color fading or material degradation", "Maintains strength in direct sunlight"] },
      ]
    }
}

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <section className={`py-16 ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">{title}</h2>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
);

const GrpSingleDoorEnclosureTechnicalPage: React.FC = () => {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Home', path: '/' },
        { label: 'Knowledge Hub', path: '/knowledge' },
        { label: 'Technical Data: GRP Single Door Enclosures' },
    ];
    
    return (
        <>
            <MetaTags title={SEO_DATA.grpTechnicalData.title} description={SEO_DATA.grpTechnicalData.description} />
            
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
                    <Breadcrumbs items={breadcrumbItems} className="mb-8" />
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-3">{technicalData.title}</h1>
                    </header>
                    
                    <main className="space-y-8">

                        <Section title={technicalData.dimensionGuide.title}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                <div className="p-6 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
                                    <h3 className="font-semibold text-lg mb-3">Dimension Codes Explained</h3>
                                    <ul className="space-y-1 text-sm">
                                        {technicalData.dimensionGuide.codes.map(code => (
                                            <li key={code.code}><strong className="font-semibold text-[var(--color-primary)]">{code.code}</strong> = {code.desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
                                    <h3 className="font-semibold text-lg mb-3">Draft Angles</h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        {technicalData.dimensionGuide.draftAngles.map((angle, i) => <li key={i}>{angle}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        <Section title={technicalData.materialSpecs.title} className="bg-[var(--color-surface)] rounded-lg">
                            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                            {technicalData.materialSpecs.sections.map((section, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-xl font-semibold hover:no-underline">{section.title}</AccordionTrigger>
                                    <AccordionContent className="pt-2">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {section.items.map(item => (
                                                <div key={item.prop} className="p-4 bg-white rounded-md border">
                                                    <h4 className="font-bold text-[var(--color-primary)]">{item.prop}: <span className="font-semibold text-[var(--color-text-primary)]">{item.value}</span></h4>
                                                    <ul className="mt-2 list-disc list-inside text-sm text-[var(--color-text-secondary)] space-y-1">
                                                        {item.analysis.map((point, i) => <li key={i}>{point}</li>)}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                            </Accordion>
                        </Section>

                        <Section title={technicalData.technicalAdvantages.title}>
                           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {technicalData.technicalAdvantages.advantages.map(adv => (
                                    <div key={adv.title} className="bg-[var(--color-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border)] text-center">
                                        <div className="flex justify-center mb-4">
                                            <div className="p-3 bg-[var(--color-brand)]/10 rounded-full">
                                                <Icon name={adv.icon as IconName} className="h-8 w-8 text-[var(--color-brand)]" />
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                                        <ul className="text-sm text-[var(--color-text-secondary)] list-disc list-inside text-left space-y-1">
                                            {adv.points.map((p,i) => <li key={i}>{p}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Section>
                        
                        <Section title={technicalData.certifications.title} className="bg-[var(--color-surface)] rounded-lg">
                             <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                                {technicalData.certifications.sections.map((section, index) => (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger className="text-xl font-semibold hover:no-underline">{section.title}</AccordionTrigger>
                                        <AccordionContent className="text-[var(--color-text-secondary)] leading-relaxed pt-2 space-y-4">
                                            {'description' in section ? (
                                                <p>{section.description}</p>
                                            ) : (
                                                section.items?.map(item => (
                                                     <div key={item.rating}>
                                                        <h4 className="font-bold text-[var(--color-primary)]">{item.rating}</h4>
                                                        <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                                                            {item.details.map((d, i) => <li key={i}>{d}</li>)}
                                                        </ul>
                                                    </div>
                                                ))
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </Section>

                        <Section title={technicalData.weightComparison.title}>
                            <div className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                <div className="text-center border-b-2 md:border-b-0 md:border-r-2 border-white/30 pb-4 md:pb-0 md:pr-8">
                                    <p className="text-lg opacity-90">{technicalData.weightComparison.example}</p>
                                    <p><span className="font-bold text-2xl">{technicalData.weightComparison.weights[0].value}</span> (GRP)</p>
                                    <p className="text-sm">vs <span className="font-semibold">{technicalData.weightComparison.weights[1].value}</span> (Steel)</p>
                                </div>
                                <div className="text-center">
                                     <p className="text-6xl font-extrabold">{technicalData.weightComparison.savings}</p>
                                     <p className="text-xl font-semibold">Weight Savings</p>
                                </div>
                                <div className="text-center border-t-2 md:border-t-0 md:border-l-2 border-white/30 pt-4 md:pt-0 md:pl-8">
                                    <p className="text-lg font-semibold mb-2">Key Benefits</p>
                                    <ul className="space-y-1">
                                        {technicalData.weightComparison.benefits.map((b,i) => <li key={i}>{b}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        <Section title={technicalData.sizeGuide.title}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {technicalData.sizeGuide.categories.map(cat => (
                                    <div key={cat.title} className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)]">
                                        <h3 className="font-bold text-xl mb-4">{cat.title}</h3>
                                        <h4 className="font-semibold text-sm mb-2 text-[var(--color-primary)]">Best for:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                                            {cat.bestFor.map((use, i) => <li key={i}>{use}</li>)}
                                        </ul>
                                         <h4 className="font-semibold text-sm mb-2 text-[var(--color-primary)]">Popular models:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-text-secondary)]">
                                            {cat.popularModels.map((model, i) => <li key={i}>{model}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section title={technicalData.accessoriesIndex.title} className="bg-[var(--color-surface)] rounded-lg">
                           <ol className="columns-2 md:columns-3 lg:columns-4 gap-x-8 text-sm text-[var(--color-text-primary)] space-y-2">
                            {technicalData.accessoriesIndex.materials.map((mat, i) => <li key={i}><span className="font-semibold">{i + 1}.</span> {mat}</li>)}
                           </ol>
                        </Section>

                    </main>
                </div>
            </div>
            <CTABanner />
        </>
    );
};

export default GrpSingleDoorEnclosureTechnicalPage;