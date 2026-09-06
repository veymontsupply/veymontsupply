const menuToggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");
if(menuToggle){menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)})}
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
const form=document.getElementById("inquiryForm"),status=document.getElementById("formStatus");
if(form){form.addEventListener("submit",async e=>{if(form.action.includes("REPLACE_WITH_YOUR_FORM_ID")){e.preventDefault();status.textContent="Form is not connected yet. Add your Formspree form ID in index.html before publishing.";return;}e.preventDefault();status.textContent="Sending...";try{const r=await fetch(form.action,{method:"POST",body:new FormData(form),headers:{"Accept":"application/json"}});if(r.ok){form.reset();status.textContent="Thanks — your wholesale inquiry has been submitted."; }else{status.textContent="Something went wrong. Please try again."}}catch{status.textContent="Unable to send right now. Please try again."}})}
