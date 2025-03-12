document.addEventListener("DOMContentLoaded", () => {
    // Bio expansion functionality
    const bioElement = document.getElementById("bio");
    const readMoreBtn = document.getElementById("readMoreBtn");

    const fullBio = `I am Shahariar Rahman, a dedicated web designer and back-end developer with a passion for creating beautiful and functional websites. With expertise in modern web technologies and a keen eye for design, I strive to deliver exceptional digital experiences. My skills include HTML, CSS, JavaScript, React, Node.js, and various other web development tools and frameworks. I'm committed to staying up-to-date with the latest industry trends and best practices to ensure the highest quality in my work.`;

    const truncatedBio = fullBio.slice(0, 85) + "...";

    let isExpanded = false;

    function updateBio() {
        if (isExpanded) {
            bioElement.textContent = fullBio;
            readMoreBtn.textContent = "Read less";
            bioElement.classList.add("expanded");
        } else {
            bioElement.textContent = truncatedBio;
            readMoreBtn.textContent = "Read more";
            bioElement.classList.remove("expanded");
        }
    }

    readMoreBtn.addEventListener("click", () => {
        isExpanded = !isExpanded;
        updateBio();
    });

    // Initial setup
    updateBio();

    // Dynamic contact info
    document.getElementById("mobile").textContent = "+1234567890";
    document.getElementById("email").textContent = "shahariar@example.com";
    document.getElementById("location").textContent = "Dhaka, Bangladesh";

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Apply initial theme
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
    } else if (prefersDarkMode) {
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
    }
    
    // Handle theme toggle click
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        // Save preference to local storage
        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Contact form modal functionality
    const contactBtn = document.getElementById("contactBtn");
    const contactModal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-btn");
    const contactForm = document.getElementById("contactForm");
    
    contactBtn.addEventListener("click", () => {
        contactModal.classList.add("active");
        // Add animation to appear smoothly
        setTimeout(() => {
            document.querySelector(".modal-content").style.transform = "translateY(0)";
            document.querySelector(".modal-content").style.opacity = "1";
        }, 10);
    });
    
    function closeModal() {
        document.querySelector(".modal-content").style.transform = "translateY(50px)";
        document.querySelector(".modal-content").style.opacity = "0";
        
        setTimeout(() => {
            contactModal.classList.remove("active");
        }, 500);
    }
    
    closeBtn.addEventListener("click", closeModal);
    
    // Close modal if clicked outside the content
    contactModal.addEventListener("click", (e) => {
        if (e.target === contactModal) {
            closeModal();
        }
    });
    
    // Handle form submission
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("contactEmail").value;
        const message = document.getElementById("message").value;
        
        // You would typically send this data to a server
        console.log("Form submitted:", { name, email, message });
        
        // Show success message
        const formGroups = document.querySelectorAll(".form-group");
        formGroups.forEach(group => group.style.display = "none");
        
        contactForm.innerHTML = `
            <div class="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button type="button" class="primary-button close-modal-btn">Close</button>
            </div>
        `;
        
        // Add style for success message
        const style = document.createElement('style');
        style.textContent = `
            .success-message {
                text-align: center;
                color: var(--text-color);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
            .success-message svg {
                color: var(--primary-color);
            }
        `;
        document.head.appendChild(style);
        
        // Add event listener to the newly created close button
        document.querySelector(".close-modal-btn").addEventListener("click", closeModal);
    });
    
    // Add animation to skills
    const skillTags = document.querySelectorAll(".skill-tag");
    skillTags.forEach((tag, index) => {
        // Add staggered animation delay
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add("animate__animated", "animate__fadeInUp");
    });
    
    // Animate background elements on mouse move
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const bg1 = document.getElementById("bg-element-1");
        const bg2 = document.getElementById("bg-element-2");
        const bg3 = document.getElementById("bg-element-3");
        
        bg1.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        bg2.style.transform = `translate(${-mouseX * 20}px, ${-mouseY * 20}px)`;
        bg3.style.transform = `translate(${mouseX * -15}px, ${mouseY * 15}px)`;
    });
    
    // Add typing animation to profession
    const profession = document.querySelector(".profession");
    const professionText = profession.textContent;
    profession.textContent = "";
    
    function typeWriter(text, element, i = 0) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, element, i), 100);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(() => {
        typeWriter(professionText, profession);
    }, 1000);
    
    // Add hover effects to contact items
    const contactItems = document.querySelectorAll(".contact-item");
    contactItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.querySelector("svg").style.transform = "scale(1.2)";
        });
        
        item.addEventListener("mouseout", () => {
            item.querySelector("svg").style.transform = "scale(1)";
        });
    });

    // Add click-to-copy functionality for contact info
    const mobileElement = document.getElementById("mobile");
    const emailElement = document.getElementById("email");
    
    function createCopyTooltip(element, originalText) {
        element.style.cursor = "pointer";
        element.title = "Click to copy";
        
        element.addEventListener("click", () => {
            const textToCopy = element.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                element.textContent = "Copied!";
                setTimeout(() => {
                    element.textContent = originalText;
                }, 2000);
            });
        });
    }
    
    createCopyTooltip(mobileElement, mobileElement.textContent);
    createCopyTooltip(emailElement, emailElement.textContent);
});