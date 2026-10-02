// Dalia prototype: Carmen's tablet, Laura's phone and nurse Pilar's weekly note, sharing one simulated clock.
// Synthetic data only. The AI (see ai.js) understands what people say and writes the weekly note;
// reminders, escalation and consent are fixed rules on purpose.
(() => {
const T = {
en:{
  tagline:"Voice calendar for people with mild cognitive impairment · working prototype · DETECT 2.0 Hackathon 2",
  aiArtifact:"AI: Claude is answering", aiOff:"AI: demo rules (no AI connected)", aiChecking:"AI: connecting…",
  simTime:"Simulated time", useCases:"Use cases", sc1:"1 · Morning pills", sc2:"2 · “Did I take it?”", sc3:"3 · Missed dose", sc4:"4 · Laura adds an appointment", sc5:"5 · Heads-up and repeat",
  planFree:"Plan: Free · 1 person", planPremium:"Plan: Premium · more people",
  planHint:"Freemium: Dalia is free for one person. Premium adds more people, with one tab and one summary each.",
  reset:"Reset", voiceOn:"Voice on", voiceOff:"Voice off", voiceAuto:"Voice: best available",
  roleCarmen:"<b>Carmen, 74</b> · MCI · tablet on her kitchen table",
  roleLaura:"<b>Laura</b> · her daughter · phone",
  roleNurse:"<b>Pilar</b> · community nurse",
  tabToday:"My day", tabPrivacy:"Who sees my day",
  carmenPh:"Speak to Dalia…", say:"Say", speak:"Speak",
  micYes:"Tap Speak and talk, or type what Carmen says.",
  micListening:"Listening…", micAgain:"Listening… please say it again.",
  micError:"Something went wrong with the microphone. Tap Speak to try again, or type.",
  micSilent:"I didn't hear anything. Tap Speak and try again, or type.",
  micAllow:"The browser has blocked the microphone for this page. Tap the icon next to the address (lock or ⓘ) → Permissions → Microphone → Allow, then reload the page.",
  micAllowIOS:"Safari has blocked the microphone for this page. Tap aA in the address bar → Website Settings → Microphone → Allow, then reload the page.",
  micEnable:"Turn on microphone", micReady:"Microphone ready. Tap Speak and talk.",
  micFrame:"This viewer blocks the microphone. Open the prototype on its own page to talk:",
  micNoDevice:"No microphone found. Connect one and tap Speak again, or type.",
  micWriting:"Writing down what you said…", micModel:"First time only: downloading the voice model… {n}%",
  hintsC:["Did I take my pills this morning?","What do I have today?","I've taken them","Remind me to water the plants at 6","Remind me about the doctor at 5","Can I take two pills if I forgot one?"],
  phoneTitle:"Mum · Carmen", phoneTitleA:"Dad · Antonio", allGood:"All good today", attention:"{n} thing needs a look", attentionN:"{n} things need a look",
  pTabFeed:"Updates", pTabCal:"Calendar", pTabAdd:"New activity",
  quickLabel:"Write it in one sentence and Dalia fills in the boxes", lauraPh:"e.g. Dentist tomorrow at 10…", fill:"Fill in",
  hintsL:["Dentist tomorrow at 10 at the Sonrisa clinic, remind her an hour before","Lunch with Rosa on Saturday at 14:00"],
  fWhat:"What", fDay:"Day", fTime:"Time", fPlace:"Where (optional)", fPlacePh:"e.g. Health centre", fBefore:"Remind before", fFor:"Whose calendar",
  fSup:"Follow whether it gets done", create:"Create activity",
  forCarmen:"Mum (Carmen)", forAntonio:"Dad (Antonio)",
  fMissing:"Fill in what it is and the time.", filled:"Boxes filled in. Check them and tap “Create activity”.",
  suggest:"Dalia thinks this is important ({why}). Suggestion: follow whether it gets done.",
  whyMed:"medical appointment", whyPill:"medication",
  familyOff:"Carmen has turned off adding from family. Only she can change this.",
  good:{m:"Good morning, Carmen",a:"Good afternoon, Carmen",e:"Good evening, Carmen"},
  dateToday:"Thursday 1 October",
  now:"Now", again:"Reminder", nextAt:"Next · {t}", nothing:"Nothing else today", nothingSub:"Enjoy your evening.",
  done:"Done", back:"Back", progress:"{a} of {b} done today", progressTitle:"Your day",
  remind1Med:"Time for your {x}.", remind1:"It's time: {x}.",
  remind1MedHint:"Time for your {x}. The pill box is on the kitchen table.",
  remind2Med:"Carmen, your pill box is on the kitchen table. Have you taken your {x}?", remind2:"Just a reminder: {x}. Tap Done when you have finished.",
  pre:"In {n} minutes: {x}.", preLoc:"In {n} minutes: {x}, at {p}.", atPlace:"At {p}",
  today:"Today", upcoming:"Coming up", byLaura:"added by Laura", byCarmen:"added by you", supTag:"Laura follows it",
  stDone:"done {t}", stWait:"waiting", stMiss:"not confirmed", stNext:"next", stSkip:"skipped",
  heard:"You said:",
  replyDone:["Well done, Carmen. I've noted it.","Lovely, Carmen. That's done.","Perfect, Carmen. One thing less to think about.","Great job, Carmen. All noted."],
  replyDoneMed:["Well done, Carmen. Your {x} are noted at {t}. If you wonder later, just ask me.","Perfect, Carmen. {X}: done at {t}. You don't need to take them again today."],
  replyDoneShared:["Well done, Carmen! Laura will see that it's done.","Great, Carmen. I'll let Laura know, so she can relax.","All noted, Carmen. Laura will see it on her phone."],
  tellLaura:"Laura will see that it's done.", doneSub:"Saved at {t}",
  prv0:"Laura sees my whole calendar", prv0s:"Off: she only sees what she adds and what I let her follow.",
  prv1:"Laura sees when I finish important things", prv1s:"Only what I let her follow, like medicine. Not meals or walks.",
  prv2:"Laura is told if I miss something important", prv2s:"Only after two repeats (+15 and +30 min) and one hour.",
  prv3:"Laura can add things to my calendar", prv3s:"I always see who added what.",
  prv4:"Nurse Pilar gets a weekly summary", prv4s:"Three lines. No recordings of my voice.",
  prvIntro:"You decide who sees what. You can change this at any time.",
  feedMorning:"Dalia is on. Carmen had breakfast at 08:10.",
  feedDone:"Mum finished: {x} at {t}.",
  feedMissed:"{x} ({t0}) not confirmed yet. Dalia reminded her three times. You could give her a call, no rush.",
  feedAdded:"Added to Mum's calendar: {x}, {d} {t}. She will see “added by Laura”.",
  feedAddedA:"Added to Dad's calendar: {x}, {d} {t}.",
  feedSupYes:"Mum agreed that you can follow: {x} ({t}).",
  calNotShared:"Carmen doesn't share her whole calendar. You only see what you add and what she lets you follow.",
  calEmpty:"Nothing here yet.",
  askSup:"This looks important ({why}). Shall Laura be able to see whether you do it?",
  supYes:"Yes, Laura can see it", supNo:"No, just me",
  supYesReply:"All right. Laura will see when you've done it.", supNoReply:"All right. It stays just for you.",
  premiumLock:"+ More people · Premium",
  feedCarmenAdded:"Mum added a reminder: {x} at {t}.",
  feedPrivacy:"Carmen changed what she shares.",
  notShared:"Dalia would tell Laura now, but Carmen chose not to share this. Only Carmen sees it.",
  lauraAdded:"Laura added: {x}, {d} at {t}.",
  nurseTitle:"{n}, this week", nurseOff:"Carmen has not shared a weekly summary.",
  nurseAI:"Write with AI", nurseConfirm:"Confirm note", nurseConfirmed:"Note confirmed at {t}",
  srcLog:"Counted from the calendar log", srcAI:"Written by Claude from the calendar log",
  nL1:"Morning pills: {a} of {b} days on time{c}.", nL1c:" (missed {m}; late {l})",
  nL2:"Evening pills: 6 of 6 on time.", nL3:"Asked “did I take my pills?” {n} times.", nL3t:" Today: {x} not confirmed.",
  aiTitle:"What the AI did", aiEmpty:"Talk to Dalia as Carmen, or add an appointment as Laura. Each step shows up here.",
  aiFrom:"From", aiHeard:"Heard", aiIntent:"Understood as", aiChecked:"Checked", aiReply:"Result", aiBy:"Handled by",
  byClaude:"Claude (AI)", byRules:"Demo rules (no AI)", byRule:"Fixed rule (no AI on purpose)", byManual:"Filled in by Laura (no AI)",
  neverTitle:"The AI never", never1:"gives medical advice, doses or diagnoses", never2:"tells family anything Carmen has not allowed", never3:"decides alone: when unsure, it asks Carmen", never4:"stores recordings of her voice",
  learnedTitle:"What Dalia learned about her routine",
  learnedLine:"Morning pills are usually confirmed at {t}. She misses them more when nobody mentions where the pill box is.",
  learnedAsk:"Suggestion: mention the pill box already in the first reminder.",
  learnedApply:"Carmen agrees: use it", learnedOn:"On: the first reminder now mentions the pill box. Carmen can undo this.", learnedUndo:"Undo",
  ladderTitle:"When something is missed",
  lad1:"Gentle reminder", lad1s:"A heads-up 15 min before. Then at the planned time, by voice and on screen.",
  lad2:"Said another way", lad2s:"+15 and +30 min, with a concrete hint.",
  lad3:"Quiet note to Laura", lad3s:"+60 min, only for things Laura follows and only if Carmen allows.",
  lad4:"Pattern in the weekly note", lad4s:"If it repeats, Pilar sees it. No alarms at night.",
  footNote:"Synthetic data only. Carmen, Laura and Pilar are invented people.",
  thinking:"Dalia is thinking…",
  days:["Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday"],
  short:["Fri","Sat","Sun","Mon","Tue","Wed","Thu"],
  todayW:"today", tomorrowW:"tomorrow",
  lauraBad:"I couldn't find a time in that. Try “Dentist tomorrow at 10”.",
  lauraOk:"Added: {x}, {d} at {t}.", minOpt:"{n} min", hourOpt:"1 h",
  titles:{breakfast:"Breakfast",morningPills:"morning pills",walkRosa:"Walk with Rosa",lunch:"Lunch",callLeo:"Video call with Leo",eveningPills:"evening pills",hairdresser:"Hairdresser"},
  intents:{query_done:"asking if she already did something",query_schedule:"asking about her day",mark_done:"telling Dalia she finished",add_event:"asking for a reminder",medical:"medical question → sent to doctor/nurse",unclear:"unclear → Dalia asks back",chat:"small talk",escalation:"medicine not confirmed after 60 min",add_family:"family adds an appointment",suggest_sup:"important → Dalia suggests Laura follows it"},
  chkLog:"today's calendar and what Carmen confirmed",
  rules:{
    doneYes:"Yes, Carmen. You took your {x} at {t}. You don't need to take them again.",
    doneNo:"Not yet, Carmen. Your {x} were planned for {t}. Would you like to take them now?",
    doneNotYet:"Your {x} are at {t}. I'll remind you then.",
    sched:"Today you still have: {list}.", schedNone:"Nothing else today, Carmen. You can relax.",
    added:"Of course. I'll remind you at {t}: {x}.",
    medical:"That is a question for your doctor or nurse Pilar, Carmen. I can let Laura know you asked, if you like.",
    unclear:"Sorry, Carmen, I didn't catch that. Do you want to know your plan for today?",
    nothingToMark:"Thank you, Carmen. There is nothing waiting right now."
  }
},
es:{
  tagline:"Calendario por voz para personas con deterioro cognitivo leve · prototipo funcional · DETECT 2.0 Hackathon 2",
  aiArtifact:"IA: responde Claude", aiOff:"IA: reglas de demo (sin IA conectada)", aiChecking:"IA: conectando…",
  simTime:"Hora simulada", useCases:"Casos de uso", sc1:"1 · Pastillas de la mañana", sc2:"2 · «¿Me la he tomado?»", sc3:"3 · Dosis olvidada", sc4:"4 · Laura añade una cita", sc5:"5 · Aviso previo y repetición",
  planFree:"Plan: Gratis · 1 persona", planPremium:"Plan: Premium · más personas",
  planHint:"Freemium: Dalia es gratis para una persona. Premium añade más personas, con una pestaña y un resumen para cada una.",
  reset:"Reiniciar", voiceOn:"Voz activada", voiceOff:"Voz desactivada", voiceAuto:"Voz: la mejor disponible",
  roleCarmen:"<b>Carmen, 74</b> · DCL · tablet en la mesa de la cocina",
  roleLaura:"<b>Laura</b> · su hija · móvil",
  roleNurse:"<b>Pilar</b> · enfermera de atención primaria",
  tabToday:"Mi día", tabPrivacy:"Quién ve mi día",
  carmenPh:"Habla con Dalia…", say:"Decir", speak:"Hablar",
  micYes:"Pulsa Hablar y habla, o escribe lo que dice Carmen.",
  micListening:"Escuchando…", micAgain:"Escuchando… dilo otra vez, por favor.",
  micError:"Algo ha fallado con el micrófono. Pulsa Hablar para reintentarlo, o escribe.",
  micSilent:"No he oído nada. Pulsa Hablar y vuelve a intentarlo, o escribe.",
  micAllow:"El navegador ha bloqueado el micrófono en esta página. Toca el icono junto a la dirección (candado o ⓘ) → Permisos → Micrófono → Permitir, y recarga la página.",
  micAllowIOS:"Safari ha bloqueado el micrófono en esta página. Toca aA en la barra de direcciones → Ajustes del sitio web → Micrófono → Permitir, y recarga la página.",
  micEnable:"Activar micrófono", micReady:"Micrófono listo. Pulsa Hablar y habla.",
  micFrame:"Este visor bloquea el micrófono. Abre el prototipo en su propia página para hablar:",
  micNoDevice:"No se encuentra ningún micrófono. Conecta uno y pulsa Hablar otra vez, o escribe.",
  micWriting:"Escribiendo lo que has dicho…", micModel:"Solo la primera vez: descargando el modelo de voz… {n}%",
  hintsC:["¿Me he tomado las pastillas esta mañana?","¿Qué tengo hoy?","Ya me las he tomado","Recuérdame regar las plantas a las 6","Recuérdame el médico a las 5","¿Puedo tomar dos pastillas si olvidé una?"],
  phoneTitle:"Mamá · Carmen", phoneTitleA:"Papá · Antonio", allGood:"Todo bien hoy", attention:"{n} cosa por revisar", attentionN:"{n} cosas por revisar",
  pTabFeed:"Avisos", pTabCal:"Calendario", pTabAdd:"Nueva actividad",
  quickLabel:"Escríbelo en una frase y Dalia rellena los campos", lauraPh:"p. ej. Dentista mañana a las 10…", fill:"Rellenar",
  hintsL:["Dentista mañana a las 10 en la clínica Sonrisa, avísale una hora antes","Comida con Rosa el sábado a las 14:00"],
  fWhat:"Qué", fDay:"Día", fTime:"Hora", fPlace:"Dónde (opcional)", fPlacePh:"p. ej. Centro de salud", fBefore:"Avisar antes", fFor:"Calendario de",
  fSup:"Supervisar que se cumpla", create:"Crear actividad",
  forCarmen:"Mamá (Carmen)", forAntonio:"Papá (Antonio)",
  fMissing:"Rellena qué es y la hora.", filled:"Campos rellenados. Revísalos y pulsa «Crear actividad».",
  suggest:"Dalia cree que esto es importante ({why}). Sugerencia: supervisar que se cumpla.",
  whyMed:"cita médica", whyPill:"medicación",
  familyOff:"Carmen ha desactivado que la familia añada cosas. Solo ella puede cambiarlo.",
  good:{m:"Buenos días, Carmen",a:"Buenas tardes, Carmen",e:"Buenas noches, Carmen"},
  dateToday:"Jueves 1 de octubre",
  now:"Ahora", again:"Recordatorio", nextAt:"Siguiente · {t}", nothing:"Nada más por hoy", nothingSub:"Disfruta de la tarde.",
  done:"Hecho", back:"Volver", progress:"{a} de {b} hechas hoy", progressTitle:"Tu día",
  remind1Med:"Es la hora de tus {x}.", remind1:"Es la hora: {x}.",
  remind1MedHint:"Es la hora de tus {x}. El pastillero está en la mesa de la cocina.",
  remind2Med:"Carmen, el pastillero está en la mesa de la cocina. ¿Te has tomado las {x}?", remind2:"Te recuerdo: {x}. Pulsa Hecho cuando termines.",
  pre:"Dentro de {n} minutos: {x}.", preLoc:"Dentro de {n} minutos: {x}, en {p}.", atPlace:"En {p}",
  today:"Hoy", upcoming:"Próximamente", byLaura:"añadido por Laura", byCarmen:"añadido por ti", supTag:"lo sigue Laura",
  stDone:"hecho {t}", stWait:"pendiente", stMiss:"sin confirmar", stNext:"siguiente", stSkip:"omitido",
  heard:"Has dicho:",
  replyDone:["Muy bien, Carmen. Lo he apuntado.","Estupendo, Carmen. Ya está hecho.","Perfecto, Carmen. Una cosa menos en la que pensar.","Genial, Carmen. Todo apuntado."],
  replyDoneMed:["Muy bien, Carmen. Tus {x} quedan apuntadas a las {t}. Si luego dudas, pregúntame.","Perfecto, Carmen. {X}: hecho a las {t}. Hoy no hace falta tomarlas otra vez."],
  replyDoneShared:["¡Muy bien, Carmen! Laura verá que ya está hecho.","Estupendo, Carmen. Se lo haré saber a Laura para que esté tranquila.","Todo apuntado, Carmen. Laura lo verá en su móvil."],
  tellLaura:"Laura verá que ya está hecho.", doneSub:"Guardado a las {t}",
  prv0:"Laura ve todo mi calendario", prv0s:"Apagado: solo ve lo que añade ella y lo que le dejo supervisar.",
  prv1:"Laura ve cuándo termino cosas importantes", prv1s:"Solo lo que le dejo supervisar, como la medicación. No comidas ni paseos.",
  prv2:"Avisar a Laura si olvido algo importante", prv2s:"Solo tras dos repeticiones (+15 y +30 min) y una hora.",
  prv3:"Laura puede añadir cosas a mi calendario", prv3s:"Siempre veo quién añadió qué.",
  prv4:"La enfermera Pilar recibe un resumen semanal", prv4s:"Tres líneas. Sin grabaciones de mi voz.",
  prvIntro:"Tú decides quién ve qué. Puedes cambiarlo cuando quieras.",
  feedMorning:"Dalia está activa. Carmen desayunó a las 08:10.",
  feedDone:"Mamá ha terminado: {x} a las {t}.",
  feedMissed:"{x} ({t0}) aún sin confirmar. Dalia se lo ha recordado tres veces. Podrías llamarla, sin prisa.",
  feedAdded:"Añadido al calendario de mamá: {x}, {d} {t}. Verá «añadido por Laura».",
  feedAddedA:"Añadido al calendario de papá: {x}, {d} {t}.",
  feedSupYes:"Mamá ha aceptado que sigas: {x} ({t}).",
  calNotShared:"Carmen no comparte todo su calendario. Solo ves lo que añades tú y lo que te deja supervisar.",
  calEmpty:"Aún no hay nada.",
  askSup:"Esto parece importante ({why}). ¿Quieres que Laura pueda ver si lo haces?",
  supYes:"Sí, que lo vea Laura", supNo:"No, solo yo",
  supYesReply:"De acuerdo. Laura verá cuándo lo has hecho.", supNoReply:"De acuerdo. Queda solo para ti.",
  premiumLock:"+ Más personas · Premium",
  feedCarmenAdded:"Mamá ha añadido un recordatorio: {x} a las {t}.",
  feedPrivacy:"Carmen ha cambiado lo que comparte.",
  notShared:"Dalia avisaría ahora a Laura, pero Carmen ha elegido no compartirlo. Solo lo ve Carmen.",
  lauraAdded:"Laura ha añadido: {x}, {d} a las {t}.",
  nurseTitle:"{n}, esta semana", nurseOff:"Carmen no ha compartido el resumen semanal.",
  nurseAI:"Redactar con IA", nurseConfirm:"Confirmar nota", nurseConfirmed:"Nota confirmada a las {t}",
  srcLog:"Contado a partir del registro del calendario", srcAI:"Redactado por Claude a partir del registro",
  nL1:"Pastillas de la mañana: {a} de {b} días a tiempo{c}.", nL1c:" (olvidada {m}; tarde {l})",
  nL2:"Pastillas de la noche: 6 de 6 a tiempo.", nL3:"Preguntó «¿me he tomado las pastillas?» {n} veces.", nL3t:" Hoy: {x} sin confirmar.",
  aiTitle:"Qué ha hecho la IA", aiEmpty:"Habla con Dalia como Carmen o añade una cita como Laura. Cada paso aparece aquí.",
  aiFrom:"De", aiHeard:"Oído", aiIntent:"Entendido como", aiChecked:"Ha consultado", aiReply:"Resultado", aiBy:"Resuelto por",
  byClaude:"Claude (IA)", byRules:"Reglas de demo (sin IA)", byRule:"Regla fija (sin IA a propósito)", byManual:"Rellenado por Laura (sin IA)",
  neverTitle:"La IA nunca", never1:"da consejos médicos, dosis ni diagnósticos", never2:"cuenta a la familia lo que Carmen no ha permitido", never3:"decide sola: si duda, pregunta a Carmen", never4:"guarda grabaciones de su voz",
  learnedTitle:"Lo que Dalia ha aprendido de su rutina",
  learnedLine:"Suele confirmar las pastillas de la mañana a las {t}. Las olvida más cuando nadie le dice dónde está el pastillero.",
  learnedAsk:"Sugerencia: mencionar el pastillero ya en el primer recordatorio.",
  learnedApply:"Carmen está de acuerdo: aplicarlo", learnedOn:"Activado: el primer recordatorio ya menciona el pastillero. Carmen puede deshacerlo.", learnedUndo:"Deshacer",
  ladderTitle:"Cuando algo se olvida",
  lad1:"Recordatorio amable", lad1s:"Un aviso 15 min antes. Luego a la hora prevista, por voz y en pantalla.",
  lad2:"Dicho de otra forma", lad2s:"+15 y +30 min, con una pista concreta.",
  lad3:"Aviso discreto a Laura", lad3s:"+60 min, solo si Laura lo supervisa y Carmen lo permite.",
  lad4:"Patrón en la nota semanal", lad4s:"Si se repite, Pilar lo ve. Sin alarmas de noche.",
  footNote:"Solo datos inventados. Carmen, Laura y Pilar son personas ficticias.",
  thinking:"Dalia está pensando…",
  days:["jueves","viernes","sábado","domingo","lunes","martes","miércoles"],
  short:["vie","sáb","dom","lun","mar","mié","jue"],
  todayW:"hoy", tomorrowW:"mañana",
  lauraBad:"No encuentro una hora. Prueba «Dentista mañana a las 10».",
  lauraOk:"Añadido: {x}, {d} a las {t}.", minOpt:"{n} min", hourOpt:"1 h",
  titles:{breakfast:"Desayuno",morningPills:"pastillas de la mañana",walkRosa:"Paseo con Rosa",lunch:"Comida",callLeo:"Videollamada con Leo",eveningPills:"pastillas de la noche",hairdresser:"Peluquería"},
  intents:{query_done:"pregunta si ya hizo algo",query_schedule:"pregunta por su día",mark_done:"dice que ha terminado",add_event:"pide un recordatorio",medical:"pregunta médica → a su médico/enfermera",unclear:"no está claro → Dalia pregunta",chat:"conversación",escalation:"medicación sin confirmar tras 60 min",add_family:"la familia añade una cita",suggest_sup:"importante → Dalia sugiere que Laura lo supervise"},
  chkLog:"el calendario de hoy y lo que Carmen ha confirmado",
  rules:{
    doneYes:"Sí, Carmen. Te tomaste las {x} a las {t}. No hace falta tomarlas otra vez.",
    doneNo:"Todavía no, Carmen. Las {x} eran a las {t}. ¿Quieres tomarlas ahora?",
    doneNotYet:"Tus {x} son a las {t}. Te avisaré entonces.",
    sched:"Hoy todavía tienes: {list}.", schedNone:"Nada más por hoy, Carmen. Puedes descansar.",
    added:"Claro. Te lo recordaré a las {t}: {x}.",
    medical:"Eso es mejor preguntárselo a tu médico o a la enfermera Pilar, Carmen. Si quieres, aviso a Laura de que lo has preguntado.",
    unclear:"Perdona, Carmen, no te he entendido. ¿Quieres saber tu plan de hoy?",
    nothingToMark:"Gracias, Carmen. Ahora mismo no hay nada pendiente."
  }
}};

const AI = window.DaliaAI;
// index.html?still turns animations off, so tools/make-screenshots.ps1 never catches a half-finished one.
if (/[?&]still(&|$)/.test(location.search)) document.documentElement.classList.add("still");
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt = m => String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0");
const cap = s => s ? s[0].toUpperCase()+s.slice(1) : s;
function tr(lang, key, vars){
  let s = key.split(".").reduce((o,k)=>o?.[k], T[lang]);
  if (typeof s !== "string") return s;
  for (const [k,v] of Object.entries(vars||{})) s = s.replaceAll("{"+k+"}", typeof v === "function" ? v(lang) : v);
  return s;
}
const t = (k, v) => tr(S.lang, k, v);
const both = (k, v) => ({en: tr("en",k,v), es: tr("es",k,v)});
const pick = o => (o && typeof o === "object") ? (o[S.lang] ?? o.en) : o;
const titleL = (ev, lang) => typeof ev.title === "string" ? T[lang].titles[ev.title] : (ev.title[lang] || ev.title.en);
const title = ev => titleL(ev, S.lang);
const dayL = (d, lang) => d === 0 ? T[lang].todayW : d === 1 ? T[lang].tomorrowW : T[lang].days[d % 7];
const aiOn = () => AI.mode === "artifact";

// Reminder timing (minutes). Fixed rules on purpose: the AI never decides when to remind.
const PRE_DEFAULT = 15;          // heads-up before every activity (Laura can pick 10/15/30/60)
const REPEATS = [15, 30];        // not confirmed → remind again at +15 and at +30
const ESCALATE_AFTER = 60;       // still not confirmed → quiet note to Laura (only if she follows it and Carmen allows)
const SKIP_AFTER = 90;           // activities nobody follows are dropped quietly
const BEFORE_OPTS = [10, 15, 30, 60];

// Synthetic history for the six previous days (Fri..Wed): minute the morning pills were confirmed, null = missed.
const HISTORY = [{en:"Friday",es:"viernes",m:545},{en:"Saturday",es:"sábado",m:552},{en:"Sunday",es:"domingo",m:null},{en:"Monday",es:"lunes",m:542},{en:"Tuesday",es:"martes",m:560},{en:"Wednesday",es:"miércoles",m:605}];
const PRIOR_DOUBTS = 2;

// People Laura and nurse Pilar can follow. Freemium: one person (Carmen) is free; the others appear with Premium. All invented.
const PEOPLE = {
  carmen:  {name:"Carmen", age:74, laura:true},
  antonio: {name:"Antonio", age:79, laura:true},
  mercedes:{name:"Mercedes", age:81, laura:false},
};
function seedOthers(){
  const ev = (id, day, time, en, es, extra={}) => ({id, day, time, kind:"note", title:{en, es}, important:false, supervised:false, status:"pending", doneAt:null, stage:0, by:"antonio", owner:"antonio", remindBefore:PRE_DEFAULT, place:"", ...extra});
  return {
    antonio: {
      events: [
        ev("a1",0,510,"Morning pills","Pastillas de la mañana",{kind:"med",important:true,supervised:true,status:"done",doneAt:515}),
        ev("a2",0,720,"Physio","Fisioterapia",{kind:"appt",important:true,supervised:true,place:"Centro de salud"}),
        ev("a3",0,1230,"Evening pills","Pastillas de la noche",{kind:"med",important:true,supervised:true}),
        ev("a4",2,600,"Blood test","Análisis de sangre",{kind:"appt",important:true,supervised:true,place:"Hospital La Fe"}),
      ],
      feed: [{time:515, type:"ok", who:"antonio", text:{en:"Dad finished: morning pills at 08:35.", es:"Papá ha terminado: pastillas de la mañana a las 08:35."}}],
    },
    nurse: {
      antonio: {en:["Morning pills: 7 of 7 days on time.","Evening pills: 6 of 7 on time (late on Sunday).","Went to physio twice. Asked about his appointments 3 times."],
                es:["Pastillas de la mañana: 7 de 7 días a tiempo.","Pastillas de la noche: 6 de 7 a tiempo (tarde el domingo).","Fue dos veces a fisioterapia. Preguntó por sus citas 3 veces."]},
      mercedes:{en:["Morning pills: 5 of 7 days on time (missed Monday and Tuesday).","Evening pills: 7 of 7 on time.","Did not confirm her Tuesday walk. Her son was told once."],
                es:["Pastillas de la mañana: 5 de 7 días a tiempo (olvidadas lunes y martes).","Pastillas de la noche: 7 de 7 a tiempo.","No confirmó su paseo del martes. Se avisó una vez a su hijo."]},
    },
  };
}

function seed(){
  const ev = (id, day, time, kind, title, important=false, extra={}) => ({id, day, time, kind, title, important, supervised:important, status:"pending", doneAt:null, stage:0, by:"carmen", owner:"carmen", remindBefore:PRE_DEFAULT, place:"", ...extra});
  return {
    now: 8*60+55,
    events: [
      ev("e1",0,480,"meal","breakfast",false,{status:"done",doneAt:490}),
      ev("e2",0,540,"med","morningPills",true),
      ev("e3",0,660,"walk","walkRosa"),
      ev("e4",0,810,"meal","lunch"),
      ev("e5",0,960,"call","callLeo"),
      ev("e6",0,1260,"med","eveningPills",true),
      ev("e7",1,630,"appt","hairdresser"),
    ],
    feed: [{time:490, type:"info", who:"carmen", text: both("feedMorning")}],
    others: seedOthers(),
    doubts: 0, lastAI: null, reply: null, heard: null, notice: null, askSup: null,
    privacy: {shareCalendar:false, shareDone:true, shareMissed:true, familyAdd:true, nurseSummary:true},
    personal: false,
    nurse: {}, nurseConfirmed: {}, lauraResult: null, ladderEv: "e2", nextId: 8, alarm: null,
    form: blankForm("carmen"),
  };
}
function blankForm(owner){ return {title:"", day:0, time:"", place:"", before:PRE_DEFAULT, owner, sup:false, supTouched:false, important:false, why:null, by:"manual"}; }
let S = Object.assign(seed(), {lang:"en", voice:true, voicePick:{en:"", es:""}, tab:"today", premium:false, lauraWho:"carmen", pilarWho:"carmen", ptab:"feed", sc:null});

// Motion: an element animates only the first time it appears, so re-renders (clock ticks) stay calm.
const seen = new Set();
const anim = (key, cls="enter") => { if (seen.has(key)) return ""; seen.add(key); return " " + cls; };

// Warm, varied confirmations. The same variant index is used in both languages.
let lastVariant = -1;
function doneReply(ev){
  const key = ev.supervised && S.privacy.shareDone ? "replyDoneShared" : ev.kind === "med" ? "replyDoneMed" : "replyDone";
  const n = T.en[key].length;
  let i = Math.floor(Math.random() * n); if (n > 1 && i === lastVariant) i = (i + 1) % n; lastVariant = i;
  const vars = {x:l => titleL(ev,l), X:l => cap(titleL(ev,l)), t:fmt(ev.doneAt ?? S.now)};
  const out = {};
  for (const l of ["en","es"]){ let s = T[l][key][i]; for (const [k,v] of Object.entries(vars)) s = s.replaceAll("{"+k+"}", typeof v === "function" ? v(l) : v); out[l] = s; }
  return out;
}

// ---------- importance (AI suggests, people decide) ----------
function rulesImp(text){
  const s = String(text||"").toLowerCase();
  if (/pill|pastill|medic|farmac|pharm|insulin|inhal/.test(s)) return {important:true, why: both("whyPill")};
  if (/dent|doct|m[eé]dic|hospital|nurse|enfermer|cl[ií]nic|physio|fisio|an[aá]lisis|blood|sangre|revisi[oó]n|check-?up|oculist|optom/.test(s)) return {important:true, why: both("whyMed")};
  return {important:false, why:null};
}

// ---------- voice out ----------
// Picks the most natural voice the browser offers (Edge "Natural" and Google voices sound far less robotic),
// unless someone chose one in the demo bar.
let voices = [];
function loadVoices(){ try { voices = speechSynthesis.getVoices(); } catch(e){ voices = []; } }
const voicesFor = lang => voices.filter(v => (v.lang || "").toLowerCase().startsWith(lang));
const LIKED = {en:/sonia|libby|maisie|aria|jenny|ava|emma|serena|kate/i, es:/elvira|ximena|lucia|lucía|helena|paloma|dalia/i};
const natural = v => /natural|neural|online/i.test(v.name);
function bestVoice(lang){
  const list = voicesFor(lang);
  const chosen = list.find(v => v.name === S.voicePick[lang]);
  if (chosen) return chosen;
  return byScore(list, lang)[0] || null;
}
function byScore(list, lang){
  const home = lang === "es" ? "es-es" : "en-gb";
  const score = v => (natural(v) ? 4 : 0) + (/google/i.test(v.name) ? 2 : 0) + (LIKED[lang].test(v.name) ? 2 : 0) + (v.lang.toLowerCase().replace("_","-") === home ? 1 : 0);
  return list.slice().sort((a,b) => score(b) - score(a));
}
function speak(text){
  if (!S.voice || !text) return;
  try {
    const u = new SpeechSynthesisUtterance(text), v = bestVoice(S.lang);
    u.lang = v?.lang || (S.lang === "es" ? "es-ES" : "en-GB"); if (v) u.voice = v;
    u.rate = v && natural(v) ? 1 : .92; u.pitch = 1.04;
    u.onstart = () => document.body.classList.add("speaking");
    u.onend = u.onerror = () => document.body.classList.remove("speaking");
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch(e){}
}
function renderVoices(){
  const sel = $("#voiceSel"), list = voicesFor(S.lang);
  sel.hidden = !S.voice || !list.length;
  sel.innerHTML = `<option value="">${esc(t("voiceAuto"))}</option>` + byScore(list, S.lang).map(v =>
    `<option value="${esc(v.name)}">${esc(v.name.replace(/^(Microsoft|Google)\s+/,"").replace(/\s+-\s+.*$/,""))} · ${esc(v.lang)}</option>`).join("");
  sel.value = list.some(v => v.name === S.voicePick[S.lang]) ? S.voicePick[S.lang] : "";
}

// ---------- voice in ----------
// Two ways in, and the Speak button is always there:
//  1. the browser's own speech recognition (Chrome, Edge, Safari): fast, nothing to download;
//  2. where that is missing or fails (Brave, Firefox, some in-app browsers): record the microphone
//     and transcribe on the device with Whisper (assets/stt.js).
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
// Brave has the API but no speech service behind it: it never answers. index.html?whisper forces path 2 (for testing).
let useSR = !!SR && !navigator.brave && !/[?&]whisper(&|$)/.test(location.search);
const MIC_WAIT = 8000;                 // ms without any speech before we stop listening instead of hanging
const MIC_MAX = 15000;                 // longest recording in the Whisper path
let rec = null;                        // the current listening session; a second tap calls rec.finish()
const DEMO_URL = "https://mrkolzy.github.io/dalia-demo/";   // public copy with the microphone allowed (claude.ai blocks it)
const micSay = (k, v) => {
  const note = $("#micNote");
  note.textContent = t(k, v);
  if (k === "micFrame"){
    const a = document.createElement("a");
    a.href = DEMO_URL; a.target = "_blank"; a.rel = "noopener"; a.textContent = " " + DEMO_URL.replace(/^https:\/\/|\/$/g, "");
    note.append(a);
  }
};
const micLive = on => $("#micBtn").classList.toggle("live", on);

const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

// Asks for the microphone (the browser shows its permission prompt). Throws the key of the message to show.
async function getMic(){
  if (!navigator.mediaDevices?.getUserMedia) throw "micError";
  try { return await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }); }
  catch(e){
    if (e?.name === "NotFoundError" || e?.name === "OverconstrainedError") throw "micNoDevice";
    if (e?.name === "NotAllowedError" || e?.name === "SecurityError") throw window.top !== window ? "micFrame" : IS_IOS ? "micAllowIOS" : "micAllow";
    throw "micError";
  }
}

// "Turn on microphone" button: shown until the browser says the microphone is allowed.
// Browsers only show their prompt while nothing has been decided; once blocked, micAllow explains where to unblock it.
let micPerm = null;
async function watchMicPerm(){
  try { micPerm = await navigator.permissions.query({ name: "microphone" }); micPerm.onchange = showMicPerm; } catch(e){}
  showMicPerm();
}
const showMicPerm = () => { $("#micPerm").hidden = micPerm?.state === "granted"; };
async function enableMic(){
  try { (await getMic()).getTracks().forEach(x => x.stop()); micSay("micReady"); }
  catch(key){ micSay(typeof key === "string" ? key : "micError"); }
  if (!micPerm) $("#micPerm").hidden = $("#micNote").textContent === t("micReady");
  else showMicPerm();
}

function listen(){
  if (rec) return rec.finish();        // second tap: stop now and answer what was heard
  return useSR ? listenSR() : listenRec();
}

function listenSR(){
  const r = new SR();
  let heard = "", done = false, timer = null;
  // Mobile browsers often end without a final result, so we answer the last thing heard.
  const finish = (note, then) => {
    if (done) return;
    done = true; clearTimeout(timer); rec = null;
    try { r.abort(); } catch(e){}
    micLive(false);
    if (then) return then();
    micSay(note || (heard.trim() ? "micYes" : "micSilent"));
    if (heard.trim()) carmenSay(heard.trim());
  };
  // The browser's recognition does not work here: switch to recording + Whisper and listen again at once.
  const fallBack = () => finish(null, () => { useSR = false; listenRec(true); });
  const wait = () => { clearTimeout(timer); timer = setTimeout(() => finish(), MIC_WAIT); };
  try {
    r.lang = S.lang === "es" ? "es-ES" : "en-GB"; r.interimResults = true;
    r.onresult = e => { heard = Array.from(e.results).map(x => x[0].transcript).join(" "); $("#carmenInput").value = heard; wait(); };
    r.onerror = e => {
      if (e.error === "no-speech" || e.error === "aborted") return;   // onend follows and says so
      fallBack();   // not-allowed, network, audio-capture…: the recorder asks for the microphone itself and says what is wrong
    };
    r.onend = () => finish();
    rec = { finish: () => finish() };
    r.start(); wait(); micLive(true); micSay("micListening");
  } catch(e){ fallBack(); }
}

async function listenRec(again){
  const busy = { finish(){} };         // taps do nothing while we ask for permission or transcribe
  rec = busy;
  let stream;
  try { stream = await getMic(); }
  catch(key){ rec = null; return micSay(typeof key === "string" ? key : "micError"); }
  if (!window.MediaRecorder){ stream.getTracks().forEach(x => x.stop()); rec = null; return micSay("micError"); }

  const mr = new MediaRecorder(stream), chunks = [];
  // A small level meter: stop after 1.5 s of quiet once Carmen has spoken, or if she says nothing.
  let ac = null, an = null, spoke = false, manual = false, quiet = 0, done = false;
  const t0 = performance.now();
  try {
    ac = new (window.AudioContext || window.webkitAudioContext)(); ac.resume?.();
    an = ac.createAnalyser(); an.fftSize = 1024; ac.createMediaStreamSource(stream).connect(an);
  } catch(e){ an = null; spoke = true; }
  const buf = new Float32Array(1024);
  const tick = setInterval(() => {
    const now = performance.now();
    if (an){
      an.getFloatTimeDomainData(buf);
      let sum = 0; for (const v of buf) sum += v * v;
      if (Math.sqrt(sum / buf.length) > 0.02){ spoke = true; quiet = 0; }
      else if (spoke && !quiet) quiet = now;
      if (spoke && quiet && now - quiet > 1500) stop();
      if (!spoke && now - t0 > MIC_WAIT) stop();
    }
    if (now - t0 > MIC_MAX) stop();
  }, 100);
  function stop(){
    if (done) return;
    done = true; clearInterval(tick);
    try { if (mr.state !== "inactive") mr.stop(); } catch(e){}
  }
  mr.ondataavailable = e => { if (e.data?.size) chunks.push(e.data); };
  mr.onstop = async () => {
    stream.getTracks().forEach(x => x.stop()); try { ac?.close(); } catch(e){}
    micLive(false);
    if (!spoke && !manual){ rec = null; return micSay("micSilent"); }
    rec = busy; micSay("micWriting");
    try {
      const text = await DaliaSTT.transcribe(new Blob(chunks, { type: mr.mimeType || "audio/webm" }), S.lang, p => {
        if (p?.status === "progress" && p.progress < 100 && /\.onnx$/.test(p.file || "")) micSay("micModel", { n: Math.round(p.progress || 0) });
      });
      rec = null;
      if (!text) return micSay("micSilent");
      $("#carmenInput").value = text; micSay("micYes"); carmenSay(text);
    } catch(e){ rec = null; micSay("micError"); }
  };
  mr.start();
  rec = { finish: () => { manual = true; stop(); } };
  micLive(true); micSay(again ? "micAgain" : "micListening");
}

// ---------- clock & reminders ----------
const carmenEvents = () => S.events.filter(e => e.owner === "carmen");
function reminderText(ev, lang){
  const x = titleL(ev, lang);
  if (ev.stage >= 2) return tr(lang, ev.kind === "med" ? "remind2Med" : "remind2", {x});
  if (ev.kind === "med") return tr(lang, S.personal ? "remind1MedHint" : "remind1Med", {x});
  return tr(lang, "remind1", {x: cap(x)});
}
function preText(ev){
  const vars = {n:ev.remindBefore, x:l=>cap(titleL(ev,l)), p:ev.place};
  return both(ev.place ? "preLoc" : "pre", vars);
}
let toSpeak = null;
function step(){
  for (const ev of S.events.filter(e => e.day === 0 && e.status === "pending").sort((a,b)=>a.time-b.time)){
    const late = S.now - ev.time;
    if (ev.remindBefore && late === -ev.remindBefore){ S.notice = preText(ev); S.reply = null; toSpeak = S.notice; }
    if (late === 0){ ev.stage = 1; toSpeak = {en:reminderText(ev,"en"), es:reminderText(ev,"es")}; if (ev.supervised) S.ladderEv = ev.id; S.reply = null; S.alarm = {id:ev.id}; }
    else if (REPEATS.includes(late)){ ev.stage = 2; toSpeak = {en:reminderText(ev,"en"), es:reminderText(ev,"es")}; S.reply = null; S.alarm = {id:ev.id}; }
    else if (late === ESCALATE_AFTER && ev.supervised) escalate(ev);
    else if (late === SKIP_AFTER && !ev.supervised) ev.status = "skipped";
  }
}
function escalate(ev){
  ev.stage = 3; S.ladderEv = ev.id;
  const text = both("feedMissed", {x:l=>cap(titleL(ev,l)), t0:fmt(ev.time)});
  if (S.privacy.shareMissed){ S.feed.push({time:S.now, type:"alert", who:"carmen", text}); S.notice = null; }
  else S.notice = both("notShared");
  S.lastAI = {from:"Dalia", heard:null, intent:"escalation", checked: both("chkLog"), reply: S.privacy.shareMissed ? text : both("notShared"), by:"rule"};
}
function advance(mins){
  const target = Math.min(S.now + mins, 23*60+59);
  toSpeak = null;
  while (S.now < target){ S.now++; step(); }
  render();
  if (toSpeak) speak(pick(toSpeak));
}
function markDone(id, fromAlarm){
  const ev = S.events.find(e => e.id === id);
  if (!ev || ev.status === "done") return null;
  ev.status = "done"; ev.doneAt = S.now;
  if (ev.supervised && S.privacy.shareDone) S.feed.push({time:S.now, type:"ok", who:"carmen", text: both("feedDone",{x:l=>cap(titleL(ev,l)), t:fmt(S.now)})});
  S.notice = null;
  if (S.alarm?.id === id && !fromAlarm) S.alarm = null;
  return ev;
}

// ---------- AI: Carmen ----------
function calendarText(lang){
  return carmenEvents().filter(e => e.day <= 1).sort((a,b)=>a.day-b.day||a.time-b.time).map(e =>
    `${e.id} | ${e.day===0?"today":"tomorrow"} ${fmt(e.time)} | ${titleL(e,lang)}${e.place?" @ "+e.place:""} | ${e.status==="done"?"done at "+fmt(e.doneAt):e.day===0&&e.time<=S.now?"NOT confirmed":e.status}${e.supervised && S.privacy.shareDone ? " | Laura follows it" : ""}`).join("\n");
}
function carmenPrompt(text){
  const lang = S.lang === "es" ? "Spanish (Spain)" : "English";
  return `You are Dalia, a calm voice calendar for Carmen (74, mild cognitive impairment). She talks to a tablet on her kitchen table.
Current time: Thursday 1 October, ${fmt(S.now)}. Reply language: ${lang}.
Her calendar (id | when | activity | status):
${calendarText(S.lang)}

Carmen just said: "${text.replace(/"/g,"'")}"

Rules:
- Reply in 1-2 short, warm, simple sentences, at most 30 words. Never rush or scold.
- Answer "did I do X?" ONLY from the status column. If done, say the time and that she does not need to do it again. If NOT confirmed, say so gently and ask if she wants to do it now.
- Never give medical advice, doses or diagnoses. For anything medical (doses, double pills, symptoms, feeling unwell) kindly say her doctor or nurse Pilar should answer, and offer to let her daughter Laura know. intent "medical".
- If she says she finished something, choose the matching pending id (prefer the one that is NOT confirmed). Praise her warmly; if Laura follows it, tell her Laura will see it is done.
- Vary your wording from one reply to the next; never sound like a machine.
- If she asks to be reminded of something, create an event. "At 6" means 18:00 if 06:00 has already passed.
- Mark an event important only if missing it could affect her health or safety (doctor, medication, tests, therapy). Meals, walks, calls and hobbies are not important.
- If you are unsure what she means, ask one simple question back (intent "unclear").
Return only JSON:
{"intent":"query_done|query_schedule|mark_done|add_event|medical|unclear|chat","reply":"...","markDoneId":null,"event":null,"aboutMedication":false,"checked":"short phrase (max 8 words, in ${lang}) naming the data you used"}
where event, when needed, is {"title":"short title in ${lang}","time":"HH:MM","day":"today|tomorrow","place":null,"important":false,"importantWhy":"2-4 words in ${lang}, or null"}.`;
}
function rulesCarmen(text){
  const s = text.toLowerCase(), R = T[S.lang].rules;
  const pend = carmenEvents().filter(e => e.day===0 && e.status==="pending").sort((a,b)=>a.time-b.time);
  const meds = carmenEvents().filter(e => e.day===0 && e.kind==="med").sort((a,b)=>a.time-b.time);
  if (/dos pastillas|two pills|double|dosis|dose|mareo|dizzy|me duele|hurts|pain|dolor/.test(s)) return {intent:"medical", reply:R.medical, aboutMedication:true};
  const tm = s.match(/(?:at|a las|a la)\s*(\d{1,2})(?:[:.h](\d{2}))?\s*(am|pm)?/);
  if (/remind|recu[eé]rda/.test(s) && tm){
    let h = +tm[1], m = +(tm[2]||0); if (tm[3]==="pm" && h<12) h+=12; if (h*60+m <= S.now && h<12) h+=12;
    const what = s.replace(/.*?(remind me to|remind me about|remind me|recuérdame|recuerdame)\s*/,"").replace(/\s*(at|a las|a la)\s*\d.*$/,"").trim() || "reminder";
    const imp = rulesImp(what);
    return {intent:"add_event", event:{title:cap(what), time:fmt(h*60+m), day:"today", important:imp.important, why:imp.why}, reply:tr(S.lang,"rules.added",{t:fmt(h*60+m), x:what})};
  }
  if (/\?|did i|have i|me he|he tomado|tom[eé]/.test(s) && /pill|pastill|medic|tom/.test(s) && !/^ya me las he tomado|^i've taken|^i have taken/.test(s)){
    const past = meds.filter(e => e.time <= S.now + 30);
    const ev = past[past.length-1] || meds[0];
    const x = title(ev);
    const reply = ev.status==="done" ? tr(S.lang,"rules.doneYes",{x, t:fmt(ev.doneAt)}) : ev.time > S.now ? tr(S.lang,"rules.doneNotYet",{x, t:fmt(ev.time)}) : tr(S.lang,"rules.doneNo",{x, t:fmt(ev.time)});
    return {intent:"query_done", reply, aboutMedication:true};
  }
  if (/taken|done|finished|hecho|tomado|terminado|ya est/.test(s)){
    const ev = pend.find(e => e.time <= S.now) || pend[0];
    return ev ? {intent:"mark_done", markDoneId:ev.id, reply:null} : {intent:"mark_done", reply:R.nothingToMark};
  }
  if (/today|what do i|qu[eé] tengo|hoy|plan/.test(s)){
    const up = pend.filter(e => e.time >= S.now - 30);
    return up.length ? {intent:"query_schedule", reply:tr(S.lang,"rules.sched",{list: up.map(e=>`${title(e)} (${fmt(e.time)})`).join(", ")})} : {intent:"query_schedule", reply:R.schedNone};
  }
  return {intent:"unclear", reply:R.unclear};
}
function applyCarmen(res, by){
  const ok = ["query_done","query_schedule","mark_done","add_event","medical","unclear","chat"];
  const intent = ok.includes(res?.intent) ? res.intent : "unclear";
  let reply = String(res?.reply || (intent === "mark_done" ? "" : T[S.lang].rules.unclear));
  let intentExtra = null;
  S.askSup = null;
  if (intent === "mark_done"){
    const id = carmenEvents().find(e => e.id === res.markDoneId && e.status === "pending") ? res.markDoneId
             : (carmenEvents().filter(e=>e.day===0&&e.status==="pending"&&e.time<=S.now).sort((a,b)=>a.time-b.time)[0]||{}).id;
    const ev = id ? markDone(id) : null;
    if (ev && (by === "rules" || !reply)) reply = pick(doneReply(ev));
    else if (ev && ev.supervised && S.privacy.shareDone && !/laura/i.test(reply)) reply += " " + t("tellLaura");
    else if (!ev && !reply) reply = T[S.lang].rules.nothingToMark;
  }
  if (intent === "add_event" && res.event && /^\d{1,2}:\d{2}$/.test(res.event.time||"")){
    const [h,m] = res.event.time.split(":").map(Number);
    const day = res.event.day === "tomorrow" ? 1 : 0;
    const ttl = String(res.event.title||"Reminder").slice(0,40);
    // Importance: the AI's call when it answered, otherwise the demo rules.
    let imp = rulesImp(ttl);
    if (typeof res.event.important === "boolean"){
      const w = res.event.importantWhy || res.event.why;
      imp = {important: res.event.important, why: w ? (typeof w === "string" ? {en:w, es:w} : w) : imp.why || both("whyMed")};
    }
    const ev = {id:"e"+(S.nextId++), day, time:h*60+m, kind: imp.important ? "appt" : "note", title:{en:ttl, es:ttl}, important:imp.important, supervised:false, status:"pending", doneAt:null, stage:0, by:"carmen", added:true, owner:"carmen", remindBefore:PRE_DEFAULT, place:String(res.event.place||"").slice(0,40)};
    S.events.push(ev);
    if (S.privacy.shareCalendar) S.feed.push({time:S.now, type:"info", who:"carmen", text: both("feedCarmenAdded",{x:ttl, t:fmt(ev.time)})});
    if (imp.important){
      // Carmen added it herself, so she decides whether Laura may follow it.
      S.askSup = {id: ev.id, why: imp.why};
      intentExtra = `${t("intents.add_event")} · ${t("intents.suggest_sup")} (${pick(imp.why)})`;
      reply = reply + " " + t("askSup", {why: pick(imp.why)});
    }
  }
  if (intent === "query_done" && res.aboutMedication !== false) S.doubts++;
  S.reply = {text:{en:reply, es:reply}};
  S.lastAI = {from:"Carmen", heard:S.heard, intent, intentExtra, checked: res.checked ? {en:res.checked, es:res.checked} : both("chkLog"), reply:{en:reply, es:reply}, by};
  render(); speak(reply);
}
async function carmenSay(text){
  text = text.trim(); if (!text) return;
  S.heard = text; S.reply = {thinking:true}; S.askSup = null; render();
  if (aiOn()){
    try { return applyCarmen(await AI.askJSON(carmenPrompt(text)), "claude"); }
    catch(e){ AI.onError(e); }
  }
  applyCarmen(rulesCarmen(text), "rules");
}
function answerSup(yes){
  const a = S.askSup; if (!a) return;
  const ev = S.events.find(e => e.id === a.id);
  S.askSup = null;
  if (ev && yes){
    ev.supervised = true;
    S.feed.push({time:S.now, type:"info", who:"carmen", text: both("feedSupYes",{x:l=>titleL(ev,l), t:fmt(ev.time)})});
  }
  S.reply = {text: both(yes ? "supYesReply" : "supNoReply")};
  render(); speak(t(yes ? "supYesReply" : "supNoReply"));
}

// ---------- Laura: fill in the boxes (AI or rules), then create ----------
function lauraPrompt(text){
  const lang = S.lang === "es" ? "Spanish (Spain)" : "English";
  return `Turn a daughter's message into one calendar entry for her mother Carmen (74, mild cognitive impairment).
Today is Thursday 1 October 2026, time ${fmt(S.now)}. Weekdays from today: 0 Thursday, 1 Friday, 2 Saturday, 3 Sunday, 4 Monday, 5 Tuesday, 6 Wednesday.
Message: "${text.replace(/"/g,"'")}"
Return only JSON, either
{"ok":true,"title":"short title, max 4 words, in ${lang}","dayOffset":0,"time":"HH:MM","place":null,"remindBeforeMin":15,"important":false,"importantWhy":null}
(place: where it happens, if the message says so, else null; remindBeforeMin defaults to 15 unless the message says otherwise;
important = true only if missing it could affect her health or safety: doctor, dentist, medication, tests, therapy. Then importantWhy is 2-4 words in ${lang}, e.g. "medical appointment")
or {"ok":false,"why":"one short sentence in ${lang} saying what is missing"}.`;
}
function rulesLaura(text){
  const s = text.toLowerCase();
  const tm = s.match(/(?:at|a las|a la|@)\s*(\d{1,2})(?:[:.h](\d{2}))?\s*(am|pm)?/) || s.match(/\b(\d{1,2})[:.](\d{2})\b/);
  if (!tm) return {ok:false};
  let h = +tm[1]; const m = +(tm[2]||0); if (tm[3]==="pm" && h<12) h+=12;
  let day = 0;
  const dn = {friday:1,viernes:1,saturday:2,"sábado":2,sabado:2,sunday:3,domingo:3,monday:4,lunes:4,tuesday:5,martes:5,wednesday:6,"miércoles":6,miercoles:6};
  if (/tomorrow|mañana|manana/.test(s)) day = 1; else for (const [k,v] of Object.entries(dn)) if (s.includes(k)) day = v;
  if (day === 0 && h*60+m <= S.now) day = 1;
  let rb = PRE_DEFAULT; const rh = s.match(/(\d+|an|una)\s*(hour|hora)/); const rm = s.match(/(\d+)\s*min/);
  if (rh) rb = (/\d/.test(rh[1]) ? +rh[1] : 1)*60; else if (rm) rb = +rm[1];
  const pm = text.match(/\b(?:at the|in the|in|en (?:la|el)|en)\s+([^\d,][^,]*?)\s*(?=,|$)/i);
  const place = pm && !/^(una|an|a)\s/i.test(pm[1]) ? cap(pm[1].trim()).slice(0,40) : null;
  const ttl = cap(text.split(/,|\s(?:tomorrow|mañana|at|a las|on|el)\s/i)[0].trim().split(/\s+/).slice(0,4).join(" "));
  const imp = rulesImp(s);
  return {ok:true, title:ttl, dayOffset:day, time:fmt(h*60+m), place, remindBeforeMin:rb, important:imp.important, why:imp.why};
}
const nearestBefore = v => BEFORE_OPTS.reduce((a,b) => Math.abs(b - v) < Math.abs(a - v) ? b : a, PRE_DEFAULT);
function applyFill(res, by, text){
  if (!res?.ok || !/^\d{1,2}:\d{2}$/.test(res.time||"")){
    const why = res?.why || t("lauraBad");
    S.lauraResult = {text:{en:why, es:why}};
    S.lastAI = {from:"Laura", heard:text, intent:"unclear", checked:both("chkLog"), reply:{en:why,es:why}, by};
    return render();
  }
  const f = S.form;
  f.title = String(res.title||"").slice(0,40);
  f.day = Math.max(0, Math.min(6, Number(res.dayOffset)||0));
  f.time = res.time.padStart(5,"0");
  f.place = String(res.place||"").slice(0,40);
  f.before = nearestBefore(Number(res.remindBeforeMin)||PRE_DEFAULT);
  f.important = !!res.important;
  const w = res.importantWhy || res.why;
  f.why = f.important ? (w ? (typeof w === "string" ? {en:w, es:w} : w) : both("whyMed")) : null;
  f.sup = f.important; f.supTouched = false; f.by = by;
  S.lauraResult = {text: both("filled")};
  S.lastAI = {from:"Laura", heard:text, intent:"add_family",
    intentExtra:`${t("intents.add_family")} · ${dayL(f.day,S.lang)} ${f.time}${f.place ? " · "+f.place : ""} · −${f.before} min${f.important ? " · "+t("intents.suggest_sup")+" ("+pick(f.why)+")" : ""}`,
    checked:both("chkLog"), reply:S.lauraResult.text, by};
  syncForm(); render();
  for (const id of ["fTitle","fDay","fTime","fPlace","fBefore"]){ const el = $("#"+id); el.classList.remove("filled"); void el.offsetWidth; el.classList.add("filled"); }
}
async function lauraFill(text){
  text = text.trim(); if (!text) return;
  S.lauraResult = {thinking:true}; render();
  if (aiOn()){
    try { return applyFill(await AI.askJSON(lauraPrompt(text)), "claude", text); }
    catch(e){ AI.onError(e); }
  }
  applyFill(rulesLaura(text), "rules", text);
}
function lauraCreate(){
  const f = S.form;
  if (!f.title.trim() || !/^\d{1,2}:\d{2}$/.test(f.time)){ S.lauraResult = {text: both("fMissing")}; return render(); }
  if (f.owner === "carmen" && !S.privacy.familyAdd){ S.lauraResult = {text: both("familyOff")}; return render(); }
  const [h,m] = f.time.split(":").map(Number);
  const ttl = f.title.trim().slice(0,40), place = f.place.trim().slice(0,40);
  const ev = {id:"e"+(S.nextId++), day:f.day, time:h*60+m, kind: f.important ? "appt" : "note", title:{en:ttl, es:ttl},
    important:f.important, supervised: f.sup, status:"pending", doneAt:null, stage:0,
    by:"laura", owner:f.owner, remindBefore:f.before, place};
  const vars = {x: ttl + (place ? " ("+place+")" : ""), d:l=>dayL(ev.day,l), t:fmt(ev.time)};
  if (f.owner === "antonio"){
    S.others.antonio.events.push(ev);
    S.others.antonio.feed.push({time:S.now, type:"info", who:"antonio", text: both("feedAddedA", vars)});
  } else {
    S.events.push(ev);
    S.feed.push({time:S.now, type:"info", who:"carmen", text: both("feedAdded", vars)});
    S.notice = both("lauraAdded", vars); S.reply = null; S.askSup = null;
  }
  S.lauraResult = {text: both("lauraOk", vars)};
  S.lastAI = {from:"Laura", heard: S.lastAI?.from === "Laura" ? S.lastAI.heard : null, intent:"add_family",
    intentExtra:`${t("intents.add_family")} · ${dayL(ev.day,S.lang)} ${fmt(ev.time)} · −${ev.remindBefore} min${ev.supervised ? " · "+t("supTag") : ""}`,
    checked:both("chkLog"), reply:S.lauraResult.text, by: f.by};
  S.form = blankForm(f.owner); syncForm();
  render();
  if (f.owner === "carmen") speak(pick(S.notice));
}

// ---------- AI: nurse summary ----------
function nurseStats(){
  const e2 = S.events.find(e => e.id === "e2");
  const todayCounted = e2.status === "done" || S.now >= e2.time + 60;
  const todayOnTime = e2.status === "done" && e2.doneAt - e2.time <= 30;
  const a = HISTORY.filter(h => h.m !== null && h.m - 540 <= 30).length + (todayOnTime ? 1 : 0);
  const b = HISTORY.length + (todayCounted ? 1 : 0);
  const missed = HISTORY.filter(h => h.m === null), late = HISTORY.filter(h => h.m !== null && h.m - 540 > 30);
  return {a, b, missed, late, doubts: PRIOR_DOUBTS + S.doubts, todayMissed: e2.stage >= 3 && e2.status !== "done" ? e2 : null};
}
function nurseLinesRules(lang, who="carmen"){
  if (who !== "carmen") return S.others.nurse[who][lang];
  const st = nurseStats();
  const c = tr(lang,"nL1c",{m: st.missed.map(h => h[lang]).join(", "), l: st.late.map(h => h[lang]).join(", ")});
  return [tr(lang,"nL1",{a:st.a, b:st.b, c}), tr(lang,"nL2"), tr(lang,"nL3",{n:st.doubts}) + (st.todayMissed ? tr(lang,"nL3t",{x:titleL(st.todayMissed,lang)}) : "")];
}
async function nurseAI(){
  if (!aiOn()) return;
  const who = S.pilarWho, p = PEOPLE[who];
  S.nurse[who] = {thinking:true}; render();
  const lang = S.lang === "es" ? "Spanish (Spain)" : "English";
  try {
    const text = await AI.askText(`Write the weekly note a community nurse reads between two home visits, about ${p.name} (${p.age}, mild cognitive impairment), based only on these facts from their Dalia calendar:
${nurseLinesRules("en", who).join("\n")}
Exactly 3 lines, each under 14 words, plain observations, most useful first. No diagnosis, no advice, no medicine names, no greeting. Language: ${lang}. Output only the 3 lines.`);
    const lines = text.split("\n").map(l => l.replace(/^[\s\-•*\d.]+/,"").trim()).filter(Boolean).slice(0,3);
    S.nurse[who] = {lines:{en:lines, es:lines}};
    S.lastAI = {from:"Pilar", heard:null, intent:null, checked:both("chkLog"), reply:{en:lines.join(" / "), es:lines.join(" / ")}, by:"claude"};
  } catch(e){ AI.onError(e); S.nurse[who] = null; }
  render();
}

// ---------- icons ----------
function icon(kind){
  const p = {
    med:'<rect x="6" y="17" width="36" height="14" rx="7" transform="rotate(-35 24 24)"/><path d="M19.5 17.5l9 13"/>',
    meal:'<path d="M7 24h34a17 12 0 0 1-34 0z"/><path d="M18 8c-2 3 2 5 0 9M25 8c-2 3 2 5 0 9M32 8c-2 3 2 5 0 9"/>',
    walk:'<circle cx="34" cy="13" r="5"/><path d="M5 40c8-10 15-14 22-8s12 2 16-2"/><path d="M14 40v-9M11 34l3-3 3 3"/>',
    call:'<rect x="8" y="10" width="24" height="28" rx="4"/><path d="M32 20l9-5v18l-9-5"/>',
    appt:'<rect x="7" y="10" width="34" height="30" rx="4"/><path d="M7 18h34M16 6v8M32 6v8"/><circle cx="24" cy="29" r="4"/>',
    note:'<path d="M24 6v4M14 38h20M17 34V22a7 7 0 0 1 14 0v12"/><path d="M11 34h26"/>',
    rest:'<path d="M34 30A14 14 0 1 1 22 10a11 11 0 0 0 12 20z"/>'
  }[kind] || "";
  return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}
// Small interface icons (24px grid).
function uiIcon(name){
  const p = {
    check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    back:'<path d="M15 5l-7 7 7 7"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    alert:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.5"/>',
    sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    moon:'<path d="M19 15A8 8 0 1 1 10 4.5a6.5 6.5 0 0 0 9 10.5z"/>',
    cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    plus:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    nurse:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>',
    eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>'
  }[name] || "";
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

// ---------- render ----------
function renderStatus(){
  const m = AI.mode;
  $("#aiStatus").classList.toggle("on", aiOn());
  $("#aiStatusTxt").textContent = t(m === "artifact" ? "aiArtifact" : m === "off" ? "aiOff" : "aiChecking");
}
function statusPill(ev){
  if (ev.status === "done") return `<span class="pill done">✓ ${esc(t("stDone",{t:fmt(ev.doneAt)}))}</span>`;
  if (ev.status === "skipped") return `<span class="pill">${esc(t("stSkip"))}</span>`;
  if (ev.day === 0 && ev.stage >= 3) return `<span class="pill miss">${esc(t("stMiss"))}</span>`;
  if (ev.day === 0 && ev.stage >= 1) return `<span class="pill wait">${esc(t("stWait"))}</span>`;
  return "";
}
const PRV_ICON = {shareCalendar:"eye", shareDone:"check", shareMissed:"bell", familyAdd:"plus", nurseSummary:"nurse"};
let lastPct = 0;
function renderTablet(){
  const body = $("#tabletBody");
  document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.tab === S.tab));
  if (S.tab === "privacy"){
    // Switches are updated in place so the knob slides instead of jumping.
    if (body.dataset.view === "privacy-" + S.lang){
      body.querySelectorAll("[data-prv]").forEach(b => b.setAttribute("aria-checked", S.privacy[b.dataset.prv]));
      return;
    }
    body.dataset.view = "privacy-" + S.lang;
    const sw = (k, a, b, i) => `<button type="button" class="sw enter" style="animation-delay:${i*50}ms" role="switch" aria-checked="${S.privacy[k]}" data-prv="${k}"><span class="k">${uiIcon(PRV_ICON[k])}</span><span>${esc(t(a))}<small>${esc(t(b))}</small></span><span class="knob"></span></button>`;
    body.innerHTML = `<div class="t-greet enter">${esc(t("tabPrivacy"))}</div><div class="note enter" style="font-size:1.05rem">${esc(t("prvIntro"))}</div>
      <div class="prv">${sw("shareCalendar","prv0","prv0s",0)}${sw("shareDone","prv1","prv1s",1)}${sw("shareMissed","prv2","prv2s",2)}${sw("familyAdd","prv3","prv3s",3)}${sw("nurseSummary","prv4","prv4s",4)}</div>`;
    return;
  }
  const fromOtherTab = body.dataset.view !== "today";
  body.dataset.view = "today";
  const today = carmenEvents().filter(e => e.day === 0).sort((a,b)=>a.time-b.time);
  const active = today.filter(e => e.status === "pending" && e.stage >= 1)[0];
  const next = today.find(e => e.status === "pending" && e.time > S.now);
  const g = S.now < 720 ? "m" : S.now < 1200 ? "a" : "e";
  const where = ev => ev.place ? `<div class="kicker">${esc(t("atPlace",{p:ev.place}))}</div>` : "";
  const nDone = today.filter(e => e.status === "done").length;
  const pct = today.length ? Math.round(nDone / today.length * 100) : 0;
  let card;
  if (active){
    card = `<div class="card s${Math.min(active.stage, 3)}${anim("card"+active.id+"."+active.stage)}"><div class="ic">${icon(active.kind)}</div><div><div class="kicker">${esc(active.stage >= 2 ? t("again") + " · " + fmt(active.time) : t("now"))}</div><h2>${esc(reminderText(active, S.lang))}</h2>${where(active)}</div>
      <div class="acts"><button type="button" class="big done" data-done="${active.id}">${uiIcon("check")} ${esc(t("done"))}</button></div></div>`;
  } else if (next){
    card = `<div class="card${anim("card-n"+next.id)}"><div class="ic">${icon(next.kind)}</div><div><div class="kicker">${esc(t("nextAt",{t:fmt(next.time)}))}</div><h2>${esc(cap(title(next)))}</h2>${where(next)}</div></div>`;
  } else {
    card = `<div class="card${anim("card-rest")}"><div class="ic">${icon("rest")}</div><div><div class="kicker">${esc(fmt(S.now))}</div><h2>${esc(t("nothing"))}</h2><div class="kicker">${esc(t("nothingSub"))}</div></div></div>`;
  }
  const bub = (text, cls="") => `<div class="bubble ${cls}${anim("b|"+cls+"|"+text)}"><span class="av"><img src="assets/icon.svg" alt=""></span><div><span class="b-who">Dalia</span><span class="txt">${esc(text)}</span></div><span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div>`;
  let bubble = "";
  const said = () => S.heard ? `<div class="said${anim("said|"+S.heard)}">${esc(t("heard"))} “${esc(S.heard)}”</div>` : "";
  if (S.reply?.thinking) bubble = said() + bub(t("thinking"), "thinking");
  else if (S.reply) bubble = said() + bub(pick(S.reply.text));
  else if (S.notice) bubble = bub(pick(S.notice));
  if (S.askSup) bubble += `<div class="ask${anim("ask"+S.askSup.id)}"><button type="button" class="big done" data-sup="yes">${esc(t("supYes"))}</button><button type="button" class="big" data-sup="no">${esc(t("supNo"))}</button></div>`;
  const tags = e => (e.by === "laura" ? `<span class="by">· ${esc(t("byLaura"))}</span>` : e.added ? `<span class="by">· ${esc(t("byCarmen"))}</span>` : "")
                  + (e.supervised ? `<span class="by sup">· ${esc(t("supTag"))}</span>` : "");
  const row = (e, i) => {
    const isDone = e.status === "done";
    const past = e.status !== "pending" || e.time < S.now;
    const isNow = active && e.id === active.id;
    const nx = next && e.id === next.id && !active ? `<span class="pill next">${esc(t("stNext"))}</span>` : statusPill(e);
    const a = anim("row"+e.id+(isDone?"d":""));
    return `<li class="${past ? "past" : ""}${isDone ? " isdone" : ""}${isNow ? " now" : ""}${a}"${a ? ` style="animation-delay:${Math.min(i,8)*45}ms"` : ""}><span class="tm">${fmt(e.time)}</span><span class="k">${isDone ? uiIcon("check") : icon(e.kind)}</span><span class="nm">${esc(cap(title(e)))}${e.place ? ` <span class="pl">· ${esc(e.place)}</span>` : ""}${tags(e)}</span>${nx}</li>`;
  };
  const later = carmenEvents().filter(e => e.day > 0).sort((a,b)=>a.day-b.day||a.time-b.time);
  const laterRow = (e, i) => { const a = anim("row"+e.id); return `<li class="${a}"${a ? ` style="animation-delay:${Math.min(i,8)*45}ms"` : ""}><span class="tm">${fmt(e.time)}</span><span class="k">${icon(e.kind)}</span><span class="nm">${esc(cap(title(e)))} · ${esc(dayL(e.day,S.lang))}${e.place ? ` <span class="pl">· ${esc(e.place)}</span>` : ""}${tags(e)}</span><span></span></li>`; };
  body.innerHTML = `<div class="t-head${fromOtherTab ? " enter" : ""}"><div class="t-hello"><span class="t-sun ${g}">${uiIcon(g === "e" ? "moon" : "sun")}</span><div><div class="t-greet">${esc(t("good."+g))}</div><div class="t-date">${esc(t("dateToday"))}</div></div></div><div class="t-clock${anim("clock"+S.now,"tick")}">${fmt(S.now)}</div></div>
    <div class="progress"><div class="p-txt"><span>${esc(t("progressTitle"))}</span><b>${esc(t("progress",{a:nDone,b:today.length}))}</b></div><div class="bar"><i style="width:${lastPct}%"></i></div></div>
    ${card}${bubble}
    <div class="sub">${esc(t("today"))}</div><ul class="list">${today.map(row).join("")}</ul>
    ${later.length ? `<div class="sub">${esc(t("upcoming"))}</div><ul class="list">${later.map(laterRow).join("")}</ul>` : ""}`;
  // The bar grows from where it was, so finishing something feels like progress.
  const bar = body.querySelector(".progress .bar i");
  requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = pct + "%"; }));
  lastPct = pct;
}

