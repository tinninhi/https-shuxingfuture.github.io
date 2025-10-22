// 苹果风格的平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果 - 苹果风格毛玻璃
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'saturate(180%) blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.backdropFilter = 'saturate(180%) blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
    }
});

// 数字动画效果 - 苹果风格
function animateNumbers() {
    const metricBars = document.querySelectorAll('.metric-fill');
    
    metricBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            bar.style.width = width;
        }, index * 200);
    });
}

// 滚动到质量指标区域时触发动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

const qualityMetrics = document.querySelector('.quality-metrics');
if (qualityMetrics) {
    observer.observe(qualityMetrics);
}

// 表单提交处理 - Netlify Forms
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Netlify Forms 会自动处理提交
        // 这里可以添加成功提示
        showNotification('感谢您的咨询！我们会尽快与您联系。', 'success');
    });
}

// 通知系统
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#34C759' : '#FF3B30'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 按钮点击效果 - 苹果风格涟漪
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // 创建涟漪效果
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-animation 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 卡片悬停效果 - 苹果风格
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 为所有卡片添加悬停效果
    const cards = document.querySelectorAll('.case-card, .comparison-card, .value-card, .flow-traditional, .flow-shuxing');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 添加涟漪动画样式
    const style = document.createElement('style');
    style.textContent = `
        .btn-primary, .btn-secondary {
            position: relative;
            overflow: hidden;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        /* 滚动条样式 - 苹果风格 */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
        }
        
        /* 选择文本样式 */
        ::selection {
            background: rgba(0, 122, 255, 0.2);
            color: #1D1D1F;
        }
        
        /* 焦点样式 */
        *:focus {
            outline: none;
        }
        
        button:focus-visible {
            outline: 2px solid #007AFF;
            outline-offset: 2px;
        }
        
        input:focus-visible,
        textarea:focus-visible {
            outline: 2px solid #007AFF;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
});

// 移动端菜单切换（如果需要）
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// 添加移动端菜单按钮（如果需要）
function addMobileMenuButton() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer && window.innerWidth <= 768) {
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.className = 'mobile-menu-button';
        menuButton.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 24px;
            color: #1D1D1F;
            cursor: pointer;
            padding: 8px;
        `;
        menuButton.addEventListener('click', toggleMobileMenu);
        navContainer.appendChild(menuButton);
    }
}

// 窗口大小改变时检查是否需要移动端菜单
window.addEventListener('resize', addMobileMenuButton);
document.addEventListener('DOMContentLoaded', addMobileMenuButton);

// 创建动态粒子背景
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    
    // 创建粒子
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
    
    // 创建数据流线条
    const dataFlow = document.createElement('div');
    dataFlow.className = 'data-flow';
    
    for (let i = 0; i < 8; i++) {
        const flowLine = document.createElement('div');
        flowLine.className = 'flow-line';
        flowLine.style.top = Math.random() * 100 + '%';
        flowLine.style.width = (200 + Math.random() * 300) + 'px';
        flowLine.style.animationDelay = Math.random() * 8 + 's';
        flowLine.style.animationDuration = (8 + Math.random() * 4) + 's';
        dataFlow.appendChild(flowLine);
    }
    
    // 添加到hero区域
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.appendChild(particlesContainer);
        hero.appendChild(dataFlow);
    }
}

// 滚动动画观察器
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 为需要动画的元素添加观察
    const animatedElements = document.querySelectorAll('.comparison-card, .case-card, .value-card, .flow-traditional, .flow-shuxing, .quality-metrics, .showcase-item');
    animatedElements.forEach((el, index) => {
        // 交替添加不同的动画类
        if (index % 3 === 0) {
            el.classList.add('fade-in');
        } else if (index % 3 === 1) {
            el.classList.add('slide-in-left');
        } else {
            el.classList.add('slide-in-right');
        }
        observer.observe(el);
    });
    
    // 为标题添加缩放动画
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.classList.add('scale-in');
        observer.observe(title);
    });
}

// 鼠标跟随效果
function initMouseFollowEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // 移动背景渐变
        hero.style.background = `
            linear-gradient(135deg, 
                rgba(${Math.floor(10 + x * 20)}, ${Math.floor(10 + y * 20)}, ${Math.floor(10 + x * 30)}, 1) 0%, 
                rgba(${Math.floor(26 + x * 20)}, ${Math.floor(26 + y * 20)}, ${Math.floor(26 + x * 30)}, 1) 50%, 
                rgba(${Math.floor(42 + x * 20)}, ${Math.floor(42 + y * 20)}, ${Math.floor(42 + x * 30)}, 1) 100%
            )
        `;
    });
    
    hero.addEventListener('mouseleave', () => {
        hero.style.background = 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2A2A2A 100%)';
    });
}

// 卡片悬停3D效果
function init3DCardEffects() {
    const cards = document.querySelectorAll('.case-card, .comparison-card, .value-card, .comparison-card-bad, .comparison-card-good');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            card.style.transition = 'transform 0.1s ease-out';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.3s ease-out';
        });
    });
}

// 数字计数动画
function animateCounters() {
    const counters = document.querySelectorAll('.case-benefit');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        const number = parseInt(text.match(/\d+/)[0]);
        const suffix = text.replace(/\d+/, '');
        
        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + suffix;
        }, 30);
    });
}

// 语言切换功能
function initLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elements = document.querySelectorAll('[data-zh][data-en]');
    
    // 从localStorage获取保存的语言设置
    let currentLang = localStorage.getItem('language') || 'zh';
    
    // 设置初始语言
    setLanguage(currentLang);
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
            
            // 保存语言设置到localStorage
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elements = document.querySelectorAll('[data-zh][data-en]');
    
    // 更新按钮状态
    langButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });
    
    // 更新页面内容
    elements.forEach(element => {
        const zhText = element.getAttribute('data-zh');
        const enText = element.getAttribute('data-en');
        
        if (lang === 'zh') {
            element.textContent = zhText;
        } else {
            element.textContent = enText;
        }
    });
    
    // 更新表单placeholder
    const inputs = document.querySelectorAll('input[data-placeholder-zh], textarea[data-placeholder-zh]');
    inputs.forEach(input => {
        const zhPlaceholder = input.getAttribute('data-placeholder-zh');
        const enPlaceholder = input.getAttribute('data-placeholder-en');
        
        if (lang === 'zh') {
            input.placeholder = zhPlaceholder;
        } else {
            input.placeholder = enPlaceholder;
        }
    });
    
    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
    
    // 更新页面标题
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const zhTitle = titleElement.getAttribute('data-zh');
        const enTitle = titleElement.getAttribute('data-en');
        
        if (lang === 'zh') {
            document.title = zhTitle;
        } else {
            document.title = enTitle;
        }
    }
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

/* 移除API相关函数 */

// 更新初始化函数
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        
        // 初始化各种效果
        initLanguageSwitch();
        initNavbarScroll(); // 添加导航栏滚动效果
        createParticles();
        initScrollAnimations();
        initMouseFollowEffect();
        init3DCardEffects();
        
        // 延迟启动数字动画
        setTimeout(animateCounters, 1000);
    }, 100);
});