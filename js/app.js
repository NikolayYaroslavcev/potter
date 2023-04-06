gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery-left .gallery-item')

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: -50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery-right .gallery-item')

    itemsR.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: 50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: 'top',
                scrub: true
            }
        })
    })

}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const nameInput = document.querySelector('#name');
    const phoneInput = document.querySelector('#phone');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent default form submission

        if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
            alert('Please fill in all required fields');
            return;
        }

        const formData = new FormData(form);
        formData.append('submit', true);

        fetch('path/to/server', {
            method: 'POST',
            body: formData
        })
            .then(function(response) {
                if (response.ok) {
                    alert('Thank you for your message!');
                    form.reset(); // reset the form
                } else {
                    alert('Oops, something went wrong!');
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    });

    const phoneMask = IMask(phoneInput, {
        mask: '+{375}(00)000-00-00',
        lazy: false
    });
});