// Full-screen alarm on Carmen's tablet: Done, or Back to the normal view (the reminder card stays there).
let alarmKey = null, alarmTimer = null, alarmOutTimer = null;
function renderAlarm(){
  const el = $("#alarm"), a = S.alarm;
  const ev = a && S.events.find(e => e.id === a.id);
  if (!ev || (!a.ok && ev.status === "done")){
    if (alarmKey !== null){
      alarmKey = null;
      el.classList.remove("in"); el.classList.add("out");
      clearTimeout(alarmOutTimer);
      alarmOutTimer = setTimeout(() => { el.hidden = true; el.classList.remove("out"); }, 450);
    }
    return;
  }
  const key = [a.id, ev.stage, a.ok ? 1 : 0, S.lang].join("|");
  if (key === alarmKey){ const c = el.querySelector(".a-top b"); if (c) c.textContent = fmt(S.now); return; }
  alarmKey = key;
  clearTimeout(alarmOutTimer);
  el.hidden = false;
  el.className = "alarm s" + Math.min(ev.stage, 3) + (a.ok ? " ok" : "");
  void el.offsetWidth; el.classList.add("in");
  if (a.ok){
    el.innerHTML = `<div class="a-in"><div class="a-check"><svg viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 25l8 8 16-17"/></svg></div>
      <h2 class="a-title">${esc(pick(a.text))}</h2><div class="a-sub">${esc(t("doneSub",{t:fmt(ev.doneAt)}))}</div></div>`;
    return;
  }
  el.innerHTML = `<div class="a-in">
    <div class="a-top"><span>${esc(ev.stage >= 2 ? t("again") : t("now"))}</span><b>${fmt(S.now)}</b></div>
    <div class="a-icon"><span class="r"></span><span class="r"></span><span class="r"></span><div class="a-ic">${icon(ev.kind)}</div></div>
    <h2 class="a-title">${esc(reminderText(ev, S.lang))}</h2>
    ${ev.place ? `<div class="a-place">${esc(t("atPlace",{p:ev.place}))}</div>` : ""}
    <div class="a-acts"><button type="button" class="big a-done" data-adone="${ev.id}">${uiIcon("check")} ${esc(t("done"))}</button>
      <button type="button" class="big a-back" data-aback="1">${uiIcon("back")} ${esc(t("back"))}</button></div></div>`;
  el.querySelector(".a-done").focus({preventScroll:true});
}
function alarmDone(id){
  const ev = markDone(id, true); if (!ev) return;
  const r = doneReply(ev);
  S.reply = null; S.heard = null; S.notice = r; S.alarm = {id, ok:true, text:r};
  render(); speak(pick(r));
  clearTimeout(alarmTimer);
  alarmTimer = setTimeout(() => { if (S.alarm?.ok){ S.alarm = null; render(); } }, 3400);
}

