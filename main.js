const blogData=[
{tag:'React',date:'خرداد ۱۴۰۴',img:'photo/blog-react.jpg',title:'React 19: چه تغییراتی می‌آید؟',body:`<p>React 19 یکی از بزرگ‌ترین آپدیت‌های تاریخ React است. در این نسخه، تیم React تمرکز خود را روی بهبود تجربه توسعه‌دهنده و عملکرد گذاشته است.</p><h3>Server Components به صورت رسمی</h3><p>Server Components که قبلاً فقط در Next.js موجود بود، حالا بخش رسمی React شده. این یعنی می‌تونید کامپوننت‌هایی بنویسید که فقط روی سرور اجرا می‌شن و هیچ JavaScript‌ای به کلاینت نمی‌فرستن. نتیجه؟ باندل کوچکتر و لود سریعتر.</p><h3>انتقال خودکار State</h3><p>یکی از مشکلات قدیمی React این بود که وقتی state یک کامپوننت بالایی تغییر می‌کرد، state فرزندها ریست می‌شد. React 19 این مشکل را با useActionState حل کرده.</p><pre>function Form() {\n  const [state, formAction] = useActionState(async (prev, formData) => {\n    const name = formData.get('name');\n    return { success: true, name };\n  }, { success: false });\n  return <form action={formAction}>...</form>;\n}</pre><h3>کتابخانه جدید use()</h3><p>با use() می‌تونید مستقیماً Promise‌ها و Context رو در رندر بخونید بدون نیاز به useEffect یا Suspense.</p><h3>Document Metadata</h3><p>دیگه نیازی به react-helmet نیست! الان می‌تونید title و meta رو مستقیماً داخل کامپوننت‌ها بنویسید.</p><h3>پیشنهاد ما</h3><p>اگه پروژه جدیدی شروع می‌کنید، حتماً React 19 رو در نظر بگیرید. اما برای پروژه‌های موجود، صبور باشید تا اکوسیستم کتابخانه‌ها آپدیت بشن.</p>`},
{tag:'DevOps',date:'اردیبهشت ۱۴۰۴',img:'photo/blog-docker.jpg',title:'راهنمای عملی Docker برای توسعه‌دهندگان',body:`<p>Docker یکی از مهم‌ترین ابزارهای دنیای توسعه نرم‌افزار شده. در این مقاله بصورت عملی یاد می‌گیرید چطور از Docker در پروژه‌هاتون استفاده کنید.</p><h3>Docker چیست؟</h3><p>Docker یک پلتفرم containerization هست که اجازه می‌ده اپلیکیشن‌تون رو همراه با تمام وابستگی‌هاش در یک container بسته‌بندی کنید. این یعنی دیگه مشکل "روی سیستم من کار می‌کنه!" نداریم.</p><h3>نوشتن اولین Dockerfile</h3><pre>FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD ["node", "server.js"]</pre><h3>Docker Compose برای پروژه‌های واقعی</h3><p>وقتی پروژه‌تون چند سرویس داره، Docker Compose بهترین ابزاره:</p><pre>version: '3.8'\nservices:\n  app:\n    build: .\n    ports: ["3000:3000"]\n    depends_on: [db]\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_DB: myapp\n      POSTGRES_PASSWORD: secret\n    volumes: ["pgdata:/var/lib/postgresql/data"]\nvolumes:\n  pgdata:</pre><h3>نکات طلایی</h3><ul><li><strong>از Alpine images</strong> استفاده کنید تا سایز ایمیج کم بشه</li><li><strong>.dockerignore</strong> بسازید و node_modules رو اضافه کنید</li><li><strong>Multi-stage build</strong> برای کاهش سایز نهایی استفاده کنید</li><li><strong>هرگز</strong> پسورد و سکرت رو داخل Dockerfile ننویسید</li></ul>`},
{tag:'TypeScript',date:'فروردین ۱۴۰۴',img:'photo/blog-ts.jpg',title:'چرا TypeScript استاندارد صنعت شده؟',body:`<p>طبق نظرسنجی Stack Overflow 2024، بیش از ۷۸٪ توسعه‌دهندگان جاوااسکریپت از TypeScript استفاده می‌کنن. اما چرا این رشد سریع؟</p><h3>مشکلات جاوااسکریپت خالص</h3><p>جاوااسکریپت یک زبان dynamically typed هست. این یعنی تا زمان اجرا متوجه اشتباهات نوعی نمی‌شید:</p><pre>function calculateTotal(items) {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}\n// خطا! اگر item.price رشته باشه، "10" + "20" = "1020"</pre><h3>TypeScript چطور حل می‌کنه؟</h3><pre>interface Item {\n  name: string;\n  price: number;\n  quantity: number;\n}\nfunction calculateTotal(items: Item[]): number {\n  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n}</pre><p>حالا اگر کسی رشته بفرستد به جای عدد، قبل از اجرا خطا می‌گیرید.</p><h3>مزایای عملی</h3><ul><li><strong>Auto-complete بهتر</strong> در VS Code — IDE دقیقاً می‌دونه چه پراپرتی‌هایی موجوده</li><li><strong>Refactoring امن</strong> — تغییر نام یک متغیر در کل پروژه بدون ترس از باگ</li><li><strong>مستندسازی خودکار</strong> — تایپ‌ها بهترین مستندات کدن</li><li><strong>کد تمیزتر</strong> — تیم را مجبور به نوشتن ساختارهای منظم‌تر می‌کند</li></ul>`},
{tag:'Next.js',date:'اسفند ۱۴۰۳',img:'photo/blog-nextjs.jpg',title:'Next.js 15 vs Remix: کدام را انتخاب کنم؟',body:`<p>در سال ۲۰۲۵، دو فریمورک اصلی برای ساخت اپلیکیشن‌های React داریم: Next.js و Remix. بیایید واقع‌بینانه مقایسه کنیم.</p><h3>Next.js 15</h3><p>نسخه ۱۵ Next.js با Turbopack (بندلر جدید)، افزایش سرعت build تا ۹۶٪ و بهبود Cache رفتار پیش‌فرض اومده.</p><p><strong>مزایا:</strong> اکوسیستم عظیم، مستندات کامل، حمایت Vercel، Server Actions فوق‌العاده سریع</p><p><strong>معایب:</strong> پیچیدگی سیستم Caching، حجم بزرگ فریمورک</p><h3>Remix</h3><p>Remix روی فلسفه استانداردهای وب بنا شده. پترن loader و action بسیار تمیزی داره و درکش ساده‌ست.</p><p><strong>مزایا:</strong> سادگی، progressive enhancement، nested routing عالی، magic کمتر</p><p><strong>معایب:</strong> اکوسیستم کوچکتر، منابع آموزشی کمتر نسبت به Next.js</p><h3>نتیجه‌گیری ما</h3><p>برای بیشتر پروژه‌ها، Next.js 15 انتخاب منطقی‌تری است چون اکوسیستم بزرگتر و پشتیبانی بیشتری دارد. اما اگر پروژه‌تان ساده است و می‌خواهید کنترل کامل داشته باشید، Remix ارزش امتحان کردن را دارد.</p>`},
{tag:'Python',date:'بهمن ۱۴۰۳',img:'photo/blog-python.jpg',title:'۱۰ کتابخانه پایتون که باید بشناسید',body:`<p>پایتون در سال ۲۰۲۵ قوی‌تر از همیشه هست. این ۱۰ کتابخانه رو باید برای توسعه مدرن بشناسید:</p><h3>۱. FastAPI — فریمورک وب مدرن</h3><p>سریع‌ترین فریمورک پایتون برای ساخت API. با Type Hints و Pydantic، اتوماتیک داکیومنت Swagger می‌سازه.</p><pre>from fastapi import FastAPI\napp = FastAPI()\n@app.get("/items/{item_id}")\nasync def read_item(item_id: int, q: str = None):\n    return {"item_id": item_id, "q": q}</pre><h3>۲. Pydantic — اعتبارسنجی داده</h3><p>بهترین ابزار برای validate کردن داده‌ها. هم در FastAPI استفاده میشه هم به صورت مستقل در پروژه‌های دیتاساینس.</p><h3>۳. SQLAlchemy 2.0 — ORM</h3><p>نسخه ۲.۰ با API جدید و Type-safe اومده. دیگه نیازی به legacy Session API نیست.</p><h3>سایر ابزارهای ضروری</h3><ul><li><strong>4. httpx</strong> — جایگزین مدرن برای requests با پشتیبانی async</li><li><strong>5. Rich</strong> — ساخت ابزارهای CLI حرفه‌ای با ترمینال زیبا</li><li><strong>6. Polars</strong> — جایگزین فوق‌سریع برای Pandas (نوشته شده با Rust)</li><li><strong>7. Typer</strong> — ساخت CLI ساده و سریع بر پایه Type hints</li><li><strong>8. Celery</strong> — Task Queue قدرتمند برای کارهای پس‌زمینه</li><li><strong>9. Pytest</strong> — استاندارد طلایی تست‌نویسی در پایتون</li><li><strong>10. Ruff</strong> — Linter و Formatter بی‌نهایت سریع (نوشته شده با Rust)</li></ul>`},
{tag:'AI',date:'دی ۱۴۰۳',img:'photo/blog-ai.jpg',title:'تأثیر هوش مصنوعی بر شغل برنامه‌نویسی',body:`<p>با عرضه ابزارهایی مثل GitHub Copilot، ChatGPT، Claude و IDE هایی مثل Cursor، سؤال بزرگی مطرح شده: آیا برنامه‌نویسان بیکار می‌شن؟</p><h3>واقعیت آماری</h3><p>طبق گزارش GitHub، توسعه‌دهندگانی که از Copilot استفاده می‌کنن، تا ۵۵٪ سریعتر کد می‌نویسن. اما این یعنی نیازی به برنامه‌نویس نیست؟ قطعاً خیر.</p><h3>چرا AI جایگزین انسان نمیشه؟</h3><ul><li><strong>درک نیازمندی‌های بیزینس:</strong> هوش مصنوعی نمی‌تونه جلسات با مشتری رو مدیریت کنه و بفهمه اونا "واقعاً" چی می‌خوان.</li><li><strong>معماری سیستم‌های بزرگ:</strong> طراحی microservices، انتخاب دیتابیس مناسب، مدیریت Scale — این‌ها هنوز هنر انسانیه.</li><li><strong>دیباگ منطقی پیچیده:</strong> وقتی باگ در لایه منطق بیزینس و معماری هست، AI کمکی نمی‌کنه.</li><li><strong>امنیت:</strong> AI ممکن است کدهای آسیب‌پذیر تولید کنه. بازبینی امنیتی هنوز وظیفه قطعی یک انسانه.</li></ul><h3>آنچه واقعاً در حال تغییر است</h3><p>نقش برنامه‌نویس از یک "کدنویس (Coder)" صرف به "معمار نرم‌افزار و حل‌کننده مسئله" تغییر می‌کنه. کسی که فقط Syntax بلده، در خطره. اما کسی که می‌دونه چطور قطعات سیستم رو به هم وصل کنه تا یک مشکل تجاری حل بشه، ارزشش چندین برابر شده.</p><h3>پیشنهاد عملی</h3><p>هوش مصنوعی رو به عنوان یک ابزار قدرتمند ببینید، نه یک رقیب ترسناک. از Copilot برای نوشتن کدهای تکراری (Boilerplate) استفاده کنید و وقت آزاد شده رو صرف یادگیری معماری، سیستم‌دیزاین و مهارت‌های نرم کنید. در دنیای جدید، برنامه‌نویسانی که بلدند از AI خوب استفاده کنند، جایگزین کسانی می‌شنوند که از آن استفاده نمی‌کنند.</p>`}
];

