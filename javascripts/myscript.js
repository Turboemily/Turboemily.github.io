/**
 * Created by mac on 16/8/18.
 */
(function ($) {
    $(document).ready(function () {
        var j=0;
        var imgs = document.getElementsByTagName("img");
        var length = imgs.length;
        var timer;

        function init() {
            timer = setInterval(run,4000);
            hoverStop();
        }

        function run() {
            if(j == 4){
                j=0;
            }else{
                for(var i=0;i<length;i++){
                    imgs[i].className="";
                }
                imgs[j].className="active";
                j++;
            }
        }

        function hoverStop() {
            for(var i=0;i<length;i++){
                imgs[i].onmouseover=function () {
                    clearInterval(timer);
                }
                imgs[i].onmouseout=function () {
                    timer = setInterval(run,4000);
                }
            }
        }

        init();

    });
})(jQuery);