function whoTabs(list, cur, attr){
  if (!S.premium) return `<div class="who-tabs"><span class="who on">${esc(PEOPLE.carmen.name)}</span><button type="button" class="who lock" data-premium="1" title="${esc(t("planHint"))}">${esc(t("premiumLock"))}</button></div>`;
  return `<div class="who-tabs" role="tablist">${list.map(k => `<button type="button" role="tab" class="who ${k === cur ? "on" : ""}" aria-selected="${k === cur}" data-${attr}="${k}">${esc(PEOPLE[k].name)}</button>`).join("")}</div>`;
}
function lauraVisible(ev){
  // What Laura may see of Carmen's calendar: everything if Carmen shares it; otherwise only what Laura added
  // and what Carmen lets her follow.
  return S.privacy.shareCalendar || ev.by === "laura" || (ev.supervised && S.privacy.shareDone);
}
const FEED_ICON = {ok:"check", alert:"alert", info:"info"};
function renderPhone(){
  const who = S.lauraWho;
  $("#lauraWho").innerHTML = whoTabs(["carmen","antonio"], who, "lw");
  $("#phoneTitle").textContent = t(who === "antonio" ? "phoneTitleA" : "phoneTitle");
  const open = who === "carmen" ? carmenEvents().filter(e => e.day === 0 && e.stage >= 3 && e.status !== "done" && e.supervised && S.privacy.shareMissed).length : 0;
  $("#pStatus").className = "p-status" + (open ? " warn" : "");
  $("#pStatus").innerHTML = `<i></i><span>${esc(open ? t(open === 1 ? "attention" : "attentionN", {n:open}) : t("allGood"))}</span>`;
  document.querySelectorAll(".p-tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.ptab === S.ptab));
  $("#feed").hidden = S.ptab !== "feed"; $("#pCal").hidden = S.ptab !== "cal"; $("#lauraForm").hidden = S.ptab !== "add";

  const feed = (who === "antonio" ? S.others.antonio.feed : S.feed.filter(f => f.who === "carmen")).slice().sort((a,b)=>a.time-b.time);
  $("#feed").innerHTML = feed.reverse().map(f => `<li class="${f.type}${anim("f|"+who+"|"+f.time+"|"+(f.text.en||""))}"><span class="fi">${uiIcon(FEED_ICON[f.type])}</span><div><span class="ft">${fmt(f.time)}</span><span>${esc(pick(f.text))}</span></div></li>`).join("");

  // calendar tab
  const evs = (who === "antonio" ? S.others.antonio.events : carmenEvents().filter(lauraVisible)).slice().sort((a,b)=>a.day-b.day||a.time-b.time);
  const pill = ev => {
    const canSee = who !== "carmen" || (ev.supervised && S.privacy.shareDone);
    if (!canSee) return "";
    if (ev.status === "done") return `<span class="pill done">✓ ${esc(t("stDone",{t:fmt(ev.doneAt)}))}</span>`;
    if (ev.day === 0 && ev.stage >= 3 && (who !== "carmen" || S.privacy.shareMissed)) return `<span class="pill miss">${esc(t("stMiss"))}</span>`;
    return "";
  };
  const li = ev => `<li><span class="tm">${fmt(ev.time)}</span><span class="nm">${esc(cap(title(ev)))}${ev.day ? ` · ${esc(dayL(ev.day,S.lang))}` : ""}${ev.place ? ` <span class="pl">· ${esc(ev.place)}</span>` : ""}${ev.by === "laura" ? `<span class="by">· ${esc(t("byLaura"))}</span>` : ""}${ev.supervised ? `<span class="by sup">· ${esc(t("supTag"))}</span>` : ""}</span>${pill(ev)}</li>`;
  const list = arr => arr.length ? `<ul class="list sm">${arr.map(li).join("")}</ul>` : `<div class="note">${esc(t("calEmpty"))}</div>`;
  $("#pCal").innerHTML = `${who === "carmen" && !S.privacy.shareCalendar ? `<div class="result">${esc(t("calNotShared"))}</div>` : ""}
    <div class="sub">${esc(t("today"))}</div>${list(evs.filter(e => e.day === 0))}
    ${evs.some(e => e.day > 0) ? `<div class="sub">${esc(t("upcoming"))}</div>${list(evs.filter(e => e.day > 0))}` : ""}`;

  // add form (values live in S.form; syncForm writes them into the inputs)
  const sug = S.form.important && S.form.why;
  $("#fSuggest").innerHTML = sug ? `<div class="suggest">✨ ${esc(t("suggest",{why:pick(S.form.why)}))}</div>` : "";
  const r = $("#lauraResult");
  const off = S.form.owner === "carmen" && !S.privacy.familyAdd;
  if (off) r.innerHTML = `<div class="result">${esc(t("familyOff"))}</div>`;
  else if (S.lauraResult?.thinking) r.innerHTML = `<div class="result">${esc(t("thinking"))}</div>`;
  else if (S.lauraResult) r.innerHTML = `<div class="result">${esc(pick(S.lauraResult.text))}</div>`;
  else r.innerHTML = "";
  $("#createBtn").disabled = off;
}
function buildSelects(){
  const opt = (v, label) => `<option value="${v}">${esc(label)}</option>`;
  $("#fDay").innerHTML = [0,1,2,3,4,5,6].map(d => opt(d, cap(dayL(d, S.lang)))).join("");
  $("#fBefore").innerHTML = BEFORE_OPTS.map(n => opt(n, n >= 60 ? t("hourOpt") : t("minOpt",{n}))).join("");
  // Laura adds to the calendars of the people she cares for, never to her own: Dalia is not her diary.
  const owners = ["carmen"].concat(S.premium ? ["antonio"] : []);
  if (!owners.includes(S.form.owner)) S.form.owner = "carmen";
  $("#fFor").innerHTML = owners.map(k => opt(k, t(k === "carmen" ? "forCarmen" : "forAntonio"))).join("");
  syncForm();
}
function syncForm(){
  const f = S.form;
  $("#fTitle").value = f.title; $("#fDay").value = f.day; $("#fTime").value = f.time; $("#fPlace").value = f.place;
  $("#fBefore").value = f.before; $("#fFor").value = f.owner; $("#fSup").checked = f.sup;
}
function renderNurse(){
  const el = $("#nurse"), who = S.pilarWho, p = PEOPLE[who];
  const head = `<div class="n-head">${whoTabs(["carmen","antonio","mercedes"], who, "pw")}<h3>${esc(t("nurseTitle",{n:p.name}))}</h3></div>`;
  if (who === "carmen" && !S.privacy.nurseSummary){ el.innerHTML = `${head}<div class="n-body"><div class="note enter">${esc(t("nurseOff"))}</div></div>`; return; }
  let lines, src;
  const n = S.nurse[who];
  if (n?.thinking){ lines = [t("thinking")]; src = ""; }
  else if (n?.lines){ lines = pick(n.lines); src = t("srcAI"); }
  else { lines = nurseLinesRules(S.lang, who); src = t("srcLog"); }
  const confirmed = S.nurseConfirmed[who] != null;
  el.innerHTML = `${head}<div class="n-body"><ul class="n-lines">${lines.map((l,i) => { const a = anim("n|"+who+"|"+l); return `<li class="${a}"${a ? ` style="animation-delay:${i*60}ms"` : ""}>${esc(l)}</li>`; }).join("")}</ul>
    <div class="src">${esc(src)}</div>
    <div class="row-btn">${aiOn() ? `<button type="button" class="btn" id="nurseAIbtn">✨ ${esc(t("nurseAI"))}</button>` : ""}
    <button type="button" class="btn ${confirmed ? "ok" + anim("nok|"+who+S.nurseConfirmed[who], "pop") : "pri"}" id="nurseOk" ${confirmed ? "disabled" : ""}>${esc(confirmed ? "✓ " + t("nurseConfirmed",{t:fmt(S.nurseConfirmed[who])}) : t("nurseConfirm"))}</button></div></div>`;
}
let aiShown = null;
function renderAI(){
  const a = S.lastAI, el = $("#aiPanel");
  if (aiShown && aiShown.a === a && aiShown.lang === S.lang) return;   // nothing new: keep it still
  aiShown = {a, lang:S.lang};
  if (!a){ el.innerHTML = `<div class="note">${esc(t("aiEmpty"))}</div>`; return; }
  const byTag = a.by === "claude" ? `<span class="tag">${esc(t("byClaude"))}</span>` : `<span class="tag rule">${esc(t(a.by === "rule" ? "byRule" : a.by === "manual" ? "byManual" : "byRules"))}</span>`;
  const rows = [[t("aiFrom"), a.from]];
  if (a.heard) rows.push([t("aiHeard"), "“"+a.heard+"”"]);
  if (a.intent) rows.push([t("aiIntent"), a.intentExtra || t("intents."+a.intent)]);
  rows.push([t("aiChecked"), pick(a.checked)], [t("aiReply"), pick(a.reply)]);
  el.innerHTML = `<dl class="ai">${rows.map(([k,v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}<dt>${esc(t("aiBy"))}</dt><dd>${byTag}</dd></dl>`;
}
function renderLearned(){
  const e2 = S.events.find(e => e.id === "e2");
  const days = HISTORY.map(h => h.m).concat([e2.status === "done" ? e2.doneAt : null]);
  const conf = HISTORY.map(h => h.m).filter(m => m !== null).sort((a,b)=>a-b);
  const median = conf[Math.floor(conf.length/2)];
  const cells = days.map((m, i) => {
    const today = i === days.length - 1;
    const cls = m === null ? (today ? "na" : "miss") : m - 540 > 30 ? "late" : "";
    return `<span class="${cls}${today && m !== null ? anim("learn-today"+m, "pop") : ""}" title="${esc(T[S.lang].short[i])}">${esc(T[S.lang].short[i])}<br>${m === null ? (today ? "·" : "✗") : fmt(m)}</span>`;
  }).join("");
  $("#learned").innerHTML = `<h3><span class="hi">${uiIcon("spark")}</span><span>${esc(t("learnedTitle"))}</span></h3><div class="learned"><div class="bar">${cells}</div>
    <div>${esc(t("learnedLine",{t:fmt(median)}))}</div>
    ${S.personal ? `<div class="note${anim("learn-on","enter")}">${esc(t("learnedOn"))}</div><div class="row-btn"><button type="button" class="btn" id="learnUndo">${esc(t("learnedUndo"))}</button></div>`
                 : `<div class="note">${esc(t("learnedAsk"))}</div><div class="row-btn"><button type="button" class="btn pri" id="learnApply">${esc(t("learnedApply"))}</button></div>`}</div>`;
  if (!S.personal) seen.delete("learn-on");
}
function renderLadder(){
  const ev = S.events.find(e => e.id === S.ladderEv) || S.events.find(e => e.id === "e2");
  const reached = ev.status === "done" ? 0 : ev.stage;
  const st = nurseStats();
  const steps = [["lad1","lad1s"],["lad2","lad2s"],["lad3","lad3s"],["lad4","lad4s"]];
  const el = $("#ladder");
  // Built once per language, then only the classes change, so the steps light up smoothly.
  if (el.dataset.lang !== S.lang){
    el.dataset.lang = S.lang;
    el.innerHTML = steps.map(([a,b]) => `<li><span><b>${esc(t(a))}</b>${esc(t(b))}</span></li>`).join("");
  }
  el.querySelectorAll("li").forEach((li, i) => {
    const n = i+1, isReached = n < reached || (n === 4 && st.missed.length + st.late.length > 0 && reached >= 3);
    li.classList.toggle("reached", isReached); li.classList.toggle("cur", n === reached);
  });
}
function renderStatic(){
  document.documentElement.lang = S.lang;
  document.querySelectorAll("[data-i]").forEach(el => { const v = t(el.dataset.i); if (typeof v === "string") el.innerHTML = el.dataset.i.startsWith("role") ? v : esc(v); });
  document.querySelectorAll("[data-ph]").forEach(el => el.placeholder = t(el.dataset.ph));
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("on", b.dataset.lang === S.lang));
  $("#voiceBtn").textContent = t(S.voice ? "voiceOn" : "voiceOff"); $("#voiceBtn").classList.toggle("on", S.voice);
  $("#premiumBtn").textContent = t(S.premium ? "planPremium" : "planFree"); $("#premiumBtn").title = t("planHint");
  $("#premiumBtn").classList.toggle("on", S.premium); $("#premiumBtn").setAttribute("aria-pressed", S.premium);
  if (!rec) micSay("micYes");
  $("#carmenHints").innerHTML = T[S.lang].hintsC.map(h => `<button type="button" class="chip" data-hc="${esc(h)}">${esc(h)}</button>`).join("");
  $("#lauraHints").innerHTML = T[S.lang].hintsL.map(h => `<button type="button" class="chip" data-hl="${esc(h)}">${esc(h)}</button>`).join("");
  renderVoices();
  buildSelects();
}
function render(){
  $("#demoClock").textContent = `${cap(T[S.lang].days[0])} 1 Oct · ${fmt(S.now)}`;
  document.querySelectorAll("[data-sc]").forEach(b => b.classList.toggle("cur", +b.dataset.sc === S.sc));
  renderStatus(); renderTablet(); renderAlarm(); renderPhone(); renderNurse(); renderAI(); renderLearned(); renderLadder();
}

