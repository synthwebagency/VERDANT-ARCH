import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Inquiries
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    console.log(`New Inquiry for brookesryan03@gmail.com:`, { name, email, message });

    // In a production environment with RESEND_API_KEY, we would send the email here.
    // resend.emails.send({ ... });

    res.status(200).json({ 
      success: true, 
      message: "Thank you for your interest. We will contact you at stroh1211@gmail.com shortly." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
