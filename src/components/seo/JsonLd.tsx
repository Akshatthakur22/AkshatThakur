import { SITE_URL, person, siteMeta } from "@/lib/site";
import { contactInfo, projects, experiences, resume } from "@/content/data";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;
const RESUME_ID = `${SITE_URL}/#resume`;

/**
 * schema.org markup as a single connected @graph.
 *
 * Why a graph rather than separate blocks: it lets every node reference the same
 * Person entity by @id, which is what search and AI engines use to resolve
 * "Akshat Thakur" to one entity instead of several loosely related mentions.
 */
export function JsonLd() {
  const graph = [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: person.name,
      givenName: person.givenName,
      familyName: person.familyName,
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: person.image,
        caption: `${person.name}, software engineer`,
      },
      jobTitle: person.jobTitle,
      description: person.definition,
      email: `mailto:${person.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: person.location.city,
        addressRegion: person.location.region,
        addressCountry: person.location.countryCode,
      },
      nationality: {
        "@type": "Country",
        name: person.location.country,
      },
      sameAs: [...person.sameAs],
      knowsAbout: [...person.knowsAbout],
      knowsLanguage: ["English", "Hindi"],
      alumniOf: person.education.map((school) => ({
        "@type": "EducationalOrganization",
        name: school.name,
        ...(school.url ? { url: school.url } : {}),
      })),
      hasCredential: person.education.map((school) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: school.credential,
        recognizedBy: { "@type": "EducationalOrganization", name: school.name },
      })),
      award: [...person.awards],
      memberOf: {
        "@type": "Organization",
        name: "GFG Student Chapter, Chameli Devi Group of Institutions",
      },
      hasOccupation: experiences.map((role) => ({
        "@type": "OrganizationRole",
        roleName: role.role,
        description: role.description,
        memberOf: { "@type": "Organization", name: role.company },
      })),
      seeks: {
        "@type": "Demand",
        name: contactInfo.availability,
      },
      subjectOf: { "@id": RESUME_ID },
    },
    {
      // The résumé PDF as a first-class entity, so engines can surface the
      // download itself rather than only the page that links to it.
      "@type": "DigitalDocument",
      "@id": RESUME_ID,
      name: `${person.name} — Résumé`,
      description: `Two-page résumé for ${person.name}, ${person.jobTitle}: technical skills, projects, work experience, education and certifications.`,
      url: `${SITE_URL}${resume.path}`,
      encodingFormat: "application/pdf",
      inLanguage: "en",
      author: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBPAGE_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: `${person.name} — Portfolio`,
      description: siteMeta.description,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": WEBPAGE_ID,
      url: SITE_URL,
      name: siteMeta.title,
      description: siteMeta.description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: person.image },
      inLanguage: "en",
      // Voice-assistant readable regions.
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#about p"],
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: `Software projects by ${person.name}`,
      numberOfItems: projects.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.title,
          description: `${project.tagline} ${project.solution}`,
          applicationCategory: "WebApplication",
          operatingSystem: "Web browser",
          author: { "@id": PERSON_ID },
          ...(project.liveUrl ? { url: project.liveUrl } : {}),
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
          },
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // Content is fully static and author-controlled, no user input involved.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
