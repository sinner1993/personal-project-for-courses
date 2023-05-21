document.addEventListener("DOMContentLoaded", function () {
    const  js = ()=> {
        const event =  new CustomEvent("loaded");
         document.dispatchEvent(event)}
    document
    .querySelectorAll("[data-include]")
    .forEach(el=> {
     const src =  el.getAttribute("data-include")
     fetch(src).then(response =>{
        if (response.status === 200) {
            return response.text();
        } else {
            return Promise.reject(new Error(`Failed to load ${src} with status ${response.status}`));
        }
     }) 
     .then(html => {
       el.outerHTML = html;
       js()
     })
})
        
    
}
)