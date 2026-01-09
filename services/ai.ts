import { GoogleGenAI } from "@google/genai";

/**
 * Manoindia AI Service
 * Grounded in 50+ specific Q&A pairs for pinpoint accuracy.
 */

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the official Manoindia Concierge. Your goal is to provide PINPOINT, SIMPLE, and FRIENDLY answers.
When a question can be answered with Yes or No, always start with "**Yes.**" or "**No.**"

KNOWLEDGE BASE:
- Manoindia is an online platform for booking event services.
- It helps you book artists, venues, and event managers.
- Yes, Manoindia is an event booking platform.
- Process: Browse services, book securely, and celebrate your event (3 simple steps).
- Artists: Yes, you can book verified artists like Makeup artists, chefs, barbers, nail artists, musicians, and more.
- Verification: Yes, all artists and venues are strictly verified.
- Booking/Safety: Yes, bookings are safe. Payments are secure. 
- Escrow: Money is held safely and only released to the vendor after the event is successfully completed.
- Comparison: Yes, you can compare prices and see real reviews.
- Venues: Yes, we have wedding, party, and corporate venues. You can see photos and book online.
- Event Managers: Yes, professional managers/planners (wedding, corporate, private) are available and handle everything.
- Usability: Yes, it is very user-friendly and beginner-friendly.
- Location: Bhub, BSFC Building, Frazer Road, Patna, 800001.
- Contact: Phone: 8709736094, Email: info@mayramurti.com.
- Trust: Yes, Manoindia is reliable and trustworthy.
- One-Stop-Shop: Yes, you can book everything (Artists, Venues, Managers) in one app.
- First Step: Start by browsing services on our website.

CONSTRAINTS:
1. Be extremely concise.
2. Use bolding for emphasis.
3. If the user asks for something outside this scope, politely redirect them to Artists, Venues, or Support.
4. Always mention the website manoindia.in if they want to start browsing.
`;

export const getAIResponse = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Lower temperature for more pinpoint accuracy
        maxOutputTokens: 150,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again or contact support at 8709736094.";
  } catch (error) {
    console.error("AI Response Error:", error);
    // Fallback for offline/error states using local logic
    return handleLocalFallback(userPrompt.toLowerCase());
  }
};

/**
 * Robust local fallback in case of API issues
 */
function handleLocalFallback(input: string): string {
  if (input.includes('location') || input.includes('address')) {
    return "**Yes.** We are located at Bhub, BSFC Building, Frazer Road, Patna, 800001.";
  }
  if (input.includes('artist')) {
    return "**Yes.** You can book verified makeup artists, chefs, barbers, and more on manoindia.in.";
  }
  if (input.includes('safe') || input.includes('secure')) {
    return "**Yes.** Bookings are 100% safe. Money is released only after the event.";
  }
  if (input.includes('how') || input.includes('work')) {
    return "It's simple: **Browse**, **Book** securely, and **Celebrate**. All in 3 easy steps.";
  }
  return "Manoindia is your one-stop platform for booking verified artists and venues. Visit manoindia.in to start!";
}
