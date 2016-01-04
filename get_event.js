//イベントなど取得

var data = {
	'一覧表示ＡＬＬ' : 0,
	'絞り込み利用' : 0,
	'検索条件の保存' : 0,
	'一覧）ブックマーク利用' : 0,
	'詳細）ブックマーク利用' : 0,
	'「保存した検索条件」から物件一覧' : 0,
	'「前回の検索履歴」から物件詳細' : 0,
	'お気に入りから物件詳細' : 0,
	'LINEで送る' : 0,
	'メールで共有' : 0,
	'地図を確認する' : 0,
	'homes 詳細閲覧' : 0,
	'suumo 詳細閲覧' : 0,
	'mynavi 詳細閲覧' : 0,
	'apaman 詳細閲覧' : 0,
	'chintai 詳細閲覧' : 0
}

result = '';

$('._GAsf:not(._GAd9)').each(function(index,item){
  var title = $(item).find('._GAUA').text();
  var val = [];
  $(item).find('.ACTION-mouse').each(function(j,item2){
    val.push($(item2).find('td:eq(' + (data[title]+1) +')').text() + '\t');
  });

  result += title + '\t' + val[1] + val[0] + '\r\n\r\n';
});


console.log(result);