// ---------- scenarios ----------
function fresh(){
  const keep = {lang:S.lang, voice:S.voice, voicePick:S.voicePick, tab:"today", premium:S.premium, lauraWho:"carmen", pilarWho:"carmen", ptab:"feed", sc:null};
  try { speechSynthesis.cancel(); } catch(e){}
  clearTimeout(alarmTimer);
  S = Object.assign(seed(), keep);
  seen.clear(); lastPct = 0; aiShown = null;
  $("#carmenInput").value = ""; $("#lauraInput").value = "";
  buildSelects();
}
function scenario(n){
  fresh(); S.sc = n;
  if (n === 1) return advance(5);
  if (n === 2){
    S.now = 544; markDone("e2");
    const e3 = S.events.find(e => e.id === "e3"); e3.status = "done"; e3.doneAt = 665;
    S.now = 11*60+20; const q = T[S.lang].hintsC[0]; $("#carmenInput").value = q; render(); return carmenSay(q);
  }
  if (n === 3) return advance(65);
  if (n === 4){
    S.now = 544; markDone("e2"); S.now = 10*60+30; S.ptab = "add";
    const q = T[S.lang].hintsL[0]; $("#lauraInput").value = q; render(); return lauraFill(q).then(lauraCreate);
  }
  if (n === 5){
    // Heads-up 15 min before the walk (10:45). Then +15 min: the reminder; it is repeated at +15 and +30 min.
    S.now = 544; markDone("e2"); S.now = 10*60+44; return advance(1);
  }
}

