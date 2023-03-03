const menu = document.getElementById('nav');
const menu_btn = document.getElementById('menu-btn');
const main = document.getElementsByTagName('main')[0]

menu_btn.onclick = () => {
    menu.classList.toggle('show_menu');
    menu_btn.classList.toggle('fa-close');
    main.classList.toggle('filter');
}

window.onscroll = () => {
    menu.classList.remove('show_menu');
    menu_btn.classList.remove('fa-close');
    main.classList.remove('filter');
}


// portfolio section 
// DOM
const btn = document.querySelectorAll('#project_detail .btns button'),
    project_detail_text = document.querySelector('#project_detail .text'),
    image = document.querySelector('#portfolio .container .img .pro_img')

const img_src = ['./img/learn-english.jpg', "./img/todo.png", "./img/nature.jpg"],
    paragraphs = [
        'این سوال برای همه وجود دارد که چگونه میتوانند در عرض ۲-۳ ماه، انگلیسی روان صحبت کنند، این افراد معمولا عجله دارند چون به زودی آزمون یا مصاحبه ای در راه دارند. در این نوشته نتیجه جدیدترین تحقیقات چندین ساله از معتبرترین موسسه زبان دنیا یعنی افورتلس را برای شما بازگو می کنیم و همزمان با تغییرات، این مقاله به روز می شود. این مطلب در سال 2022 آپدیت شده است!',
        'امروزه بیش از سه میلیون کاربر از این برنامه برای مدیریت کارهایشان استفاده می‌کنند. به کمک Todoist شما می‌توانید از هرجایی به وسیله کامپیوتر، موبایل و یا تبلت کارهای خود را مدیریت کنید و اطلاعات شما بین این دستگاه‌های مختلف به کمک سرویس ذخیره‌‌سازی ابری Todoist‌ به سرعت همگام‌سازی و هماهنگ می‌شود.',
        'سفر کردن فعالیتی لذت بخش است و ما را برای مدتی کوتاه از زندگی روزمره و دغدغه های زندگی رها می کند. سفر فواید زیادی دارد که کسانی که زیاد اهل سفر باشند حتما با این فواید و مزایا آشنا هستند. سفر تنها یک تفریح نیست، تجربه ای آموزنده و لذتبخش است که اثرات مفید آن را در مراحل مختلف زندگی خواهیم دید.'
    ],
    texts = [
        { title: 'آموزشگاه زبان انگلیسی', alt: 'English', tech: "HTML, CSS (Sass), Vue JS, BootStrap4", year: 1398 },
        { title: 'اپلیکیشن ToDo پیشرفته', alt: 'ToDo', tech: "HTML, CSS, JS, Tailwind css", year: 1399 },
        { title: 'آژانس مسافرتی', alt: 'nature', tech: "HTML (pug Js), CSS (Sass), JS, React Js", year: 1400 }
    ]
btn.forEach(item => {
    item.addEventListener('click', (event) => {
        project_detail_text.innerHTML = ''

        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('active')
        }
        btn[event.target.dataset.id].classList.add('active')
        project_detail_text.insertAdjacentHTML('beforeend', `<h3>${texts[event.target.dataset.id].title}</h3>
        <p>${paragraphs[event.target.dataset.id]}</p>
        <h3>تکنولوژی</h3>
        <p class="tech">${texts[event.target.dataset.id].tech}</p>
        <h5>طراحی در سال <span class="year">${texts[event.target.dataset.id].year}</span></h5>
        <button class="project_link_btn">مشاهده پروژه</button>`)
        image.setAttribute('src', img_src[event.target.dataset.id])
        image.setAttribute('alt', texts[event.target.dataset.id].alt)
    })
})

// auto typing 

const text = ["برنامه نویس فرانت اند    ", "طراح سایت     ", "مدرس     "];

let end = 1, counter = 0, show = "", word = "";

function autoType() {
    word = text[counter];
    show = word.substring(0, end);
    end++;
    document.querySelector(".auto").textContent = show;
    if (show == word) {
        counter++;
        end = 1;
    }

    if (counter == text.length) {
        counter = 0;
    }
}

setInterval(autoType, 120);

// customers slider 
