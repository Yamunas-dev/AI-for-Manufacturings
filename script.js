const menu=document.querySelector('.menu');
document.querySelector('.burger').onclick=()=>menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>{
  const q=b.parentElement,open=q.classList.toggle('open');b.querySelector('span').textContent=open?'−':'+';
});
const links=[...menu.querySelectorAll('a:not(.btn)')];
addEventListener('scroll',()=>{let cur='#home';
  links.forEach(l=>{const s=document.querySelector(l.getAttribute('href'));if(s&&s.getBoundingClientRect().top<140)cur=l.getAttribute('href')});
  links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===cur));
});
document.querySelector('.reg').addEventListener('submit',e=>{
  e.preventDefault();e.target.querySelector('.ok').hidden=false;e.target.reset();
});