// ---------- events ----------
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.id === "plus15") return advance(15);
  if (b.id === "plus60") return advance(60);
  if (b.id === "resetBtn"){ fresh(); return render(); }
  if (b.id === "voiceBtn"){ S.voice = !S.voice; if (!S.voice) try { speechSynthesis.cancel(); } catch(e){} return renderStatic(); }
  if (b.id === "premiumBtn" || b.dataset.premium){ S.premium = !S.premium; if (!S.premium){ S.lauraWho = "carmen"; S.pilarWho = "carmen"; } renderStatic(); return render(); }
  if (b.id === "micBtn") return listen();
  if (b.id === "micPerm") return enableMic();
  if (b.dataset.lang){ S.lang = b.dataset.lang; renderStatic(); return render(); }
  if (b.dataset.sc) return scenario(+b.dataset.sc);
  if (b.dataset.tab){ S.tab = b.dataset.tab; return renderTablet(); }
  if (b.dataset.ptab){ S.ptab = b.dataset.ptab; return renderPhone(); }
  if (b.dataset.lw){ S.lauraWho = b.dataset.lw; S.form.owner = b.dataset.lw; syncForm(); return renderPhone(); }
  if (b.dataset.pw){ S.pilarWho = b.dataset.pw; return renderNurse(); }
  if (b.dataset.adone) return alarmDone(b.dataset.adone);
  if (b.dataset.aback){ S.alarm = null; return render(); }
  if (b.dataset.done){ const ev = markDone(b.dataset.done); if (ev){ S.reply = null; S.heard = null; S.notice = doneReply(ev); render(); speak(pick(S.notice)); } return; }
  if (b.dataset.sup) return answerSup(b.dataset.sup === "yes");
  if (b.dataset.prv){ const k = b.dataset.prv; S.privacy[k] = !S.privacy[k]; S.feed.push({time:S.now, type:"info", who:"carmen", text:both("feedPrivacy")}); return render(); }
  if (b.dataset.hc){ $("#carmenInput").value = b.dataset.hc; return carmenSay(b.dataset.hc); }
  if (b.dataset.hl){ $("#lauraInput").value = b.dataset.hl; return lauraFill(b.dataset.hl); }
  if (b.id === "fillBtn") return lauraFill($("#lauraInput").value);
  if (b.id === "nurseAIbtn") return nurseAI();
  if (b.id === "nurseOk"){ S.nurseConfirmed[S.pilarWho] = S.now; return renderNurse(); }
  if (b.id === "learnApply" || b.id === "learnUndo"){ S.personal = b.id === "learnApply"; return render(); }
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && S.alarm && !S.alarm.ok){ S.alarm = null; render(); } });
$("#voiceSel").addEventListener("change", e => { S.voicePick[S.lang] = e.target.value; speak(t("good." + (S.now < 720 ? "m" : S.now < 1200 ? "a" : "e"))); });
$("#carmenForm").addEventListener("submit", e => { e.preventDefault(); carmenSay($("#carmenInput").value); });
$("#lauraInput").addEventListener("keydown", e => { if (e.key === "Enter"){ e.preventDefault(); lauraFill(e.target.value); } });
$("#lauraForm").addEventListener("submit", e => { e.preventDefault(); lauraCreate(); });
$("#lauraForm").addEventListener("input", e => {
  const f = S.form, el = e.target;
  if (el.id === "fTitle"){
    f.title = el.value;
    if (!f.supTouched){ const imp = rulesImp(el.value); f.important = imp.important; f.why = imp.why; f.sup = imp.important; $("#fSup").checked = f.sup; }
  }
  else if (el.id === "fDay") f.day = +el.value;
  else if (el.id === "fTime") f.time = el.value;
  else if (el.id === "fPlace") f.place = el.value;
  else if (el.id === "fBefore") f.before = +el.value;
  else if (el.id === "fFor") f.owner = el.value;
  else if (el.id === "fSup"){ f.sup = el.checked; f.supTouched = true; }
  else return;
  if (el.id !== "lauraInput") renderPhone();
});
try { loadVoices(); speechSynthesis.addEventListener("voiceschanged", () => { loadVoices(); renderVoices(); }); } catch(e){}

AI.onMode(() => render());
renderStatic(); render();
AI.init();
watchMicPerm();
// Deep links for demos and screenshots: #sc1 … #sc5, optionally with a language (#sc3-es).
const deep = location.hash.match(/^#sc([1-5])(?:-(en|es))?$/);
if (deep){ if (deep[2]){ S.lang = deep[2]; renderStatic(); } scenario(+deep[1]); }
})();
