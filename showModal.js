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
      $('#iframeContent').append('<iframe id="iframe" class="responsive-iframe"  src="'+video+'?usp=drivesdk" width="1600" height="900" frameborder="0"></iframe>');
      $('#iframe').one('load', function(){$('#loadingIframe').empty();});
      
      $('#loadingUnduh').empty();
      $('#loadingUnduh').append('download document...');
      $('#unduhContent').empty();
      $('#unduhContent').append('<a id="unduhContent" href="'+href+'" rel="nofollow">UNDUH</a>');
      $('#unduh').one('load', function(){$('#loadingUnduh').empty();});
  
      $('#loadingTonton').empty();
      $('#loadingTonton').append('Memuat vedio...');
      $('#tontonContent').empty();
      $('#tontonContent').append('<iframe id="iframe" class="responsive-iframe"  href="'+video+'&apos;,containment:&apos;body&apos;,autoPlay:true, mute:true, startAt:0, opacity:1" ></iframe>');
      $('#tonton').one('load', function(){$('#loadingTonton').empty();});       
    }
