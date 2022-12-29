$(function () {
  // 페이지 열릴시 메인 로고 등장
  $('.section1-main-logo').css({ bottom: '5%' });
  // 페이지 열릴시 메인 로고 등장 -끝 -
  let windowWidth = $(window).width();
  console.log('윈도우가로값:', windowWidth);

  // windeo 가로 해상도가 2000dltkddlaus
  if (windowWidth > 2000) {
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      let sco = scrollTop;
      console.log(sco);

      // 스크롤이벤트 헤더 in/out
      if (sco > 1000) {
        $('header').css({ top: 0 });
      } else {
        $('header').css({ top: '-10%' });
      }
      // 스크롤시 video 어둡게 필터 씌우기
      if (sco < 8000) {
        $('.section1-main-logo').css({ bottom: '-50%' });
        if (sco <= 3000) {
          let videoBright = sco / 50;
          $('.visual-video').css({
            filter: `brightness(${100 - videoBright}%)`,
          });
        } else if (sco === 0) {
          $('.visual-video').css({ filter: `brightness(100%)` });
        }
        // 스크롤시 video 어둡게 필터 씌우기 - 끝 -
        // scroll 이 0일때 메인 로고 등장
        if (sco === 0) {
          $('.section1-main-logo').css({ bottom: '5%' });
        }
        // scroll 이 0일때 메인 로고 등장 -끝 -
        if ((sco > 1000) & (sco < 3000)) {
          $('.section1-cover-title').css({
            transform: `scale(${3800 / sco}, ${3800 / sco})`,
          });
        }

        if (sco >= 2300) {
          $('.transform').css({ opacity: 0 });
        }

        if (sco >= 2450) {
          $('.flip').css({
            display: 'inline-block',
            width: `${sco - 2800}px`,
            'max-width': `500px`,
            'border-bottom': '5px solid white',
          });
        } else {
          $('.section1-cover-title').css({
            left: 2000 - sco,
            opacity: sco / 400,
          });

          $('.transform').css({ opacity: 2000 / (sco * 2) });
          $('.flip').css({
            display: 'none',
          });
        }

        // 스크롤시 첫번쨰 메인비주얼 부분 리스트 체인지
        if (sco > 3800) {
          $('.flip__item ').css({ opacity: 1 });
          $('.flip__item').text('백화점');
        } else {
          $('.flip__item ').css({ opacity: 0 });
        }
        if (sco > 4300) {
          $('.flip__item').text('아울렛');
        }
        if (sco > 4800) {
          $('.flip__item').text('브랜드샵');
        }
        if (sco > 5300) {
          $('.flip__item').text('소호');
        }
        if (sco > 5800) {
          $('.flip__item').text('스트릿');
        }
        if (sco > 6300) {
          $('.flip__item').text('디자이너');
        }
        if (sco > 7000) {
          $('.section1-cover-title').fadeOut();
        } else {
          $('.section1-cover-title').fadeIn();
        }
        // ---스크롤 글자 애니메이션 끝
      } else {
        let section = $('.section');
        console.log('dd', section.height());
      }
    });

    // -------------window 가로 2000이하일떄
  } else if (windowWidth < 2000) {
    // ----------------------------
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      let sco = scrollTop;
      console.log(sco);
      // 스크롤이벤트 헤더 in/out
      if (sco > 1000) {
        $('header').css({ top: 0 });
      } else {
        $('header').css({ top: '-10%' });
      }

      if (sco < 8000) {
        $('.section1-main-logo').css({ bottom: '-50%' });
        // scroll 이 0일때 메인 로고 등장
        if (sco === 0) {
          $('.section1-main-logo').css({ bottom: '5%' });
        }
        // scroll 이 0일때 메인 로고 등장 -끝 -
        // 스크롤시 video 어둡게 필터 씌우기
        if (sco <= 3000) {
          let videoBright = sco / 50;
          $('.visual-video').css({
            filter: `brightness(${100 - videoBright}%)`,
          });
        } else if (sco === 0) {
          $('.visual-video').css({ filter: `brightness(100%)` });
        }
        // 스크롤시 video 어둡게 필터 씌우기 - 끝 -

        if ((sco > 1000) & (sco < 3000)) {
          $('.section1-cover-title').css({
            transform: `scale(${3800 / sco}, ${3800 / sco})`,
          });
        }

        if (sco >= 2300) {
          $('.transform').css({ opacity: 0 });
        }

        if (sco >= 2400) {
          $('.flip').css({
            display: 'inline-block',
            width: `${sco - 2800}px`,
            'max-width': `25vw`,
            'border-bottom': '5px solid white',
          });
        } else {
          $('.section1-cover-title').css({
            left: 2000 - sco,
            opacity: sco / 400,
          });

          $('.transform').css({ opacity: 2000 / (sco * 2) });
          $('.flip').css({
            display: 'none',
          });
        }

        // 스크롤시 첫번쨰 메인비주얼 부분 리스트 체인지
        if (sco > 3800) {
          $('.flip__item ').css({ opacity: 1 });
          $('.flip__item').text('백화점');
        } else {
          $('.flip__item ').css({ opacity: 0 });
        }
        if (sco > 4300) {
          $('.flip__item').text('아울렛');
        }
        if (sco > 4800) {
          $('.flip__item').text('브랜드샵');
        }
        if (sco > 5300) {
          $('.flip__item').text('소호');
        }
        if (sco > 5800) {
          $('.flip__item').text('스트릿');
        }
        if (sco > 6300) {
          $('.flip__item').text('디자이너');
        }
        if (sco > 7000) {
          $('.section1-cover-title').fadeOut();
        } else {
          $('.section1-cover-title').fadeIn();
        }
      }
      let text1 = document.querySelector('.section2-title');

      let observer = new IntersectionObserver((e) => {
        console.log('E', e);

        e.forEach((박스) => {
          if (박스.isIntersecting) {
            박스.target.style.top = 0;
            박스.target.style.opacity = 1;
          } else {
            박스.target.style.opacity = 0;
            박스.target.style.top = 100 + '%';
          }
        });
      });

      observer.observe(text1);
    });
  }
});
