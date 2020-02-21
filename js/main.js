(function() {
    'use strict';
    new Vue({
        el:'#upload',
        data: {
            preview:'',
            name:'',
            styleA:true,
            styleB:false,
        },
        methods: {
            uploadFile: function(event){
                this.styleA = true;
                this.styleB = false;
                const files = event.target.files ? event.target.files : event.dataTransfer.files;
                const file = files[0];
                const reader = new FileReader();
                reader.onload = event => {
                    this.preview = event.target.result;
                };
                reader.readAsDataURL(file);
                this.name = files[0].name;
                document.getElementById("upload_image").files = files;
            },
            changeStyle: function(event,flag){
                if(flag=='ok'){
                    this.styleA = false;
                    this.styleB = true;
                }else{
                    this.styleA = true;
                    this.styleB = false;
                }
            },
        },
    });
  })();