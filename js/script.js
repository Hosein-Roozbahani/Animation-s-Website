const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 500
})
sr.reveal('.first-section , .second-section , .third-section, fourth-section, .fifth-section, .sixth-section');
sr.reveal('.titles-wedding ', {delay:600});
sr.reveal('.second-img ', {delay:900});
sr.reveal('.couples-name ', {delay:600});
sr.reveal('.dates', {delay:600});
sr.reveal('.address', {delay:999});
sr.reveal('.explained-from-the-bride-groom', {delay:999});























// const sr = ScrollReveal({
//     origin: 'top',  
//     distance: '60px',  
//     duration:2500,  
//     delay:400, 
//     beforeReveal: (el) => {
//         // بررسی اینکه آیا المان شامل first-img است
//         if (el.classList.contains('first-img')) {
//             el.classList.add('animate__animated', 'animate__fadeInUpBig');
//         }
        
//         // بررسی اینکه آیا المان جزء couples-name است
//         if (el.closest('.couples-name')) {
//             el.classList.add('animate__animated', 'animate__backInUp');
//         }
//     }
// });

// const sections = document.querySelectorAll('.section');

// // اجرا کردن ScrollReveal برای هر بخش
// sections.forEach((section) => {
//     sr.reveal(section);
// });




// const sr = ScrollReveal({  
//     origin: 'top',  
//     distance: '60px',  
//     duration:2500,  
//     delay:400,  
//     beforeReveal: (el) => {  
//         // بررسی اینکه آیا المان شامل first-img است if (el.classList.contains('first-img')) {  
//         el.classList.add('animate__animated', 'animate__fadeInUpBig');  
//         }  
       
//         // بررسی اینکه آیا المان جزء couples-name است if (el.closest('.couples-name')) {  
//         el.classList.add('animate__animated', 'animate__backInUp');  
//         }  
//         }  
//        });  
       
//        // اجرا کردن ScrollReveal برای هر بخشsections.forEach((section) => {  
//         sr.reveal(section);  
//        });  
   
//    // اجرا کردن ScrollReveal برای هر بخشsections.forEach((section) => {  
//     sr.reveal(section);    






