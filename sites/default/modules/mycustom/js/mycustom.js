/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function($) 
{//start code
   //alert('a');
   $('#threadslist').find('a').click(function(e) {
     //e.preventDefault();
     //var href = $(this).attr('href').split("=")[1];
     //href = '/getlx_page/'+href;
     //window.open(href, '_blank');
     //alert(href);
   })
   
   var base_url = $('#block-block-1').find('.content').text();
   base_url = $.trim(base_url);
   
   $('body.page-manga #content').find('a').click(function(e) {
     e.preventDefault();
     var url = $(this).attr('href');
     var real_title = url.split('/')[2];
     real_title = real_title.replace('-','');
     real_title = real_title.replace('english','_e');
     real_title = real_title.replace('japanese','_j');
     window.open(base_url + '/manga/' + real_title, '_blank');
     //window.console.log(real_title);
   })
//end code
});

