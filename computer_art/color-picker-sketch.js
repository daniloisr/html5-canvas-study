// Generated by CoffeeScript 1.7.1
(function() {
  var canvas, ctx, ctxMove, getPixelColor, h, hexColor, hslToRgb, i, j, rgb, s, w, _i, _j;

  canvas = document.querySelector('canvas');

  ctx = canvas.getContext('2d');

  canvas.style.width = canvas.width = w = 800;

  canvas.style.height = canvas.height = h = 600;

  s = 2;

  hslToRgb = function(h, s, l) {
    var c, h1, m, rgb, x;
    c = (1 - Math.abs(2 * l - 1)) * s;
    h1 = h / 60;
    x = c * (1 - Math.abs(h1 % 2 - 1));
    rgb = (function() {
      switch (false) {
        case !(h1 < 1):
          return [c, x, 0];
        case !(h1 < 2):
          return [x, c, 0];
        case !(h1 < 3):
          return [0, c, x];
        case !(h1 < 4):
          return [0, x, c];
        case !(h1 < 5):
          return [x, 0, c];
        case !(h1 < 6):
          return [c, 0, x];
        default:
          return [0, 0, 0];
      }
    })();
    m = l - c / 2;
    return [rgb[0] + m, rgb[1] + m, rgb[2] + m];
  };

  getPixelColor = function(ctx, x, y) {
    var imgd, pix;
    imgd = ctx.getImageData(x, y, 1, 1);
    pix = imgd.data;
    return [pix[0], pix[1], pix[2], pix[3]];
  };

  hexColor = function(ary) {
    return ary.map(function(i) {
      return i.toString(16);
    }).join('');
  };

  for (i = _i = 0; s > 0 ? _i <= h : _i >= h; i = _i += s) {
    for (j = _j = 0; s > 0 ? _j <= w : _j >= w; j = _j += s) {
      rgb = hslToRgb(j * 360 / w, i / h, 1.0 - i / h);
      rgb = rgb.map(function(i) {
        return Math.floor(i * 255);
      });
      ctx.fillStyle = "rgb(" + (rgb.join(',')) + ")";
      ctx.fillRect(j, i, s, s);
    }
  }

  ctxMove = function(e) {
    var colorOver;
    colorOver = document.getElementById('#colorOver');
    if (colorOver == null) {
      colorOver = document.createElement('div');
      colorOver.id = '#colorOver';
      document.body.appendChild(colorOver);
    }
    return colorOver.innerHTML = hexColor(getPixelColor(ctx, e.x, e.y));
  };

  canvas.addEventListener('mousemove', ctxMove);

}).call(this);