// use all page
dispatcher('.', function () {
  $(function () {
    // ���[���I�[�o�[
    $('.btn').meca('hover');
    // �O�������N
    $('a.external').meca('external');
    // pngfix
    $('.pngfix').meca('pngfix');
    // pngfix�i�w�i�摜�j
    $('.bgpng').meca('bgpngfix');
    // ��������
    $('.heightAlign').meca('heightAlign');
    // IE6��position fixed
    $('.fixed').meca('positionFixed');
    // �X���[�Y�X�N���[��
    $('a[href^="#"]').meca('smoothScroll');
    // OS�̃N���X�ǉ�
    $('body').meca('addOsClass');
    // IE�ŉ摜��label������悤�ɂ���
    $('label img').meca('labelClickable');
    // active
    $('.hasActive').meca('active');
    //placeholder
    $('input[placeholder], textarea[placeholder]').meca('placeholder');
  });
});

function dispatcher (path, func) {
  dispatcher.path_func = dispatcher.path_func || []
  if (func) return dispatcher.path_func.push([path, func]);
  for(var i = 0, l = dispatcher.path_func.length; i < l; ++i) {
    var func = dispatcher.path_func[i];
    var match = path.match(func[0]);
    match && func[1](match);
  };
};
dispatcher(location.pathname);
