document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const gallery = document.getElementById('gallery');
    const galleryImage = document.getElementById('gallery-image');
    const galleryClose = document.getElementById('gallery-close');

    // Gallery state
    let currentGalleryImages = [];
    let currentIndex = 0;

    // Function to show image at specific index
    const showImage = (index) => {
        if (currentGalleryImages.length > 0) {
            galleryImage.src = currentGalleryImages[index].trim();
            galleryImage.alt = `Project Image ${index + 1}`;
        }
    };

    // Project-specific photos (replace with actual image paths)
    const projectPhotos = {
        project1: [
            'https://via.placeholder.com/400x300?text=Project+1+Image+1',
            'https://via.placeholder.com/400x300?text=Project+1+Image+2',
            'https://via.placeholder.com/400x300?text=Project+1+Image+3',
        ],
        project2: [
            'https://via.placeholder.com/400x300?text=Project+2+Image+1',
            'https://via.placeholder.com/400x300?text=Project+2+Image+2',
            'https://via.placeholder.com/400x300?text=Project+2+Image+3',
        ],
        project3: [
            'https://via.placeholder.com/400x300?text=Project+3+Image+1',
            'https://via.placeholder.com/400x300?text=Project+3+Image+2',
            'https://via.placeholder.com/400x300?text=Project+3+Image+3',
        ],
        project4: [
            'https://via.placeholder.com/400x300?text=Project+4+Image+1',
            'https://via.placeholder.com/400x300?text=Project+4+Image+2',
            'https://via.placeholder.com/400x300?text=Project+4+Image+3',
        ],
        project5: [
            'https://via.placeholder.com/400x300?text=Project+5+Image+1',
            'https://via.placeholder.com/400x300?text=Project+5+Image+2',
            'https://via.placeholder.com/400x300?text=Project+5+Image+3',
        ],
        project6: [
            'https://via.placeholder.com/400x300?text=Project+6+Image+1',
            'https://via.placeholder.com/400x300?text=Project+6+Image+2',
            'https://via.placeholder.com/400x300?text=Project+6+Image+3',
        ],
        project7: [
            'https://via.placeholder.com/400x300?text=Project+7+Image+1',
            'https://via.placeholder.com/400x300?text=Project+7+Image+2',
            'https://via.placeholder.com/400x300?text=Project+7+Image+3',
        ],
        project8: [
            'https://via.placeholder.com/400x300?text=Project+8+Image+1',
            'https://via.placeholder.com/400x300?text=Project+8+Image+2',
            'https://via.placeholder.com/400x300?text=Project+8+Image+3',
        ],
        project9: [
            'https://via.placeholder.com/400x300?text=Project+9+Image+1',
            'https://via.placeholder.com/400x300?text=Project+9+Image+2',
            'https://via.placeholder.com/400x300?text=Project+9+Image+3',
        ],
        project10: [
            'https://via.placeholder.com/400x300?text=Project+10+Image+1',
            'https://via.placeholder.com/400x300?text=Project+10+Image+2',
            'https://via.placeholder.com/400x300?text=Project+10+Image+3',
        ],
        project11: [
            'https://via.placeholder.com/400x300?text=Project+11+Image+1',
            'https://via.placeholder.com/400x300?text=Project+11+Image+2',
            'https://via.placeholder.com/400x300?text=Project+11+Image+3',
        ],
        project12: [
            'https://via.placeholder.com/400x300?text=Project+12+Image+1',
            'https://via.placeholder.com/400x300?text=Project+12+Image+2',
            'https://via.placeholder.com/400x300?text=Project+12+Image+3',
        ],
    };

    // Modal and gallery elements
    const modal = document.getElementById('galleryModal');
    const galleryGrid = document.getElementById('galleryGrid');
    const closeModal = document.querySelector('.modal .close');

    // Open modal with gallery
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            const photos = projectPhotos[projectId] || [];
            
            // Populate gallery grid
            galleryGrid.innerHTML = photos.map(photo => 
                `<img src="${photo}" alt="Project photo">`
            ).join('');
            
            // Show modal
            modal.style.display = 'block';
        });
    });

    // Close modal when clicking on close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


    // Attach click events to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Get gallery images from the card's data attribute
            const galleryImages = card.getAttribute('data-gallery').split(',');

            // Open gallery with these images
            openGallery(galleryImages);
        });
    });

    // Cycle through images when gallery image is clicked
    galleryImage.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentGalleryImages.length;
        showImage(currentIndex);
    });

    // Close gallery when close button is clicked
    galleryClose.addEventListener('click', closeGallery);

    // Close gallery when clicking outside the image
    gallery.addEventListener('click', (event) => {
        if (event.target === gallery) {
            closeGallery();
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (event) => {
        // Close gallery with Escape key
        if (event.key === 'Escape' && !gallery.classList.contains('hidden')) {
            closeGallery();
        }

        // Navigate images with arrow keys when gallery is open
        if (!gallery.classList.contains('hidden')) {
            if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % currentGalleryImages.length;
                showImage(currentIndex);
            }
            if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
                showImage(currentIndex);
            }
        }
    });

});


//testimonials

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper for testimonials
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Basic form validation
        const name = event.target.querySelector('input[type="text"]').value;
        const email = event.target.querySelector('input[type="email"]').value;
        const message = event.target.querySelector('textarea').value;

        // In a real-world scenario, you'd send this to a backend service
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
});
//horizontal scroll
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.projects-container');
    
    // Smooth scroll on mouse wheel
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    });

    // Optional: Add touch support for mobile devices
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 to increase scrolling speed
        container.scrollLeft = scrollLeft - walk;
    });
});
 const commentForm = document.getElementById('commentForm');
    const scrollableSection = document.getElementById('scrollableSection');

    // Function to format the time difference
    function timeAgo(timestamp) {
        const now = new Date();
        const diff = now - new Date(timestamp);
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        }
    }

    // Handle form submission
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Get the input values
        const name = document.getElementById('name').value.trim();
        const comment = document.getElementById('comment').value.trim();

        if (name && comment) {
            // Create a timestamp for the comment
            const timestamp = new Date().toISOString();

            // Create a new testimonial (comment) element
            const newTestimonialDiv = document.createElement('div');
            newTestimonialDiv.classList.add('bg-gray-100', 'p-8', 'rounded-lg', 'w-80', 'flex-shrink-0', 'mb-4');
            
            // Add content to the new testimonial
            newTestimonialDiv.innerHTML = `
                <blockquote class="mb-4">"${comment}"</blockquote>
                <p class="font-semibold">- ${name}</p>
                <p class="text-sm text-gray-500">${timeAgo(timestamp)}</p>
            `;

            // Add the new testimonial to the scrollable section (latest first)
            scrollableSection.insertAdjacentElement('afterbegin', newTestimonialDiv);

            // Clear the form
            commentForm.reset();
        }
    });
    //dashboard
    