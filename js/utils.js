/**
 * loadComponent
 * Fetches an HTML file and injects it into a target DOM element.
 * @param {string} path - The relative path to the .html component.
 * @param {string} target - The CSS selector of the container.
 */
async function loadComponent(path, target) {
    try {
        const response = await fetch(path);
        
        if (!response.ok) {
            throw new Error(`Could not fetch ${path}: ${response.statusText}`);
        }
        
        const html = await response.text();
        const container = document.querySelector(target);
        
        if (container) {
            container.innerHTML = html;
            return true;
        }
        return false;
    } catch (error) {
        console.error("Component Loader Error:", error);
        return false;
    }
}

/**
 * scrollToId
 * Smoothly scrolls to a specific section on the page.
 */
function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
