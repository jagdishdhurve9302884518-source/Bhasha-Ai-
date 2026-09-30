const chat=document.getElementById("chat");
const input=document.getElementById("textInput");
const photoInput=document.getElementById("photoInput");
const preview=document.getElementById("preview");
const previewImg=document.getElementById("previewImg");

let selectedFile=null;

function escapeHTML(s){
  return s.replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[c]));
}

function scrollDown(){
  chat.scrollTop=chat.scrollHeight;
}

function addUser(text,file){
  const row=document.createElement("div");
  row.className="msg user";

  let img="";
  if(file){
    img=`<br><img src="${URL.createObjectURL(file)}" style="max-width:190px;border-radius:12px;margin-top:8px">`;
  }

  row.innerHTML=
    `<div class="bubble">${escapeHTML(text)}${img}</div>
     <div class="avatar">आप</div>`;

  chat.appendChild(row);
  scrollDown();
}

function addAI(text){
  const row=document.createElement("div");
  row.className="msg ai";

  row.innerHTML=
    `<div class="avatar">भा</div>
     <div class="bubble">${escapeHTML(text)}</div>`;

  chat.appendChild(row);
  scrollDown();
}

function reply(text){
  const t=text.toLowerCase();

  if(t.includes("hello")||t.includes("hi")||t.includes("नमस्ते"))
    return "नमस्ते! 🙏 मैं Bhasha AI हूँ। आप क्या जानना चाहते हैं?";

  if(t.includes("mppsc")||t.includes("एमपीपीएससी"))
    return "📚 मैं MPPSC के लिए नोट्स, उत्तर, Flowchart और Revision Notes तैयार करने में मदद कर सकता हूँ।";

  if(t.includes("भारत")||t.includes("india"))
    return "
