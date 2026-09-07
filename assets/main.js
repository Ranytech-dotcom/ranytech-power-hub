const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
function closeMenu(){
  if(!navLinks||!menuBtn)return;
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.setAttribute('aria-label','Open navigation menu');
}
if(menuBtn&&navLinks){
  menuBtn.addEventListener('click',()=>{
    const isOpen=navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(isOpen));
    menuBtn.setAttribute('aria-label',isOpen?'Close navigation menu':'Open navigation menu');
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.addEventListener('click',e=>{
    if(navLinks.classList.contains('open')&&!navLinks.contains(e.target)&&!menuBtn.contains(e.target))closeMenu();
  });
}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',closeMenu));
const quoteForm=document.querySelector('#quoteForm');
if(quoteForm){quoteForm.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(quoteForm);const name=data.get('name')||'';const service=data.get('service')||'';const location=data.get('location')||'';const message=data.get('message')||'';const text=`Hello RanyTech Power Hub, my name is ${name}. I need help with ${service}. Location: ${location}. ${message}`;window.open(`https://wa.me/2348060442529?text=${encodeURIComponent(text)}`,'_blank','noopener');});}
