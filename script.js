const menuItems=[
{name:"House Cappuccino",desc:"Double espresso, silky steamed milk, cocoa dust",price:"₹180",category:"Coffee",tag:"BESTSELLER"},
{name:"Honey Lavender Latte",desc:"Espresso, local honey, lavender and steamed milk",price:"₹220",category:"Coffee",tag:"SEASONAL"},
{name:"Classic Cold Brew",desc:"Slow-steeped for 18 hours, smooth and refreshing",price:"₹190",category:"Coffee",tag:""},
{name:"Masala Chai",desc:"Freshly brewed black tea with warming spices",price:"₹120",category:"Tea",tag:"HOUSE BLEND"},
{name:"Iced Peach Tea",desc:"Black tea, ripe peach and a hint of lemon",price:"₹150",category:"Tea",tag:""},
{name:"Almond Croissant",desc:"Flaky, buttery pastry with almond cream",price:"₹160",category:"Bakery",tag:"FRESH DAILY"},
{name:"Blueberry Muffin",desc:"Soft-baked muffin packed with juicy blueberries",price:"₹130",category:"Bakery",tag:""},
{name:"Avocado Toast",desc:"Sourdough, smashed avocado, herbs and chilli flakes",price:"₹260",category:"Brunch",tag:""},
{name:"Garden Breakfast Bowl",desc:"Seasonal greens, eggs, grains and house dressing",price:"₹290",category:"Brunch",tag:"CHEF'S PICK"}
];
const grid=document.getElementById("menuGrid");
function renderMenu(category="All"){const list=menuItems.filter(item=>category==="All"||item.category===category);grid.innerHTML=list.map(item=>`<article class="menu-item"><h3>${item.name}</h3><strong>${item.price}</strong><p>${item.desc}</p>${item.tag?`<small>${item.tag}</small>`:""}</article>`).join("")}
document.getElementById("menuTabs").addEventListener("click",e=>{const btn=e.target.closest("button[data-category]");if(!btn)return;document.querySelectorAll(".tab").forEach(tab=>tab.classList.toggle("active",tab===btn));renderMenu(btn.dataset.category)});
document.querySelector(".menu-toggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(link=>link.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
renderMenu();
