export function starsShining() {
  // *********stars**********
  const params = {
    amount: 200,
    size: {
      min: 1,
      max: 5,
      giant: 9
    },
    duration: {
      min: 5,
      max: 25
    }
  }
  const randomBetween = (a, b) => {
    return (a + (Math.random() * (b - a)))
  }

  for (let i = 0; i < params.amount; i++) {
    const star = $('<div></div>')
    const size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
    star.css({
      "width": size + "px",
      "height": size + "px",
      "left": randomBetween(0, 100) + "%",
      "top": randomBetween(0, 100) + "%",
      "box-shadow": "0 0 " + size + "px " + size / 2 + "px #043668",
      "animation-duration": randomBetween(params.duration.min, params.duration.max) + "s"
    });

    $(".stars").append(star)
  }
}