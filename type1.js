<meta charset="utf-8">
<script type="text/javascript">
	
	function generateText(letters, length){
		
		var text = " ";
		for(var i  = 0; i < length; i++){
			var n = getRandomNumber(letters.length - 1);
			text = text + letters[n];
		}
		return text;
	}

	function getRandomNumber(max) {
			return Math.round(Math.random() * max);
		}

	function runTraining(brief, letters,  length){
		while(true){
				alert(brief);
			
				var text = generateText(letters, length);
				var userText = prompt(text);
				if(userText == text){
					alert("Все верно!");
					break;
				} else {
					alert("Неверно. Попробуйте еще раз");
				}
			}
	}

	alert("Вас приветствует программа по обучению слепой печати");

	var brief = "Положите 4 пальца левой руки - мизинец, безымянный, средний и указательный - на клавиши ф, ы, в, а. Запомните, что буква А находится под вашим указательным пальцем, а Ф - под мизинцем. \nТеперь набирайте текст. Постарайтесь не смотреть на клавиатуру. ";

	runTraining(brief, ["ф", "а"], 10);

	brief = "Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж, безымянный палец — на Д, средний — на Л, указательный — на О. \nЗапомните расположение пальцев. Повторяйте за мной";

	runTraining(brief, ["в", "ы"], 10);

	brief = "Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж, безымянный палец — на Д, средний -— на Л, указательный — на О. \nЗапомните расположение пальцев";

	runTraining(brief, ["о", "ж"], 10);

</script>