// AI adapter for Dalia. One place decides who answers:
//  - "artifact": inside a claude.ai artifact, Claude answers through the viewer's own account (window.claude sample);
//  - "off":      no AI available, the app falls back to its demo rules.
window.DaliaAI = (() => {
  const PERMANENT = ["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"];
  let sample = null, mode = "checking";
  const listeners = [];

  function setMode(m) { mode = m; listeners.forEach(f => f(m)); }

  async function init() {
    if (window.claude?.use) {
      try { sample = await window.claude.use("sample"); } catch { sample = null; }
      if (sample) return setMode("artifact");
    }
    setMode("off");
  }

  async function askText(prompt) {
    if (mode === "artifact") {
      const { text } = await sample(prompt, { modelTier: "quick", cache: false });
      return text;
    }
    throw { code: "no_ai" };
  }

  function parseJSON(text) {
    try { return JSON.parse(text); } catch {}
    const m = String(text).match(/[{[][\s\S]*[}\]]/);
    if (m) { try { return JSON.parse(m[0]); } catch {} }
    throw { code: "invalid_json" };
  }

  async function askJSON(prompt) {
    if (mode === "artifact") return sample.json(prompt, { modelTier: "quick", cache: false });
    return parseJSON(await askText(prompt + "\nReply with the JSON only, no other text."));
  }

  // Called by the app when a call fails; permanent problems switch the AI off for this session.
  function onError(e) {
    if (PERMANENT.includes(e?.code)) setMode("off");
  }

  return {
    init, askText, askJSON, onError,
    get mode() { return mode; },
    onMode(f) { listeners.push(f); },
  };
})();
