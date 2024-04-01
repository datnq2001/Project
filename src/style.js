var images = [
        "assets/images/St_Peter's_Square,_Vatican_City_-_April_2007.jpg",
        "https://c1.wallpaperflare.com/path/38/849/245/museum-antiquity-alexander-the-great-art-history-statue-a76e3895825bed8abff5c3bf64462483.jpg",
    ];
    
    var currentImageIndex = 0;

    function startSlideShow(){
        setInterval(nextImage, 3000);
    }
    function nextImage(){
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }
    function updateImage(){
        var imgElement = document.querySelector('.slider-image');
        imgElement.src = images[currentImageIndex];
    }
    window.onload = startSlideShow; // Sửa startSlideshow thành startSlideShow

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }

        });
    });
    const hiddenElements = document.querySelectorAll('.text');
    const hiddenElement = document.querySelectorAll('.text--right');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElement.forEach((el) => observer.observe(el));



    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.modal-container');
    const sign_in_btn2 = document.querySelector('#sign-in-btn2');
    const sign_up_btn2 = document.querySelector('#sign-up-btn2');
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
    sign_up_btn2.addEventListener("click", () => {
        container.classList.add("sign-up-mode2");
    });
    sign_in_btn2.addEventListener("click", () => {
        container.classList.remove("sign-up-mode2");
    });


    const open_sign_in = document.querySelector('.link-sign-in');
    const sign_in_window = document.querySelector('.modal');
    const close_sign_in = document.querySelector('.close-window')
    function open_window(){
        sign_in_window.classList.add('open');
    }
    function close_window(){
        sign_in_window.classList.remove('open');
    }
    open_sign_in.addEventListener('click', open_window);
    close_sign_in.addEventListener('click', close_window);