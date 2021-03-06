$(function () {
            var ImageUploadView = function (options) {
                this.el = $(options.el);

                this._init();
            }

            ImageUploadView.prototype._init = function () {
                var self = this;

                this.el.off("change", "#_fileUpload").on("change", "#_fileUpload",self, self.fileUpload);
                this.el.off("click", ".view-act-add").on("click", ".view-act-add", self.fileUploadOpen);
                this.el.off("click", "li .view-act-preview .view-act-del").on("click", "li .view-act-preview .view-act-del", self.deleteImage);
            }

            ImageUploadView.prototype.deleteImage = function () {
                var _uuid = $(this).data("uuid");
                $("li#" + _uuid).remove();
            }

            ImageUploadView.prototype.fileUploadOpen = function () {
                $("#_fileUpload").click();
            }

            ImageUploadView.prototype.fileUpload = function (event) {
                var self = event.data;
                
                var imgs = $("#_fileUpload").val().split(",");
                $.each(imgs, function (i, val) {
                    var _time = new Date().getTime();
                    var _id = '_uuid' + _time + Math.floor(Math.random() * 100000);
                    var _item = "<li id='" + _id + "'>"
                        + "<a class='view-act-preview' href='javascript:;'>"
                        + "<img alt='' src='" + val + "'>"
                        + "<span class='view-act-del' data-uuid='" + _id + "'>删除</span>"
                        + "</a></li>";
                    self.el.append(_item);
                });                
            }

            var image_upload_view = new ImageUploadView({ el: ".image-upload-view" });
        })