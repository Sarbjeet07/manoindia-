/**
 * Manoindia Local Intelligence Engine
 * 100% Offline / No API dependencies.
 * Grounded in provided pinpoint Q&A data.
 */

const KNOWLEDGE_BASE = [
  { keywords: ['what is manoindia'], answer: "Manoindia is an online platform for booking event services." },
  { keywords: ['what does manoindia do'], answer: "It helps you book artists, venues, and event managers." },
  { keywords: ['booking app', 'is manoindia an app'], answer: "**Yes.** Manoindia is an event booking platform." },
  { keywords: ['how does manoindia work', 'how it work'], answer: "Browse services, book securely, and celebrate your event." },
  { keywords: ['book artists', 'can i book artist'], answer: "**Yes.** You can book verified artists like makeup artists, chefs, barbers, and more." },
  { keywords: ['what artists', 'available artists'], answer: "Makeup artists, chefs, barbers, nail artists, and more are available." },
  { keywords: ['makeup artist'], answer: "**Yes.** Makeup artists are available for all types of events." },
  { keywords: ['book a chef'], answer: "**Yes.** Professional chefs can be booked for your private events." },
  { keywords: ['nail artist'], answer: "**Yes.** Verified nail artists are available on our platform." },
  { keywords: ['book a barber'], answer: "**Yes.** Professional barbers are available for on-demand booking." },
  { keywords: ['verified'], answer: "**Yes.** All artists and venues on Manoindia are strictly verified." },
  { keywords: ['how do i book', 'booking process'], answer: "Browse the services, send a request, and pay securely in three simple steps." },
  { keywords: ['is booking safe', 'is it safe'], answer: "**Yes.** Bookings are safe and secure." },
  { keywords: ['how do i pay', 'payment secure'], answer: "**Yes.** Your payment is protected and handled securely through Manoindia." },
  { keywords: ['money released'], answer: "Money is only released to the service provider after the event is successfully completed." },
  { keywords: ['cancel'], answer: "**Yes.** Cancellation options are available according to vendor policies." },
  { keywords: ['compare price'], answer: "**Yes.** You can compare prices and see reviews for all services." },
  { keywords: ['reviews'], answer: "**Yes.** Real customer reviews are visible for all verified professionals." },
  { keywords: ['transparent'], answer: "**Yes.** Pricing is clear, transparent, and shown upfront." },
  { keywords: ['book venues'], answer: "**Yes.** Wedding, party, and corporate venues can be booked online." },
  { keywords: ['what venues'], answer: "We offer high-quality wedding halls, party spaces, and corporate venues." },
  { keywords: ['wedding venue'], answer: "**Yes.** Premium wedding venues are available for booking." },
  { keywords: ['party hall'], answer: "**Yes.** Various party halls can be booked through our app." },
  { keywords: ['corporate event'], answer: "**Yes.** We fully support and provide venues for corporate events." },
  { keywords: ['photos'], answer: "**Yes.** Real venue photos are available for you to browse." },
  { keywords: ['book multiple'], answer: "**Yes.** You can book multiple services like artists and venues together." },
  { keywords: ['plan a full event'], answer: "**Yes.** You can plan a complete event from start to finish on Manoindia." },
  { keywords: ['event manager', 'wedding planner', 'coordinator'], answer: "**Yes.** Professional event managers and planners are available to handle everything." },
  { keywords: ['steps to book'], answer: "There are three simple steps: Browse, Book, and Celebrate." },
  { keywords: ['easy to use', 'beginner friendly'], answer: "**Yes.** Manoindia is very user-friendly and beginner friendly." },
  { keywords: ['how can you help'], answer: "I help you find and book verified artists, venues, and managers for your events." },
  { keywords: ['guide me'], answer: "**Yes.** I can guide you through the 3-step process: Browse, Book, and Celebrate." },
  { keywords: ['location', 'where is', 'address'], answer: "**Yes.** Our office is located at: Bhub, BSFC Building, Frazer Road, Patna, 800001." },
  { 
    keywords: ['support', 'contact', 'phone', 'email', 'help', 'customer service'], 
    answer: "**Yes.** Full customer support is available! You can reach us via:\n\n📞 Phone: **8709736094**\n📧 Email: **info@mayramurti.com**\n📍 Office: Bhub, BSFC Building, Frazer Road, Patna, 800001." 
  },
  { keywords: ['trustworthy', 'reliable'], answer: "**Yes.** Manoindia is a reliable and trustworthy platform." },
  { keywords: ['wedding'], answer: "**Yes.** Manoindia is great for weddings, covering makeup, venues, and planning." },
  { keywords: ['party'], answer: "**Yes.** It is perfect for parties and private celebrations." },
  { keywords: ['everything in one app'], answer: "**Yes.** All event services are integrated into one easy-to-use platform." },
  { keywords: ['first', 'start'], answer: "Start by browsing the services or categories on our website, manoindia.in." }
];

export const getAIResponse = async (userPrompt: string): Promise<string> => {
  // Simulate a very short network delay for better UX
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const input = userPrompt.toLowerCase();
  
  // Find the best match based on keywords
  let bestMatch = null;
  let maxScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (input.includes(keyword)) {
        // Boost score based on the specific match length
        score += keyword.length;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = entry.answer;
    }
  }

  if (bestMatch) return bestMatch;

  // Default friendly response if no data match
  return "I can help you with questions about Manoindia's artists, venues, booking process, or contact details. How can I assist you today?";
};
