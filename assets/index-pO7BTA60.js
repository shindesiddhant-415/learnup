(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const N="learnup_data",x=["#6C5CE7","#00CEC9","#FD79A8","#FDCB6E","#74B9FF","#FF6B6B","#A29BFE","#00D2A0","#E17055","#636E72"];function j(){return{users:[{id:"u1",name:"Alex Johnson",email:"alex@demo.com",password:"demo123",role:"student",avatar:x[0],points:2450,level:8,streak:12,badges:["b1","b2","b3","b5"],quizzesTaken:18,quizzesCorrect:142,quizzesTotal:180},{id:"u2",name:"Maya Chen",email:"maya@demo.com",password:"demo123",role:"student",avatar:x[1],points:3120,level:10,streak:24,badges:["b1","b2","b3","b4","b5","b6"],quizzesTaken:25,quizzesCorrect:210,quizzesTotal:250},{id:"u3",name:"Sam Williams",email:"sam@demo.com",password:"demo123",role:"student",avatar:x[2],points:1870,level:6,streak:5,badges:["b1","b2"],quizzesTaken:12,quizzesCorrect:89,quizzesTotal:120},{id:"u4",name:"Dr. Patel",email:"patel@demo.com",password:"demo123",role:"teacher",avatar:x[3],points:0,level:0,streak:0,badges:[],quizzesTaken:0,quizzesCorrect:0,quizzesTotal:0},{id:"u5",name:"Lisa Wang",email:"lisa@demo.com",password:"demo123",role:"student",avatar:x[4],points:980,level:4,streak:3,badges:["b1"],quizzesTaken:8,quizzesCorrect:58,quizzesTotal:80},{id:"u6",name:"Prof. Kumar",email:"kumar@demo.com",password:"demo123",role:"teacher",avatar:x[5],points:0,level:0,streak:0,badges:[],quizzesTaken:0,quizzesCorrect:0,quizzesTotal:0},{id:"u7",name:"Jordan Lee",email:"jordan@demo.com",password:"demo123",role:"student",avatar:x[6],points:1520,level:5,streak:8,badges:["b1","b2","b3"],quizzesTaken:14,quizzesCorrect:105,quizzesTotal:140},{id:"u8",name:"Priya Sharma",email:"priya@demo.com",password:"demo123",role:"student",avatar:x[7],points:2780,level:9,streak:18,badges:["b1","b2","b3","b4","b5"],quizzesTaken:22,quizzesCorrect:187,quizzesTotal:220}],badges:[{id:"b1",name:"First Step",emoji:"🎯",desc:"Complete your first quiz"},{id:"b2",name:"Streak Master",emoji:"🔥",desc:"Maintain a 5-day streak"},{id:"b3",name:"Quiz Whiz",emoji:"🧠",desc:"Score 90%+ on 5 quizzes"},{id:"b4",name:"Scholar",emoji:"📚",desc:"Complete 20 quizzes"},{id:"b5",name:"Speed Demon",emoji:"⚡",desc:"Finish a quiz in under 60s"},{id:"b6",name:"Perfect Score",emoji:"💎",desc:"Get 100% on any quiz"},{id:"b7",name:"Social Star",emoji:"⭐",desc:"Reach top 3 on leaderboard"},{id:"b8",name:"Legend",emoji:"🏆",desc:"Reach level 15"}],quizzes:[{id:"q1",title:"JavaScript Basics",category:"Programming",difficulty:"Easy",createdBy:"u4",createdAt:"2026-03-10",questions:[{q:"What keyword declares a constant in JavaScript?",options:["var","let","const","define"],answer:2},{q:"Which method converts JSON to a JS object?",options:["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.decode()"],answer:0},{q:'What does "===" check for?',options:["Value only","Type only","Value and type","Reference"],answer:2},{q:"Which is NOT a JS data type?",options:["string","boolean","float","undefined"],answer:2},{q:"What does Array.push() do?",options:["Remove first","Add to end","Sort array","Reverse array"],answer:1}]},{id:"q2",title:"World Geography",category:"Geography",difficulty:"Medium",createdBy:"u6",createdAt:"2026-03-08",questions:[{q:"What is the largest continent by area?",options:["Africa","North America","Asia","Europe"],answer:2},{q:"Which river is the longest?",options:["Amazon","Nile","Yangtze","Mississippi"],answer:1},{q:"Which country has the most time zones?",options:["Russia","USA","France","China"],answer:2},{q:"What is the smallest country?",options:["Monaco","Vatican City","San Marino","Liechtenstein"],answer:1},{q:"Mount Everest is in which mountain range?",options:["Alps","Andes","Rockies","Himalayas"],answer:3}]},{id:"q3",title:"Science Fundamentals",category:"Science",difficulty:"Easy",createdBy:"u4",createdAt:"2026-03-12",questions:[{q:"What gas do plants absorb from air?",options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],answer:2},{q:"What is the chemical symbol for water?",options:["O2","H2O","CO2","HO"],answer:1},{q:"What planet is known as the Red Planet?",options:["Jupiter","Venus","Mars","Saturn"],answer:2},{q:"What force keeps us on the ground?",options:["Magnetism","Friction","Gravity","Inertia"],answer:2},{q:"How many bones are in an adult human body?",options:["106","206","306","186"],answer:1}]},{id:"q4",title:"Advanced Mathematics",category:"Math",difficulty:"Hard",createdBy:"u6",createdAt:"2026-03-14",questions:[{q:"What is the derivative of sin(x)?",options:["cos(x)","-cos(x)","sin(x)","-sin(x)"],answer:0},{q:"What is ∫ 2x dx?",options:["x²","x² + C","2x²","2x² + C"],answer:1},{q:"What is the value of e (approx.)?",options:["2.718","3.14","1.414","1.618"],answer:0},{q:"What is log₂(8)?",options:["2","3","4","8"],answer:1},{q:"What is the sum of interior angles of a hexagon?",options:["540°","720°","360°","900°"],answer:1}]}],scores:[{id:"s1",userId:"u1",quizId:"q1",score:4,total:5,points:80,date:"2026-03-11"},{id:"s2",userId:"u2",quizId:"q1",score:5,total:5,points:120,date:"2026-03-11"},{id:"s3",userId:"u1",quizId:"q2",score:3,total:5,points:60,date:"2026-03-12"},{id:"s4",userId:"u3",quizId:"q3",score:4,total:5,points:80,date:"2026-03-13"},{id:"s5",userId:"u2",quizId:"q3",score:5,total:5,points:120,date:"2026-03-13"},{id:"s6",userId:"u7",quizId:"q1",score:3,total:5,points:60,date:"2026-03-12"},{id:"s7",userId:"u8",quizId:"q2",score:5,total:5,points:120,date:"2026-03-14"},{id:"s8",userId:"u5",quizId:"q3",score:3,total:5,points:60,date:"2026-03-14"}],currentUser:null}}function H(){try{const e=localStorage.getItem(N);if(e)return JSON.parse(e)}catch{}return null}function $(e){localStorage.setItem(N,JSON.stringify(e))}function b(){let e=H();return e||(e=j(),$(e)),e}const o={reset(){const e=j();return $(e),e},login(e,t){const i=b(),a=i.users.find(s=>s.email===e&&s.password===t);return a?(i.currentUser=a.id,$(i),a):null},logout(){const e=b();e.currentUser=null,$(e)},getCurrentUser(){const e=b();return e.currentUser&&e.users.find(t=>t.id===e.currentUser)||null},register(e,t,i,a){const s=b();if(s.users.find(l=>l.email===t))return null;const n={id:"u"+Date.now(),name:e,email:t,password:i,role:a,avatar:x[Math.floor(Math.random()*x.length)],points:0,level:1,streak:0,badges:[],quizzesTaken:0,quizzesCorrect:0,quizzesTotal:0};return s.users.push(n),s.currentUser=n.id,$(s),n},getUser(e){return b().users.find(t=>t.id===e)||null},getStudents(){return b().users.filter(e=>e.role==="student")},updateUser(e,t){const i=b(),a=i.users.findIndex(s=>s.id===e);return a===-1?null:(Object.assign(i.users[a],t),$(i),i.users[a])},getQuizzes(){return b().quizzes},getQuiz(e){return b().quizzes.find(t=>t.id===e)||null},getQuizzesByCreator(e){return b().quizzes.filter(t=>t.createdBy===e)},addQuiz(e){const t=b();return e.id="q"+Date.now(),e.createdAt=new Date().toISOString().split("T")[0],t.quizzes.push(e),$(t),e},deleteQuiz(e){const t=b();t.quizzes=t.quizzes.filter(i=>i.id!==e),t.scores=t.scores.filter(i=>i.quizId!==e),$(t)},getScores(){return b().scores},getScoresByUser(e){return b().scores.filter(t=>t.userId===e)},getScoresByQuiz(e){return b().scores.filter(t=>t.quizId===e)},addScore(e,t,i,a,s){const n=b(),l={id:"s"+Date.now(),userId:e,quizId:t,score:i,total:a,points:s,date:new Date().toISOString().split("T")[0]};n.scores.push(l);const h=n.users.findIndex(v=>v.id===e);return h!==-1&&(n.users[h].quizzesTaken+=1,n.users[h].quizzesCorrect+=i,n.users[h].quizzesTotal+=a,n.users[h].points+=s),$(n),l},getAllBadges(){return b().badges},getUserBadges(e){const t=b(),i=t.users.find(a=>a.id===e);return i?t.badges.filter(a=>i.badges.includes(a.id)):[]},awardBadge(e,t){const i=b(),a=i.users.find(s=>s.id===e);return!a||a.badges.includes(t)?!1:(a.badges.push(t),$(i),!0)},getLeaderboard(){return b().users.filter(e=>e.role==="student").sort((e,t)=>t.points-e.points)}},A={};let M=null;const y={on(e,t){return A[e]=t,this},notFound(e){return M=e,this},navigate(e){window.location.hash=e},currentPath(){return window.location.hash.slice(1)||"/"},resolve(){const e=this.currentPath(),t=o.getCurrentUser();if(!["/","/login","/register"].includes(e)&&!t){this.navigate("/login");return}if(t&&(e==="/login"||e==="/register")){this.navigate(t.role==="teacher"?"/teacher":"/student");return}let a=A[e],s={};if(!a)for(const[n,l]of Object.entries(A)){const h=new RegExp("^"+n.replace(/:([^/]+)/g,"([^/]+)")+"$"),v=e.match(h);if(v){a=l,[...n.matchAll(/:([^/]+)/g)].map(u=>u[1]).forEach((u,p)=>{s[u]=v[p+1]});break}}a?a(s):M&&M()},start(){window.addEventListener("hashchange",()=>this.resolve()),this.resolve()}},S=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15500,18500,22e3],B={getLevel(e){let t=1;for(let i=0;i<S.length&&e>=S[i];i++)t=i+1;return t},getLevelProgress(e){const t=this.getLevel(e),i=S[t-1]||0,a=S[t]||i+1e3;return(e-i)/(a-i)},pointsToNextLevel(e){const t=this.getLevel(e),i=S[t]||(S[t-1]||0)+1e3;return Math.max(0,i-e)},calculateQuizPoints(e,t,i){const a=e/t;let s=e*20;return a>=1?s+=50:a>=.9?s+=30:a>=.8&&(s+=15),i<60?s+=25:i<120&&(s+=10),s},submitQuiz(e,t,i,a,s){const n=this.calculateQuizPoints(i,a,s);o.addScore(e,t,i,a,n);const l=o.getUser(e),h=l.level,v=this.getLevel(l.points);v!==h&&o.updateUser(e,{level:v}),o.updateUser(e,{streak:l.streak+1});const c=[],u=o.getUser(e);u.quizzesTaken>=1&&o.awardBadge(e,"b1")&&c.push(o.getAllBadges().find(g=>g.id==="b1")),u.streak>=5&&o.awardBadge(e,"b2")&&c.push(o.getAllBadges().find(g=>g.id==="b2")),o.getScoresByUser(e).filter(g=>g.score/g.total>=.9).length>=5&&o.awardBadge(e,"b3")&&c.push(o.getAllBadges().find(g=>g.id==="b3")),u.quizzesTaken>=20&&o.awardBadge(e,"b4")&&c.push(o.getAllBadges().find(g=>g.id==="b4")),s<60&&o.awardBadge(e,"b5")&&c.push(o.getAllBadges().find(g=>g.id==="b5")),i===a&&o.awardBadge(e,"b6")&&c.push(o.getAllBadges().find(g=>g.id==="b6"));const m=o.getLeaderboard().findIndex(g=>g.id===e);return m>=0&&m<3&&o.awardBadge(e,"b7")&&c.push(o.getAllBadges().find(g=>g.id==="b7")),v>=15&&o.awardBadge(e,"b8")&&c.push(o.getAllBadges().find(g=>g.id==="b8")),{points:n,newBadges:c,levelUp:v>h,newLevel:v,correct:i,total:a}}};function D(){const e=o.getCurrentUser(),t=document.createElement("nav");t.className="navbar",t.id="main-navbar";const i=document.createElement("div");i.className="logo",i.innerHTML='<div class="logo-icon">L</div><span>Learn<span class="text-gradient">Up</span></span>',i.addEventListener("click",()=>y.navigate("/"));const a=document.createElement("ul");if(a.className="nav-links",e){const v=e.role==="teacher"?"/teacher":"/student";a.innerHTML=`
      <li><a href="#${v}" id="nav-dash">Dashboard</a></li>
      <li><a href="#/leaderboard" id="nav-lb">Leaderboard</a></li>
      <li><a href="#/profile" id="nav-profile">Profile</a></li>
    `}else a.innerHTML=`
      <li><a href="#/" id="nav-home">Home</a></li>
      <li><a href="#/login" id="nav-login">Login</a></li>
      <li><a href="#/register" id="nav-register">Sign Up</a></li>
    `;const s=document.createElement("div");if(s.className="nav-right",e&&e.role==="student")s.innerHTML=`
      <div class="points-pill">⚡ ${e.points.toLocaleString()} pts</div>
      <div class="avatar" style="background:${e.avatar}">${e.name.charAt(0)}</div>
    `;else if(e){const v=document.createElement("button");v.className="btn btn-secondary btn-sm",v.textContent="Logout",v.addEventListener("click",()=>{o.logout(),y.navigate("/")});const c=document.createElement("div");c.className="avatar",c.style.background=e.avatar,c.textContent=e.name.charAt(0),s.appendChild(c),s.appendChild(v)}const n=document.createElement("button");n.className="hamburger",n.id="hamburger-btn",n.innerHTML="<span></span><span></span><span></span>",n.addEventListener("click",()=>{var v;(v=document.getElementById("mobile-nav"))==null||v.classList.toggle("open")}),t.appendChild(i),t.appendChild(a),t.appendChild(s),t.appendChild(n);const l=document.createElement("div");l.className="mobile-nav",l.id="mobile-nav";const h=document.createElement("button");if(h.className="close-btn",h.textContent="✕",h.addEventListener("click",()=>l.classList.remove("open")),l.appendChild(h),e){["Dashboard|"+(e.role==="teacher"?"/teacher":"/student"),"Leaderboard|/leaderboard","Profile|/profile"].forEach(u=>{const[p,d]=u.split("|"),r=document.createElement("a");r.href="#"+d,r.textContent=p,r.addEventListener("click",()=>l.classList.remove("open")),l.appendChild(r)});const c=document.createElement("a");c.href="#",c.textContent="Logout",c.addEventListener("click",u=>{u.preventDefault(),o.logout(),y.navigate("/"),l.classList.remove("open")}),l.appendChild(c)}else["Home|/","Login|/login","Sign Up|/register"].forEach(v=>{const[c,u]=v.split("|"),p=document.createElement("a");p.href="#"+u,p.textContent=c,p.addEventListener("click",()=>l.classList.remove("open")),l.appendChild(p)});return{nav:t,mobileNav:l}}function R(e){e.innerHTML=`
    <!-- Hero Section -->
    <section class="landing-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text animate-fade-in-up">
            <div class="badge badge-primary" style="margin-bottom: var(--space-md);">🚀 Gamified Learning Platform</div>
            <h1>Learn Smarter,<br><span class="text-gradient">Level Up Faster</span></h1>
            <p>Transform your learning experience with quizzes, badges, streaks, and leaderboards. Compete with friends and track your progress — all while having fun.</p>
            <div class="hero-actions">
              <a href="#/register" class="btn btn-primary btn-lg" id="hero-cta-signup">Get Started Free</a>
              <a href="#/login" class="btn btn-secondary btn-lg" id="hero-cta-login">Sign In</a>
            </div>
            <div class="hero-stats">
              <div class="hero-stat animate-fade-in delay-2">
                <div class="stat-num text-gradient">10K+</div>
                <div class="stat-text">Active Learners</div>
              </div>
              <div class="hero-stat animate-fade-in delay-3">
                <div class="stat-num text-gradient">500+</div>
                <div class="stat-text">Quizzes</div>
              </div>
              <div class="hero-stat animate-fade-in delay-4">
                <div class="stat-num text-gradient">95%</div>
                <div class="stat-text">Satisfaction</div>
              </div>
            </div>
          </div>
          <div class="hero-visual animate-fade-in delay-2">
            <div class="hero-card-stack">
              <div class="float-card">
                <div style="font-size:1.5rem; margin-bottom: var(--space-sm);">🏆</div>
                <div style="font-weight:700; margin-bottom: 4px;">Quiz Master</div>
                <div style="font-size:var(--font-xs); color:var(--text-secondary);">Score 90%+ on 5 quizzes</div>
                <div class="progress-bar" style="margin-top: var(--space-sm);">
                  <div class="progress-bar-fill" style="width:75%;"></div>
                </div>
              </div>
              <div class="float-card">
                <div class="flex items-center gap-sm" style="margin-bottom: var(--space-sm);">
                  <div class="avatar avatar-sm" style="background:#6C5CE7;">A</div>
                  <div>
                    <div style="font-weight:600; font-size:var(--font-sm);">Alex Johnson</div>
                    <div style="font-size:var(--font-xs); color:var(--accent);">🔥 12-day streak</div>
                  </div>
                </div>
                <div class="flex items-center gap-sm">
                  <span class="badge badge-accent">Level 8</span>
                  <span class="badge badge-primary">2,450 pts</span>
                </div>
              </div>
              <div class="float-card">
                <div style="font-size:var(--font-xs); color:var(--text-muted); margin-bottom: var(--space-sm);">LEADERBOARD</div>
                <div class="flex items-center justify-between" style="margin-bottom:6px;">
                  <div class="flex items-center gap-sm">
                    <span style="font-weight:700;">🥇</span>
                    <span style="font-size:var(--font-sm);">Maya Chen</span>
                  </div>
                  <span style="font-size:var(--font-sm); color:var(--primary-light); font-weight:600;">3,120 pts</span>
                </div>
                <div class="flex items-center justify-between" style="margin-bottom:6px;">
                  <div class="flex items-center gap-sm">
                    <span style="font-weight:700;">🥈</span>
                    <span style="font-size:var(--font-sm);">Priya Sharma</span>
                  </div>
                  <span style="font-size:var(--font-sm); color:var(--primary-light); font-weight:600;">2,780 pts</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-sm">
                    <span style="font-weight:700;">🥉</span>
                    <span style="font-size:var(--font-sm);">Alex Johnson</span>
                  </div>
                  <span style="font-size:var(--font-sm); color:var(--primary-light); font-weight:600;">2,450 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="animate-fade-in">Why <span class="text-gradient">LearnUp</span>?</h2>
        <div class="features-grid">
          <div class="feature-card animate-fade-in-up delay-1">
            <div class="feature-icon" style="background: rgba(108,92,231,0.15);">🎯</div>
            <h3>Interactive Quizzes</h3>
            <p>Engage with beautifully crafted quizzes across multiple subjects. Timed challenges keep you focused and competitive.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-2">
            <div class="feature-icon" style="background: rgba(0,206,201,0.15);">🏅</div>
            <h3>Earn Badges & Rewards</h3>
            <p>Unlock achievements as you progress. From "First Step" to "Legend" — collect them all and showcase your skills.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-3">
            <div class="feature-icon" style="background: rgba(253,121,168,0.15);">🔥</div>
            <h3>Streak Tracking</h3>
            <p>Build daily learning habits with streak tracking. Maintain your streak to earn bonus points and special badges.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-4">
            <div class="feature-icon" style="background: rgba(116,185,255,0.15);">📊</div>
            <h3>Progress Analytics</h3>
            <p>Track your learning journey with detailed analytics. See your strengths, weaknesses, and improvement over time.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-5">
            <div class="feature-icon" style="background: rgba(0,210,160,0.15);">🏆</div>
            <h3>Leaderboards</h3>
            <p>Compete with fellow learners on global leaderboards. Rise through the ranks and claim your spot at the top.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-6">
            <div class="feature-icon" style="background: rgba(253,203,110,0.15);">👩‍🏫</div>
            <h3>Teacher Dashboard</h3>
            <p>Teachers can create quizzes, manage students, and track class performance with powerful analytics tools.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box animate-fade-in-up">
          <h2>Ready to <span class="text-gradient">Level Up</span>?</h2>
          <p>Join thousands of learners who are already transforming their education journey.</p>
          <a href="#/register" class="btn btn-primary btn-lg" id="cta-bottom-signup">Start Learning Now</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>© 2026 LearnUp. Built with ❤️ for learners everywhere.</p>
      </div>
    </footer>
  `}function w(e,t="info",i=3e3){document.querySelectorAll(".toast").forEach(s=>s.remove());const a=document.createElement("div");a.className=`toast toast-${t}`,a.textContent=e,document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(20px)",a.style.transition="all 0.3s ease-out",setTimeout(()=>a.remove(),300)},i)}function O(e){e.innerHTML=`
    <div class="auth-page">
      <div class="auth-card">
        <h1>Welcome back 👋</h1>
        <p class="auth-subtitle">Sign in to continue your learning journey</p>
        <form class="auth-form" id="login-form">
          <div class="input-group">
            <label for="login-email">Email</label>
            <input class="input" type="email" id="login-email" placeholder="you@example.com" required />
          </div>
          <div class="input-group">
            <label for="login-password">Password</label>
            <input class="input" type="password" id="login-password" placeholder="Enter your password" required />
          </div>
          <button type="submit" class="btn btn-primary w-full" id="login-submit">Sign In</button>
        </form>
        <div class="auth-footer">
          Don't have an account? <a href="#/register">Create one</a>
        </div>
        <div style="margin-top: var(--space-lg); padding-top: var(--space-lg); border-top: 1px solid var(--border);">
          <p style="font-size: var(--font-xs); color: var(--text-muted); margin-bottom: var(--space-sm);">Demo accounts (password: demo123)</p>
          <div class="flex gap-sm" style="flex-wrap:wrap;">
            <button class="chip demo-login" data-email="alex@demo.com" id="demo-alex">🎓 Alex (Student)</button>
            <button class="chip demo-login" data-email="maya@demo.com" id="demo-maya">🎓 Maya (Student)</button>
            <button class="chip demo-login" data-email="patel@demo.com" id="demo-patel">👩‍🏫 Dr. Patel (Teacher)</button>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("login-form").addEventListener("submit",t=>{t.preventDefault();const i=document.getElementById("login-email").value,a=document.getElementById("login-password").value,s=o.login(i,a);s?(w(`Welcome back, ${s.name}!`,"success"),y.navigate(s.role==="teacher"?"/teacher":"/student")):w("Invalid email or password","error")}),document.querySelectorAll(".demo-login").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const i=t.dataset.email,a=o.login(i,"demo123");a&&(w(`Logged in as ${a.name}`,"success"),y.navigate(a.role==="teacher"?"/teacher":"/student"))})})}function F(e){e.innerHTML=`
    <div class="auth-page">
      <div class="auth-card">
        <h1>Create Account ✨</h1>
        <p class="auth-subtitle">Join LearnUp and start your gamified learning journey</p>
        <form class="auth-form" id="register-form">
          <div class="input-group">
            <label for="reg-name">Full Name</label>
            <input class="input" type="text" id="reg-name" placeholder="John Doe" required />
          </div>
          <div class="input-group">
            <label for="reg-email">Email</label>
            <input class="input" type="email" id="reg-email" placeholder="you@example.com" required />
          </div>
          <div class="input-group">
            <label for="reg-password">Password</label>
            <input class="input" type="password" id="reg-password" placeholder="Min 6 characters" required minlength="6" />
          </div>
          <div class="input-group">
            <label>I am a</label>
            <div class="role-selector" id="role-selector">
              <button type="button" class="role-option active" data-role="student" id="role-student">🎓 Student</button>
              <button type="button" class="role-option" data-role="teacher" id="role-teacher">👩‍🏫 Teacher</button>
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-full" id="register-submit">Create Account</button>
        </form>
        <div class="auth-footer">
          Already have an account? <a href="#/login">Sign in</a>
        </div>
      </div>
    </div>
  `;let t="student";document.querySelectorAll(".role-option").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".role-option").forEach(a=>a.classList.remove("active")),i.classList.add("active"),t=i.dataset.role})}),document.getElementById("register-form").addEventListener("submit",i=>{i.preventDefault();const a=document.getElementById("reg-name").value.trim(),s=document.getElementById("reg-email").value.trim(),n=document.getElementById("reg-password").value;if(!a||!s||n.length<6){w("Please fill all fields correctly","error");return}const l=o.register(a,s,n,t);l?(w(`Welcome, ${l.name}! Your account is ready.`,"success"),y.navigate(l.role==="teacher"?"/teacher":"/student")):w("Email already registered","error")})}function C(e){const t=o.getCurrentUser();if(!t)return"";const i=[{id:"dash",icon:"📊",label:"Dashboard",path:"/student"},{id:"quizzes",icon:"📝",label:"Take Quiz",path:"/quizzes"},{id:"lb",icon:"🏆",label:"Leaderboard",path:"/leaderboard"},{id:"profile",icon:"👤",label:"Profile",path:"/profile"}],a=[{id:"dash",icon:"📊",label:"Dashboard",path:"/teacher"},{id:"create",icon:"➕",label:"Create Quiz",path:"/create-quiz"},{id:"lb",icon:"🏆",label:"Leaderboard",path:"/leaderboard"},{id:"profile",icon:"👤",label:"Profile",path:"/profile"}],s=t.role==="teacher"?a:i,n=document.createElement("aside");n.className="sidebar";const l=document.createElement("div");l.style.cssText="padding: var(--space-md) var(--space-lg); margin-bottom: var(--space-md);",l.innerHTML=`
    <div class="flex items-center gap-md" style="margin-bottom: var(--space-md);">
      <div class="avatar" style="background:${t.avatar}">${t.name.charAt(0)}</div>
      <div>
        <div style="font-weight:600; font-size: var(--font-sm);">${t.name}</div>
        <div style="font-size: var(--font-xs); color: var(--text-muted); text-transform:capitalize;">${t.role}</div>
      </div>
    </div>
  `,n.appendChild(l);const h=document.createElement("div");h.className="sidebar-section",h.textContent="Navigation",n.appendChild(h);const v=document.createElement("ul");v.className="sidebar-nav",s.forEach(p=>{const d=document.createElement("li"),r=document.createElement("button");r.className=`sidebar-link${e===p.id?" active":""}`,r.innerHTML=`<span>${p.icon}</span> ${p.label}`,r.addEventListener("click",()=>y.navigate(p.path)),d.appendChild(r),v.appendChild(d)}),n.appendChild(v);const c=document.createElement("div");c.style.cssText="margin-top: auto; padding: var(--space-lg) var(--space-md); position: absolute; bottom: var(--space-lg); left: 0; right: 0;";const u=document.createElement("button");return u.className="sidebar-link",u.innerHTML="<span>🚪</span> Logout",u.addEventListener("click",()=>{o.logout(),y.navigate("/")}),c.appendChild(u),n.appendChild(c),n}function W(e){const t=o.getCurrentUser();if(!t){y.navigate("/login");return}const i=C("dash"),a=o.getScoresByUser(t.id),s=o.getUserBadges(t.id),n=o.getAllBadges(),l=B.getLevelProgress(t.points),h=B.pointsToNextLevel(t.points),v=t.quizzesTotal>0?Math.round(t.quizzesCorrect/t.quizzesTotal*100):0,c=a.map(m=>m.quizId),u=o.getQuizzes().filter(m=>!c.includes(m.id)),p=[...a].sort((m,g)=>g.date.localeCompare(m.date)).slice(0,5),d=document.createElement("div");d.className="dashboard-layout";const r=document.createElement("main");r.className="dashboard-main",r.innerHTML=`
    <div class="dashboard-header animate-fade-in">
      <div>
        <h1>Welcome back, <span class="text-gradient">${t.name.split(" ")[0]}</span>! 👋</h1>
        <p class="text-sm text-muted">Keep up the great work — you're on a ${t.streak}-day streak! 🔥</p>
      </div>
      <a href="#/quizzes" class="btn btn-primary" id="dash-take-quiz">📝 Take a Quiz</a>
    </div>

    <!-- Stats Row -->
    <div class="stats-row">
      <div class="stat-card animate-fade-in-up delay-1">
        <div class="stat-label">Total Points</div>
        <div class="stat-value text-gradient">${t.points.toLocaleString()}</div>
        <div class="flex items-center gap-sm" style="margin-top:var(--space-sm);">
          <span class="badge badge-primary">Level ${t.level}</span>
          <span style="font-size:var(--font-xs); color:var(--text-muted);">${h} pts to next</span>
        </div>
        <div class="progress-bar" style="margin-top: var(--space-sm);">
          <div class="progress-bar-fill" style="width: ${Math.round(l*100)}%;"></div>
        </div>
      </div>
      <div class="stat-card animate-fade-in-up delay-2">
        <div class="stat-label">Quizzes Taken</div>
        <div class="stat-value">${t.quizzesTaken}</div>
        <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:var(--space-sm);">Accuracy: ${v}%</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-3">
        <div class="stat-label">Current Streak</div>
        <div class="stat-value" style="color: var(--warning);">🔥 ${t.streak}</div>
        <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:var(--space-sm);">days in a row</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-4">
        <div class="stat-label">Badges Earned</div>
        <div class="stat-value">${s.length}<span style="font-size:var(--font-lg); color:var(--text-muted);">/${n.length}</span></div>
        <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:var(--space-sm);">${n.length-s.length} more to unlock</div>
      </div>
    </div>

    <!-- Dashboard Grid -->
    <div class="dashboard-grid">
      <!-- Available Quizzes -->
      <div class="card animate-fade-in-up delay-2">
        <div class="flex items-center justify-between" style="margin-bottom: var(--space-lg);">
          <h3 style="font-weight:700;">📝 Available Quizzes</h3>
          <a href="#/quizzes" class="text-sm" style="color:var(--primary-light);">View all →</a>
        </div>
        ${u.length>0?u.slice(0,3).map(m=>`
          <div class="flex items-center justify-between" style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
            <div>
              <div style="font-weight:600; font-size:var(--font-sm);">${m.title}</div>
              <div class="flex gap-sm" style="margin-top:4px;">
                <span class="badge badge-accent">${m.category}</span>
                <span class="badge ${m.difficulty==="Easy"?"badge-success":m.difficulty==="Medium"?"badge-warning":"badge-danger"}">${m.difficulty}</span>
              </div>
            </div>
            <a href="#/quiz/${m.id}" class="btn btn-sm btn-primary">Start</a>
          </div>
        `).join(""):`<div class="empty-state"><div class="empty-icon">🎉</div><p>You've completed all quizzes!</p></div>`}
      </div>

      <!-- Recent Activity -->
      <div class="card animate-fade-in-up delay-3">
        <h3 style="font-weight:700; margin-bottom: var(--space-lg);">📊 Recent Activity</h3>
        ${p.length>0?p.map(m=>{const g=o.getQuiz(m.quizId),f=Math.round(m.score/m.total*100);return`
            <div class="flex items-center justify-between" style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
              <div>
                <div style="font-weight:600; font-size:var(--font-sm);">${g?g.title:"Quiz"}</div>
                <div style="font-size:var(--font-xs); color:var(--text-muted);">${m.date}</div>
              </div>
              <div class="flex items-center gap-sm">
                <span class="badge ${f>=80?"badge-success":f>=60?"badge-warning":"badge-danger"}">${f}%</span>
                <span style="font-size:var(--font-xs); color:var(--primary-light);">+${m.points} pts</span>
              </div>
            </div>
          `}).join(""):'<div class="empty-state"><div class="empty-icon">📊</div><p>No activity yet. Take a quiz!</p></div>'}
      </div>

      <!-- Badges Showcase -->
      <div class="card animate-fade-in-up delay-4" style="grid-column: 1 / -1;">
        <h3 style="font-weight:700; margin-bottom: var(--space-lg);">🏅 Badge Collection</h3>
        <div class="badges-grid">
          ${n.map(m=>`
              <div class="badge-card ${s.find(f=>f.id===m.id)?"":"locked"}">
                <div class="badge-emoji">${m.emoji}</div>
                <div class="badge-name">${m.name}</div>
                <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:4px;">${m.desc}</div>
              </div>
            `).join("")}
        </div>
      </div>
    </div>
  `,d.appendChild(i),d.appendChild(r),e.innerHTML="",e.appendChild(d)}function P(e){const t=o.getCurrentUser();if(!t||t.role!=="teacher"){y.navigate("/login");return}const i=C("dash"),a=o.getQuizzesByCreator(t.id),s=o.getStudents(),n=o.getScores(),l=s.length,h=a.length,v=n.filter(d=>a.some(r=>r.id===d.quizId)).length,c=v>0?Math.round(n.filter(d=>a.some(r=>r.id===d.quizId)).reduce((d,r)=>d+r.score/r.total*100,0)/v):0,u=document.createElement("div");u.className="dashboard-layout";const p=document.createElement("main");p.className="dashboard-main",p.innerHTML=`
    <div class="dashboard-header animate-fade-in">
      <div>
        <h1>Teacher Dashboard 👩‍🏫</h1>
        <p class="text-sm text-muted">Manage quizzes and track student performance</p>
      </div>
      <a href="#/create-quiz" class="btn btn-primary" id="teacher-create-quiz">➕ Create Quiz</a>
    </div>

    <!-- Stats Row -->
    <div class="stats-row">
      <div class="stat-card animate-fade-in-up delay-1">
        <div class="stat-label">My Quizzes</div>
        <div class="stat-value text-gradient">${h}</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-2">
        <div class="stat-label">Total Students</div>
        <div class="stat-value">${l}</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-3">
        <div class="stat-label">Total Attempts</div>
        <div class="stat-value">${v}</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-4">
        <div class="stat-label">Avg Score</div>
        <div class="stat-value" style="color: var(--success);">${c}%</div>
      </div>
    </div>

    <div class="dashboard-grid">
      <!-- My Quizzes -->
      <div class="card animate-fade-in-up delay-2">
        <div class="flex items-center justify-between" style="margin-bottom:var(--space-lg);">
          <h3 style="font-weight:700;">📝 My Quizzes</h3>
        </div>
        ${a.length>0?a.map(d=>{const r=n.filter(m=>m.quizId===d.id).length;return`
            <div class="flex items-center justify-between" style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
              <div>
                <div style="font-weight:600; font-size:var(--font-sm);">${d.title}</div>
                <div class="flex gap-sm" style="margin-top:4px;">
                  <span class="badge badge-accent">${d.category}</span>
                  <span class="badge badge-primary">${d.questions.length} Qs</span>
                  <span class="chip">${r} attempts</span>
                </div>
              </div>
              <button class="btn btn-sm btn-danger delete-quiz-btn" data-id="${d.id}">🗑️</button>
            </div>
          `}).join(""):'<div class="empty-state"><div class="empty-icon">📝</div><p>No quizzes yet. Create your first quiz!</p></div>'}
      </div>

      <!-- Top Students -->
      <div class="card animate-fade-in-up delay-3">
        <h3 style="font-weight:700; margin-bottom: var(--space-lg);">🏆 Top Students</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr><th>Rank</th><th>Student</th><th>Points</th><th>Level</th></tr>
            </thead>
            <tbody>
              ${o.getLeaderboard().slice(0,8).map((d,r)=>`
                <tr>
                  <td>${r===0?"🥇":r===1?"🥈":r===2?"🥉":r+1}</td>
                  <td>
                    <div class="flex items-center gap-sm">
                      <div class="avatar avatar-sm" style="background:${d.avatar}">${d.name.charAt(0)}</div>
                      ${d.name}
                    </div>
                  </td>
                  <td style="font-weight:600; color:var(--primary-light);">${d.points.toLocaleString()}</td>
                  <td><span class="badge badge-accent">Lv ${d.level}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="card animate-fade-in-up delay-4" style="grid-column: 1 / -1;">
        <h3 style="font-weight:700; margin-bottom:var(--space-lg);">📊 Recent Quiz Activity</h3>
        <div class="table-wrap">
          <table class="table">
            <thead><tr><th>Student</th><th>Quiz</th><th>Score</th><th>Points</th><th>Date</th></tr></thead>
            <tbody>
              ${[...n].sort((d,r)=>r.date.localeCompare(d.date)).slice(0,10).map(d=>{var f;const r=o.getUser(d.userId),m=o.getQuiz(d.quizId),g=Math.round(d.score/d.total*100);return`
                  <tr>
                    <td>
                      <div class="flex items-center gap-sm">
                        <div class="avatar avatar-sm" style="background:${(r==null?void 0:r.avatar)||"#666"}">${((f=r==null?void 0:r.name)==null?void 0:f.charAt(0))||"?"}</div>
                        ${(r==null?void 0:r.name)||"Unknown"}
                      </div>
                    </td>
                    <td>${(m==null?void 0:m.title)||"Deleted Quiz"}</td>
                    <td><span class="badge ${g>=80?"badge-success":g>=60?"badge-warning":"badge-danger"}">${g}%</span></td>
                    <td style="color:var(--primary-light);">+${d.points}</td>
                    <td style="color:var(--text-muted);">${d.date}</td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,u.appendChild(i),u.appendChild(p),e.innerHTML="",e.appendChild(u),e.querySelectorAll(".delete-quiz-btn").forEach(d=>{d.addEventListener("click",()=>{confirm("Delete this quiz?")&&(o.deleteQuiz(d.dataset.id),w("Quiz deleted","info"),P(e))})})}function J(e){const t=o.getCurrentUser();if(!t){y.navigate("/login");return}const i=C("quizzes"),a=o.getQuizzes(),s=o.getScoresByUser(t.id),n=s.map(v=>v.quizId),l=document.createElement("div");l.className="dashboard-layout";const h=document.createElement("main");h.className="dashboard-main",h.innerHTML=`
    <div class="dashboard-header animate-fade-in">
      <h1>📝 Available Quizzes</h1>
    </div>
    <div class="features-grid">
      ${a.map((v,c)=>{const u=n.includes(v.id),p=s.find(d=>d.quizId===v.id);return`
          <div class="feature-card animate-fade-in-up delay-${c%6+1}" style="cursor:pointer;" id="quiz-card-${v.id}">
            <div class="flex items-center justify-between" style="margin-bottom: var(--space-md);">
              <span class="badge ${v.difficulty==="Easy"?"badge-success":v.difficulty==="Medium"?"badge-warning":"badge-danger"}">${v.difficulty}</span>
              ${u?'<span class="badge badge-accent">✓ Completed</span>':""}
            </div>
            <h3 style="margin-bottom: var(--space-sm);">${v.title}</h3>
            <div class="flex items-center gap-sm" style="margin-bottom: var(--space-md);">
              <span class="chip">${v.category}</span>
              <span class="chip">${v.questions.length} Questions</span>
            </div>
            ${u&&p?`
              <div class="flex items-center justify-between" style="font-size:var(--font-sm);">
                <span style="color:var(--text-muted);">Your score: ${Math.round(p.score/p.total*100)}%</span>
                <span style="color:var(--primary-light);">+${p.points} pts</span>
              </div>
            `:`
              <a href="#/quiz/${v.id}" class="btn btn-primary btn-sm w-full">Start Quiz →</a>
            `}
          </div>
        `}).join("")}
    </div>
  `,l.appendChild(i),l.appendChild(h),e.innerHTML="",e.appendChild(l)}function G(e,t){const i=o.getCurrentUser();if(!i){y.navigate("/login");return}const a=t.id,s=o.getQuiz(a);if(!s){e.innerHTML='<div class="empty-state" style="min-height:80vh;"><div class="empty-icon">❌</div><p>Quiz not found</p><a href="#/quizzes" class="btn btn-primary mt-lg">Back to Quizzes</a></div>';return}let n=0,l=new Array(s.questions.length).fill(-1),h=Date.now(),v=null,c=0;function u(){var g,f,q;const r=s.questions[n],m=(n+1)/s.questions.length*100;e.innerHTML=`
      <div class="quiz-container">
        <div class="quiz-header animate-fade-in">
          <div>
            <h2 style="font-size:var(--font-lg); font-weight:700;">${s.title}</h2>
            <div class="quiz-progress">
              <span>Question ${n+1} of ${s.questions.length}</span>
            </div>
          </div>
          <div class="quiz-timer" id="quiz-timer">⏱ ${d(c)}</div>
        </div>
        <div class="progress-bar" style="margin-bottom: var(--space-xl);">
          <div class="progress-bar-fill" style="width: ${m}%;"></div>
        </div>
        <div class="quiz-question-card">
          <h2>${r.q}</h2>
          <div class="quiz-options" id="quiz-options">
            ${r.options.map((z,L)=>`
              <button class="quiz-option ${l[n]===L?"selected":""}" data-idx="${L}" id="option-${L}">
                <span class="option-letter">${String.fromCharCode(65+L)}</span>
                <span>${z}</span>
              </button>
            `).join("")}
          </div>
        </div>
        <div class="quiz-nav">
          <button class="btn btn-secondary" id="quiz-prev" ${n===0?'disabled style="opacity:0.4;"':""}>← Previous</button>
          ${n<s.questions.length-1?'<button class="btn btn-primary" id="quiz-next">Next →</button>':'<button class="btn btn-accent" id="quiz-submit">Submit Quiz ✓</button>'}
        </div>
      </div>
    `,v&&clearInterval(v),v=setInterval(()=>{c=Math.floor((Date.now()-h)/1e3);const z=document.getElementById("quiz-timer");z&&(z.innerHTML=`⏱ ${d(c)}`)},1e3),document.querySelectorAll(".quiz-option").forEach(z=>{z.addEventListener("click",()=>{l[n]=parseInt(z.dataset.idx),document.querySelectorAll(".quiz-option").forEach(L=>L.classList.remove("selected")),z.classList.add("selected")})}),(g=document.getElementById("quiz-prev"))==null||g.addEventListener("click",()=>{n>0&&(n--,u())}),(f=document.getElementById("quiz-next"))==null||f.addEventListener("click",()=>{if(l[n]===-1){w("Please select an answer","error");return}n++,u()}),(q=document.getElementById("quiz-submit"))==null||q.addEventListener("click",()=>{if(l.includes(-1)){w("Please answer all questions","error");return}clearInterval(v),p()})}function p(){const r=Math.floor((Date.now()-h)/1e3);let m=0;s.questions.forEach((T,U)=>{l[U]===T.answer&&m++});const g=B.submitQuiz(i.id,a,m,s.questions.length,r),f=Math.round(m/s.questions.length*100),q=65,z=2*Math.PI*q,L=z*(1-f/100);let Q="";g.newBadges.length>0&&(Q=`
        <div style="margin-top:var(--space-xl);">
          <h3 style="margin-bottom:var(--space-md);">🎉 New Badges Unlocked!</h3>
          <div class="flex justify-center gap-lg">
            ${g.newBadges.map(T=>`
              <div class="badge-card animate-scale-in">
                <div class="badge-emoji">${T.emoji}</div>
                <div class="badge-name">${T.name}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `),e.innerHTML=`
      <div class="quiz-container">
        <div class="quiz-results animate-fade-in-up">
          <div class="score-circle">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle class="circle-bg" cx="80" cy="80" r="${q}" stroke-width="10" />
              <circle class="circle-fill" cx="80" cy="80" r="${q}" stroke-width="10"
                stroke="${f>=80?"var(--success)":f>=60?"var(--warning)":"var(--danger)"}"
                stroke-dasharray="${z}"
                stroke-dashoffset="${L}"
                style="transform: rotate(-90deg); transform-origin: center;" />
            </svg>
            <div class="circle-text" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
              <div style="font-size:var(--font-3xl); font-weight:900;">${f}%</div>
            </div>
          </div>
          <h2>${f>=80?"Excellent! 🎉":f>=60?"Good Job! 👍":"Keep Trying! 💪"}</h2>
          <p class="text-muted">You answered ${m} out of ${s.questions.length} correctly in ${d(r)}</p>

          <div class="rewards">
            <div class="reward-item">
              <div class="reward-icon">⚡</div>
              <div style="font-weight:700; color:var(--primary-light);">+${g.points} pts</div>
              <div class="text-muted">Points Earned</div>
            </div>
            ${g.levelUp?`
              <div class="reward-item">
                <div class="reward-icon">🎊</div>
                <div style="font-weight:700; color:var(--accent);">Level ${g.newLevel}!</div>
                <div class="text-muted">Level Up!</div>
              </div>
            `:""}
          </div>

          ${Q}

          <div class="flex justify-center gap-md mt-xl">
            <a href="#/quizzes" class="btn btn-secondary">Browse Quizzes</a>
            <a href="#/student" class="btn btn-primary">Dashboard</a>
          </div>
        </div>
      </div>
    `}function d(r){const m=Math.floor(r/60),g=r%60;return`${m}:${g.toString().padStart(2,"0")}`}u()}function V(e){const t=o.getCurrentUser();if(!t||t.role!=="teacher"){y.navigate("/login");return}const i=C("create");let a=[{q:"",options:["","","",""],answer:0}];const s=document.createElement("div");s.className="dashboard-layout";const n=document.createElement("main");n.className="dashboard-main";function l(){var h,v;n.innerHTML=`
      <div class="create-quiz-page">
        <div class="dashboard-header animate-fade-in">
          <h1>➕ Create New Quiz</h1>
        </div>

        <div class="card" style="margin-bottom: var(--space-xl);">
          <div class="auth-form">
            <div class="input-group">
              <label for="quiz-title">Quiz Title</label>
              <input class="input" type="text" id="quiz-title" placeholder="e.g. JavaScript Fundamentals" required />
            </div>
            <div class="flex gap-md">
              <div class="input-group" style="flex:1;">
                <label for="quiz-category">Category</label>
                <input class="input" type="text" id="quiz-category" placeholder="e.g. Programming" required />
              </div>
              <div class="input-group" style="flex:1;">
                <label for="quiz-difficulty">Difficulty</label>
                <select class="input" id="quiz-difficulty">
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div id="questions-container">
          ${a.map((c,u)=>`
            <div class="question-builder animate-fade-in-up">
              <div class="flex items-center justify-between">
                <div class="question-num">Question ${u+1}</div>
                ${a.length>1?`<button class="btn btn-sm btn-danger remove-q-btn" data-qi="${u}">Remove</button>`:""}
              </div>
              <div class="input-group" style="margin-top:var(--space-md);">
                <input class="input question-input" type="text" placeholder="Enter question..." data-qi="${u}" value="${c.q}" />
              </div>
              <div style="margin-top:var(--space-md); display:flex; flex-direction:column; gap:var(--space-sm);">
                ${c.options.map((p,d)=>`
                  <div class="flex items-center gap-sm">
                    <button class="btn btn-icon btn-sm correct-btn ${c.answer===d?"btn-accent":"btn-secondary"}" data-qi="${u}" data-oi="${d}" title="Mark as correct answer">
                      ${c.answer===d?"✓":String.fromCharCode(65+d)}
                    </button>
                    <input class="input option-input" type="text" placeholder="Option ${String.fromCharCode(65+d)}" data-qi="${u}" data-oi="${d}" value="${p}" />
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <div class="flex gap-md mt-lg">
          <button class="btn btn-secondary" id="add-question-btn">+ Add Question</button>
          <button class="btn btn-primary" id="publish-quiz-btn">📤 Publish Quiz</button>
        </div>
      </div>
    `,n.querySelectorAll(".question-input").forEach(c=>{c.addEventListener("input",u=>{a[parseInt(u.target.dataset.qi)].q=u.target.value})}),n.querySelectorAll(".option-input").forEach(c=>{c.addEventListener("input",u=>{const p=parseInt(u.target.dataset.qi),d=parseInt(u.target.dataset.oi);a[p].options[d]=u.target.value})}),n.querySelectorAll(".correct-btn").forEach(c=>{c.addEventListener("click",()=>{const u=parseInt(c.dataset.qi),p=parseInt(c.dataset.oi);a[u].answer=p,l()})}),n.querySelectorAll(".remove-q-btn").forEach(c=>{c.addEventListener("click",()=>{a.splice(parseInt(c.dataset.qi),1),l()})}),(h=document.getElementById("add-question-btn"))==null||h.addEventListener("click",()=>{a.push({q:"",options:["","","",""],answer:0}),l()}),(v=document.getElementById("publish-quiz-btn"))==null||v.addEventListener("click",()=>{var d,r,m,g,f;const c=(r=(d=document.getElementById("quiz-title"))==null?void 0:d.value)==null?void 0:r.trim(),u=(g=(m=document.getElementById("quiz-category"))==null?void 0:m.value)==null?void 0:g.trim(),p=(f=document.getElementById("quiz-difficulty"))==null?void 0:f.value;if(!c||!u){w("Please fill in quiz title and category","error");return}for(let q=0;q<a.length;q++){if(!a[q].q.trim()){w(`Question ${q+1} is empty`,"error");return}for(let z=0;z<a[q].options.length;z++)if(!a[q].options[z].trim()){w(`Option ${String.fromCharCode(65+z)} in Question ${q+1} is empty`,"error");return}}o.addQuiz({title:c,category:u,difficulty:p,createdBy:t.id,questions:a}),w("Quiz published successfully! 🎉","success"),y.navigate("/teacher")})}s.appendChild(i),s.appendChild(n),e.innerHTML="",e.appendChild(s),l()}function Y(e){const t=o.getCurrentUser();if(!t){y.navigate("/login");return}const i=C("lb"),a=o.getLeaderboard(),s=[a[1],a[0],a[2]].filter(Boolean),n=document.createElement("div");n.className="dashboard-layout";const l=document.createElement("main");l.className="dashboard-main";const h=["🥈","🥇","🥉"],v=[140,180,120];let c=s.map((p,d)=>`
    <div class="podium-item">
      <div class="avatar avatar-lg" style="background:${p.avatar}">${p.name.charAt(0)}</div>
      <div class="podium-name">${p.name}</div>
      <div class="podium-points">${p.points.toLocaleString()} pts</div>
      <div class="podium-bar" style="height:${v[d]}px;background:${d===1?"linear-gradient(180deg,#FFD700,#FFA500)":d===0?"var(--gradient-primary)":"var(--gradient-cool)"};">${h[d]}</div>
    </div>`).join(""),u=a.map((p,d)=>{const r=p.id===t.id;return`<tr style="${r?"background:rgba(108,92,231,0.1);":""}">
      <td style="font-weight:700;">${d<3?["🥇","🥈","🥉"][d]:d+1}</td>
      <td><div class="flex items-center gap-sm"><div class="avatar avatar-sm" style="background:${p.avatar}">${p.name.charAt(0)}</div><span ${r?'style="font-weight:700;color:var(--primary-light);"':""}>${p.name}${r?" (You)":""}</span></div></td>
      <td style="font-weight:600;color:var(--primary-light);">${p.points.toLocaleString()}</td>
      <td><span class="badge badge-accent">Lv ${p.level}</span></td>
      <td>🔥 ${p.streak}</td><td>${p.quizzesTaken}</td></tr>`}).join("");l.innerHTML=`<div class="leaderboard-page">
    <div class="dashboard-header animate-fade-in"><h1>🏆 Leaderboard</h1><span class="badge badge-primary">${a.length} Students</span></div>
    <div class="podium animate-fade-in-up">${c}</div>
    <div class="card animate-fade-in-up delay-2"><h3 style="font-weight:700;margin-bottom:var(--space-lg);">Full Rankings</h3>
      <div class="table-wrap"><table class="table"><thead><tr><th>Rank</th><th>Student</th><th>Points</th><th>Level</th><th>Streak</th><th>Quizzes</th></tr></thead><tbody>${u}</tbody></table></div></div></div>`,n.appendChild(i),n.appendChild(l),e.innerHTML="",e.appendChild(n)}function K(e){var d;const t=o.getCurrentUser();if(!t){y.navigate("/login");return}const i=C("profile"),a=o.getAllBadges(),s=o.getUserBadges(t.id),n=o.getScoresByUser(t.id),l=t.quizzesTotal>0?Math.round(t.quizzesCorrect/t.quizzesTotal*100):0,h=B.getLevelProgress(t.points),c=o.getLeaderboard().findIndex(r=>r.id===t.id)+1,u=document.createElement("div");u.className="dashboard-layout";const p=document.createElement("main");p.className="dashboard-main",p.innerHTML=`<div class="profile-page">
    <div class="profile-header-card animate-fade-in">
      <div class="avatar avatar-xl" style="background:${t.avatar};position:relative;z-index:1;">${t.name.charAt(0)}</div>
      <div class="profile-info">
        <h1>${t.name}</h1>
        <div class="profile-role">${t.role==="teacher"?"👩‍🏫 Teacher":"🎓 Student"} · ${t.email}</div>
        ${t.role==="student"?`<div class="profile-stats">
          <div class="profile-stat"><div class="p-stat-val text-gradient">${t.points.toLocaleString()}</div><div class="p-stat-label">Points</div></div>
          <div class="profile-stat"><div class="p-stat-val">Lv ${t.level}</div><div class="p-stat-label">Level</div></div>
          <div class="profile-stat"><div class="p-stat-val" style="color:var(--warning);">🔥 ${t.streak}</div><div class="p-stat-label">Streak</div></div>
          <div class="profile-stat"><div class="p-stat-val">#${c||"—"}</div><div class="p-stat-label">Rank</div></div>
        </div>`:""}
      </div>
    </div>

    ${t.role==="student"?`
    <div class="stats-row">
      <div class="stat-card animate-fade-in-up delay-1"><div class="stat-label">Quizzes Taken</div><div class="stat-value">${t.quizzesTaken}</div></div>
      <div class="stat-card animate-fade-in-up delay-2"><div class="stat-label">Accuracy</div><div class="stat-value" style="color:var(--success);">${l}%</div></div>
      <div class="stat-card animate-fade-in-up delay-3"><div class="stat-label">Level Progress</div><div class="stat-value">${Math.round(h*100)}%</div>
        <div class="progress-bar" style="margin-top:var(--space-sm);"><div class="progress-bar-fill" style="width:${Math.round(h*100)}%;"></div></div></div>
    </div>

    <div class="card animate-fade-in-up delay-3" style="margin-bottom:var(--space-xl);">
      <h3 style="font-weight:700;margin-bottom:var(--space-lg);">🏅 Badge Collection (${s.length}/${a.length})</h3>
      <div class="badges-grid">
        ${a.map(r=>`<div class="badge-card ${s.find(g=>g.id===r.id)?"":"locked"}"><div class="badge-emoji">${r.emoji}</div><div class="badge-name">${r.name}</div><div style="font-size:var(--font-xs);color:var(--text-muted);margin-top:4px;">${r.desc}</div></div>`).join("")}
      </div>
    </div>

    <div class="card animate-fade-in-up delay-4">
      <h3 style="font-weight:700;margin-bottom:var(--space-lg);">📊 Quiz History</h3>
      ${n.length>0?`<div class="table-wrap"><table class="table"><thead><tr><th>Quiz</th><th>Score</th><th>Points</th><th>Date</th></tr></thead><tbody>
        ${[...n].sort((r,m)=>m.date.localeCompare(r.date)).map(r=>{const m=o.getQuiz(r.quizId),g=Math.round(r.score/r.total*100);return`<tr><td>${(m==null?void 0:m.title)||"Quiz"}</td><td><span class="badge ${g>=80?"badge-success":g>=60?"badge-warning":"badge-danger"}">${g}%</span></td><td style="color:var(--primary-light);">+${r.points}</td><td style="color:var(--text-muted);">${r.date}</td></tr>`}).join("")}
      </tbody></table></div>`:'<div class="empty-state"><div class="empty-icon">📊</div><p>No quiz history yet.</p></div>'}
    </div>`:""}

    <div class="flex justify-center mt-xl">
      <button class="btn btn-danger" id="logout-btn">🚪 Logout</button>
    </div>
  </div>`,u.appendChild(i),u.appendChild(p),e.innerHTML="",e.appendChild(u),(d=document.getElementById("logout-btn"))==null||d.addEventListener("click",()=>{o.logout(),y.navigate("/")})}const k=document.getElementById("app");function E(e,t={}){k.innerHTML="";const{nav:i,mobileNav:a}=D();k.appendChild(i),k.appendChild(a);const s=document.createElement("div");s.id="page-content",k.appendChild(s),e(s,t),window.scrollTo(0,0)}function I(e,t={}){k.innerHTML="";const i=document.createElement("div");i.id="page-content",k.appendChild(i),e(i,t),window.scrollTo(0,0)}y.on("/",()=>{const e=o.getCurrentUser();e?y.navigate(e.role==="teacher"?"/teacher":"/student"):E(R)}).on("/login",()=>I(O)).on("/register",()=>I(F)).on("/student",()=>E(W)).on("/teacher",()=>E(P)).on("/quizzes",()=>E(J)).on("/quiz/:id",e=>E(G,e)).on("/create-quiz",()=>E(V)).on("/leaderboard",()=>E(Y)).on("/profile",()=>E(K)).notFound(()=>{k.innerHTML=`<div class="empty-state" style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;">
      <div class="empty-icon">🔍</div>
      <h2>Page Not Found</h2>
      <p class="text-muted">The page you're looking for doesn't exist.</p>
      <a href="#/" class="btn btn-primary mt-lg">Go Home</a>
    </div>`});o.getLeaderboard();y.start();
