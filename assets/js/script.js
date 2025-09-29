        // Initialize particles.js
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#1a73e8', '#0d47a1', '#ff6d00']
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#1a73e8',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });

            // Token distribution data
            const tokenData = [
                { category: "Ecosystem", value: 12000000, percentage: 40 },
                { category: "Staking", value: 8000000, percentage: 26.67 },
                { category: "Marketing", value: 3000000, percentage: 10 },
                { category: "Airdrop", value: 2000000, percentage: 6.67 },
                { category: "Other", value: 5000000, percentage: 16.66 } // Calculated remainder
            ];
            
            // Generate chart bars
            const chart = document.getElementById('tokenChart');
            const maxValue = 12000000; // Highest value for scaling
            
            tokenData.forEach(item => {
                const barHeight = (item.value / maxValue) * 100;
                
                const bar = document.createElement('div');
                bar.className = 'chart-bar';
                bar.innerHTML = `
                    <div class="chart-bar-value">${(item.percentage)}%</div>
                    <div class="chart-bar-label">${item.category}</div>
                `;
                
                // Set initial height to 0 for animation
                bar.style.height = '0%';
                
                chart.appendChild(bar);
                
                // Animate the bar after a short delay
                setTimeout(() => {
                    bar.style.height = `${barHeight}%`;
                }, 300);
            });
            
            // Navigation functionality
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.querySelector('.nav-links');
            const navLinkItems = document.querySelectorAll('.nav-link');
            const navbar = document.getElementById('navbar');
            
            // Toggle mobile menu
            mobileMenu.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            navLinkItems.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    navLinks.classList.remove('active');
                    
                    // Update active link
                    navLinkItems.forEach(item => item.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Update active nav link based on scroll position
                const sections = document.querySelectorAll('section, header');
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.scrollY >= (sectionTop - 100)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinkItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
