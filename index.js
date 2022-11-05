let mo = document.getElementById('month');
		let ya = document.getElementById('year');
		for (let i = 1; i <= 12; i++) {
			let option = document.createElement('option')
			option.setAttribute("value", i);
			option.setAttribute("id", i);
			option.innerHTML = i;
			mo.append(option)
		}
		for (let i = 1950; i < 2050; i++) {
			let option = document.createElement('option')
			option.setAttribute("value", i);
			option.setAttribute("id", i);
			option.innerHTML = i;
			ya.append(option)
		}
		function createCalendar(elem, year, month) {

			let mon = month - 1;
			let d = new Date(year, mon);

			let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';
			for (let i = 0; i < getDay(d); i++) {
				table += '<td></td>';
			}
			while (d.getMonth() == mon) {
				table += `<td id="${d.getDate()}55" style="background-color: white"> `+ d.getDate() + '</td>';
				console.log(table)

				if (getDay(d) % 7 == 6) {table += '</tr><tr>';
				}

				d.setDate(d.getDate() + 1);
			}
			if (getDay(d) != 0) {
				for (let i = getDay(d); i < 7; i++) {
					table += '<td></td>';
				}
			}
			table += '</tr></table>';

			elem.innerHTML = table;
		}

		function getDay(date) { 
			let day = date.getDay();
			if (day == 0) day = 7;
			return day - 1;
		}
		let yar = 2022;
		let mont = 1;
		function print() {
			mont = mo.value;
			console.log(mont)
			createCalendar(calendar, yar, mont);
		}

		function print1() {
			yar = ya.value;
			console.log(yar)
			createCalendar(calendar, yar, mont);
		}
		createCalendar(calendar, yar, mont);
		
		function func(){
			let input=document.getElementById('input').value;
			let box=document.getElementById(input+"55");
			console.log(box.style.backgroundColor)
			if(box.style.backgroundColor=="white"){
				box.style.backgroundColor="green"
			}else if(box.style.backgroundColor=="green"){
				box.style.backgroundColor="white"
			}
			document.getElementById('input').value="";
		}