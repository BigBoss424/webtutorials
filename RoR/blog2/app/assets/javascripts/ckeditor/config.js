CKEDITOR.editorConfig = function(config) {
    config.language = 'en';
    config.width = '700';
    config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
    config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
    config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
    config.filebrowserImageuploadUrl = "/ckeditor/pictures";
    config.filebrowserUploadUrl = "/ckeditor/attachment_files";

    config.toolbar_Pure = [ 
        '/', {
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
        }, {
            name: 'paragraph', 
            items: ['NumberList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyCenter', 'JustifyRight'
            ,'JustifyBlock', '-', 'BidiLtr']
        }, {
            name: 'links', 
            items: ['Link', 'Unlink']
        }, '/', {
            name: 'styles'
            items: ['TextColor', 'BGColor']
        }, {
            name: 'insert'
            items: ['Image', 'Table', 'HorizontalRule', 'PageBreak']
        }
        ]:
        config.toolbar = 'Pure';
        return true;
    };
