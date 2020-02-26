(function() {
    'use strict';
    new Vue({
        el:'.form',
        data:{
            //ファイル
            uploadFile: null
        },
        methods:{
            selectedFile: function(e) {
                // 選択された File の情報を保存しておく
                e.preventDefault();
                let files = e.target.files;
                this.uploadFile = files[0];
            },
            //ファイル送信処理
            upload:function(){
                // FormData を利用して File を POST する
                let formData = new FormData();
                formData.append('file', this.uploadFile);
                console.log(this.uploadFile)
                let config = {
                    withCredentials: true,
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                axios
                    .post('http://localhost:8080/file', formData, config)
                    .then(function(response) {
                        // response 処理
                        console.log(response)
                    })
                    .catch(function(error) {
                        // error 処理
                        console.log(error)
                    })
            },
        },
    });
  })();
// (function() {
//     'use strict';
//     new Vue({
//         el:'#upload',
//         data: {
//             preview:'',
//             name:'',
//             styleA:true,
//             styleB:false,
//         },
//         methods: {
//             uploadFile: function(event){
//                 this.styleA = true;
//                 this.styleB = false;
//                 const files = event.target.files ? event.target.files : event.dataTransfer.files;
//                 const file = files[0];
//                 const reader = new FileReader();
//                 reader.onload = event => {
//                     this.preview = event.target.result;
//                 };
//                 reader.readAsDataURL(file);
//                 this.name = files[0].name;
//                 document.getElementById("upload_image").files = files;
//             },
//             changeStyle: function(event,flag){
//                 if(flag=='ok'){
//                     this.styleA = false;
//                     this.styleB = true;
//                 }else{
//                     this.styleA = true;
//                     this.styleB = false;
//                 }
//             },
//         },
//     });
//   })();