// توابع دو زبانه (Language Toggle)
function toggleLang() {
    const html = document.documentElement;
    const body = document.body;
    if(html.getAttribute('lang') === 'fa') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.classList.remove('lang-fa-active');
        body.classList.add('lang-en-active');
        document.documentElement.style.setProperty('--rtl-scale', '-1');
    } else {
        html.setAttribute('lang', 'fa');
        html.setAttribute('dir', 'rtl');
        body.classList.remove('lang-en-active');
        body.classList.add('lang-fa-active');
        document.documentElement.style.setProperty('--rtl-scale', '1');
    }
}

function toggleMobile(){document.getElementById('mobileMenu').classList.add('open')}
function closeMobile(){document.getElementById('mobileMenu').classList.remove('open')}

function openBlog(i){
    const b=blogData[i];
    document.getElementById('modalImg').src=b.img;
    document.getElementById('modalTag').textContent=b.tag;
    document.getElementById('modalTitle').textContent=b.title;
    
    const isEn = document.documentElement.getAttribute('lang') === 'en';
    document.getElementById('modalDate').textContent= isEn ? b.tag : b.date;
    
    document.getElementById('modalBody').innerHTML=b.body;
    
    const modalOverlay = document.getElementById('blogModal');
    modalOverlay.classList.add('open');
    document.body.style.overflow='hidden';
    document.querySelector('.blog-modal-content').scrollTop = 0;
}
function closeBlogModal(e){
    if(e&&e.target!==e.currentTarget)return;
    document.getElementById('blogModal').classList.remove('open');
    document.body.style.overflow='';
}

