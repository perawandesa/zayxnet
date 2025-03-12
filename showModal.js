    function showModal(obj){
      $('#lihatModal').modal('show');
      var judul = obj.getAttribute('data-judul');
      var jelas = obj.getAttribute('data-jelas');
      var url = obj.getAttribute('data-url');
      var href = obj.getAttribute('data-href');
      var video = obj.getAttribute('data-video');
      $('#modalTitle').empty();
      $('#modalTitle').append(judul);
      $('#modalParagrap').empty();
      $('#modalParagrap').append(jelas);    
      
      $('#loadingIframe').empty();
      $('#loadingIframe').append('Memuat document...');
      $('#iframeContent').empty();
      
      $('#iframeContent').append('<iframe id="iframe" class="responsive-iframe" src="https://drive.google.com/file/d/'+url+'/preview" ></iframe>');
      $('#iframe').one('load', function(){$('#loadingIframe').empty();});
      
      $('#loadingUnduh').empty();
      $('#loadingUnduh').append('download document...');
      $('#unduhContent').empty();
      $('#unduhContent').append('<a id="unduhContent" href="https://drive.google.com/uc?export=download&id='+url+'" rel="nofollow">UNDUH</a>');
      $('#unduh').one('load', function(){$('#loadingUnduh').empty();});
  
      $('#loadingTonton').empty();
      $('#loadingTonton').append('Memuat vedio...');
      $('#tontonContent').empty();
      $('#tontonContent').append('<iframe id="tonton" class="responsive-iframe"  src="https://www.youtube.com/embed/'+video+'?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&version=3&loop=1&playlist='+video+'&enablejsapi=1" ></iframe>');
      $('#tonton').one('load', function(){$('#loadingTonton').empty();});       
    }
