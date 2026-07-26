import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily or safely
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// API Route: B2B Contact Form & RFQ Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, email, phone, country, productInterest, message } = req.body;
    const submissionDate = new Date().toISOString();
    const rfqId = `RFQ-AIFRAN-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log(`[AIFRAN B2B RFQ SUBMISSION]
To: aifransportsllc@gmail.com
RFQ ID: ${rfqId}
Date: ${submissionDate}
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Country: ${country}
Product Interest: ${productInterest}
Message: ${message}
------------------------------------`);

    // Optional AI analysis/summary using Gemini
    let aiEvaluation = null;
    const ai = getGeminiClient();
    if (ai && message) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: `Evaluate B2B Manufacturing RFQ from ${company || name} (${country}):
Product Interest: ${productInterest}
Message: ${message}`,
          config: {
            systemInstruction: 'You are AIFRAN SPORTS Chief OEM Procurement Director. Provide brief 2-sentence feasibility statement and estimated production timeline.',
          },
        });
        aiEvaluation = response.text;
      } catch (e) {
        console.warn('Gemini RFQ evaluation skipped:', e);
      }
    }

    return res.json({
      success: true,
      rfqId,
      message: 'Thank you! Our team will contact you shortly.',
      recipient: 'aifransportsllc@gmail.com',
      aiEvaluation,
      submissionDate,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to submit RFQ request', details: error.message });
  }
});

// API Route: AI Tactical Chat Command Officer
app.post('/api/tactical/chat', async (req, res) => {
  try {
    const { message, missionContext, history } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Dynamic fallback response for tactical officer chat
      const msgLower = (message || '').toLowerCase();
      let responseText = `AIFRAN COMMAND COGNITION: Analyzing query "${message}". Squad status optimal. Waypoint tracking online. All radio channels clear.`;
      let suggestions = [
        'Request Recon Drone Thermal Sweep',
        'Analyze Rules of Engagement',
        'Suggest Breaching Protocol'
      ];
      let riskScore = 45;

      if (msgLower.includes('breach') || msgLower.includes('enter') || msgLower.includes('room')) {
        responseText = 'AIFRAN CQB BREACH PROTOCOL: Recommend 2-man stacked entry. Unit Anvil-4 deploys C4 charge on primary door hinge while Falcon-5 drops flash-bang drone behind enemy line of sight. Execute clear left-to-right sweep.';
        suggestions = ['Confirm Breach Ready', 'Deploy Smoke Screen', 'Hold Entry Position'];
        riskScore = 65;
      } else if (msgLower.includes('drone') || msgLower.includes('uav') || msgLower.includes('recon')) {
        responseText = 'AIFRAN UAV TELEMETRY: Recon Micro UAV altitude set to 120m. Thermal signatures detected at Sector 4-B. Jammer signal strength -48dBm detected near Vault East Wall.';
        suggestions = ['Lock Hostile Targets', 'Initiate EW Jamming', 'Return Drone to Base'];
        riskScore = 35;
      } else if (msgLower.includes('exfil') || msgLower.includes('evac') || msgLower.includes('escape')) {
        responseText = 'AIFRAN EXFIL DIRECTIVE: LZ Delta is currently clear. Recommend deploying IR strobe markers and maintaining 360-degree perimeter security until transport touchdown.';
        suggestions = ['Deploy Smoke at LZ Delta', 'Form Defensive Ring', 'Request Gunship Cover'];
        riskScore = 55;
      }

      return res.json({
        text: responseText,
        actionableSuggestions: suggestions,
        tacticalRiskScore: riskScore,
      });
    }

    const promptHistory = history && Array.isArray(history) ? history.map((h: { sender: string; text: string }) => `${h.sender.toUpperCase()}: ${h.text}`).join('\n') : '';

    const fullPrompt = `${missionContext ? `[CURRENT MISSION CONTEXT: ${JSON.stringify(missionContext)}]\n` : ''}${promptHistory}\nUSER COMMAND: ${message}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: `You are AIFRAN (AI Forward Reconnaissance, Analytics & Navigation) - an elite military tactical command AI. Speak like a concise, highly disciplined tactical officer. Provide clear, direct, operational advice with crisp military terminology (callsigns, sector codes, ROE, flank tactics, CQB, air support). Format key directives with clarity.`,
      },
    });

    return res.json({
      text: response.text || 'AIFRAN Tactical response recorded.',
      actionableSuggestions: [
        'Request Sector Threat Map',
        'Optimize Squad Loadout',
        'Execute Perimeter Sweep'
      ],
      tacticalRiskScore: 50,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Tactical chat error:', error);
    res.status(500).json({ error: 'Tactical chat engine error', details: error.message });
  }
});

// Vite Middleware & Static Production Handler
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[AIFRAN TACTICAL ELITE] Command Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