document.querySelectorAll('.theme-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        document.documentElement.setAttribute('data-theme',btn.dataset.themeTarget);
    });
});

function initCodeRain(){
    if(window.innerWidth <= 768) return; 
    const c=document.getElementById('codeRain');
    if(!c) return;
    const ctx=c.getContext('2d');
    c.width=window.innerWidth;c.height=window.innerHeight;
    const chars='01{}[]<>/=;:'.split('');
    const fs=16,cols=Math.floor(c.width/fs),drops=Array(cols).fill(1);
    
    let lastDraw = 0;
    function draw(time){
        if(time - lastDraw > 60) {
            const theme = document.documentElement.getAttribute('data-theme');
            let fadeColor = 'rgba(10,10,10,0.1)';
            if(theme === 'light') fadeColor = 'rgba(250,250,250,0.15)';
            if(theme === 'neon') fadeColor = 'rgba(5,5,16,0.1)';
            
            ctx.fillStyle=fadeColor;
            ctx.fillRect(0,0,c.width,c.height);
            ctx.fillStyle='rgba(59,130,246,0.4)';ctx.font=fs+'px Space Mono';
            for(let i=0;i<drops.length;i++){
                ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*fs,drops[i]*fs);
                if(drops[i]*fs>c.height&&Math.random()>0.975)drops[i]=0;drops[i]++;
            }
            lastDraw = time;
        }
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    window.addEventListener('resize',()=>{c.width=window.innerWidth;c.height=window.innerHeight});
}

