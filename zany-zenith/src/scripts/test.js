document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.link-container');
    let imgContainer = document.querySelector('.image-container');
    
    let textWrapper = document.querySelectorAll('.wrapper-text');
    let imgWrapper = document.querySelectorAll('.wrapper-img');
  
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let easing = 0.2;
  
    function animate() {
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;
      imgContainer.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    }
  
    animate();
  console.log(container);
    textWrapper.forEach((text) => {
      text.addEventListener('mousemove', (ev) => {
        let textActive = text.getAttribute('data-active');
  
        imgWrapper.forEach((imag) => {
          let imgActive = imag.getAttribute('data-active');
          let imi = imag.querySelector("img");
  
          if (textActive === imgActive) {
            let imageContainer = imag.closest('.image-container');
            imageContainer.style.opacity = '1';
            imi.style.opacity = '1';
            targetX = ev.clientX;
            targetY = ev.clientY;
          } else {
            imi.style.opacity = '0';
          }
        });
      });
    });
  console.log(container)
    container.addEventListener('mouseleave', () => {
      imgWrapper.forEach((imag) => {
        let imi = imag.querySelector("img");
        imi.style.opacity = '0';
      });
  
      imgContainer.style.opacity = '0';
    });
  });
  