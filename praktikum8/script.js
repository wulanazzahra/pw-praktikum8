function tampilkanSemua(){
    $.getJSON('menu.json', function(data){
        let menu = data.menu;
        $.each(menu,function(i, data){
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="upnormal/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="harga">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Item</a></div></div></div>');
        });
    });
}

tampilkanSemua();

$('.nav-link').on('click',function(){
       $('.nav-link').removeClass('active');
       $(this).addClass('active');

       let kategori = $(this).html();
       $('h1').html(kategori);

    //    if(kategori == 'All Menu'){
    //        tampilkanSemua();
    //        return;
    //    }

       $.getJSON('menu.json',function(data){
           let menu = data.menu;
           let content = '';

           $.each(menu,function(i,data){
               if(data.jenis == kategori.toLowerCase()){
                   content += '<div class="col-md-4"><div class="card mb-3"><img src="upnormal/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="harga">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Item</a></div></div></div>';
               }
               else if(kategori == "All Menu"){
                   tampilkanSemua();
               }
           });

           $('#daftar-menu').html(content);

       });
});