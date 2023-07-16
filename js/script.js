let skillStrip, marqueeContainer, marqueeFirst, marqueeSecond;
function populateSkills() {
  for (const category in skills) {
    const skillContainer = $(`<div class="skill-container"></div>`);
    const skillCategory = $(`<div class="skill-category"><span class="category-text">${category}</span></div>`);
    skillContainer.append(skillCategory);
    skillStrip = $(`<div class="skill-strip"></div>`);
    skillContainer.append(skillStrip);
    createContainer(Math.floor(Math.random() * 20) + 5);

    const { data } = skills[category];
    data.forEach((skill, index) => {
      if (($(window).width() > 980 && $(window).width() <= 1400 && index != 0 && index % 5 == 0 && (data.length - index - 1) > 3) ||
        ($(window).width() > 880 && $(window).width() <= 980 && index != 0 && index % 4 == 0 && (data.length - index - 1) > 2) ||
        ($(window).width() > 510 && $(window).width() <= 880 && index != 0 && index % 3 == 0 && (data.length - index - 1) > 1) ||
        ($(window).width() <= 510 && index != 0 && index % 2 == 0)
      ) {
        createContainer(Math.floor(Math.random() * 20) + 5)
      }
      marqueeFirst.append($(`<span class=skill-span><i class=${skill.icon}></i>${skill.name}</span>`));
      marqueeSecond.append($(`<span class=skill-span><i class=${skill.icon}></i>${skill.name}</span>`));
    });
    $('.skills').children('.max-width').append(skillContainer);
  }
}
populateSkills();

function createContainer(duration) {
  marqueeContainer = $(`<div class="marquee-container"></div>`);
  marqueeFirst = $(`<div class="marquee first" style="animation: marquee-first ${duration}s linear infinite"></div>`);
  marqueeSecond = $(`<div class="marquee second" style="animation: marquee-second ${duration}s linear infinite"></div>`);
  skillStrip.append(marqueeContainer);
  marqueeContainer.append(marqueeFirst);
  marqueeContainer.append(marqueeSecond);
}

$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
      $('.logo').css('visibility', "visible");
    } else {
      $('.navbar').removeClass("sticky");
      $('.logo').css('visibility', "hidden");
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll-up-btn').click(() => {
    $('html').animate({ scrollTop: 0 });
  });

  $('.menu-btn').click(() => {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});
