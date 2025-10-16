const config = {
property: {
streetAddress: "122 Cedarcrest Blvd",
city: "Toronto",
cityStateZip: "Toronto, ON M4B 2P3",
heroSubtitle: "Quiet family neighbourhood, beautiful west-facing backyard, and a completely turnkey home. Bright & open concept floor plan with chef's kitchen. Amazing amenities, great parks, and low turnover in this friendly area. Register to receive the Home & Neighbourhood Info Package, virtual tour, floor plans, and comparables.",
backgroundImageUrl: "https://api.typeform.com/responses/files/9ab69635bea6128b358a2b26f15e8049468a921627d008a9d116a43d9bbcd4e9/003.1.JPG"
},
realtor: {
fullName: "Daniel Losier",
title: "REALTOR®",
phone: "416-418-6470",
email: "Daniel@ErbaAndco.com",
bio: "",
photoUrl: null,
social: {
facebook: "https://www.facebook.com/erbaandco/",
instagram: "https://instagram.com/Danlosier.erba",
website: null
}
},
brokerage: {
name: null,
logoUrl: null,
address: ""
},
openHouse: {
eventDate: "2025-10-18",
secondDate: "2025-10-19",
offerDateExists: true,
offerDate: "2025-10-23",
listingPrice: "$1,399,000",
beds: "3",
baths: "4",
homeType: "freehold",
bundleItems: [
{
icon: "fas fa-link",
text: "Property Listing: https://app.realmmlp.ca/shared/portal/EJAnRy4pJQslmY4BOJY4/lLBVqnZjKou93weZ1MQlTbN8MG5beKizeNNJy4wNI5NwZ8MYMbS5y7zrqg85hpWJEozzbPSjRkkP17Z8f9maOKZawKCl4YN28byNt2Zqlrlp99hblKL8V4XQFwXDgDrQW7HOYbnnB28BUKqGz3RAGkiX9pEbY1qmFD4a4KopemS512mp9EPLSeKY5l1KA7IZe/view/listing/TREB-E12464767?view=listing-customer-full"
},
{
icon: "fas fa-ruler-combined",
text: "Floor Plan: https://www.dropbox.com/scl/fo/mmh9pw80siywn65y0ly4a/ALk1ETFQoj53uZVsWV0iRKo?rlkey=8rcm4huic36bldfjkw71tnqla&st=yrctg6o3&dl=0"
},
{
icon: "fas fa-video",
text: "Virtual Tour: https://tours.snaphouss.com/122cedarcrestboulevardeastyorkon_692483?b=0"
},
{
icon: "fas fa-image",
text: "Photos: https://www.dropbox.com/scl/fo/tlsmi4ndoqv4q79tbh4nm/AEh1mer5fAhv7YNxt3RM4eU?rlkey=u292volja0vsessxnakgw3tfw&dl=0"
},
{
icon: "fas fa-chart-bar",
text: "Recent Neighborhood Sales: https://app.realmmlp.ca/shared/portal/EJAnRy4pJQslmY4BOJY4/REnXk1ap3Ktgqm37Nk5OsrjPgBmrGnTmQrrPaJ2rHpWn6LGVGbF3n4BKzZyrCn7E2p6zlqsbqZbWo6gjFVgyqoQ5ARsYkjpEwM6PCzoepPZyBmhQe91g1We3In9L3yVpGySyWENyEl5QtD7RLmDMPyFgDzXWm6mRCo54rEZ3b4uYDeBZ2gZpUeXXrBLAJ?q=treb%2FlistingID%3AE12456019%2CE12409204%2CE12438560%2CE12439233%2CE12442855%2CE12459782%2CE12409365%2CE12343003%2CE12310846%2CE12353086%2CE12360656%2CE12431802%2CE12460328%2CE12241189"
},
{
icon: "fas fa-chart-line",
text: "On-Market Comparables: https://app.realmmlp.ca/shared/portal/EJAnRy4pJQslmY4BOJY4/REnXk1ap3Ktgqm37Nk5OsrjPgBmrGnTmQrrPaJ2rHpWn6LGVGbF3n4BKzZyrCn7E2p6zlqsbqZbWo6gjFVgyqoQ5ARsYkjpEwM6PCzoepPZyBmhQe91g1We3In9L3yVpGySyWENyEl5QtD7RLmDMPyFgDzXWm6mRCo54rEZ3b4uYDeBZ2gZpUeXXrBLAJ?q=treb%2FlistingID%3AE12456019%2CE12409204%2CE12438560%2CE12439233%2CE12442855%2CE12459782%2CE12409365%2CE12343003%2CE12310846%2CE12353086%2CE12360656%2CE12431802%2CE12460328%2CE12241189"
},
{
icon: "fas fa-star",
text: "Neighbourhood Guide"
}
]
},
meta: {
pageTitlePrefix: "🏡 Daniel Losier Open House",
navBrandLogoText: "OPEN HOUSE",
privacyPolicyLink: null
},
settings: {
adminWebhookUrl: "https://n8n.salesgenius.co/webhook/openhouseupdate",
visitorWebhookUrl: "https://n8n.salesgenius.co/webhook/openhouse",
confettiColors: [
"#6187a7",
"#f0e9d6",
"#ffffff",
"#83a363",
"#d9ac68"
]
},
modalQuestions: [
{
id: "agent_status",
questionText: "Are you currently exploring homes with a real estate agent?",
options: [
{ value: "committed", text: "Yes, I'm committed to an agent." },
{ value: "not_committed", text: "No, I'm not committed to an agent." },
{ value: "gathering_info", text: "Just gathering information at this stage." }
]
},
{
id: "interest_level",
questionText: "How interested are you in properties like this?",
options: [
{ value: "very_interested", text: "Very interested, actively looking." },
{ value: "somewhat_interested", text: "Somewhat interested, keeping options open." },
{ value: "just_browsing", text: "Just browsing for now." }
]
},
{
id: "neighborhood_engagement",
questionText: "How do you usually enjoy the neighborhood?",
options: [
{ value: "resident_explorer", text: "I live here and love exploring locally." },
{ value: "considering_move", text: "I'm considering moving to this area." },
{ value: "just_visiting", text: "Just visiting for the open house." }
]
},
{
id: "feature_attraction",
questionText: "What feature attracted you to this home?",
options: [
{ value: "design_layout", text: "The design and layout." },
{ value: "location_neighborhood", text: "The location and neighborhood." },
{ value: "home_price", text: "The price of the home." }
]
}
],
deploymentInfo: {
repoName: "Open-House-524",
repoUrl: "https://github.com/arslvn93/Open-House-524",
tag: "Open House 122 Cedarcrest Blvd",
netlifyUrl: null,
siteId: "909f0d03-aca3-4209-96e0-95f29d9726ea"
}
};