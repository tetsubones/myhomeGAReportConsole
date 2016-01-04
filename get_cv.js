//CV取得
result = '';

$('._GAsf:not(._GAd9)').each(function(index,item){
  var title = $(item).find('._GAUA').text();
  var val = ['',''];
  $($(item).find('.ACTION-mouse').get().reverse()).each(function(j,item2){
    val[0] += $(item2).find('td:eq(2)').text() + '\t';
    val[1] += $(item2).find('td:eq(1)').text() + '\t';
  });

  result += title + '\t' + val[1] + '\r\n\t' + val[0] + '\r\n';
});


console.log(result);
//$('._GAsf ._GAUA').text();

