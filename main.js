const questions = [
	{
		question: "Указывает ли политика обязательства руководства и излагает ли организационный подход к управлению информационной безопасностью?",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Security policy",
	},
	{
		question: "Пересматривается ли Политика информационной безопасности через запланированные промежутки времени или происходят значительные изменения, чтобы обеспечить ее постоянную пригодность, адекватность и эффективность?",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Security policy",
	},
	{
		question: "Есть ли у политики информационной безопасности владелец, который утвердил ответственность руководства за разработку, проверку и оценку политики безопасности.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Security policy",
	},
	{
		question: "Существуют ли какие-либо определенные процедуры проверки политики информационной безопасности и включают ли они требования для проверки со стороны руководства.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Security policy",
	},
	{
		question: "Учитываются ли результаты анализа со стороны руководства.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Security policy",
	},
	{
		question: "Получено ли одобрение руководства для пересмотренной политики.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Security policy",
	},
	
	{
		question: "Демонстрирует ли руководство активную поддержку мер безопасности внутри организации. Это можно сделать с помощью четкого указания, демонстрации приверженности, явного назначения и подтверждения обязанностей по информационной безопасности .",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Отдельные активы и для выполнения конкретных процессов безопасности были четко идентифицированы",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Соглашение о конфиденциальности или неразглашении (NDA) для защиты информации четко определено и регулярно пересматривается.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Конфиденциальная информация с использованием юридически обязательных условий",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Поддерживаются ли соответствующие контакты с группами по интересам или другими специализированными форумами по безопасности и профессиональными ассоциациями.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Управление информационной безопасностью и ее реализация пересматриваются независимо через запланированные промежутки времени или когда происходят серьезные изменения в реализации безопасности.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Идентифицированы ли риски для информации организации и средства обработки информации от процесса, предполагающего доступ внешних сторон, и реализованы ли соответствующие меры контроля перед предоставлением доступа.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Выполняются ли все установленные требования безопасности перед предоставлением клиенту доступа к информации или активам организации.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Будь то соглашение с третьими лицами,включая доступ, обработку, передачу или управление информацией организации или средством обработки информации, или внедрение продуктов или услуг в средство обработки информации, соответствует ли они всем соответствующим требованиям безопасности.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Organization of Information Security",
	},
	{
		question: "Были ли определены и задокументированы роли и обязанности сотрудников в области безопасности, подрядчиков и сторонних пользователей в соответствии с политикой информационной безопасности организации.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Были ли роли и обязанности определены и четко доведены до сведения кандидатов на работу в процессе подготовки к приему на работу?",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Были ли проведены проверки биографических данных для всех кандидатов на работу, подрядчиков и сторонних пользователей в соответствии с установленными нормами",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Включает ли проверка характеристику, подтверждение заявленной академической и профессиональной квалификации и независимую проверку личности",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Пользователей просят подписать соглашение о конфиденциальности или неразглашении в рамках их первоначальных условий трудового договора.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Охватывает ли это соглашение ответственность за информационную безопасность организации и сотрудника, сторонних пользователей и подрядчиков.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Требует ли руководство от сотрудников, подрядчиков и сторонних пользователей применения безопасности в соответствии с установленными политиками и процедурами организации.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Проходят ли все сотрудники организации и, где это уместно, подрядчики и сторонние пользователи надлежащее обучение по вопросам безопасности и регулярные обновления организационных политик и процедур в соответствии с их должностными обязанностями.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Присутсвуют ли у вас сотрудники, допустивших нарушение безопасности.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Существует ли процесс, обеспечивающий передачу всеми сотрудниками, подрядчиками и третьими лицами всех активов организации, находящихся в их владении, после увольнения, контракта или соглашения.",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Четко ли определены и распределены обязанности по увольнению или смене работы?",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},
	{
		question: "Будь то права доступа всех сотрудников, подрядчиков и сторонних пользователей, к информации и средствам обработки информации, будут удалены после прекращения их работы, контракта или соглашения или будут скорректированы при изменении",
		answers: ["Да","Нет","Не знаю"],
		correct: 1,
		section: "Human resources security",
	},


];
window.addEventListener('DOMContentLoaded',() =>
{
	
	//Находим элементы на странице
	const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');


let generalSecurityQQuantity = 0,
	informationSecurityQQuantity = 0,
	humanResourcesSecurityQQuantity = 0;
for(let z in questions)
{
	

	if(questions[z].section == 'Security policy')
	{
		generalSecurityQQuantity++;
	} else if(questions[z].section == 'Organization of Information Security')
	{
		informationSecurityQQuantity++;
	} else if (questions[z].section == 'Human resources security')
	{
		humanResourcesSecurityQQuantity++;
	}
	else{
		continue;
	}
	
}
console.log(generalSecurityQQuantity)
console.log(informationSecurityQQuantity)
console.log(humanResourcesSecurityQQuantity)
//Объявление переменных
let generalSecurityScore = 0,
	informationSecurityScore = 0,
	humanResourcesSecurityScore = 0;

let questionIndex = 0;
const sections = ['Security policy', 'Organization of Information Security','Human resources security']




function clearPage()
{
	headerContainer.innerHTML = ''
	listContainer.innerHTML = ''

}
function showFirst()
{
	clearPage()
	firstTemplate = `
					<h2 class = "title">Тест по оценке политики безопасности ISO27001</h2>
					<h3 class="summary">Добро пожаловать на тест. Чтобы начать нажмите на кнопку ниже</h3>
					`
	
	headerContainer.innerHTML = firstTemplate
	submitBtn.innerHTML = 'Начать'
	submitBtn.onclick = showQuestion
}

function showQuestion()
{
	submitBtn.onclick = checkAnswer;
	const headerTemplate = `<h2 class ="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])

	headerContainer.innerHTML = title;

	// Варианты ответов 
	let i = 0;
	
	for(item of questions[questionIndex]['answers'])
	{
		let radioBtnTemplate = `<li>
		<label>
			<input value = "%number%" type="radio" class="answer" name="answer" />
			<span>%answer%</span>
		</label>
		</li>`;
		let answ = radioBtnTemplate
				.replace('%answer%', questions[questionIndex]['answers'][i])
				.replace('%number%',i+1)
		
		 
		listContainer.innerHTML += answ;
		i++;
	}

}
function checkAnswer()
{
	const radioChecked = listContainer.querySelector('input[type="radio"]:checked')
	const answerSection = questions[questionIndex]['section']
	 
	if(!radioChecked)
	{
		alert('Выберите ответ!');
		return
	}
	const userAnswer = parseInt(radioChecked.value)
	if(answerSection == sections[0])
		{
			if(!(userAnswer == questions[questionIndex]['correct']))
			{
				indexPlusShow()
				return
			}
			generalSecurityScore++;
			indexPlusShow()
			return
			
		} else if(answerSection == sections[1])
		{
			if(!(userAnswer == questions[questionIndex]['correct']))
			{
				indexPlusShow()
				return
			}
			informationSecurityScore++;
			indexPlusShow()
			return
		} else if(answerSection == sections[2])
		{
			if(!(userAnswer == questions[questionIndex]['correct']))
			{
				indexPlusShow()
				return
			}
			humanResourcesSecurityScore++;
			indexPlusShow()
			return
		} 
		else{
			console.log('error')
			return
		}
}
function indexPlusShow()
	{
		let last = 0;
		last = checkIfLast(last)
		if(last == 1)
		{
			return;
		}
		questionIndex++;
		clearPage();
		showQuestion();
		
	}
function checkIfLast(last)
{
	
	if(questionIndex == questions.length - 1)
	{
		last = 1;
		clearPage()
		showLast();
		return last;
	}
}
function showLast()
{
	console.log(generalSecurityScore, informationSecurityScore, humanResourcesSecurityScore)
	const resultTemplate = `
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%resultGeneral%</p>
		<p class="result">%resultInformation%</p>
		<p class="result">%resultHuman%</p>
	`;
	let title = "Поздравляем, оценка безопасности вашей компании завершена!",
		message = "Ниже вы можете увидеть результаты вашей политики безопасности согласно стандарту ISO027001";

	const secFinalScore = Math.round((generalSecurityScore/generalSecurityQQuantity)*100),
		  informSecFS = Math.round((informationSecurityScore/informationSecurityQQuantity)*100),
		  humanResFS = Math.round((humanResourcesSecurityScore/humanResourcesSecurityQQuantity)*100);

	let resultGeneralS = `Your company Security policy score rate is ${secFinalScore}%`,
		resultInfromationS = `Your company Organization of Information Security policy score rate is ${informSecFS}%`,
		resultHumanResS = `Your company Human resources security policy score rate is ${humanResFS}%`;

	let finalResult = resultTemplate
						.replace('%title%',title)
						.replace('%message%',message)
						.replace('%resultGeneral%',resultGeneralS)
						.replace('%resultInformation%',resultInfromationS)
						.replace('%resultHuman%',resultHumanResS);
	
	headerContainer.innerHTML = finalResult;

	submitBtn.innerHTML = 'Показать рекомендации'
	submitBtn.onclick = ''
	submitBtn.addEventListener('click',function recomend()
	{
		showRecomendations(secFinalScore,informSecFS,humanResFS)
	});
	
}
function showRecomendations(secFinalScore,informSecFS,humanResFS)
{
	clearPage();
	let recomendTemplate = `
	<h2 class="title">Ваши рекомендации</h2>
`;
	if((secFinalScore < 50 || informSecFS < 50 || humanResFS < 50))
	{
		if(secFinalScore < 50) {
			recomendTemplate += `<p class="result">
			😨 У вашей компании есть проблемы с общим представлением о политике безопасности. Рекомендуется основательно над ней поработать, привлечь специалистов в этой области, разработать протоколы безопасности и согласовать их с руководством</p>\n`
		}
		if(informSecFS < 50) {
			recomendTemplate += `<p class="result">
			😨У вашей компании есть проблемы с информационной безопасностью.Ваша компания подвержена риску утечек и сливов баз данных в интернет.Для предотвращения таких событий рекомендуется использовать инструменты для защищенной передачи данных, такие как VPN,Firewall и прокси.Так же рекомендуется разработать протоколы передачи особо важной информации внутри компании</p>\n`
		}
		if(humanResFS < 50) {
			recomendTemplate += `<p class="result">😨 У вашей компании выявлены проблемы с безопасностью в области менеджмента людей.Возможны ситуации когда в компанию попадают агенты конкурентов с целью получить ваши новые разработки.Для предотвращения этого рекомендуется проверить ваших сотрудников, а так же разработать политику по приему новых. Например четко определить обязанности сотрудников и их доступ к информации уже н этапе стажировки</p>\n`
		}
		console.log(recomendTemplate)
	}
	else {
		recomendTemplate += `<p class = "result">🎉Поздравляем!🎉 Ваша политика безопасности в порядке, однако это не значит что можно расслабиться.Следите за обновлениями политики безопасности и по возможности внедряйте новые техники как можно раньше для того, чтобы защитить данные вашей компании.</p>`
		console.log(recomendTemplate)
	}
	
	headerContainer.innerHTML = recomendTemplate;
	submitBtn.innerHTML = 'Начать заного';
	submitBtn.addEventListener("click",function reload() {
		location.reload(true)})
	
}
//Вызовы функций
clearPage();
showFirst();
});