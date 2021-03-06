/**
 * Single-Imgage-Upload-Preview v1.0
 *
 * Description
 *
 * @param     Img       
 * @param     ImgType  
 * @param     Callback  
 *
 * @date     2014-04-12
 */
$.fn.extend({
    uploadPreview: function (opts) {
        var _upload = this,
            $this = $(this);
        opts = $.extend({
            Img: "ImgPr",            
            ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
            Handler: function () {}
        }, opts || {});
        
        _upload.getObjectURL = function (file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file)
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file)
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file)
            }
            return url
        };

        $this.change(function () {
            if (this.value) {
                if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(_upload.val().toLowerCase())) {
                    alert("请选择正确的图片格式！！");
                    _upload.val("");
                    return false;
                }
                //$("#" + opts.Img).attr('src', _upload.val());
                $("#" + opts.Img).attr('src', _upload.getObjectURL(this.files[0]));
                opts.Handler();
            }
        })
    }
});