function initMouseGlow(){
    if(window.innerWidth<=768)return;
    const g1=document.getElementById('mouseGlow'),g2=document.getElementById('mouseGlow2');
    if(!g1 || !g2) return;
    
    let mX = 0, mY = 0, mTick = false;
    document.getElementById('hero').addEventListener('mousemove',e=>{
        mX = e.clientX; mY = e.clientY;
        if(!mTick){
            requestAnimationFrame(()=>{
                g1.style.left=mX+'px';g1.style.top=mY+'px';
                g2.style.left=(mX+80)+'px';g2.style.top=(mY+60)+'px';
                mTick = false;
            });
            mTick = true;
        }
    });
}

function initTyping(){
    const textsFa=['توسعه وب حرفه‌ای','طراحی رابط کاربری','برنامه‌نویسی بک‌اند','ساخت اپلیکیشن SaaS','حل مسئله با کد'];
    const textsEn=['Professional Web Dev','UI/UX Design','Backend Engineering','SaaS Applications','Problem Solving with Code'];
    let ti=0,ci=0,deleting=false;const el=document.getElementById('typingText');
    if(!el) return;
    function type(){
        const isEn = document.documentElement.getAttribute('lang') === 'en';
        const currentArr = isEn ? textsEn : textsFa;
        const current = currentArr[ti % currentArr.length];
        
        el.textContent=current.substring(0,ci);
        if(!deleting){ci++;if(ci>current.length){deleting=true;setTimeout(type,1500);return}}
        else{ci--;if(ci<0){deleting=false;ti=(ti+1)%currentArr.length;ci=0;setTimeout(type,400);return}}
        setTimeout(type,deleting?40:80);
    }
    type();
}

function initReveal(){
    const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});},{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

function initCounters(){
    const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
            if(e.isIntersecting){
                const el=e.target,target=+el.dataset.count,duration=2000,start=performance.now();
                function update(now){const p=Math.min((now-start)/duration,1),ease=1-Math.pow(1-p,3);el.textContent=Math.floor(ease*target)+(target>=100?'+':'');if(p<1)requestAnimationFrame(update)}
                requestAnimationFrame(update);obs.unobserve(el);
            }
        });
    },{threshold:0.5});
    document.querySelectorAll('[data-count]').forEach(el=>obs.observe(el));
}

function initSkillBars(){
    const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
            if(e.isIntersecting){e.target.querySelector('.skill-bar-fill').style.width=e.target.dataset.skill+'%';obs.unobserve(e.target)}
        });
    },{threshold:0.3});
    document.querySelectorAll('.skill-item').forEach(el=>obs.observe(el));
}

function initNavScroll(){
    const nav=document.getElementById('navbar'),btn=document.getElementById('backToTop');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                nav.classList.toggle('scrolled', window.scrollY > 50);
                btn.classList.toggle('show', window.scrollY > 500);
                ticking = false;
            });
            ticking = true;
        }
    }, {passive: true});
}

window.addEventListener('load', () => {
    const symbols=['{ }','< />','[ ]','( )','//','&&','||','=>','...','==','!=','++','--','fn','let','const','async','await'];
    const fs=document.getElementById('floatSymbols');
    if(fs){
        for(let i=0;i<15;i++){
            const s=document.createElement('span');s.className='float-sym';s.textContent=symbols[Math.floor(Math.random()*symbols.length)];
            s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.animationDelay=Math.random()*3+'s';s.style.animationDuration=(2+Math.random()*3)+'s';fs.appendChild(s);
        }
    }
    
    // زمان‌بندی مکعب به حالت اورجینال بازگشت
    setTimeout(()=>{
        const cube = document.getElementById('cube');
        if(cube) cube.classList.add('explode');
    }, 400);
    
    setTimeout(()=>{
        const entrance = document.getElementById('entrance');
        const app = document.getElementById('app');
        if(entrance) entrance.classList.add('hide');
        if(app) app.style.opacity='1';
        
        lucide.createIcons();
        initCodeRain();
        initMouseGlow();
        initTyping();
        initReveal();
        initCounters();
        initSkillBars();
        initNavScroll();
    }, 800);
});