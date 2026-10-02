// Speech-to-text for browsers whose own speech recognition is missing or broken (Brave, Firefox, some in-app browsers).
// Takes a recording from the microphone and transcribes it on the device with Whisper (transformers.js):
// no server and no keys. The model (about 40 MB) downloads on first use and the browser caches it.
window.DaliaSTT = (() => {
  const LIB = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3";
  const MODEL = "Xenova/whisper-tiny";
  let asr = null;

  function load(onProgress){
    if (!asr) asr = import(LIB)
      .then(({ pipeline }) => pipeline("automatic-speech-recognition", MODEL, { progress_callback: onProgress }))
      .catch(e => { asr = null; throw e; });
    return asr;
  }

  // Whisper wants mono samples at 16 kHz; the browser resamples while decoding.
  async function toSamples(blob){
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx({ sampleRate: 16000 });
    try { return (await ctx.decodeAudioData(await blob.arrayBuffer())).getChannelData(0); }
    finally { ctx.close(); }
  }

  async function transcribe(blob, lang, onProgress){
    const [run, audio] = await Promise.all([load(onProgress), toSamples(blob)]);
    const out = await run(audio, { language: lang === "es" ? "spanish" : "english", task: "transcribe" });
    return String(out?.text || "").trim();
  }

  return { load, transcribe };
})();
