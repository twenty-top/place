// privacy-popup.js
(function () {
  // If already accepted earlier in this browser, don't show again
  if (localStorage.getItem("policyAccepted") === "1") return;

  // Show once per session until accepted
  if (sessionStorage.getItem("cookieBannerShown") === "1") return;
  sessionStorage.setItem("cookieBannerShown", "1");

  // --- Build modal ---
  var bd = document.createElement("div");
  bd.className = "modal-backdrop";
  bd.innerHTML = [
    '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="pp-title" style="max-width:400px;text-align:center;">',
    '  <h3 id="pp-title">Cookie Consent</h3>',
    '  <p>We use essential cookies and local storage to make our site work. By clicking "Accept", you agree to our <a href="cookies.html">Cookie Policy</a> and <a href="privacy.html">Privacy Policy</a>.</p>',
    '  <div class="row">',
    '    <button class="btn" id="pp-yes">Accept</button>',
    "  </div>",
    "</div>",
  ].join("");
  document.body.appendChild(bd);
  bd.style.display = "flex";

  function closeGate() {
    bd.style.display = "none";
    bd.remove();
  }

  // Close on outside click
  bd.addEventListener("click", function (e) {
    if (e.target === bd) closeGate();
  });

  // Close on ESC
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape") closeGate();
    },
    { once: true }
  );

  // YES -> remember and close
  bd.querySelector("#pp-yes").addEventListener("click", function () {
    localStorage.setItem("policyAccepted", "1");
    closeGate();
  });

})();
