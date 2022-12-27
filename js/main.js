$(function () {
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let sco = scrollTop;
    console.log(sco);

    // 스크롤시 video 어둡게 필터 씌우기
    if (sco <= 3000) {
      let videoBright = sco / 50;
      $('.visual-video').css({ filter: `brightness(${100 - videoBright}%)` });
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

    if (sco >= 2600) {
      $('.flip').css({
        display: 'inline-block',
        width: `${sco - 2800}px`,
        'max-width': '700px',
        'min-width': '10px',
        'border-bottom': '5px solid white',
      });
    } else {
      $('.section1-cover-title').css({ left: 2000 - sco, opacity: sco / 400 });

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
  });
});
