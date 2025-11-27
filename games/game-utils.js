/**
 * ArcadeHub Game Utilities
 * Provides shared functionality for high score management and UI controls.
 */

const SCORE_STORAGE_KEY = 'arcadehub_scores';

/**
 * Saves a new high score to localStorage if it's better than the previous one.
 * @param {string} gameKey - The unique identifier for the game (e.g., 'Snake').
 * @param {number} score - The score achieved by the player.
 */
export function saveHighScore(gameKey, score) {
  if (!gameKey || typeof score !== 'number') return;

  try {
    const scores = JSON.parse(localStorage.getItem(SCORE_STORAGE_KEY) || '{}');
    const previousBest = scores[gameKey]?.best || 0;

    if (score > previousBest) {
      scores[gameKey] = { best: score, updated: Date.now() };
      localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(scores));
    }
  } catch (e) {
    console.error("Failed to save high score:", e);
  }
}

// --- Event Listeners ---

// Binds a click event to all elements with the ID 'restartBtn' to reload the page.
document.querySelectorAll('#restartBtn').forEach(btn => {
  btn.addEventListener('click', (e) => { e.preventDefault(); location.reload(); });
});