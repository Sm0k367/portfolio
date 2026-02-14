/**
 * main.js - The "Action" Script
 * Connects the UI to the AI Generation Engine
 */

async function generateMedia() {
    const promptInput = document.getElementById('user-prompt');
    const btn = document.getElementById('generate-btn');
    const display = document.getElementById('preview-window');
    
    const prompt = promptInput.value.trim();
    if (!prompt) {
        alert("Please enter a description first!");
        return;
    }

    // 1. UI State: Loading
    btn.innerText = "Generating...";
    btn.disabled = true;
    display.innerHTML = `
        <div class="flex flex-col items-center">
            <div class="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p class="text-slate-400 animate-pulse">AI is dreaming up your image...</p>
        </div>
    `;

    try {
        // 2. Fetch from Hugging Face (Stable Diffusion XL)
        // This is a public endpoint. For high volume, get a free token at huggingface.co
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (!response.ok) throw new Error("API Limit reached. Try again in a moment!");

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        // 3. UI State: Success
        display.innerHTML = `
            <div class="relative group h-full w-full flex items-center justify-center">
                <img src="${imageUrl}" class="max-h-full rounded-lg shadow-2xl animate-in fade-in zoom-in duration-700" alt="Generated Media">
                <a href="${imageUrl}" download="epic-ai-gen.png" 
                   class="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                   Download High-Res
                </a>
            </div>
        `;
    } catch (error) {
        console.error("Generation Error:", error);
        display.innerHTML = `
            <div class="text-center px-6">
                <p class="text-red-400 font-medium mb-2">The Free Engine is currently warm.</p>
                <p class="text-slate-500 text-sm">Wait 30 seconds and click Generate again.</p>
            </div>
        `;
    } finally {
        btn.innerText = "Generate Free";
        btn.disabled = false;
    }
}

// Global initialization
function initializeApp() {
    console.log("Epic Tech AI Platform: Ready for generation.");
    
    // Add Enter key support for the input
    const input = document.getElementById('user-prompt');
    if(input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') generateMedia();
        });
    }
}
