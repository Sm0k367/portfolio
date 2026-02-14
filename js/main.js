/**
 * Main Application Logic
 * Handles user interactions and "Free" AI Generation
 */

async function generateMedia(prompt) {
    const btn = document.querySelector('#generate-btn');
    const display = document.querySelector('#preview-window');
    
    if (!prompt) return alert("Please enter a prompt!");

    // Update UI to loading state
    btn.innerText = "Generating...";
    btn.disabled = true;
    display.innerHTML = `<div class="animate-pulse flex flex-col items-center">
                            <div class="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p class="text-slate-400">Consulting the AI Oracle...</p>
                         </div>`;

    try {
        // USING HUGGING FACE FREE INFERENCE (Stable Diffusion XL)
        // Note: In a production app, you'd put your free API key in an environment variable
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                headers: { Authorization: "Bearer YOUR_FREE_TOKEN_HERE" }, // Optional: Works for a few calls even without token
                method: "POST",
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        // Display the result
        display.innerHTML = `<img src="${imageUrl}" class="rounded-lg shadow-2xl animate-in zoom-in duration-500" alt="Generated AI Media">`;
    } catch (error) {
        console.error("Gen Error:", error);
        display.innerHTML = `<p class="text-red-400">Free tier busy. Try again in 10 seconds!</p>`;
    } finally {
        btn.innerText = "Generate Media";
        btn.disabled = false;
    }
}

// Attach listeners once components are loaded
function initializeApp() {
    console.log("Epic Tech AI Initialized.");
    
    // Example: Intercepting the Hero button
    const mainBtn = document.querySelector('button.btn-glow');
    if (mainBtn) {
        mainBtn.addEventListener('click', () => {
            scrollToId('features');
            // Logic to open a generation modal or focus input
        });
    }
}
